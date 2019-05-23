package models

import (
	"github.com/dgrijalva/jwt-go"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

var JwtKey = []byte("key")

// Untuk membaca hasil dari request body
type Credentials struct {
	Password string `json:"password" bson:"password,omitempty"`
	Username string `json:"username" bson:"username,omitempty"`
}

type Claims struct {
	ID   primitive.ObjectID `json:"Id,omitempty"  bson:"_id,omitempty"`
	Role int32              `json:"role,omitempty"  bson:"role,omitempty"`
	Name string             `json:"nama" bson:"nama,omitempty"`
	jwt.StandardClaims
}

type Users struct {
	ID           primitive.ObjectID `json:"Id,omitempty" bson:"_id,omitempty"`
	Name         string             `json:"nama" bson:"nama,omitempty"`
	Details_role string             `json:"details_role" bson:"details_role,omitempty"`
	Username     string             `json:"username" binding:"required" bson:"username,omitempty"`
	Password     string             `json:"password" binding:"required" bson:"password,omitempty"`
	Role         int32              `json:"role,omitempty" binding:"required"  bson:"role,omitempty"` //Admin : 1 , PIC : 2, MGR : 3, KADIV  :4, Admin Register : 5, Keuangan : 6
}

func (c Claims) IsAdmin() bool {
	return c.Role == 1
}

func (c Claims) IsPIC() bool {
	return c.Role == 2
}

func (c Claims) IsMGR() bool {
	return c.Role == 3
}

func (c Claims) IsKadiv() bool {
	return c.Role == 4
}

func (c Claims) IsAdmP() bool {
	return c.Role == 5
}

func (c Claims) IsKeuangan() bool {
	return c.Role == 6
}
