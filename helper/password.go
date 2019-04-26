package helper

import "golang.org/x/crypto/bcrypt"

func HashPassword(password string) (string, error) {
	cost := bcrypt.DefaultCost
	hashpassword, err := bcrypt.GenerateFromPassword([]byte(password), cost)
	return string(hashpassword), err
}

func CheckPassword(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}
