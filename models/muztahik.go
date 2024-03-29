package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Kat struct {
	Id       primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Kategori int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Level    int32              `json:"level_persetujuan,omitempty" bson:"persetujuan.level_persetujuan,omitempty"`
}

// Muztahik Struct
type Muztahik struct {
	Id             primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Nama           string             `json:"nama,omitempty" bson:"nama,omitempty"`
	Nik_no_yayasan string             `json:"nik,omitempty" bson:"nik_no_yayasan,omitempty"`
	Alamat         string             `json:"alamat,omitempty" bson:"alamat,omitempty"`
	Kecamatan      string             `json:"kecamatan,omitempty" bson:"kecamatan,omitempty"`
	Kabupaten      string             `json:"kabkot,omitempty" bson:"kabkot,omitempty"`
	Provinsi       string             `json:"provinsi,omitempty" bson:"provinsi,omitempty"`
	No_hp          string             `json:"nohp,omitempty" bson:"no_hp,omitempty"`
	Email          string             `json:"email,omitempty" bson:"email,omitempty"`
	Photo          string             `json:"photo,omitempty" bson:"photo,omitempty"`
	Usia           string             `json:"usia,omitempty" bson:"usia,omitempty"`
	Tanggungan     string             `json:"tanggungan,omitempty" bson:"tanggungan,omitempty"`
}

// PUA (Pendaftaran Update Admin ) // Struct untuk update Admin
type PUA struct {
}

func (m Muztahik) IsEmpty() bool {
	if m.Nama != "" {
		return true
	} else {
		return false
	}
}

