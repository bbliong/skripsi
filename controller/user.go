package controller

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"

	"github.com/bbliong/sim-bmm/config"
	"github.com/bbliong/sim-bmm/helper"
	"github.com/bbliong/sim-bmm/models"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func init() {
	// // Mengambil Koneksi
	db = config.Connect()
}

// GetAllUser fungsi untuk mengambil seluruh data User
func GetAllUser(c *gin.Context) {

	var (
		Users []models.Users
	)

	// claims := c.MustGet("decoded").(*models.Claims)

	// if claims.IsAdmin() || claims.IsMGR() || claims.IsAdmP() {
	// 	fmt.Println("You have permission for this access")
	// } else {
	// 	c.JSON(500, gin.H{
	// 		"Message": "You don't have the permission ",
	// 	})
	// 	return
	// }

	// Memilih Tabel
	collection := db.Collection("users")

	// Menentukan waktu koneksi query
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)

	// Fungi jika terdapat filter yang dikirim kan lewat parameter
	search := c.Request.URL.Query()
	filter := bson.M{}
	if len(search) > 0 {
		for key, val := range search {
			if key == "role" || key == "role2" {
				i, err := strconv.Atoi(val[0])
				if err != nil {
					i = 0
				}
				fmt.Println(i)
				if _, exist := filter["$or"]; !exist {
					filter["$or"] = []bson.M{}
				}
				filter["$or"] = append(filter["$or"].([]bson.M), bson.M{
					"role": i,
				})
			} else {
				if _, exist := filter["$or"]; !exist {
					filter["$or"] = []bson.M{}
				}
				filter["$or"] = append(filter["$or"].([]bson.M), bson.M{key: primitive.Regex{Pattern: val[0], Options: "i"}})
			}
		}
	}
	//get data taro di cursor
	// cursor, err := collection.Find(ctx, filter)
	filterProjection := bson.D{
		{"password", 0},
		{"username", 0},
	}

	cursor, err := collection.Find(ctx, filter, options.Find().SetProjection(filterProjection))
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
		var User models.Users
		cursor.Decode(&User)
		// masukan kedalam array struct
		Users = append(Users, User)
	}
	if err := cursor.Err(); err != nil {
		result := gin.H{
			"Status": "Internal Server Error",
		}
		c.JSON(501, result)
		return
	}

	result := gin.H{
		"data": Users,
	}
	c.JSON(http.StatusOK, result)
}

// GetUser fungsi untuk mengambil salah satu data User
func GetUser(c *gin.Context) {

	var (
		User models.Users
	)

	claims := c.MustGet("decoded").(*models.Claims)

	if claims.IsAdmin() {
		fmt.Println("You have permission for this access")
	} else {
		c.JSON(500, gin.H{
			"Message": "You don't have the permission ",
		})
		return
	}

	_id, _ := primitive.ObjectIDFromHex(c.Param("id"))

	// Memilih Tabel
	collection := db.Collection("users")

	// Menentukan waktu koneksi query
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)

	filter := bson.D{{"_id", _id}}
	errSQL := collection.FindOne(ctx, filter).Decode(&User)
	if errSQL != nil {
		// If the structure of the body is wrong, return an HTTP error
		fmt.Println(errSQL)
		c.JSON(500, gin.H{
			"Message": "Internal Server Error ",
		})
		return
	}

	result := gin.H{
		"data": User,
	}
	c.JSON(http.StatusOK, result)
}

// CreateUser fungsi untuk membuat data User
func CreateUser(c *gin.Context) {

	var (
		User     models.Users
		UserBson models.Users
	)

	claims := c.MustGet("decoded").(*models.Claims)

	if claims.IsAdmin() {
		fmt.Println("You have permission for this access")
	} else {
		c.JSON(500, gin.H{
			"Message": "You don't have the permission ",
		})
		return
	}

	err := json.NewDecoder(c.Request.Body).Decode(&User)

	if err != nil {
		fmt.Println(err)
		// If the structure of the body is wrong, return an HTTP error
		c.JSON(500, gin.H{
			"Message": "Error while parsing ",
		})
		return
	}

	collection := db.Collection("users")

	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)

	filter := bson.D{{"nama", User.Username}}

	errSQL := collection.FindOne(ctx, filter).Decode(&UserBson)

	if errSQL == nil {
		// If the structure of the body is wrong, return an HTTP error
		c.JSON(200, gin.H{
			"Message": "Data Exists",
		})
		return
	}
	User.Password, err = helper.HashPassword(User.Password)
	result, _ := collection.InsertOne(ctx, User)

	c.JSON(200, gin.H{
		"Data":    result,
		"Message": "Data Created",
	})
	return

}

// CreateUser fungsi untuk membuat data User
func UpdateUser(c *gin.Context) {

	var (
		User models.Users
	)
	claims := c.MustGet("decoded").(*models.Claims)

	if claims.IsAdmin() {
		fmt.Println("You have permission for this access")
	} else {
		c.JSON(500, gin.H{
			"Message": "You don't have the permission ",
		})
		return
	}

	_id, _ := primitive.ObjectIDFromHex(c.Param("id"))

	err := json.NewDecoder(c.Request.Body).Decode(&User)

	if err != nil {
		fmt.Println(err)
		// If the structure of the body is wrong, return an HTTP error
		c.JSON(500, gin.H{
			"Message": "Error while parsing ",
		})
		return
	}

	collection := db.Collection("users")

	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)

	filter := bson.D{{"_id", _id}}
	var errs error
	var result *mongo.UpdateResult

	if User.Password == "" {
		updateFilter := bson.D{
			{"usernamea", User.Username},
			{"nama", User.Name},
			{"email", User.Email},
			{"role", User.Role},
		}

		fmt.Println(updateFilter)
		result, errs = collection.UpdateOne(ctx, filter, bson.D{{"$set", updateFilter}})
	} else {
		User.Password, err = helper.HashPassword(User.Password)
		result, errs = collection.UpdateOne(ctx, filter, bson.D{{"$set", User}})
	}

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

// GetUser fungsi untuk mengambil salah satu data User
func DeleteUser(c *gin.Context) {

	claims := c.MustGet("decoded").(*models.Claims)

	if claims.IsAdmin() {
		fmt.Println("You have permission for this access")
	} else {
		c.JSON(500, gin.H{
			"Message": "You don't have the permission ",
		})
		return
	}

	_id, _ := primitive.ObjectIDFromHex(c.Param("id"))

	// Memilih Tabel
	collection := db.Collection("users")

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

func UpdatePassword(c *gin.Context) {
	var (
		User models.Users
	)

	claims := c.MustGet("decoded").(*models.Claims)

	err := json.NewDecoder(c.Request.Body).Decode(&User)

	if err != nil {
		fmt.Println(err)
		c.JSON(500, gin.H{
			"Message": "Internal Server Error ",
		})
		return
	}

	if claims.IsAdmin() || claims.ID == User.ID {
		fmt.Println("You have permission for this access")
	} else {
		c.JSON(500, gin.H{
			"Message": "You don't have the permission ",
		})
		return
	}
	collection := db.Collection("users")

	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)

	User.Password, err = helper.HashPassword(User.Password)
	filter := bson.D{{"_id", User.ID}}
	result, errs := collection.UpdateOne(ctx, filter, bson.D{{"$set", User}})

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
