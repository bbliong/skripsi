package controller

import (
	"context"
	"net/http"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"

	"github.com/bbliong/sim-bmm/config"

	"github.com/bbliong/sim-bmm/models"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
)

var db *mongo.Database

func init() {
	// // Mengambil Koneksi
	db = config.Connect()
}

// GetAllKategori fungsi untuk mengambil seluruh data kategori
func GetAllKategori(c *gin.Context) {

	var (
		Kategoris []models.Kategori
	)

	// Memilih Tabel
	collection := db.Collection("kategori")

	// Menentukan waktu koneksi query
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)

	//get data taro di cursor
	filter := bson.M{}
	cursor, err := collection.Find(ctx, filter)

	// set projection
	//cursor, err := collection.Find(ctx, bson.M{}, options.Find().SetProjection(projection))
	if err != nil {
		result := gin.H{
			"Status": "Internal Server Error",
		}
		c.JSON(501, result)
		return
	}
	defer cursor.Close(ctx)

	// Loping data cursor
	for cursor.Next(ctx) {
		var Kategori models.Kategori
		cursor.Decode(&Kategori)

		// masukan kedalam array struct
		Kategoris = append(Kategoris, Kategori)
	}
	if err := cursor.Err(); err != nil {
		result := gin.H{
			"Status": "Internal Server Error",
		}
		c.JSON(501, result)
		return
	}

	result := gin.H{
		"data": Kategoris,
	}
	c.JSON(http.StatusOK, result)
}

// Fungsi untuk mengambil data

func MustGet(value string) string {
	if value != "" {
		panic("nilai kosong")
	}
	return value
}

func UploadImage(c *gin.Context) {
	file, err := c.FormFile("attachment")

	if err != nil {
		result := gin.H{
			"data": err,
		}
		c.JSON(501, result)
		return
	}
	var path string
	var _id primitive.ObjectID
	var errID error
	search := c.Request.URL.Query()
	for key, val := range search {
		if key == "muztahik_id" {
			path = "img/" + val[0] + "_" + file.Filename
			_id, errID = primitive.ObjectIDFromHex(val[0])
		} else {
			path = "img/" + file.Filename
		}
	}

	if err := c.SaveUploadedFile(file, path); err != nil {
		result := gin.H{
			"data": err,
		}
		c.JSON(501, result)
		return
	}

	result := gin.H{
		"data": path,
	}

	if errID == nil {
		// Update DB muztahik
		collection := db.Collection("muztahik")
		ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)
		filter := bson.D{{"_id", _id}}
		_, errUpdate := collection.UpdateOne(ctx, filter, bson.D{{"$set", bson.D{
			{"photo", path},
		}}})

		if errUpdate != nil {
			c.JSON(500, gin.H{
				"Message": "Error while updating",
			})
			return
		}

	}

	c.JSON(http.StatusOK, result)
	return

}