type Persetujuan struct {
	Proposal         int32              `json:"Proposal,omitempty" bson:"proposal,omitempty"`
	Disposisi_pic    string             `json:"disposisi_pic,omitempty" bson:"disposisi_pic,omitempty"`
	Disposisi_pic_id primitive.ObjectID `json:"disposisi_pic_id,omitempty" bson:"disposisi_pic_id,omitempty"`
	Manager          primitive.ObjectID `json:"manager_id,omitempty" bson:"manager_id,omitempty"`
	Kadiv            primitive.ObjectID `json:"kadiv_id,omitempty" bson:"kadiv_id,omitempty"`

	Perihal           string     `json:"perihal,omitempty" bson:"perihal,omitempty"`
	Tanggal_disposisi *time.Time `json:"tanggal_disposisi,omitempty" bson:"tanggal_disposisi ,omitempty"`

	//Field akan di update setiap simpan UPD
	Verifikator_nama    string     `json:"verifikator_nama,omitempty" bson:"verifikator_nama,omitempty"`
	Verifikator_tanggal *time.Time `json:"verifikator_tanggal,omitempty" bson:"verifikator_tanggal,omitempty"`

	Manager_nama    string     `json:"manager_nama,omitempty" bson:"manager_nama,omitempty"`
	Manager_tanggal *time.Time `json:"manager_tanggal,omitempty" bson:"manager_tanggal,omitempty"`

	Kadiv_nama    string     `json:"kadiv_nama,omitempty" bson:"kadiv_nama,omitempty"`
	Kadiv_tanggal *time.Time `json:"kadiv_tanggal,omitempty" bson:"kadiv_tanggal,omitempty"`

	Pic_nama    string     `json:"pic_nama,omitempty" bson:"pic_nama,omitempty"`
	Pic_tanggal *time.Time `json:"pic_tanggal,omitempty" bson:"pic_tanggal,omitempty"`

	// Persetujuan tambahan
	Sifat_santunan          string     `json:"sifat_santunan,omitempty" bson:"sifat_santunan,omitempty"`
	Jumlah_penerima_manfaat string     `json:"jumlah_penerima_manfaat,omitempty" bson:"jumlah_penerima_manfaat,omitempty"`
	Mitra_pelaksana         string     `json:"mitra_pelaksana,omitempty" bson:"mitra_pelaksana,omitempty"`
	Tanggal_komite          *time.Time `json:"tanggal_komite,omitempty" bson:"tanggal_komite,omitempty"`
	Tanggal_pelaksanaan     *time.Time `json:"tanggal_pelaksanaan,omitempty" bson:"tanggal_pelaksanaan,omitempty"`
	Sumber_dana             string     `json:"sumber_dana,omitempty" bson:"sumber_dana,omitempty"`
	Nomor_permohonan        string     `json:"nomor_permohonan,omitempty" bson:"nomor_permohonan,omitempty"`

	Keterangan_pic             string     `json:"keterangan_pic,omitempty" bson:"keterangan_pic,omitempty"`
	Keterangan_manager         string     `json:"keterangan_manager,omitempty" bson:"keterangan_manager,omitempty"`
	Keterangan_kadiv           string     `json:"keterangan_kadiv,omitempty" bson:"keterangan_kadiv,omitempty"`
	Status_persetujuan_pic     int32      `json:"status_persetujuan_pic,omitempty" bson:"status_persetujuan_pic,omitempty"`
	Status_persetujuan_manager int32      `json:"status_persetujuan_manager,omitempty" bson:"status_persetujuan_manager,omitempty"`
	Status_persetujuan_kadiv   int32      `json:"status_persetujuan_kadiv" bson:"status_persetujuan_kadiv"`
	Level_persetujuan          int32      `json:"level_persetujuan" bson:"level_persetujuan"`
	Status_persetujuan         int32      `json:"status_persetujuan,omitempty" bson:"status_persetujuan,omitempty"`
	Tanggal_persetujuan        *time.Time `json:"tanggal_persetujuan,omitempty" bson:"tanggal_persetujuan,omitempty"`
	Kategori_program           string     `json:"kategori_program,omitempty" bson:"kategori_program,omitempty"`

	Ppd_pic      *time.Time `json:"ppd_pic,omitempty" bson:"ppd_pic,omitempty"`
	Ppd_manager  *time.Time `json:"ppd_manager,omitempty" bson:"ppd_manager,omitempty"`
	Ppd_kadiv    *time.Time `json:"ppd_kadiv,omitempty" bson:"ppd_kadiv,omitempty"`
	Ppd_keuangan *time.Time `json:"ppd_keuangan,omitempty" bson:"ppd_keuangan,omitempty"`

	Jumlah_pencairan  int32      `json:"jumlah_pencairan,omitempty" bson:"jumlah_pencairan,omitempty"`
	Tanggal_pencairan *time.Time `json:"tanggal_pencairan,omitempty" bson:"tanggal_pencairan,omitempty"`
	Keterangan        string     `json:"keterangan,omitempty" bson:"keterangan,omitempty"`

	// Tambahan PPD
	Jenis_pengeluaran string     `json:"jenis_pengeluaran,omitempty" bson:"jenis_pengeluaran,omitempty"`
	Anggaran_biaya    string     `json:"anggaran_biaya,omitempty" bson:"anggaran_biaya,omitempty"`
	Referensi         string     `json:"referensi,omitempty" bson:"referensi,omitempty"`
	Tanggal_ppd       *time.Time `json:"tanggal_ppd,omitempty" bson:"tanggal_ppd,omitempty"`
	Bank_tertuju      string     `json:"bank_tertuju,omitempty" bson:"bank_tertuju,omitempty"`
	Nomor_ppd         string     `json:"nomor_ppd,omitempty" bson:"nomor_ppd,omitempty"`
}

type PendaftaranKSM struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal *time.Time         `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Judul_proposal   string             `json:"judul_proposal,omitempty" bson:"judul_proposal,omitempty"`
	Tujuan_proposal  string             `json:"tujuan_proposal,omitempty" bson:"tujuan_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Persetujuan        `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	Kategoris        Ksm                `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
	Verifikasi       *Verifikasi        `json:"verifikasi,omitempty" bson:"verifikasi,omitempty"`
	Upd              *Upd               `json:"upd,omitempty" bson:"upd,omitempty"`
	Komite           []Komite           `json:"komite,omitempty" bson:"komite,omitempty"`
	Ppd              []Ppd              `json:"ppd,omitempty" bson:"ppd,omitempty"`
}

