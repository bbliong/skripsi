package modul

import (
	"database/sql"
	"fmt"
)

var TabelMatkul string = `
	CREATE TABLE matkul(
		Kode VARCHAR(10) PRIMARY KEY,
		Nama VARCHAR(10)
	);
`

type Matkul struct {
	Kode string `json:"Kode"`
	Nama string `json:"Nama"`
}

func (m *Matkul) Fields() ([]string, []interface{}) {
	fields := []string{"Kode", "Nama"}
	temp := []interface{}{&m.Kode, &m.Nama}
	return fields, temp
}

func (m *Matkul) Insert(db *sql.DB) error {
	query := fmt.Sprintf("INSERT INTO %v values(?,?)", "matkul")
	_, err := db.Exec(query, &m.Kode, &m.Nama)
	return err
}
