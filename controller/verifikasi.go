package controller

import (
	"github.com/bbliong/sim-bmm/config"
)

func init() {
	// // Mengambil Koneksi
	db = config.Connect()
}