type PendaftaranRBM struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal *time.Time         `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Judul_proposal   string             `json:"judul_proposal,omitempty" bson:"judul_proposal,omitempty"`
	Tujuan_proposal  string             `json:"tujuan_proposal,omitempty" bson:"tujuan_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Persetujuan        `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	Kategoris        Rbm                `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
	Verifikasi       *Verifikasi        `json:"verifikasi,omitempty" bson:"verifikasi,omitempty"`
	Upd              *Upd               `json:"upd,omitempty" bson:"upd,omitempty"`
	Komite           []Komite           `json:"komite,omitempty" bson:"komite,omitempty"`
	Ppd              []Ppd              `json:"ppd,omitempty" bson:"ppd,omitempty"`
}

type PendaftaranPAUD struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal *time.Time         `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Judul_proposal   string             `json:"judul_proposal,omitempty" bson:"judul_proposal,omitempty"`
	Tujuan_proposal  string             `json:"tujuan_proposal,omitempty" bson:"tujuan_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Persetujuan        `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	Kategoris        Paud               `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
	Verifikasi       *Verifikasi        `json:"verifikasi,omitempty" bson:"verifikasi,omitempty"`
	Upd              *Upd               `json:"upd,omitempty" bson:"upd,omitempty"`
	Komite           []Komite           `json:"komite,omitempty" bson:"komite,omitempty"`
	Ppd              []Ppd              `json:"ppd,omitempty" bson:"ppd,omitempty"`
}

type PendaftaranKAFALA struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal *time.Time         `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Judul_proposal   string             `json:"judul_proposal,omitempty" bson:"judul_proposal,omitempty"`
	Tujuan_proposal  string             `json:"tujuan_proposal,omitempty" bson:"tujuan_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Persetujuan        `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	Kategoris        Kafala             `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
	Verifikasi       *Verifikasi        `json:"verifikasi,omitempty" bson:"verifikasi,omitempty"`
	Upd              *Upd               `json:"upd,omitempty" bson:"upd,omitempty"`
	Komite           []Komite           `json:"komite,omitempty" bson:"komite,omitempty"`
	Ppd              []Ppd              `json:"ppd,omitempty" bson:"ppd,omitempty"`
}

type PendaftaranJSM struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal *time.Time         `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Judul_proposal   string             `json:"judul_proposal,omitempty" bson:"judul_proposal,omitempty"`
	Tujuan_proposal  string             `json:"tujuan_proposal,omitempty" bson:"tujuan_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Persetujuan        `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	Kategoris        Jsm                `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
	Verifikasi       *Verifikasi        `json:"verifikasi,omitempty" bson:"verifikasi,omitempty"`
	Upd              *Upd               `json:"upd,omitempty" bson:"upd,omitempty"`
	Komite           []Komite           `json:"komite,omitempty" bson:"komite,omitempty"`
	Ppd              []Ppd              `json:"ppd,omitempty" bson:"ppd,omitempty"`
}

type PendaftaranDZM struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal *time.Time         `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Judul_proposal   string             `json:"judul_proposal,omitempty" bson:"judul_proposal,omitempty"`
	Tujuan_proposal  string             `json:"tujuan_proposal,omitempty" bson:"tujuan_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Persetujuan        `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	Kategoris        Dzm                `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
	Verifikasi       *Verifikasi        `json:"verifikasi,omitempty" bson:"verifikasi,omitempty"`
	Upd              *Upd               `json:"upd,omitempty" bson:"upd,omitempty"`
	Komite           []Komite           `json:"komite,omitempty" bson:"komite,omitempty"`
	Ppd              []Ppd              `json:"ppd,omitempty" bson:"ppd,omitempty"`
}

type PendaftaranBSU struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal *time.Time         `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Judul_proposal   string             `json:"judul_proposal,omitempty" bson:"judul_proposal,omitempty"`
	Tujuan_proposal  string             `json:"tujuan_proposal,omitempty" bson:"tujuan_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Persetujuan        `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	Kategoris        Bsu                `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
	Verifikasi       *Verifikasi        `json:"verifikasi,omitempty" bson:"verifikasi,omitempty"`
	Upd              *Upd               `json:"upd,omitempty" bson:"upd,omitempty"`
	Komite           []Komite           `json:"komite,omitempty" bson:"komite,omitempty"`
	Ppd              []Ppd              `json:"ppd,omitempty" bson:"ppd,omitempty"`
}

