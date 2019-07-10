package test

import (
	"testing"

	"github.com/bbliong/polymer-starter-kit-4.0.0/modul"
)

func TestMahasiswa(t *testing.T) {

	var dataInsertMhs = []modul.Mahasiswa{
		modul.Mahasiswa{
			NPM:  "1236",
			Nama: "ada",
		},
		modul.Mahasiswa{
			NPM:  "1226",
			Nama: "adi",
		},
	}

	db, err := InitDatabase()

	if err != nil {
		t.Fatal(err)
	}

	t.Run("Testing insert  mahasiswwa", func(t *testing.T) {
		for _, dataInsert := range dataInsertMhs {
			err := dataInsert.Insert(db)
			if err != nil {
				t.Fatal(err)
			}
		}
	})

	defer db.Close()
}
