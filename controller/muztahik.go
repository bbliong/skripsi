package controller

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"go.mongodb.org/mongo-driver/mongo"

	"github.com/bbliong/sim-bmm/config"

	"github.com/bbliong/sim-bmm/models"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

var db *mongo.Database

func init() {
	// // Mengambil Koneksi
	db = config.Connect()
}

// GetAllMuztahik fungsi untuk mengambil seluruh data muztahik
func GetAllMuztahik(c *gin.Context) {

	var (
		Muztahiks []models.Muztahik
	)

	search := c.Request.URL.Query()
	filter := bson.M{}
	if len(search) > 0 {
		filter["$or"] = []bson.M{}
		for key, val := range search {
			fmt.Println(key, val[0])
			filter["$or"] = append(filter["$or"].([]bson.M), bson.M{key: primitive.Regex{Pattern: val[0], Options: ""}})
		}
	}

	// Memilih Tabel
	collection := db.Collection("muztahik")

	// Menentukan waktu koneksi query
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)

	// untuk filter data
	// projection := bson.D{
	// 	{"kecamatan", 0},
	// 	{"kabkot", 0},
	// }

	//get data taro di cursor
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
		var Muztahik models.Muztahik
		cursor.Decode(&Muztahik)
		fmt.Println(Muztahik)
		// masukan kedalam array struct
		Muztahiks = append(Muztahiks, Muztahik)
	}
	if err := cursor.Err(); err != nil {
		result := gin.H{
			"Status": "Internal Server Error",
		}
		c.JSON(501, result)
		return
	}

	result := gin.H{
		"data": Muztahiks,
	}
	c.JSON(http.StatusOK, result)
}

// GetMuztahik fungsi untuk mengambil salah satu data muztahik
func GetMuztahik(c *gin.Context) {

	var (
		Muztahik models.Muztahik
	)

	_id, _ := primitive.ObjectIDFromHex(c.Param("id"))

	// Memilih Tabel
	collection := db.Collection("muztahik")

	// Menentukan waktu koneksi query
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)

	filter := bson.D{{"_id", _id}}
	errSQL := collection.FindOne(ctx, filter).Decode(&Muztahik)
	if errSQL != nil {
		// If the structure of the body is wrong, return an HTTP error
		fmt.Println(errSQL)
		c.JSON(500, gin.H{
			"Message": "Internal Server Error ",
		})
		return
	}

	result := gin.H{
		"data": Muztahik,
	}
	c.JSON(http.StatusOK, result)
}

// CreateMuztahik fungsi untuk membuat data muztahik
func CreateMuztahik(c *gin.Context) {

	var (
		Muztahik     models.Muztahik
		MuztahikBson models.Muztahik
	)

	err := json.NewDecoder(c.Request.Body).Decode(&Muztahik)

	if err != nil {
		fmt.Println(err)
		// If the structure of the body is wrong, return an HTTP error
		c.JSON(500, gin.H{
			"Message": "Error while parsing ",
		})
		return
	}

	collection := db.Collection("muztahik")

	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)

	filter := bson.D{{"nama", Muztahik.Nama}, {"nik_no_yayasan", Muztahik.Nik_no_yayasan}}
	fmt.Println(filter)
	errSQL := collection.FindOne(ctx, filter).Decode(&MuztahikBson)
	if errSQL == nil {
		// If the structure of the body is wrong, return an HTTP error
		c.JSON(500, gin.H{
			"Message": "Data muztahik dengan Nama " + Muztahik.Nama + " dan NIK " + Muztahik.Nik_no_yayasan + " Sudah terdaftar" ,
		})
		return
	}
	result, _ := collection.InsertOne(ctx, Muztahik)

	c.JSON(200, gin.H{
		"Data":    result,
		"Message": "Data Created",
	})
	return

}

// CreateMuztahik fungsi untuk membuat data muztahik
func UpdateMuztahik(c *gin.Context) {

	var (
		Muztahik models.Muztahik
	)

	_id, _ := primitive.ObjectIDFromHex(c.Param("id"))

	err := json.NewDecoder(c.Request.Body).Decode(&Muztahik)

	if err != nil {
		fmt.Println(err)
		// If the structure of the body is wrong, return an HTTP error
		c.JSON(500, gin.H{
			"Message": "Error while parsing ",
		})
		return
	}

	collection := db.Collection("muztahik")

	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)

	filter := bson.D{{"_id", _id}}

	result, errs := collection.UpdateOne(ctx, filter, bson.D{{"$set", Muztahik}})

	if errs != nil {
		c.JSON(500, gin.H{
			"Message": "Error while updating",
		})
		return
	}
	if result.MatchedCount < 1 {
		c.JSON(200, gin.H{
			"Message": "Id Not Found",
		})
		return
	}
	if result.ModifiedCount < 1 {
		c.JSON(200, gin.H{
			"Message": "Data Is Fresh, Nothing change in your data",
		})
		return
	}
	c.JSON(200, gin.H{
		"Message": "Data Updated",
	})
	return

}

// GetMuztahik fungsi untuk mengambil salah satu data muztahik
func DeleteMuztahik(c *gin.Context) {

	_id, _ := primitive.ObjectIDFromHex(c.Param("id"))

	// Memilih Tabel
	collection := db.Collection("muztahik")

	// Menentukan waktu koneksi query
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)
	filter := bson.D{{"_id", _id}}
	result, errSQL := collection.DeleteOne(ctx, filter)
	if errSQL != nil {
		// If the structure of the body is wrong, return an HTTP error
		fmt.Println(errSQL)
		c.JSON(500, gin.H{
			"Message": "Internal Server Error ",
		})
		return
	}
	if result.DeletedCount < 1 {
		c.JSON(200, gin.H{
			"Message": "Nothing Deleted ",
		})
		return
	}
	c.JSON(200, gin.H{
		"Message": "Your data with ID " + c.Param("id") + " was deleted",
	})
	return

	c.JSON(http.StatusOK, result)
}