type PendaftaranRescue struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal *time.Time         `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Judul_proposal   string             `json:"judul_proposal,omitempty" bson:"judul_proposal,omitempty"`
	Tujuan_proposal  string             `json:"tujuan_proposal,omitempty" bson:"tujuan_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Persetujuan        `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	Kategoris        Br                 `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
	Verifikasi       *Verifikasi        `json:"verifikasi,omitempty" bson:"verifikasi,omitempty"`
	Upd              *Upd               `json:"upd,omitempty" bson:"upd,omitempty"`
	Komite           []Komite           `json:"komite,omitempty" bson:"komite,omitempty"`
	Ppd              []Ppd              `json:"ppd,omitempty" bson:"ppd,omitempty"`
}

type PendaftaranBTM struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal *time.Time         `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Judul_proposal   string             `json:"judul_proposal,omitempty" bson:"judul_proposal,omitempty"`
	Tujuan_proposal  string             `json:"tujuan_proposal,omitempty" bson:"tujuan_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Persetujuan        `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	Kategoris        Btm                `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
	Verifikasi       *Verifikasi        `json:"verifikasi,omitempty" bson:"verifikasi,omitempty"`
	Upd              *Upd               `json:"upd,omitempty" bson:"upd,omitempty"`
	Komite           []Komite           `json:"komite,omitempty" bson:"komite,omitempty"`
	Ppd              []Ppd              `json:"ppd,omitempty" bson:"ppd,omitempty"`
}

type PendaftaranBSM struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal *time.Time         `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Judul_proposal   string             `json:"judul_proposal,omitempty" bson:"judul_proposal,omitempty"`
	Tujuan_proposal  string             `json:"tujuan_proposal,omitempty" bson:"tujuan_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Persetujuan        `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	Kategoris        Bsm                `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
	Verifikasi       *Verifikasi        `json:"verifikasi,omitempty" bson:"verifikasi,omitempty"`
	Upd              *Upd               `json:"upd,omitempty" bson:"upd,omitempty"`
	Komite           []Komite           `json:"komite,omitempty" bson:"komite,omitempty"`
	Ppd              []Ppd              `json:"ppd,omitempty" bson:"ppd,omitempty"`
}

type PendaftaranBCM struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal *time.Time         `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Judul_proposal   string             `json:"judul_proposal,omitempty" bson:"judul_proposal,omitempty"`
	Tujuan_proposal  string             `json:"tujuan_proposal,omitempty" bson:"tujuan_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Persetujuan        `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	Kategoris        Bcm                `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
	Verifikasi       *Verifikasi        `json:"verifikasi,omitempty" bson:"verifikasi,omitempty"`
	Upd              *Upd               `json:"upd,omitempty" bson:"upd,omitempty"`
	Komite           []Komite           `json:"komite,omitempty" bson:"komite,omitempty"`
	Ppd              []Ppd              `json:"ppd,omitempty" bson:"ppd,omitempty"`
}

type PendaftaranASM struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal *time.Time         `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Judul_proposal   string             `json:"judul_proposal,omitempty" bson:"judul_proposal,omitempty"`
	Tujuan_proposal  string             `json:"tujuan_proposal,omitempty" bson:"tujuan_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Persetujuan        `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	Kategoris        Asm                `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
	Verifikasi       *Verifikasi        `json:"verifikasi,omitempty" bson:"verifikasi,omitempty"`
	Upd              *Upd               `json:"upd,omitempty" bson:"upd,omitempty"`
	Komite           []Komite           `json:"komite,omitempty" bson:"komite,omitempty"`
	Ppd              []Ppd              `json:"ppd,omitempty" bson:"ppd,omitempty"`
}

