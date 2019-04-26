package models

import "time"

// Komunitas Sehat Muamalat

type Ksm struct {
	Jumlah_bantuan int32 `json:"jumlah_bantuan,omitempty" bson:"jumlah_bantuan,omitempty"`
}

// Rumah Berkah Muamalat
type Rbm struct {
	Jumlah_muztahik int32 `json:"jumlah_muztahik,omitempty" bson:"jumlah_muztahik,omitempty"`
	Jumlah_bantuan  int32 `json:"jumlah_bantuan,omitempty" bson:"jumlah_bantuan,omitempty"`
}

// Pangan Untuk Dhuafa
type Paud struct {
	Cabang         string `json:"cabang,omitempty" bson:"cabang,omitempty"`
	Jumlah_bantuan int32  `json:"jumlah_bantuan,omitempty" bson:"jumlah_bantuan,omitempty"`
}

// Kafala (Program Kerjasama)
type Kafala struct {
	Ui_id          string `json:"ui_id,omitempty" bson:"ui_id,omitempty"`
	Pengasuh       string `json:"pengasuh,omitempty" bson:"pengasuh,omitempty"`
	Tempat_lahir   string `json:"tempat_lahir,omitempty" bson:"tempat_lahir,omitempty"`
	Mitra          string `json:"mitra,omitempty" bson:"mitra,omitempty"`
	Ytm            string `json:"ytm,omitempty" bson:"ytm,omitempty"`
	Kelas          string `json:"kelas,omitempty" bson:"kelas,omitempty"`
	Jumlah_hafalan int16  `json:"jumlah_hafalan,omitempty" bson:"jumlah_hafalan,omitempty"`
	Jumlah_bantuan int32  `json:"jumlah_bantuan,omitempty" bson:"jumlah_bantuan,omitempty"`
}

// Jaminan Sosial Muamalat
type Jsm struct {
	Afiliasi       string `json:"afiliasi,omitempty" bson:"afiliasi,omitempty"`
	Non_afiliasi   string `json:"non_afiliasi,omitempty" bson:"non_afiliasi,omitempty"`
	Bidang         string `json:"bidang,omitempty" bson:"bidang,omitempty"`
	Jumlah_bantuan int32  `json:"jumlah_bantuan,omitempty" bson:"jumlah_bantuan,omitempty"`
}

// Dusun Zakat Muamalat
type Dzm struct {
	Jenis_infrastruktur  string `json:"jenis_infrastruktur,omitempty" bson:"jenis_infrastruktur,omitempty"`
	Volume               string `json:"volume,omitempty" bson:"volume,omitempty"`
	Jumlah_bantuan       int32  `json:"jumlah_bantuan,omitempty" bson:"jumlah_bantuan,omitempty"`
	Jumlah_penduduk_desa int16  `json:"jumlah_penduduk_desa,omitempty" bson:"jumlah_penduduk_desa,omitempty"`
}

// Bmm Sahabat Ukm
type Bsu struct {
	Jumlah_bantuan     string `json:"jumlah_bantuan,omitempty" bson:"jumlah_bantuan,omitempty"`
	Jumlah_mustahik    int16  `json:"jumlah_mustahik,omitempty" bson:"jumlah_mustahik,omitempty"`
	Jenis_dana         string `json:"jenis_dana,omitempty" bson:"jenis_dana,omitempty"`
	Pendapatan_perhari int32  `json:"pendapatan_perhari,omitempty" bson:"Pendapatan_perhari,omitempty"`
	Jenis_produk       string `json:"jenis_produk,omitempty" bson:"jenis_produk,omitempty"`
	Aset               string `json:"aset,omitempty" bson:"aset,omitempty"`
}

// Bmm Rescue
type Br struct {
	Skala_bencana          string    `json:"skala_bencana,omitempty" bson:"skala_bencana,omitempty"`
	Tanggal_respon_bencana time.Time `json:"tanggal_respon_bencana,omitempty" bson:"tanggal_respon_bencana,omitempty"`
	Jumlah_bantuan         int32     `json:"jumlah_bantuan,omitempty" bson:"jumlah_bantuan,omitempty"`
	Tahapan_bencana        string    `json:"tahapan_bencana,omitempty" bson:"tahapan_bencana,omitempty"`
}

// Beasiswa Tahfizh Muamalat
type Btm struct {
	Tempat         string    `json:"tempat,omitempty" bson:"tempat,omitempty"`
	Tanggal_lahir  time.Time `json:"tanggal_lahir,omitempty" bson:"tanggal_lahir,omitempty"`
	Alamat         string    `json:"alamat,omitempty" bson:"alamat,omitempty"`
	Mitra          string    `json:"mitra,omitempty" bson:"mitra,omitempty"`
	Kelas          string    `json:"kelas,omitempty" bson:"kelas,omitempty"`
	Jumlah_hafalan int16     `json:"jumlah_hafalan,omitempty" bson:"jumlah_hafalan,omitempty"`
	Jumlah_bantuan int32     `json:"jumlah_bantuan,omitempty" bson:"jumlah_bantuan,omitempty"`
	Jenis_dana     string    `json:"jenis_dana,omitempty" bson:"jenis_dana,omitempty"`
}

// Beasiswa Sarjana Muamalat
type Bsm struct {
	Tempat          string    `json:"tempat,omitempty" bson:"tempat,omitempty"`
	Tanggal_lahir   time.Time `json:"tanggal_lahir,omitempty" bson:"tanggal_lahir,omitempty"`
	Alamat          string    `json:"alamat,omitempty" bson:"alamat,omitempty"`
	Jumlah_bantuan  int32     `json:"jumlah_bantuan,omitempty" bson:"jumlah_bantuan,omitempty"`
	Jenis_dana      string    `json:"jenis_dana,omitempty" bson:"jenis_dana,omitempty"`
	Jumlah_mustahik int16     `json:"jumlah_mustahik,omitempty" bson:"jumlah_mustahik,omitempty"`
	Mitra           string    `json:"mitra,omitempty" bson:"mitra,omitempty"`
	Kelas           string    `json:"kelas,omitempty" bson:"kelas,omitempty"`
	Jumlah_hafalan  int16     `json:"jumlah_hafalan,omitempty" bson:"jumlah_hafalan,omitempty"`
}

// Beasiswa Cikal Muamalat
type Bcm struct {
	Tempat         string    `json:"tempat,omitempty" bson:"tempat,omitempty"`
	Tanggal_lahir  time.Time `json:"tanggal_lahir,omitempty" bson:"tanggal_lahir,omitempty"`
	Alamat         string    `json:"alamat,omitempty" bson:"alamat,omitempty"`
	Semester       string    `json:"semester,omitempty" bson:"semester,omitempty"`
	Jumlah_bantuan int32     `json:"jumlah_bantuan,omitempty" bson:"jumlah_bantuan,omitempty"`
	Jenis_dana     string    `json:"jenis_dana,omitempty" bson:"jenis_dana,omitempty"`
	Karya          string    `json:"karya,omitempty" bson:"karya,omitempty"`
	Mitra          string    `json:"mitra,omitempty" bson:"mitra,omitempty"`
	Jumlah_hafalan int16     `json:"jumlah_hafalan,omitempty" bson:"jumlah_hafalan,omitempty"`
}

// Aksi Sehat Muamalat
type Asm struct {
	Komunitas      string `json:"komunitas,omitempty" bson:"komunitas,omitempty"`
	Kegiatan       string `json:"kegiatan,omitempty" bson:"kegiatan,omitempty"`
	Jumlah_bantuan int32  `json:"jumlah_bantuan,omitempty" bson:"jumlah_bantuan,omitempty"`
}
