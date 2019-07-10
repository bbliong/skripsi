package test

import (
	"database/sql"
	"fmt"
	"testing"

	"github.com/bbliong/polymer-starter-kit-4.0.0/modul"
)

var username, password, host, namaDatabase, databaseDefault string

func init() {
	username = "root"
	password = ""
	host = "localhost"
	namaDatabase = "gunadarma"
	databaseDefault = "mysql"
}
func TestDatabase(t *testing.T) {

	t.Run("Testing Untuk Create Databse ", func(t *testing.T) {
		db, err := modul.Connect(username, host, databaseDefault)

		defer db.Close()

		if err != nil {
			t.Fatal(err)
		}

		err = modul.CreateDB(db, namaDatabase)

		if err != nil {
			t.Fatal(err)
		}
	})

	t.Run("Testing untuk koneksi postgres Database ", func(t *testing.T) {
		db, err := modul.Connect(username, host, databaseDefault)

		defer db.Close()

		if err != nil {
			t.Fatal(err)
		}

	})

	t.Run("Testing Untuk Drop Databse ", func(t *testing.T) {
		db, err := modul.Connect(username, host, databaseDefault)

		defer db.Close()

		if err != nil {
			t.Fatal(err)
		}

		err = modul.DropDB(db, namaDatabase)

		if err != nil {
			t.Fatal(err)
		}
	})

}

func InitDatabase() (*sql.DB, error) {

	dbInit, err := modul.Connect(username, password, databaseDefault)
	if err != nil {
		fmt.Println("error 1")
		return nil, err
	}

	// if err = modul.DropDB(dbInit, namaDatabase); err != nil {
	// 	fmt.Println("error 2")
	// 	return nil, err
	// }

	if err = modul.CreateDB(dbInit, namaDatabase); err != nil {
		fmt.Println("error 3")
		return nil, err
	}

	dbInit.Close()

	db, err := modul.Connect(username, password, namaDatabase)
	if err != nil {
		fmt.Println("error 4")
		return nil, err
	}

	if err = modul.CreateTable(db, modul.TabelMahasiswa); err != nil {
		fmt.Println("error 5")
		return nil, err
	}

	if err = modul.CreateTable(db, modul.TabelMatkul); err != nil {
		fmt.Println("error 5")
		return nil, err
	}
	return db, nil
}