type Verifikasi struct {
	Tanggal_verifikasi         *time.Time         `json:"tanggal_verifikasi,omitempty" bson:"tanggal_verifikasi,omitempty"`
	Tanggal_verifikasi_manager *time.Time         `json:"tanggal_verifikasi_manager,omitempty" bson:"tanggal_verifikasi_manager,omitempty"`
	Nama_pelaksana             string             `json:"nama_pelaksana,omitempty" bson:"nama_pelaksana,omitempty"`
	Jabatan_pelaksana          string             `json:"jabatan_pelaksana,omitempty" bson:"jabatan_pelaksana,omitempty"`
	Bentuk_bantuan             string             `json:"bentuk_bantuan,omitempty" bson:"bentuk_bantuan,omitempty"`
	Cara_verifikasi            []string           `json:"cara_verifikasi,omitempty" bson:"cara_verifikasi,omitempty"`
	Penerima_manfaat           []Penerima_manfaat `json:"penerima_manfaat,omitempty" bson:"penerima_manfaat,omitempty"`
	Pihak_konfirmasi           []Konfirmasi       `json:"pihak_konfirmasi,omitempty" bson:"pihak_konfirmasi,omitempty"`
	Hasil_verifikasi           Hasil_verif        `json:"hasil_verifikasi,omitempty" bson:"hasil_verifikasi,omitempty"`
}

type Konfirmasi struct {
	Nama    string   `json:"nama,omitempty" bson:"nama,omitempty"`
	Lembaga string   `json:"lembaga,omitempty" bson:"lembaga,omitempty"`
	Jabatan string   `json:"jabatan,omitempty" bson:"jabatan,omitempty"`
	Telepon string   `json:"telepon,omitempty" bson:"telepon,omitempty"`
	Hasil   []string `json:"hasil,omitempty" bson:"hasil,omitempty"`
}

type Hasil_verif struct {
	Kelengkapan_adm  string `json:"kelengkapan_adm,omitempty" bson:"kelengkapan_adm,omitempty"`
	Direkomendasikan string `json:"direkomendasikan,omitempty" bson:"direkomendasikan,omitempty"`
	Dokumentasi      string `json:"dokumentasi,omitempty" bson:"dokumentasi,omitempty"`
}

type Penerima_manfaat struct {
	Nama       string `json:"nama,omitempty" bson:"nama,omitempty"`
	Usia       string `json:"usia,omitempty" bson:"usia,omitempty"`
	Tanggungan string `json:"tanggungan,omitempty" bson:"tanggungan,omitempty"`
	Alamat     string `json:"alamat,omitempty" bson:"alamat,omitempty"`
	Telepon    string `json:"telepon,omitempty" bson:"telepon,omitempty"`
}

type Upd struct {
	Tujuan             []string  `json:"tujuan,omitempty" bson:"tujuan,omitempty"`
	Latar_belakang     []string  `json:"latar_belakang,omitempty" bson:"latar_belakang,omitempty"`
	Analisis_kelayakan []string  `json:"analisis_kelayakan,omitempty" bson:"analisis_kelayakan,omitempty"`
	Program_penyaluran Program_p `json:"program_penyaluran,omitempty" bson:"program_penyaluran,omitempty"`
	Rekomendasi        []string  `json:"rekomendasi,omitempty" bson:"rekomendasi,omitempty"`
	Url                string    `json:"url,omitempty" bson:"url,omitempty"`
}

type Program_p struct {
	Pelaksana_teknis string `json:"pelaksana_teknis,omitempty" bson:"pelaksana_teknis,omitempty"`
	Alur_biaya       string `json:"alur_biaya,omitempty" bson:"alur_biaya,omitempty"`
	Penanggung_jawab string `json:"penanggung_jawab,omitempty" bson:"penanggung_jawab,omitempty"`
}

type Komite struct {
	User        Users      `json:"user,omitempty" bson:"user,omitempty"`
	Status      int32      `json:"status" bson:"status,omitempty"`
	Catatan     string     `json:"catatan" bson:"catatan,omitempty"`
	LevelKomite int32      `json:"levelKomite" bson:"levelkomite,omitempty"`
	Tanggal     *time.Time `json:"tanggal,omitempty" bson:"tanggal,omitempty"`
}

type Ppd struct {
	User    Users      `json:"user,omitempty" bson:"user,omitempty"`
	Tanggal *time.Time `json:"tanggal,omitempty" bson:"tanggal,omitempty"`
}
