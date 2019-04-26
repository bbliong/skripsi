package models

import "github.com/dgrijalva/jwt-go"

var JwtKey = []byte("key")

// Untuk membaca hasil dari request body
type Credentials struct {
	Password string `json:"password" bson:"password,omitempty`
	Username string `json:"username" bson:"username,omitempty`
}

type Claims struct {
	ID   string `json:"Id"`
	Role int    `json:"role"`
	jwt.StandardClaims
}

type Users struct {
	ID       string `json:"Id,omitempty" binding:"required" bson:"_id,omitempty`
	Username string `json:"username" binding:"required" bson:"username,omitempty`
	Password string `json:"password" binding:"required" bson:"password,omitempty`
	Role     int    `json:"role,omitempty" binding:"required"  bson:"role,omitempty` //Admin : 1 , PIC : 2, MGR : 3, KADIV  :4, Admin Register : 5, Keuangan : 6
}
