package modul

import (
	"database/sql"
	"fmt"
)

var TabelMahasiswa string = `
	CREATE TABLE mahasiswa(
		NPM VARCHAR(10) PRIMARY KEY,
		Nama VARCHAR(10)
	);
`

type Mahasiswa struct {
	NPM  string `json:"NPM"`
	Nama string `json:"Nama"`
}

func (m *Mahasiswa) Fields() ([]string, []interface{}) {
	fields := []string{"NPM", "Nama"}
	temp := []interface{}{&m.NPM, &m.Nama}
	return fields, temp
}

func (m *Mahasiswa) Insert(db *sql.DB) error {
	query := fmt.Sprintf("INSERT INTO %v values(?,?)", "mahasiswa")
	_, err := db.Exec(query, &m.NPM, &m.Nama)
	return err
}
