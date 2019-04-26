package controller

import (
	"context"
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin/binding"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"

	"github.com/bbliong/sim-bmm/config"
	"github.com/bbliong/sim-bmm/models"
	"github.com/gin-gonic/gin"
)

func init() {
	// // Mengambil Koneksi
	db = config.Connect()
}

// CreatePendaftaran fungsi untuk membuat data Pendaftaran
func CreatePendaftaran(c *gin.Context) {

	var (
		err          error
		Pendaftarans interface{}
		Kat          struct {
			Kategori int32 `json:"kategori,omitempty" bson:"kategori,omitempty"`
		}
	)

	err = c.ShouldBindBodyWith(&Kat, binding.JSON)
	if err != nil {
		fmt.Println(err)
		// If the structure of the body is wrong, return an HTTP error
		c.JSON(500, gin.H{
			"Message": "Error while parsing ",
		})
		return
	}
	switch Kat.Kategori {
	// Kategori KSM
	case 1:
		Pendaftaran := models.PendaftaranKSM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		//Pendaftaran.Muztahiks = getSingleMuztahikById(c, Pendaftaran.Muztahik)
		Pendaftaran.Persetujuan.Status_persetujuan = 0
		Pendaftarans = Pendaftaran
	case 2:
		Pendaftaran := models.PendaftaranRBM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		Pendaftarans = Pendaftaran
	// Kategori PAUD
	case 3:
		Pendaftaran := models.PendaftaranPAUD{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		Pendaftarans = Pendaftaran
	// Kategori KAFALA
	case 4:
		Pendaftaran := models.PendaftaranKAFALA{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		Pendaftarans = Pendaftaran
	// Kategori JSM
	case 5:
		Pendaftaran := models.PendaftaranJSM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		Pendaftarans = Pendaftaran
	// Kategori DZM
	case 6:
		Pendaftaran := models.PendaftaranDZM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		Pendaftarans = Pendaftaran
	// Kategori BSU
	case 7:
		Pendaftaran := models.PendaftaranBSU{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		Pendaftarans = Pendaftaran
	// Kategori Rescue
	case 8:
		Pendaftaran := models.PendaftaranRescue{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		Pendaftarans = Pendaftaran
	// Kategori BTM
	case 9:
		Pendaftaran := models.PendaftaranBTM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		Pendaftarans = Pendaftaran
	// Kategori BSM
	case 10:
		Pendaftaran := models.PendaftaranBSM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		Pendaftarans = Pendaftaran
	// Kategori BCM
	case 11:
		Pendaftaran := models.PendaftaranBCM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		Pendaftarans = Pendaftaran
	// Kategori ASM
	case 12:
		Pendaftaran := models.PendaftaranASM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		Pendaftarans = Pendaftaran
	default:
		{
			result := gin.H{
				"Status": "Internal Server Error",
			}
			c.JSON(501, result)
			return
		}
	}
	collection := db.Collection("pendaftaran")

	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)

	result, _ := collection.InsertOne(ctx, Pendaftarans)
	c.JSON(200, gin.H{
		"Data":    result,
		"Message": "Berhasil mendaftarkan ",
	})
	return

}

// GetAllPendaftaran fungsi untuk mengambil seluruh data Pendaftaran
func GetAllPendaftaran(c *gin.Context) {

	var (
		Kat struct {
			Kategori int32 `json:"kategori,omitempty" bson:"kategori,omitempty"`
		}
		Pendaftarans []interface{}
		err          error
	)

	// Memilih Tabel
	collection := db.Collection("pendaftaran")

	// Menentukan waktu koneksi query
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)

	// filter := bson.D{{"_id", _id}}

	//get data taro di cursor
	cursor, err := collection.Find(ctx, bson.M{})

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
		cursor.Decode(&Kat)

		if err != nil {
			// If the structure of the body is wrong, return an HTTP error
			c.JSON(500, gin.H{
				"Message": "Error while parsing ",
			})
			return
		}

		if Kat.Kategori == 0 {
			// If the structure of the body is wrong, return an HTTP error
			c.JSON(200, gin.H{
				"Message": "Tidak ada Kategori Program ",
			})
			return
		} else {
			switch Kat.Kategori {
			// Kategori KSM
			case 1:
				Pendaftaran := models.PendaftaranKSM{}
				cursor.Decode(&Pendaftaran)
				//Pendaftaran.Muztahiks = getSingleMuztahikById(c, Pendaftaran.Muztahik)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			// Kategori RBM
			case 2:
				Pendaftaran := models.PendaftaranRBM{}
				cursor.Decode(&Pendaftaran)
				//Pendaftaran.Muztahiks = getSingleMuztahikById(c, Pendaftaran.Muztahik)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			// Kategori PAUD
			case 3:
				Pendaftaran := models.PendaftaranPAUD{}
				cursor.Decode(&Pendaftaran)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			// Kategori KAFALA
			case 4:
				Pendaftaran := models.PendaftaranKAFALA{}
				cursor.Decode(&Pendaftaran)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			// Kategori JSM
			case 5:
				Pendaftaran := models.PendaftaranJSM{}
				cursor.Decode(&Pendaftaran)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			// Kategori DZM
			case 6:
				Pendaftaran := models.PendaftaranDZM{}
				cursor.Decode(&Pendaftaran)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			// Kategori BSU
			case 7:
				Pendaftaran := models.PendaftaranBSU{}
				cursor.Decode(&Pendaftaran)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			// Kategori Rescue
			case 8:
				Pendaftaran := models.PendaftaranRescue{}
				cursor.Decode(&Pendaftaran)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			// Kategori BTM
			case 9:
				Pendaftaran := models.PendaftaranBTM{}
				cursor.Decode(&Pendaftaran)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			// Kategori BSM
			case 10:
				Pendaftaran := models.PendaftaranBSM{}
				cursor.Decode(&Pendaftaran)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			// Kategori BCM
			case 11:
				Pendaftaran := models.PendaftaranBCM{}
				cursor.Decode(&Pendaftaran)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			// Kategori ASM
			case 12:
				Pendaftaran := models.PendaftaranASM{}
				cursor.Decode(&Pendaftaran)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			default:
				{
					result := gin.H{
						"Status": "Internal Server Error",
					}
					c.JSON(501, result)
					return
				}
			}
		}

	}
	if err := cursor.Err(); err != nil {
		result := gin.H{
			"Status": "Internal Server Error",
		}
		c.JSON(501, result)
		return
	}

	result := gin.H{
		"data": Pendaftarans,
	}
	c.JSON(http.StatusOK, result)
}

func getSingleMuztahikById(c *gin.Context, id primitive.ObjectID) models.Muztahik {

	var Muztahik models.Muztahik

	// Memilih Tabel
	collection := db.Collection("muztahik")
	// Menentukan waktu koneksi query
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)
	filter := bson.D{{"_id", id}}
	errSQL := collection.FindOne(ctx, filter).Decode(&Muztahik)
	if errSQL != nil {
		// If the structure of the body is wrong, return an HTTP error
		fmt.Println(errSQL)
		c.JSON(500, gin.H{
			"Message": "Internal Server Error ",
		})
		return models.Muztahik{}
	}
	return Muztahik
}

