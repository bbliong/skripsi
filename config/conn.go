package config

import (
	"context"
	"log"
	"os"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// return untuk db
var DB *mongo.Database

func Connect() *mongo.Database {
	load := godotenv.Load()
	if load != nil {
		log.Fatal("Error loading .env file")
	}

	CONNECTIONSTRING := os.Getenv("DBTYPE") + "://" + os.Getenv("DBUSER") + ":" + os.Getenv("DBPASS") + "@" + os.Getenv("DBSERVER") + ":" + os.Getenv("DBPORT") + "/" + os.Getenv("DBNAME")

	client, err := mongo.NewClient(options.Client().ApplyURI(CONNECTIONSTRING))

	if err != nil {
		log.Fatal(err)
	}
	err = client.Connect(context.Background())

	if err != nil {
		log.Fatal(err)
	}
	// Collection types can be used to access the database
	DB = client.Database(os.Getenv("DBNAME"))

	return DB
}
