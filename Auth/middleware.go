package auth

import (
	"fmt"
	"net/http"

	"github.com/bbliong/sim-bmm/models"
	jwt "github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

// Fungsi Auth
func Auth(c *gin.Context) {

	// Mengambil token dari header
	tokenString := c.Request.Header.Get("Authorization")

	claims := &models.Claims{}

	token, err := jwt.ParseWithClaims(tokenString, claims, func(token *jwt.Token) (interface{}, error) {
		if jwt.GetSigningMethod("HS256") != token.Method {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return []byte("key"), nil
	})

	if token != nil && err == nil {
		// untuk memberikan id pada global store jadi ketika mau ngambil data ga usah cek ulang tinggal ambil idnya
		c.Set("decoded", claims)
		c.Next()
	} else {
		result := gin.H{
			"message": "not authorized",
			"error":   err.Error(),
		}
		c.JSON(http.StatusUnauthorized, result)
		c.Abort()
	}

}
