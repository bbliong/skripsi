package auth

import (
	"context"
	"encoding/json"
	"net/http"
	"time"

	"go.mongodb.org/mongo-driver/bson"

	"github.com/bbliong/sim-bmm/helper"

	"github.com/bbliong/sim-bmm/config"
	"github.com/bbliong/sim-bmm/models"
	jwt "github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

// Fungsi Login User
func SignIn(c *gin.Context) {

	var (
		account models.Users
		result  gin.H
		creds   models.Credentials
		jwtKey  = models.JwtKey
	)

	// Ambil request lalu dibikin menjadi json
	// Problem request body ga ada datanya / tapi pas di decode ada

	err := json.NewDecoder(c.Request.Body).Decode(&creds)

	if err != nil {
		// If the structure of the body is wrong, return an HTTP error
		c.JSON(500, gin.H{
			"Message": "Error while parsing ",
		})
		return
	}

	// Mengambil Koneksi
	db := config.Connect()

	// Memilih Tabel
	collection := db.Collection("users")

	// Menentukan waktu koneksi query
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)
	filter := bson.D{{"username", creds.Username}}

	//filter := creds.Username
	errSQL := collection.FindOne(ctx, filter).Decode(&account)
	if errSQL != nil {
		// di cek tidak ada
		c.JSON(500, gin.H{
			"Message": "Internal Server Error ",
		})
		return
	}
	if !helper.CheckPassword(creds.Password, account.Password) {
		// salah password
		c.JSON(http.StatusUnauthorized, gin.H{
			"Message": "Username atau password tidak cocok ",
		})
		return
	}
	// Menambhakan expired time dan membuat token
	expirationTime := time.Now().Add(1 * time.Hour)
	// menambhakan username dan claims
	claims := &models.Claims{
		ID:           account.ID,
		Name:         account.Name,
		Role:         account.Role,
		Department:   account.Department,
		Details_role: account.Details_role,
		StandardClaims: jwt.StandardClaims{
			// In JWT, the expiry time is expressed as unix milliseconds
			ExpiresAt: expirationTime.Unix(),
		},
	}

	// Declare the token with the algorithm used for signing, and the claims
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	// Create the JWT string
	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		c.JSON(500, gin.H{
			"message": "Internal Server Error",
		})
	}

	result = gin.H{
		"token":        tokenString,
		"id":           claims.ID,
		"nama":         claims.Name,
		"role":         claims.Role,
		"department":   claims.Department,
		"details_role": claims.Details_role,
	}

	c.JSON(http.StatusOK, result)
}

func Refresh(c *gin.Context) {

	var (
		result gin.H
		jwtKey = []byte("key")
	)
	// Mengambil token dari header
	tokenString := c.Request.Header.Get("Authorization")

	claims := &models.Claims{}

	token, err := jwt.ParseWithClaims(tokenString, claims, func(token *jwt.Token) (interface{}, error) {
		return jwtKey, nil
	})
	if token == nil {
		result = gin.H{
			"Message": "token not valid",
		}
		c.JSON(http.StatusOK, result)
		return
	}

	if err != nil {
		if err == jwt.ErrSignatureInvalid {
			result = gin.H{
				"Message": "Unauthorized",
			}
		} else if time.Unix(claims.ExpiresAt, 0).Sub(time.Now()) < -3*time.Hour {
			// Melihta apakah expires timenya  melebihi
			result = gin.H{
				"Message": "Bad Request can't be refresh it, please login again",
			}
			c.JSON(501, result)
			return
		}
	}

	// Now, create a new token for the current use, with a renewed expiration time
	expirationTime := time.Now().Add(1 * time.Hour)
	claims.ExpiresAt = expirationTime.Unix()
	token = jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tknStr, err := token.SignedString(jwtKey)
	if err != nil {
		result = gin.H{
			"Message": "Internal Server Error",
		}
	}

	result = gin.H{
		"token":        tknStr,
		"id":           claims.ID,
		"nama":         claims.Name,
		"role":         claims.Role,
		"department":   claims.Department,
		"details_role": claims.Details_role,
	}

	c.JSON(http.StatusOK, result)
	return
}