// CreateMuztahik fungsi untuk membuat data muztahik
func UpdatePendaftaran(c *gin.Context) {

	var (
	//Muztahik models.Muztahik
	)

	//_id, _ := primitive.ObjectIDFromHex(c.Param("id"))

	// err := json.NewDecoder(c.Request.Body).Decode(&Muztahik)

	// if err != nil {
	// 	fmt.Println(err)
	// 	// If the structure of the body is wrong, return an HTTP error
	// 	c.JSON(500, gin.H{
	// 		"Message": "Error while parsing ",
	// 	})
	// 	return
	// }

	// collection := db.Collection("muztahik")

	// ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)

	// filter := bson.D{{"_id", _id}}

	// result, errs := collection.UpdateOne(ctx, filter, bson.D{{"$set", Muztahik}})

	// if errs != nil {
	// 	c.JSON(500, gin.H{
	// 		"Message": "Error while updating",
	// 	})
	// 	return
	// }
	// if result.MatchedCount < 1 {
	// 	c.JSON(200, gin.H{
	// 		"Message": "Id Not Found",
	// 	})
	// 	return
	// }
	// if result.ModifiedCount < 1 {
	// 	c.JSON(200, gin.H{
	// 		"Message": "Data Is Fresh, Nothing change in your data",
	// 	})
	// 	return
	// }
	c.JSON(200, gin.H{
		"Message": "Data Updated",
	})
	return

}

// GetMuztahik fungsi untuk mengambil salah satu data muztahik
func DeletePendaftaran(c *gin.Context) {

	_id, _ := primitive.ObjectIDFromHex(c.Param("id"))

	// Memilih Tabel
	collection := db.Collection("pendaftaran")

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
