package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

// Muztahik Struct
type Muztahik struct {
	Id             primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Nama           string             `json:"nama,omitempty" bson:"nama,omitempty"`
	Nik_no_yayasan string             `json:"nik,omitempty" bson:"nik_no_yayasan,omitempty"`
	Alamat         string             `json:"alamat,omitempty" bson:"alamat,omitempty"`
	Kecamatan      string             `json:"kecamatan,omitempty" bson:"kecamatan,omitempty"`
	Kabupaten      string             `json:"kabkot,omitempty" bson:"kabupaten/kota,omitempty"`
	Provinsi       string             `json:"provinsi,omitempty" bson:"provinsi,omitempty"`
	No_hp          string             `json:"noHp,omitempty" bson:"no_hp,omitempty"`
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
	Proposal                   int32     `json:"Proposal,omitempty" bson:"proposal,omitempty"`
	Disposisi_pic              string    `json:"disposisi_pic,omitempty" bson:"disposisi_pic,omitempty"`
	Perihal                    string    `json:"perihal,omitempty" bson:"perihal,omitempty"`
	Tanggal_disposisi          time.Time `json:"tanggal_disposisi,omitempty" bson:"tanggal_disposisi ,omitempty"`
	Verifikator_nama           string    `json:"verifikator_nama,omitempty" bson:"verifikator_nama,omitempty"`
	Manager_nama               string    `json:"manager_nama,omitempty" bson:"manager_nama,omitempty"`
	Pic_nama                   string    `json:"pic_nama,omitempty" bson:"pic_nama,omitempty"`
	Kadiv_nama                 string    `json:"kadiv_nama,omitempty" bson:"kadiv_nama,omitempty"`
	Verifikator_tanggal        time.Time `json:"verifikator_tanggal,omitempty" bson:"verifikator_tanggal,omitempty"`
	Manager_tanggal            time.Time `json:"manager_tanggal,omitempty" bson:"manager_tanggal,omitempty"`
	Kadiv_tanggal              time.Time `json:"kadiv_tanggal,omitempty" bson:"kadiv_tanggal,omitempty"`
	Pic_tanggal                time.Time `json:"pic_tanggal,omitempty" bson:"pic_tanggal,omitempty"`
	Keterangan_pic             string    `json:"keterangan_pic,omitempty" bson:"keterangan_pic,omitempty"`
	Keterangan_manager         string    `json:"keterangan_manager,omitempty" bson:"keterangan_manager,omitempty"`
	Keterangan_kadiv           string    `json:"keterangan_kadiv,omitempty" bson:"keterangan_kadiv,omitempty"`
	Status_persetujuan_pic     int32     `json:"status_persetujuan_pic,omitempty" bson:"status_persetujuan_pic,omitempty"`
	Status_persetujuan_manager int32     `json:"status_persetujuan_manager,omitempty" bson:"status_persetujuan_manager,omitempty"`
	Status_persetujuan_kadiv   int32     `json:"status_persetujuan_kadiv,omitempty" bson:"status_persetujuan_kadiv,omitempty"`
	Status_persetujuan         int32     `json:"status_persetujuan,omitempty" bson:"status_persetujuan,omitempty"`
	Tanggal_persetujuan        time.Time `json:"tanggal_persetujuan,omitempty" bson:"tanggal_persetujuan,omitempty"`
	Kategori_program           int32     `json:"kategori_program,omitempty" bson:"kategori_program,omitempty"`
	Sumber_dana                string    `json:"sumber_dana,omitempty" bson:"sumber_dana,omitempty"`
	Ppd_pic                    time.Time `json:"ppd_pic,omitempty" bson:"ppd_pic,omitempty"`
	Ppd_manager                time.Time `json:"ppd_manager,omitempty" bson:"ppd_manager,omitempty"`
	Ppd_kadiv                  time.Time `json:"ppd_kadiv,omitempty" bson:"ppd_kadiv,omitempty"`
	Ppd_keuangan               time.Time `json:"ppd_keuangan,omitempty" bson:"ppd_keuangan,omitempty"`
	Jumlah_pencairan           int32     `json:"jumlah_pencairan,omitempty" bson:"jumlah_pencairan,omitempty"`
	Tanggal_pencairan          time.Time `json:"tanggal_pencairan,omitempty" bson:"tanggal_pencairan,omitempty"`
	Keterangan                 string    `json:"keterangan,omitempty" bson:"keterangan,omitempty"`
}

type PendaftaranKSM struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal time.Time          `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Asnaf            int32              `json:"asnaf,omitempty" bson:"asnaf,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Persetujuan        `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	Kategoris        Ksm                `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
}

type PendaftaranRBM struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal time.Time          `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Asnaf            int32              `json:"asnaf,omitempty" bson:"asnaf,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Persetujuan        `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	Kategoris        Rbm                `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
}

type PendaftaranPAUD struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal time.Time          `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Asnaf            int32              `json:"asnaf,omitempty" bson:"asnaf,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Persetujuan        `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	Kategoris        Paud               `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
}

type PendaftaranKAFALA struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal time.Time          `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Asnaf            int32              `json:"asnaf,omitempty" bson:"asnaf,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Persetujuan        `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	Kategoris        Kafala             `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
}

type PendaftaranJSM struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal time.Time          `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Asnaf            int32              `json:"asnaf,omitempty" bson:"asnaf,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Persetujuan        `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	Kategoris        Jsm                `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
}

type PendaftaranDZM struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal time.Time          `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Asnaf            int32              `json:"asnaf,omitempty" bson:"asnaf,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Persetujuan        `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	Kategoris        Dzm                `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
}

type PendaftaranBSU struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal time.Time          `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Asnaf            int32              `json:"asnaf,omitempty" bson:"asnaf,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Persetujuan        `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	Kategoris        Bsu                `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
}

type PendaftaranRescue struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal time.Time          `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Asnaf            int32              `json:"asnaf,omitempty" bson:"asnaf,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Br                 `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
}

type PendaftaranBTM struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal time.Time          `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Asnaf            int32              `json:"asnaf,omitempty" bson:"asnaf,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Persetujuan        `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	Kategoris        Btm                `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
}

type PendaftaranBSM struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal time.Time          `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Asnaf            int32              `json:"asnaf,omitempty" bson:"asnaf,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Persetujuan        `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	Kategoris        Bsm                `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
}

type PendaftaranBCM struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal time.Time          `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Asnaf            int32              `json:"asnaf,omitempty" bson:"asnaf,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Persetujuan        `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	Kategoris        Bcm                `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
}

type PendaftaranASM struct {
	Id               primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Tanggal_proposal time.Time          `json:"tanggalProposal,omitempty" bson:"tanggal_proposal,omitempty"`
	Kategori_program int32              `json:"kategori,omitempty" bson:"kategori,omitempty"`
	Asnaf            int32              `json:"asnaf,omitempty" bson:"asnaf,omitempty"`
	Muztahik         primitive.ObjectID `json:"muztahik_id,omitempty" bson:"muztahik_id,omitempty"`
	Persetujuan      Persetujuan        `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	Kategoris        Asm                `json:"kategoris,omitempty" bson:"kategoris,omitempty"`
	Muztahiks        Muztahik           `json:"muztahiks,omitempty" bson:"muztahiks,omitempty"`
}
