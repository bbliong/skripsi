package test

import (
	"testing"

	"github.com/bbliong/polymer-starter-kit-4.0.0/modul"
)

func TestMatkul(t *testing.T) {

	var dataInsertMkl = []modul.Matkul{
		modul.Matkul{
			Kode: "1111",
			Nama: "ada",
		},
		modul.Matkul{
			Kode: "1112",
			Nama: "adi",
		},
	}

	db, err := InitDatabase()

	if err != nil {
		t.Fatal(err)
	}

	t.Run("Testing insert  matkul", func(t *testing.T) {
		for _, dataInsert := range dataInsertMkl {
			err := dataInsert.Insert(db)
			if err != nil {
				t.Fatal(err)
			}
		}
	})

	defer db.Close()
}
