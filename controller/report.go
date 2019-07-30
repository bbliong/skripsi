package controller

import (
	"context"
	"fmt"
	"strconv"
	"strings"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"

	"github.com/bbliong/sim-bmm/models"

	"github.com/360EntSecGroup-Skylar/excelize"
	"github.com/bbliong/sim-bmm/config"
	"github.com/gin-gonic/gin"
)

func init() {
	// // Mengambil Koneksi
	db = config.Connect()
}

// CreatePendaftaran fungsi untuk membuat data Pendaftaran
func ManageProposal(c *gin.Context) {

	/* ---------------------------- Start of GET Data ---------------------------*/
	var (
		Kat struct {
			Kategori int32 `json:"kategori,omitempty" bson:"kategori,omitempty"`
		}
	)

	collection := db.Collection("pendaftaran")
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)
	claims := c.MustGet("decoded").(*models.Claims)
	filter := FilterRole(claims.Role)

	//get data taro di cursor
	cursor, err := collection.Find(ctx, filter)
	if err != nil {
		fmt.Println(err)
	}
	defer cursor.Close(ctx)

	/* ---------------------------- End of GET Data ---------------------------*/

	/* ---------------------------- Start of Setup Excel ---------------------------*/

	f, err := excelize.OpenFile("./public/report/FORMAT.xlsx")
	if err != nil {
		fmt.Println(err)

	}

	monitoringProposal := 5
	//DPPIndex, KSMIndex, RBMIndex, PAUDIndex := 1, 0, 0, 0
	DPPIndex, KSMIndex, RBMIndex, PAUDIndex, KAFALAIndex, JSMIndex, DZMIndex, BSUIndex, BRIndex, BTMIndex, BSMIndex, BCMIndex, ASMIndex := 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	DPP := func() int {
		return monitoringProposal + 5 + DPPIndex
	}
	KSM := func() int {
		return DPP() + 6 + KSMIndex
	}
	RBM := func() int {
		return KSM() + 6 + RBMIndex
	}
	PAUD := func() int {
		return RBM() + 6 + PAUDIndex
	}
	KAFALA := func() int {
		return PAUD() + 6 + KAFALAIndex
	}
	JSM := func() int {
		return KAFALA() + 6 + JSMIndex
	}
	DZM := func() int {
		return JSM() + 6 + DZMIndex
	}
	BSU := func() int {
		return DZM() + 6 + BSUIndex
	}
	BR := func() int {
		return BSU() + 6 + BRIndex
	}
	BTM := func() int {
		return BR() + 6 + BTMIndex
	}
	BSM := func() int {
		return BTM() + 6 + BSMIndex
	}
	BCM := func() int {
		return BSM() + 6 + BCMIndex
	}
	ASM := func() int {
		return BCM() + 6 + ASMIndex
	}
	var i int32 = 1

	// Loping data cursor
	for cursor.Next(ctx) {
		cursor.Decode(&Kat)

		if err != nil {
			fmt.Println(err)
		}
		if Kat.Kategori == 0 {
			// If the structure of the body is wrong, return an HTTP error
			fmt.Println(err)
		} else {
			switch Kat.Kategori {
			// Kategori KSM
			case 1:
				Pendaftaran := models.PendaftaranKSM{}
				cursor.Decode(&Pendaftaran)
				_ = f.InsertRow("Sheet1", monitoringProposal+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(monitoringProposal), i)
				if Pendaftaran.Persetujuan.Proposal == 1 {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Ya")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Tidak")
				} else {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Tidak")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Ya")
				}
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Disposisi_pic)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(monitoringProposal), Pendaftaran.Tanggal_proposal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Nama)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Alamat)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Perihal)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_disposisi.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_nama)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "O"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_nama)
				f.SetCellValue("Sheet1", "P"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_tanggal.Format("02-Jan-2006"))
				if Pendaftaran.Persetujuan.Status_persetujuan == 1 {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Disetujui")
				} else {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Tidak disetujui")
				}
				f.SetCellValue("Sheet1", "R"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_persetujuan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "S"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "U"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue("Sheet1", "V"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_pic.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "W"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_manager.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "X"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_kadiv.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Y"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_keuangan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Z"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_pencairan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "AA"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Jumlah_pencairan)
				f.SetCellValue("Sheet1", "AB"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Keterangan)

				//fmt.Println(KSM)
				KSMIndex++
				_ = f.InsertRow("Sheet1", KSM()+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(KSM()), KSMIndex)

				if Pendaftaran.Kategoris.Kategori == "1" {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(KSM()), "Ya")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(KSM()), "Tidak")
				} else {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(KSM()), "Tidak")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(KSM()), "Ya")
				}
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(KSM()), Pendaftaran.Muztahiks.Nama)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(KSM()), Pendaftaran.Muztahiks.Nik_no_yayasan)
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(KSM()), Pendaftaran.Muztahiks.Alamat)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(KSM()), Pendaftaran.Muztahiks.Kecamatan)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(KSM()), Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(KSM()), Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(KSM()), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(KSM()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(KSM()), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(KSM()), Pendaftaran.Kategoris.Jumlah_bantuan)

			// Kategori RBM
			case 2:
				Pendaftaran := models.PendaftaranRBM{}
				cursor.Decode(&Pendaftaran)
				_ = f.InsertRow("Sheet1", monitoringProposal+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(monitoringProposal), i)
				if Pendaftaran.Persetujuan.Proposal == 1 {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Ya")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Tidak")
				} else {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Tidak")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Ya")
				}
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Disposisi_pic)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(monitoringProposal), Pendaftaran.Tanggal_proposal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Nama)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Alamat)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Perihal)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_disposisi.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_nama)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "O"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_nama)
				f.SetCellValue("Sheet1", "P"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_tanggal.Format("02-Jan-2006"))
				if Pendaftaran.Persetujuan.Status_persetujuan == 1 {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Disetujui")
				} else {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Tidak disetujui")
				}
				f.SetCellValue("Sheet1", "R"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_persetujuan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "S"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "U"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue("Sheet1", "V"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_pic.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "W"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_manager.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "X"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_kadiv.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Y"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_keuangan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Z"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_pencairan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "AA"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Jumlah_pencairan)
				f.SetCellValue("Sheet1", "AB"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Keterangan)

				RBMIndex++
				_ = f.InsertRow("Sheet1", RBM()+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(RBM()), RBMIndex)

				if Pendaftaran.Kategoris.Kategori == "1" {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(RBM()), "Ya")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(RBM()), "Tidak")
				} else {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(RBM()), "Tidak")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(RBM()), "Ya")
				}
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(RBM()), Pendaftaran.Muztahiks.Nama)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(RBM()), Pendaftaran.Muztahiks.Nik_no_yayasan)
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(RBM()), Pendaftaran.Muztahiks.Alamat)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(RBM()), Pendaftaran.Muztahiks.Kecamatan)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(RBM()), Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(RBM()), Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(RBM()), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(RBM()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(RBM()), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(RBM()), Pendaftaran.Kategoris.Jumlah_muztahik)
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(RBM()), Pendaftaran.Kategoris.Jumlah_bantuan)

			// Kategori PAUD
			case 3:
				Pendaftaran := models.PendaftaranPAUD{}
				cursor.Decode(&Pendaftaran)
				_ = f.InsertRow("Sheet1", monitoringProposal+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(monitoringProposal), i)
				if Pendaftaran.Persetujuan.Proposal == 1 {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Ya")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Tidak")
				} else {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Tidak")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Ya")
				}
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Disposisi_pic)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(monitoringProposal), Pendaftaran.Tanggal_proposal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Nama)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Alamat)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Perihal)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_disposisi.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_nama)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "O"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_nama)
				f.SetCellValue("Sheet1", "P"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_tanggal.Format("02-Jan-2006"))
				if Pendaftaran.Persetujuan.Status_persetujuan == 1 {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Disetujui")
				} else {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Tidak disetujui")
				}
				f.SetCellValue("Sheet1", "R"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_persetujuan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "S"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "U"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue("Sheet1", "V"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_pic.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "W"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_manager.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "X"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_kadiv.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Y"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_keuangan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Z"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_pencairan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "AA"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Jumlah_pencairan)
				f.SetCellValue("Sheet1", "AB"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Keterangan)

				//fmt.Println(KSM)
				PAUDIndex++
				_ = f.InsertRow("Sheet1", PAUD()+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(PAUD()), PAUDIndex)
				fmt.Println(KSM(), "index PAUD")

				if Pendaftaran.Kategoris.Kategori == "1" {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(PAUD()), "Ya")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(PAUD()), "Tidak")
				} else {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(PAUD()), "Tidak")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(PAUD()), "Ya")
				}
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(PAUD()), Pendaftaran.Muztahiks.Nama)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(PAUD()), Pendaftaran.Muztahiks.Nik_no_yayasan)
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(PAUD()), Pendaftaran.Muztahiks.Alamat)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(PAUD()), Pendaftaran.Muztahiks.Kecamatan)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(PAUD()), Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(PAUD()), Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(PAUD()), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(PAUD()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(PAUD()), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(PAUD()), Pendaftaran.Kategoris.Cabang)
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(PAUD()), Pendaftaran.Kategoris.Jumlah_bantuan)
			// Kategori KAFALA
			case 4:
				Pendaftaran := models.PendaftaranKAFALA{}
				cursor.Decode(&Pendaftaran)
				_ = f.InsertRow("Sheet1", monitoringProposal+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(monitoringProposal), i)
				if Pendaftaran.Persetujuan.Proposal == 1 {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Ya")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Tidak")
				} else {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Tidak")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Ya")
				}
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Disposisi_pic)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(monitoringProposal), Pendaftaran.Tanggal_proposal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Nama)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Alamat)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Perihal)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_disposisi.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_nama)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "O"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_nama)
				f.SetCellValue("Sheet1", "P"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_tanggal.Format("02-Jan-2006"))
				if Pendaftaran.Persetujuan.Status_persetujuan == 1 {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Disetujui")
				} else {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Tidak disetujui")
				}
				f.SetCellValue("Sheet1", "R"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_persetujuan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "S"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "U"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue("Sheet1", "V"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_pic.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "W"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_manager.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "X"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_kadiv.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Y"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_keuangan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Z"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_pencairan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "AA"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Jumlah_pencairan)
				f.SetCellValue("Sheet1", "AB"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Keterangan)

				//fmt.Println(KSM)
				KAFALAIndex++
				_ = f.InsertRow("Sheet1", KAFALA()+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(KAFALA()), KAFALAIndex)
				fmt.Println(KAFALA(), "index KAFALA")
				f.SetCellValue("Sheet1", "B"+strconv.Itoa(KAFALA()), Pendaftaran.Muztahiks.Nama)
				f.SetCellValue("Sheet1", "C"+strconv.Itoa(KAFALA()), Pendaftaran.Kategoris.Ui_id)
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(KAFALA()), Pendaftaran.Kategoris.Pengasuh)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(KAFALA()), Pendaftaran.Muztahiks.Nik_no_yayasan)
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(KAFALA()), Pendaftaran.Kategoris.Tempat)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(KAFALA()), Pendaftaran.Kategoris.Tanggal_lahir)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(KAFALA()), Pendaftaran.Muztahiks.Alamat)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(KAFALA()), Pendaftaran.Muztahiks.Kecamatan)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(KAFALA()), Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(KAFALA()), Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(KAFALA()), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(KAFALA()), Pendaftaran.Kategoris.Mitra)
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(KAFALA()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "O"+strconv.Itoa(KAFALA()), Pendaftaran.Kategoris.Ytm)
				f.SetCellValue("Sheet1", "P"+strconv.Itoa(KAFALA()), Pendaftaran.Kategoris.Kelas)
				f.SetCellValue("Sheet1", "Q"+strconv.Itoa(KAFALA()), Pendaftaran.Kategoris.Jumlah_hafalan)
				f.SetCellValue("Sheet1", "R"+strconv.Itoa(KAFALA()), Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue("Sheet1", "S"+strconv.Itoa(KAFALA()), Pendaftaran.Kategoris.Jenis_dana)

			// Kategori JSM
			case 5:
				Pendaftaran := models.PendaftaranJSM{}
				cursor.Decode(&Pendaftaran)
				_ = f.InsertRow("Sheet1", monitoringProposal+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(monitoringProposal), i)
				if Pendaftaran.Persetujuan.Proposal == 1 {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Ya")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Tidak")
				} else {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Tidak")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Ya")
				}
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Disposisi_pic)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(monitoringProposal), Pendaftaran.Tanggal_proposal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Nama)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Alamat)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Perihal)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_disposisi.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_nama)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "O"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_nama)
				f.SetCellValue("Sheet1", "P"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_tanggal.Format("02-Jan-2006"))
				if Pendaftaran.Persetujuan.Status_persetujuan == 1 {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Disetujui")
				} else {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Tidak disetujui")
				}
				f.SetCellValue("Sheet1", "R"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_persetujuan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "S"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "U"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue("Sheet1", "V"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_pic.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "W"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_manager.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "X"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_kadiv.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Y"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_keuangan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Z"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_pencairan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "AA"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Jumlah_pencairan)
				f.SetCellValue("Sheet1", "AB"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Keterangan)

				JSMIndex++
				_ = f.InsertRow("Sheet1", JSM()+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(JSM()), JSMIndex)
				fmt.Println(KSM(), "index JSM")

				if Pendaftaran.Kategoris.Kategori == "1" {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(JSM()), "Ya")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(JSM()), "Tidak")
				} else {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(JSM()), "Tidak")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(JSM()), "Ya")
				}
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(JSM()), Pendaftaran.Muztahiks.Nama)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(JSM()), Pendaftaran.Muztahiks.Nik_no_yayasan)
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(JSM()), Pendaftaran.Muztahiks.Alamat)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(JSM()), Pendaftaran.Muztahiks.Kecamatan)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(JSM()), Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(JSM()), Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(JSM()), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(JSM()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(JSM()), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(JSM()), Pendaftaran.Kategoris.Afiliasi)
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(JSM()), Pendaftaran.Kategoris.Non_afiliasi)
				f.SetCellValue("Sheet1", "O"+strconv.Itoa(JSM()), Pendaftaran.Kategoris.Bidang)
				f.SetCellValue("Sheet1", "P"+strconv.Itoa(JSM()), Pendaftaran.Kategoris.Jumlah_bantuan)
			// Kategori DZM
			case 6:
				Pendaftaran := models.PendaftaranDZM{}
				cursor.Decode(&Pendaftaran)
				_ = f.InsertRow("Sheet1", monitoringProposal+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(monitoringProposal), i)
				if Pendaftaran.Persetujuan.Proposal == 1 {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Ya")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Tidak")
				} else {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Tidak")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Ya")
				}
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Disposisi_pic)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(monitoringProposal), Pendaftaran.Tanggal_proposal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Nama)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Alamat)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Perihal)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_disposisi.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_nama)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "O"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_nama)
				f.SetCellValue("Sheet1", "P"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_tanggal.Format("02-Jan-2006"))
				if Pendaftaran.Persetujuan.Status_persetujuan == 1 {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Disetujui")
				} else {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Tidak disetujui")
				}
				f.SetCellValue("Sheet1", "R"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_persetujuan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "S"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "U"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue("Sheet1", "V"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_pic.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "W"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_manager.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "X"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_kadiv.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Y"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_keuangan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Z"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_pencairan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "AA"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Jumlah_pencairan)
				f.SetCellValue("Sheet1", "AB"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Keterangan)

				DZMIndex++
				_ = f.InsertRow("Sheet1", DZM()+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(DZM()), DZMIndex)
				fmt.Println(KSM(), "index DZM")

				if Pendaftaran.Kategoris.Kategori == "1" {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(DZM()), "Ya")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(DZM()), "Tidak")
				} else {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(DZM()), "Tidak")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(DZM()), "Ya")
				}
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(DZM()), Pendaftaran.Muztahiks.Nik_no_yayasan)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(DZM()), Pendaftaran.Muztahiks.Alamat)
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(DZM()), Pendaftaran.Muztahiks.Kecamatan)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(DZM()), Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(DZM()), Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(DZM()), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(DZM()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(DZM()), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(DZM()), Pendaftaran.Kategoris.Jenis_infrastruktur)
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(DZM()), Pendaftaran.Kategoris.Volume)
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(DZM()), Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue("Sheet1", "O"+strconv.Itoa(DZM()), Pendaftaran.Kategoris.Jumlah_penduduk_desa)
			// Kategori BSU
			case 7:
				Pendaftaran := models.PendaftaranBSU{}
				cursor.Decode(&Pendaftaran)
				_ = f.InsertRow("Sheet1", monitoringProposal+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(monitoringProposal), i)
				if Pendaftaran.Persetujuan.Proposal == 1 {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Ya")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Tidak")
				} else {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Tidak")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Ya")
				}
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Disposisi_pic)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(monitoringProposal), Pendaftaran.Tanggal_proposal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Nama)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Alamat)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Perihal)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_disposisi.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_nama)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "O"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_nama)
				f.SetCellValue("Sheet1", "P"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_tanggal.Format("02-Jan-2006"))
				if Pendaftaran.Persetujuan.Status_persetujuan == 1 {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Disetujui")
				} else {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Tidak disetujui")
				}
				f.SetCellValue("Sheet1", "R"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_persetujuan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "S"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "U"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue("Sheet1", "V"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_pic.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "W"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_manager.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "X"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_kadiv.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Y"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_keuangan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Z"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_pencairan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "AA"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Jumlah_pencairan)
				f.SetCellValue("Sheet1", "AB"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Keterangan)

				//fmt.Println(BSU)
				BSUIndex++
				_ = f.InsertRow("Sheet1", BSU()+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(BSU()), BSUIndex)

				if Pendaftaran.Kategoris.Kategori == "1" {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(BSU()), "Ya")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(BSU()), "Tidak")
				} else {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(BSU()), "Tidak")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(BSU()), "Ya")
				}
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(BSU()), Pendaftaran.Muztahiks.Nama)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(BSU()), Pendaftaran.Muztahiks.Nik_no_yayasan)
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(BSU()), Pendaftaran.Muztahiks.Alamat)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(BSU()), Pendaftaran.Muztahiks.Kecamatan)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(BSU()), Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(BSU()), Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(BSU()), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(BSU()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(BSU()), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(BSU()), Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(BSU()), Pendaftaran.Kategoris.Jenis_dana)
				f.SetCellValue("Sheet1", "O"+strconv.Itoa(BSU()), Pendaftaran.Kategoris.Jumlah_muztahik)
				f.SetCellValue("Sheet1", "P"+strconv.Itoa(BSU()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "Q"+strconv.Itoa(BSU()), Pendaftaran.Kategoris.Pendapatan_perhari)
				f.SetCellValue("Sheet1", "R"+strconv.Itoa(BSU()), Pendaftaran.Kategoris.Jenis_produk)
				f.SetCellValue("Sheet1", "S"+strconv.Itoa(BSU()), Pendaftaran.Kategoris.Aset)

			// Kategori Rescue
			case 8:
				Pendaftaran := models.PendaftaranRescue{}
				cursor.Decode(&Pendaftaran)
				_ = f.InsertRow("Sheet1", monitoringProposal+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(monitoringProposal), i)
				if Pendaftaran.Persetujuan.Proposal == 1 {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Ya")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Tidak")
				} else {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Tidak")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Ya")
				}
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Disposisi_pic)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(monitoringProposal), Pendaftaran.Tanggal_proposal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Nama)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Alamat)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Perihal)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_disposisi.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_nama)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "O"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_nama)
				f.SetCellValue("Sheet1", "P"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_tanggal.Format("02-Jan-2006"))
				if Pendaftaran.Persetujuan.Status_persetujuan == 1 {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Disetujui")
				} else {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Tidak disetujui")
				}
				f.SetCellValue("Sheet1", "R"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_persetujuan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "S"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "U"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue("Sheet1", "V"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_pic.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "W"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_manager.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "X"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_kadiv.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Y"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_keuangan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Z"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_pencairan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "AA"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Jumlah_pencairan)
				f.SetCellValue("Sheet1", "AB"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Keterangan)

				//fmt.Println(BR)
				BRIndex++
				_ = f.InsertRow("Sheet1", BR()+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(BR()), BRIndex)

				if Pendaftaran.Kategoris.Kategori == "1" {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(BR()), "Ya")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(BR()), "Tidak")
				} else {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(BR()), "Tidak")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(BR()), "Ya")
				}
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(BR()), Pendaftaran.Muztahiks.Nama)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(BR()), Pendaftaran.Muztahiks.Nik_no_yayasan)
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(BR()), Pendaftaran.Muztahiks.Alamat)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(BR()), Pendaftaran.Muztahiks.Kecamatan)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(BR()), Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(BR()), Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(BR()), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(BR()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(BR()), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(BR()), Pendaftaran.Kategoris.Skala_bencana)
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(BR()), Pendaftaran.Kategoris.Tanggal_respon_bencana)
				f.SetCellValue("Sheet1", "O"+strconv.Itoa(BR()), Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue("Sheet1", "P"+strconv.Itoa(BR()), Pendaftaran.Kategoris.Tahapan_bencana)

			// Kategori BTM
			case 9:
				Pendaftaran := models.PendaftaranBTM{}
				cursor.Decode(&Pendaftaran)
				_ = f.InsertRow("Sheet1", monitoringProposal+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(monitoringProposal), i)
				if Pendaftaran.Persetujuan.Proposal == 1 {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Ya")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Tidak")
				} else {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Tidak")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Ya")
				}
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Disposisi_pic)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(monitoringProposal), Pendaftaran.Tanggal_proposal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Nama)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Alamat)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Perihal)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_disposisi.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_nama)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "O"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_nama)
				f.SetCellValue("Sheet1", "P"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_tanggal.Format("02-Jan-2006"))
				if Pendaftaran.Persetujuan.Status_persetujuan == 1 {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Disetujui")
				} else {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Tidak disetujui")
				}
				f.SetCellValue("Sheet1", "R"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_persetujuan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "S"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "U"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue("Sheet1", "V"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_pic.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "W"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_manager.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "X"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_kadiv.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Y"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_keuangan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Z"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_pencairan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "AA"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Jumlah_pencairan)
				f.SetCellValue("Sheet1", "AB"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Keterangan)

				//fmt.Println(KSM)
				BTMIndex++
				_ = f.InsertRow("Sheet1", BTM()+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(BTM()), BTMIndex)
				fmt.Println(BTM(), "index BTM")
				f.SetCellValue("Sheet1", "B"+strconv.Itoa(BTM()), Pendaftaran.Muztahiks.Nama)
				f.SetCellValue("Sheet1", "C"+strconv.Itoa(BTM()), Pendaftaran.Muztahiks.Nik_no_yayasan)
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(BTM()), Pendaftaran.Kategoris.Tempat)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(BTM()), Pendaftaran.Kategoris.Tanggal_lahir)
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(BTM()), Pendaftaran.Kategoris.Alamat)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(BTM()), Pendaftaran.Muztahiks.Kecamatan)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(BTM()), Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(BTM()), Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(BTM()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(BTM()), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(BTM()), Pendaftaran.Kategoris.Mitra)
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(BTM()), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(BTM()), Pendaftaran.Kategoris.Kelas)
				f.SetCellValue("Sheet1", "O"+strconv.Itoa(BTM()), Pendaftaran.Kategoris.Jumlah_hafalan)
				f.SetCellValue("Sheet1", "P"+strconv.Itoa(BTM()), Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue("Sheet1", "Q"+strconv.Itoa(BTM()), Pendaftaran.Kategoris.Jenis_dana)
			// Kategori BSM
			case 10:
				Pendaftaran := models.PendaftaranBSM{}
				cursor.Decode(&Pendaftaran)
				_ = f.InsertRow("Sheet1", monitoringProposal+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(monitoringProposal), i)
				if Pendaftaran.Persetujuan.Proposal == 1 {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Ya")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Tidak")
				} else {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Tidak")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Ya")
				}
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Disposisi_pic)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(monitoringProposal), Pendaftaran.Tanggal_proposal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Nama)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Alamat)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Perihal)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_disposisi.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_nama)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "O"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_nama)
				f.SetCellValue("Sheet1", "P"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_tanggal.Format("02-Jan-2006"))
				if Pendaftaran.Persetujuan.Status_persetujuan == 1 {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Disetujui")
				} else {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Tidak disetujui")
				}
				f.SetCellValue("Sheet1", "R"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_persetujuan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "S"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "U"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue("Sheet1", "V"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_pic.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "W"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_manager.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "X"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_kadiv.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Y"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_keuangan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Z"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_pencairan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "AA"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Jumlah_pencairan)
				f.SetCellValue("Sheet1", "AB"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Keterangan)

				//fmt.Println(BSM)
				BSMIndex++
				_ = f.InsertRow("Sheet1", BSM()+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(BSM()), BSMIndex)

				if Pendaftaran.Kategoris.Kategori == "1" {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(BSM()), "Ya")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(BSM()), "Tidak")
				} else {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(BSM()), "Tidak")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(BSM()), "Ya")
				}
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(BSM()), Pendaftaran.Muztahiks.Nama)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(BSM()), Pendaftaran.Muztahiks.Nik_no_yayasan)
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(BSM()), Pendaftaran.Kategoris.Tempat)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(BSM()), Pendaftaran.Kategoris.Tanggal_lahir)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(BSM()), Pendaftaran.Kategoris.Alamat)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(BSM()), Pendaftaran.Muztahiks.Kecamatan)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(BSM()), Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(BSM()), Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(BSM()), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(BSM()), Pendaftaran.Kategoris.Semester)
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(BSM()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "O"+strconv.Itoa(BSM()), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "P"+strconv.Itoa(BSM()), Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue("Sheet1", "Q"+strconv.Itoa(BSM()), Pendaftaran.Kategoris.Jenis_dana)
				f.SetCellValue("Sheet1", "R"+strconv.Itoa(BSM()), Pendaftaran.Kategoris.Mitra)
				f.SetCellValue("Sheet1", "S"+strconv.Itoa(BSM()), Pendaftaran.Kategoris.Karya)
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(BSM()), Pendaftaran.Kategoris.Jumlah_hafalan)
			// Kategori BCM
			case 11:
				Pendaftaran := models.PendaftaranBCM{}
				cursor.Decode(&Pendaftaran)
				_ = f.InsertRow("Sheet1", monitoringProposal+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(monitoringProposal), i)
				if Pendaftaran.Persetujuan.Proposal == 1 {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Ya")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Tidak")
				} else {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Tidak")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Ya")
				}
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Disposisi_pic)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(monitoringProposal), Pendaftaran.Tanggal_proposal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Nama)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Alamat)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Perihal)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_disposisi.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_nama)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "O"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_nama)
				f.SetCellValue("Sheet1", "P"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_tanggal.Format("02-Jan-2006"))
				if Pendaftaran.Persetujuan.Status_persetujuan == 1 {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Disetujui")
				} else {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Tidak disetujui")
				}
				f.SetCellValue("Sheet1", "R"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_persetujuan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "S"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "U"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue("Sheet1", "V"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_pic.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "W"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_manager.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "X"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_kadiv.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Y"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_keuangan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Z"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_pencairan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "AA"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Jumlah_pencairan)
				f.SetCellValue("Sheet1", "AB"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Keterangan)

				//fmt.Println(BCM)
				BCMIndex++
				_ = f.InsertRow("Sheet1", BCM()+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(BCM()), BCMIndex)

				if Pendaftaran.Kategoris.Kategori == "1" {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(BCM()), "Ya")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(BCM()), "Tidak")
				} else {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(BCM()), "Tidak")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(BCM()), "Ya")
				}
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(BCM()), Pendaftaran.Muztahiks.Nama)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(BCM()), Pendaftaran.Muztahiks.Nik_no_yayasan)
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(BCM()), Pendaftaran.Kategoris.Tempat)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(BCM()), Pendaftaran.Kategoris.Tanggal_lahir)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(BCM()), Pendaftaran.Kategoris.Alamat)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(BCM()), Pendaftaran.Muztahiks.Kecamatan)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(BCM()), Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(BCM()), Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(BCM()), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(BCM()), Pendaftaran.Kategoris.Mitra)
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(BCM()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "O"+strconv.Itoa(BCM()), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "P"+strconv.Itoa(BCM()), Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue("Sheet1", "Q"+strconv.Itoa(BCM()), Pendaftaran.Kategoris.Jenis_dana)
				f.SetCellValue("Sheet1", "R"+strconv.Itoa(BCM()), Pendaftaran.Kategoris.Jumlah_muztahik)
				f.SetCellValue("Sheet1", "S"+strconv.Itoa(BCM()), Pendaftaran.Kategoris.Kelas)
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(BCM()), Pendaftaran.Kategoris.Jumlah_hafalan)
			// Kategori ASM
			case 12:
				Pendaftaran := models.PendaftaranASM{}
				cursor.Decode(&Pendaftaran)
				_ = f.InsertRow("Sheet1", monitoringProposal+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(monitoringProposal), i)
				if Pendaftaran.Persetujuan.Proposal == 1 {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Ya")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Tidak")
				} else {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(monitoringProposal), "Tidak")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(monitoringProposal), "Ya")
				}
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Disposisi_pic)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(monitoringProposal), Pendaftaran.Tanggal_proposal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Nama)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.Alamat)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(monitoringProposal), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Perihal)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_disposisi.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_nama)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Verifikator_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Manager_tanggal.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "O"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_nama)
				f.SetCellValue("Sheet1", "P"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kadiv_tanggal.Format("02-Jan-2006"))
				if Pendaftaran.Persetujuan.Status_persetujuan == 1 {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Disetujui")
				} else {
					f.SetCellValue("Sheet1", "Q"+strconv.Itoa(monitoringProposal), "Tidak disetujui")
				}
				f.SetCellValue("Sheet1", "R"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_persetujuan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "S"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "U"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue("Sheet1", "V"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_pic.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "W"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_manager.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "X"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_kadiv.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Y"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Ppd_keuangan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "Z"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Tanggal_pencairan.Format("02-Jan-2006"))
				f.SetCellValue("Sheet1", "AA"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Jumlah_pencairan)
				f.SetCellValue("Sheet1", "AB"+strconv.Itoa(monitoringProposal), Pendaftaran.Persetujuan.Keterangan)

				//fmt.Println(ASM)
				ASMIndex++
				_ = f.InsertRow("Sheet1", ASM()+1)
				f.SetCellValue("Sheet1", "A"+strconv.Itoa(ASM()), ASMIndex)

				if Pendaftaran.Kategoris.Kategori == "1" {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(ASM()), "Ya")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(ASM()), "Tidak")
				} else {
					f.SetCellValue("Sheet1", "B"+strconv.Itoa(ASM()), "Tidak")
					f.SetCellValue("Sheet1", "C"+strconv.Itoa(ASM()), "Ya")
				}
				f.SetCellValue("Sheet1", "D"+strconv.Itoa(ASM()), Pendaftaran.Muztahiks.Nama)
				f.SetCellValue("Sheet1", "E"+strconv.Itoa(ASM()), Pendaftaran.Muztahiks.Nik_no_yayasan)
				f.SetCellValue("Sheet1", "F"+strconv.Itoa(ASM()), Pendaftaran.Muztahiks.Alamat)
				f.SetCellValue("Sheet1", "G"+strconv.Itoa(ASM()), Pendaftaran.Muztahiks.Kecamatan)
				f.SetCellValue("Sheet1", "H"+strconv.Itoa(ASM()), Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue("Sheet1", "I"+strconv.Itoa(ASM()), Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(ASM()), Pendaftaran.Muztahiks.No_hp)
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(ASM()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(ASM()), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(ASM()), Pendaftaran.Kategoris.Komunitas)
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(ASM()), Pendaftaran.Kategoris.Kegiatan)
				f.SetCellValue("Sheet1", "O"+strconv.Itoa(ASM()), Pendaftaran.Kategoris.Jumlah_bantuan)

			default:
				{
					continue
				}
			}
		}
		monitoringProposal++
		i++
	}

	//err := f.InsertRow("Sheet1", 6)

	// f := excelize.NewFile()
	// // Create a new sheet.
	// index := f.NewSheet("Sheet2")
	// // Set value of a cell.
	// f.SetCellValue("Sheet2", "A2", "Hello world.")
	// f.SetCellValue("Sheet1", "B2", 100)
	// // Set active sheet of the workbook.
	// f.SetActiveSheet(index)
	// // Save xlsx file by the given path.
	t := time.Now()

	err = f.SaveAs("./public/report/Report BMM " + t.Format("02-Jan-2006") + " .xlsx")
	if err != nil {
		fmt.Println(err)
	}

	c.JSON(200, gin.H{
		"data": "report has been created",
	})
}

func UpdProposal(c *gin.Context) {

	/* ---------------------------- Start of GET Data ---------------------------*/
	var (
		Sheet          string = "USULAN PENYALURAN DANA"
		nama, kategori string
	)
	t := time.Now()

	collection := db.Collection("pendaftaran")
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)
	//claims := c.MustGet("decoded").(*models.Claims)
	_id, _ := primitive.ObjectIDFromHex(c.Param("id"))
	Kat, _ := strconv.Atoi(c.Param("kat"))
	filter := bson.D{{"_id", _id}, {"kategori", Kat}}

	//get data taro di cursor
	result := collection.FindOne(ctx, filter)
	// if err != nil {
	// 	c.JSON(500, gin.H{
	// 		"data": "Id tidak ditemukan",
	// 	})
	// 	return
	// }

	/* ---------------------------- End of GET Data ---------------------------*/

	/* ---------------------------- Start of Setup Excel ---------------------------*/

	f, err := excelize.OpenFile("./public/report/UPD.xlsx")
	if err != nil {
		c.JSON(500, gin.H{
			"data": "Data dasar tidak ditemukan",
		})
		return
	}

	StartIndex, TujuanIndex, LatarIndex, AnalisaIndex, ProgramIndex, RekomendasiIndex := 4, 1, 1, 1, 1, 1

	Tujuan := func() int {
		return StartIndex + TujuanIndex
	}
	Latar := func() int {
		return Tujuan() + LatarIndex
	}
	Analisa := func() int {
		return Latar() + AnalisaIndex
	}
	Program := func() int {
		return Analisa() + ProgramIndex
	}
	Rekomendasi := func() int {
		return Program() + RekomendasiIndex
	}

	if Kat == 0 {
		// If the structure of the body is wrong, return an HTTP error
		// fmt.Println(err)
	} else {
		switch Kat {
		// Kategori KSM
		case 1:
			Pendaftaran := &models.PendaftaranKSM{}
			result.Decode(Pendaftaran)
			t = Pendaftaran.Tanggal_proposal
			if Pendaftaran.Upd != nil {
				// _ = f.InsertRow(sheet, monitoringProposal+1)
				for key, val := range Pendaftaran.Upd.Tujuan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Tujuan())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Tujuan()), "H"+strconv.Itoa(Tujuan()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Tujuan()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Tujuan()), val)
					err = f.SetRowHeight(Sheet, Tujuan(), 41.25)
					TujuanIndex++
				}

				for key, val := range Pendaftaran.Upd.Latar_belakang {
					if key >= 1 {
						err = f.InsertRow(Sheet, Latar())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Latar()), "H"+strconv.Itoa(Latar()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Latar()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Latar()), val)

					LatarIndex++
				}
				for key, val := range Pendaftaran.Upd.Analisis_kelayakan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Analisa())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Analisa()), "H"+strconv.Itoa(Analisa()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Analisa()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Analisa()), val)

					AnalisaIndex++
				}
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()), Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+1), Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+2), Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+3), Pendaftaran.Upd.Program_penyaluran.Alur_biaya)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+4), Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab)
				ProgramIndex += 5
				for key, val := range Pendaftaran.Upd.Rekomendasi {
					if key >= 1 {
						err = f.InsertRow(Sheet, Rekomendasi())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Rekomendasi()), "H"+strconv.Itoa(Rekomendasi()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Rekomendasi()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Rekomendasi()), val)
					RekomendasiIndex++
				}
				nama = Pendaftaran.Muztahiks.Nama
				kategori = Pendaftaran.Persetujuan.Kategori_program

				f.SetCellValue(Sheet, "D"+strconv.Itoa(Rekomendasi()+4), "Tgl : "+t.Format("02 Jan 2006 "))
			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		case 2:
			Pendaftaran := &models.PendaftaranRBM{}
			result.Decode(Pendaftaran)
			t = Pendaftaran.Tanggal_proposal
			if Pendaftaran.Upd != nil {
				// _ = f.InsertRow(sheet, monitoringProposal+1)
				for key, val := range Pendaftaran.Upd.Tujuan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Tujuan())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Tujuan()), "H"+strconv.Itoa(Tujuan()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Tujuan()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Tujuan()), val)
					err = f.SetRowHeight(Sheet, Tujuan(), 41.25)
					TujuanIndex++
				}

				for key, val := range Pendaftaran.Upd.Latar_belakang {
					if key >= 1 {
						err = f.InsertRow(Sheet, Latar())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Latar()), "H"+strconv.Itoa(Latar()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Latar()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Latar()), val)

					LatarIndex++
				}
				for key, val := range Pendaftaran.Upd.Analisis_kelayakan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Analisa())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Analisa()), "H"+strconv.Itoa(Analisa()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Analisa()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Analisa()), val)

					AnalisaIndex++
				}
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()), Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+1), Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+2), Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+3), Pendaftaran.Upd.Program_penyaluran.Alur_biaya)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+4), Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab)
				ProgramIndex += 5
				for key, val := range Pendaftaran.Upd.Rekomendasi {
					if key >= 1 {
						err = f.InsertRow(Sheet, Rekomendasi())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Rekomendasi()), "H"+strconv.Itoa(Rekomendasi()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Rekomendasi()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Rekomendasi()), val)
					RekomendasiIndex++
				}
				nama = Pendaftaran.Muztahiks.Nama
				kategori = Pendaftaran.Persetujuan.Kategori_program

				f.SetCellValue(Sheet, "D"+strconv.Itoa(Rekomendasi()+4), "Tgl : "+t.Format("02 Jan 2006 "))
			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		// Kategori PAUD
		case 3:
			Pendaftaran := &models.PendaftaranPAUD{}
			result.Decode(Pendaftaran)
			t = Pendaftaran.Tanggal_proposal
			if Pendaftaran.Upd != nil {
				// _ = f.InsertRow(sheet, monitoringProposal+1)
				for key, val := range Pendaftaran.Upd.Tujuan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Tujuan())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Tujuan()), "H"+strconv.Itoa(Tujuan()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Tujuan()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Tujuan()), val)
					err = f.SetRowHeight(Sheet, Tujuan(), 41.25)
					TujuanIndex++
				}

				for key, val := range Pendaftaran.Upd.Latar_belakang {
					if key >= 1 {
						err = f.InsertRow(Sheet, Latar())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Latar()), "H"+strconv.Itoa(Latar()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Latar()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Latar()), val)

					LatarIndex++
				}
				for key, val := range Pendaftaran.Upd.Analisis_kelayakan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Analisa())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Analisa()), "H"+strconv.Itoa(Analisa()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Analisa()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Analisa()), val)

					AnalisaIndex++
				}
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()), Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+1), Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+2), Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+3), Pendaftaran.Upd.Program_penyaluran.Alur_biaya)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+4), Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab)
				ProgramIndex += 5
				for key, val := range Pendaftaran.Upd.Rekomendasi {
					if key >= 1 {
						err = f.InsertRow(Sheet, Rekomendasi())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Rekomendasi()), "H"+strconv.Itoa(Rekomendasi()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Rekomendasi()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Rekomendasi()), val)
					RekomendasiIndex++
				}
				nama = Pendaftaran.Muztahiks.Nama
				kategori = Pendaftaran.Persetujuan.Kategori_program

				f.SetCellValue(Sheet, "D"+strconv.Itoa(Rekomendasi()+4), "Tgl : "+t.Format("02 Jan 2006 "))
			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		// Kategori KAFALA
		case 4:
			Pendaftaran := &models.PendaftaranKAFALA{}
			result.Decode(Pendaftaran)
			t = Pendaftaran.Tanggal_proposal
			if Pendaftaran.Upd != nil {
				// _ = f.InsertRow(sheet, monitoringProposal+1)
				for key, val := range Pendaftaran.Upd.Tujuan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Tujuan())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Tujuan()), "H"+strconv.Itoa(Tujuan()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Tujuan()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Tujuan()), val)
					err = f.SetRowHeight(Sheet, Tujuan(), 41.25)
					TujuanIndex++
				}

				for key, val := range Pendaftaran.Upd.Latar_belakang {
					if key >= 1 {
						err = f.InsertRow(Sheet, Latar())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Latar()), "H"+strconv.Itoa(Latar()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Latar()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Latar()), val)

					LatarIndex++
				}
				for key, val := range Pendaftaran.Upd.Analisis_kelayakan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Analisa())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Analisa()), "H"+strconv.Itoa(Analisa()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Analisa()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Analisa()), val)

					AnalisaIndex++
				}
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()), Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+1), Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+2), Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+3), Pendaftaran.Upd.Program_penyaluran.Alur_biaya)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+4), Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab)
				ProgramIndex += 5
				for key, val := range Pendaftaran.Upd.Rekomendasi {
					if key >= 1 {
						err = f.InsertRow(Sheet, Rekomendasi())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Rekomendasi()), "H"+strconv.Itoa(Rekomendasi()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Rekomendasi()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Rekomendasi()), val)
					RekomendasiIndex++
				}
				nama = Pendaftaran.Muztahiks.Nama
				kategori = Pendaftaran.Persetujuan.Kategori_program

				f.SetCellValue(Sheet, "D"+strconv.Itoa(Rekomendasi()+4), "Tgl : "+t.Format("02 Jan 2006 "))
			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		// Kategori JSM
		case 5:
			Pendaftaran := &models.PendaftaranJSM{}
			result.Decode(Pendaftaran)
			t = Pendaftaran.Tanggal_proposal
			if Pendaftaran.Upd != nil {
				// _ = f.InsertRow(sheet, monitoringProposal+1)
				for key, val := range Pendaftaran.Upd.Tujuan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Tujuan())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Tujuan()), "H"+strconv.Itoa(Tujuan()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Tujuan()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Tujuan()), val)
					err = f.SetRowHeight(Sheet, Tujuan(), 41.25)
					TujuanIndex++
				}

				for key, val := range Pendaftaran.Upd.Latar_belakang {
					if key >= 1 {
						err = f.InsertRow(Sheet, Latar())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Latar()), "H"+strconv.Itoa(Latar()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Latar()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Latar()), val)

					LatarIndex++
				}
				for key, val := range Pendaftaran.Upd.Analisis_kelayakan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Analisa())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Analisa()), "H"+strconv.Itoa(Analisa()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Analisa()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Analisa()), val)

					AnalisaIndex++
				}
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()), Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+1), Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+2), Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+3), Pendaftaran.Upd.Program_penyaluran.Alur_biaya)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+4), Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab)
				ProgramIndex += 5
				for key, val := range Pendaftaran.Upd.Rekomendasi {
					if key >= 1 {
						err = f.InsertRow(Sheet, Rekomendasi())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Rekomendasi()), "H"+strconv.Itoa(Rekomendasi()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Rekomendasi()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Rekomendasi()), val)
					RekomendasiIndex++
				}
				nama = Pendaftaran.Muztahiks.Nama
				kategori = Pendaftaran.Persetujuan.Kategori_program

				f.SetCellValue(Sheet, "D"+strconv.Itoa(Rekomendasi()+4), "Tgl : "+t.Format("02 Jan 2006 "))
			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		// Kategori DZM
		case 6:
			Pendaftaran := &models.PendaftaranDZM{}
			result.Decode(Pendaftaran)
			t = Pendaftaran.Tanggal_proposal
			if Pendaftaran.Upd != nil {
				// _ = f.InsertRow(sheet, monitoringProposal+1)
				for key, val := range Pendaftaran.Upd.Tujuan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Tujuan())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Tujuan()), "H"+strconv.Itoa(Tujuan()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Tujuan()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Tujuan()), val)
					err = f.SetRowHeight(Sheet, Tujuan(), 41.25)
					TujuanIndex++
				}

				for key, val := range Pendaftaran.Upd.Latar_belakang {
					if key >= 1 {
						err = f.InsertRow(Sheet, Latar())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Latar()), "H"+strconv.Itoa(Latar()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Latar()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Latar()), val)

					LatarIndex++
				}
				for key, val := range Pendaftaran.Upd.Analisis_kelayakan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Analisa())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Analisa()), "H"+strconv.Itoa(Analisa()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Analisa()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Analisa()), val)

					AnalisaIndex++
				}
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()), Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+1), Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+2), Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+3), Pendaftaran.Upd.Program_penyaluran.Alur_biaya)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+4), Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab)
				ProgramIndex += 5
				for key, val := range Pendaftaran.Upd.Rekomendasi {
					if key >= 1 {
						err = f.InsertRow(Sheet, Rekomendasi())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Rekomendasi()), "H"+strconv.Itoa(Rekomendasi()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Rekomendasi()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Rekomendasi()), val)
					RekomendasiIndex++
				}
				nama = Pendaftaran.Muztahiks.Nama
				kategori = Pendaftaran.Persetujuan.Kategori_program

				f.SetCellValue(Sheet, "D"+strconv.Itoa(Rekomendasi()+4), "Tgl : "+t.Format("02 Jan 2006 "))
			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		// Kategori BSU
		case 7:
			Pendaftaran := &models.PendaftaranBSU{}
			result.Decode(Pendaftaran)
			t = Pendaftaran.Tanggal_proposal
			if Pendaftaran.Upd != nil {
				// _ = f.InsertRow(sheet, monitoringProposal+1)
				for key, val := range Pendaftaran.Upd.Tujuan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Tujuan())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Tujuan()), "H"+strconv.Itoa(Tujuan()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Tujuan()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Tujuan()), val)
					err = f.SetRowHeight(Sheet, Tujuan(), 41.25)
					TujuanIndex++
				}

				for key, val := range Pendaftaran.Upd.Latar_belakang {
					if key >= 1 {
						err = f.InsertRow(Sheet, Latar())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Latar()), "H"+strconv.Itoa(Latar()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Latar()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Latar()), val)

					LatarIndex++
				}
				for key, val := range Pendaftaran.Upd.Analisis_kelayakan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Analisa())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Analisa()), "H"+strconv.Itoa(Analisa()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Analisa()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Analisa()), val)

					AnalisaIndex++
				}
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()), Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+1), Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+2), Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+3), Pendaftaran.Upd.Program_penyaluran.Alur_biaya)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+4), Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab)
				ProgramIndex += 5
				for key, val := range Pendaftaran.Upd.Rekomendasi {
					if key >= 1 {
						err = f.InsertRow(Sheet, Rekomendasi())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Rekomendasi()), "H"+strconv.Itoa(Rekomendasi()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Rekomendasi()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Rekomendasi()), val)
					RekomendasiIndex++
				}
				nama = Pendaftaran.Muztahiks.Nama
				kategori = Pendaftaran.Persetujuan.Kategori_program

				f.SetCellValue(Sheet, "D"+strconv.Itoa(Rekomendasi()+4), "Tgl : "+t.Format("02 Jan 2006 "))
			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		// Kategori Rescue
		case 8:
			Pendaftaran := &models.PendaftaranRescue{}
			result.Decode(Pendaftaran)
			t = Pendaftaran.Tanggal_proposal
			if Pendaftaran.Upd != nil {
				// _ = f.InsertRow(sheet, monitoringProposal+1)
				for key, val := range Pendaftaran.Upd.Tujuan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Tujuan())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Tujuan()), "H"+strconv.Itoa(Tujuan()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Tujuan()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Tujuan()), val)
					err = f.SetRowHeight(Sheet, Tujuan(), 41.25)
					TujuanIndex++
				}

				for key, val := range Pendaftaran.Upd.Latar_belakang {
					if key >= 1 {
						err = f.InsertRow(Sheet, Latar())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Latar()), "H"+strconv.Itoa(Latar()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Latar()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Latar()), val)

					LatarIndex++
				}
				for key, val := range Pendaftaran.Upd.Analisis_kelayakan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Analisa())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Analisa()), "H"+strconv.Itoa(Analisa()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Analisa()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Analisa()), val)

					AnalisaIndex++
				}
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()), Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+1), Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+2), Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+3), Pendaftaran.Upd.Program_penyaluran.Alur_biaya)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+4), Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab)
				ProgramIndex += 5
				for key, val := range Pendaftaran.Upd.Rekomendasi {
					if key >= 1 {
						err = f.InsertRow(Sheet, Rekomendasi())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Rekomendasi()), "H"+strconv.Itoa(Rekomendasi()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Rekomendasi()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Rekomendasi()), val)
					RekomendasiIndex++
				}
				nama = Pendaftaran.Muztahiks.Nama
				kategori = Pendaftaran.Persetujuan.Kategori_program

				f.SetCellValue(Sheet, "D"+strconv.Itoa(Rekomendasi()+4), "Tgl : "+t.Format("02 Jan 2006 "))
			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		// Kategori BTM
		case 9:
			Pendaftaran := &models.PendaftaranBTM{}
			result.Decode(Pendaftaran)
			t = Pendaftaran.Tanggal_proposal
			if Pendaftaran.Upd != nil {
				// _ = f.InsertRow(sheet, monitoringProposal+1)
				for key, val := range Pendaftaran.Upd.Tujuan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Tujuan())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Tujuan()), "H"+strconv.Itoa(Tujuan()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Tujuan()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Tujuan()), val)
					err = f.SetRowHeight(Sheet, Tujuan(), 41.25)
					TujuanIndex++
				}

				for key, val := range Pendaftaran.Upd.Latar_belakang {
					if key >= 1 {
						err = f.InsertRow(Sheet, Latar())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Latar()), "H"+strconv.Itoa(Latar()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Latar()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Latar()), val)

					LatarIndex++
				}
				for key, val := range Pendaftaran.Upd.Analisis_kelayakan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Analisa())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Analisa()), "H"+strconv.Itoa(Analisa()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Analisa()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Analisa()), val)

					AnalisaIndex++
				}
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()), Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+1), Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+2), Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+3), Pendaftaran.Upd.Program_penyaluran.Alur_biaya)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+4), Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab)
				ProgramIndex += 5
				for key, val := range Pendaftaran.Upd.Rekomendasi {
					if key >= 1 {
						err = f.InsertRow(Sheet, Rekomendasi())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Rekomendasi()), "H"+strconv.Itoa(Rekomendasi()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Rekomendasi()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Rekomendasi()), val)
					RekomendasiIndex++
				}
				nama = Pendaftaran.Muztahiks.Nama
				kategori = Pendaftaran.Persetujuan.Kategori_program

				f.SetCellValue(Sheet, "D"+strconv.Itoa(Rekomendasi()+4), "Tgl : "+t.Format("02 Jan 2006 "))
			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		// Kategori BSM
		case 10:
			Pendaftaran := &models.PendaftaranBSM{}
			result.Decode(Pendaftaran)
			t = Pendaftaran.Tanggal_proposal
			if Pendaftaran.Upd != nil {
				// _ = f.InsertRow(sheet, monitoringProposal+1)
				for key, val := range Pendaftaran.Upd.Tujuan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Tujuan())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Tujuan()), "H"+strconv.Itoa(Tujuan()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Tujuan()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Tujuan()), val)
					err = f.SetRowHeight(Sheet, Tujuan(), 41.25)
					TujuanIndex++
				}

				for key, val := range Pendaftaran.Upd.Latar_belakang {
					if key >= 1 {
						err = f.InsertRow(Sheet, Latar())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Latar()), "H"+strconv.Itoa(Latar()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Latar()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Latar()), val)

					LatarIndex++
				}
				for key, val := range Pendaftaran.Upd.Analisis_kelayakan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Analisa())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Analisa()), "H"+strconv.Itoa(Analisa()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Analisa()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Analisa()), val)

					AnalisaIndex++
				}
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()), Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+1), Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+2), Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+3), Pendaftaran.Upd.Program_penyaluran.Alur_biaya)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+4), Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab)
				ProgramIndex += 5
				for key, val := range Pendaftaran.Upd.Rekomendasi {
					if key >= 1 {
						err = f.InsertRow(Sheet, Rekomendasi())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Rekomendasi()), "H"+strconv.Itoa(Rekomendasi()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Rekomendasi()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Rekomendasi()), val)
					RekomendasiIndex++
				}
				nama = Pendaftaran.Muztahiks.Nama
				kategori = Pendaftaran.Persetujuan.Kategori_program

				f.SetCellValue(Sheet, "D"+strconv.Itoa(Rekomendasi()+4), "Tgl : "+t.Format("02 Jan 2006 "))
			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		// Kategori BCM
		case 11:
			Pendaftaran := &models.PendaftaranBCM{}
			result.Decode(Pendaftaran)
			t = Pendaftaran.Tanggal_proposal
			if Pendaftaran.Upd != nil {
				// _ = f.InsertRow(sheet, monitoringProposal+1)
				for key, val := range Pendaftaran.Upd.Tujuan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Tujuan())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Tujuan()), "H"+strconv.Itoa(Tujuan()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Tujuan()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Tujuan()), val)
					err = f.SetRowHeight(Sheet, Tujuan(), 41.25)
					TujuanIndex++
				}

				for key, val := range Pendaftaran.Upd.Latar_belakang {
					if key >= 1 {
						err = f.InsertRow(Sheet, Latar())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Latar()), "H"+strconv.Itoa(Latar()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Latar()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Latar()), val)

					LatarIndex++
				}
				for key, val := range Pendaftaran.Upd.Analisis_kelayakan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Analisa())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Analisa()), "H"+strconv.Itoa(Analisa()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Analisa()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Analisa()), val)

					AnalisaIndex++
				}
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()), Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+1), Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+2), Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+3), Pendaftaran.Upd.Program_penyaluran.Alur_biaya)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+4), Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab)
				ProgramIndex += 5
				for key, val := range Pendaftaran.Upd.Rekomendasi {
					if key >= 1 {
						err = f.InsertRow(Sheet, Rekomendasi())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Rekomendasi()), "H"+strconv.Itoa(Rekomendasi()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Rekomendasi()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Rekomendasi()), val)
					RekomendasiIndex++
				}
				nama = Pendaftaran.Muztahiks.Nama
				kategori = Pendaftaran.Persetujuan.Kategori_program

				f.SetCellValue(Sheet, "D"+strconv.Itoa(Rekomendasi()+4), "Tgl : "+t.Format("02 Jan 2006 "))
			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		// Kategori ASM
		case 12:
			Pendaftaran := &models.PendaftaranASM{}
			result.Decode(Pendaftaran)
			t = Pendaftaran.Tanggal_proposal
			if Pendaftaran.Upd != nil {
				
				// _ = f.InsertRow(sheet, monitoringProposal+1)
				for key, val := range Pendaftaran.Upd.Tujuan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Tujuan())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Tujuan()), "H"+strconv.Itoa(Tujuan()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Tujuan()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Tujuan()), val)
					err = f.SetRowHeight(Sheet, Tujuan(), 41.25)
					TujuanIndex++
				}

				for key, val := range Pendaftaran.Upd.Latar_belakang {
					if key >= 1 {
						err = f.InsertRow(Sheet, Latar())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Latar()), "H"+strconv.Itoa(Latar()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Latar()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Latar()), val)

					LatarIndex++
				}
				for key, val := range Pendaftaran.Upd.Analisis_kelayakan {
					if key >= 1 {
						err = f.InsertRow(Sheet, Analisa())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Analisa()), "H"+strconv.Itoa(Analisa()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Analisa()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Analisa()), val)

					AnalisaIndex++
				}
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()), Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+1), Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+2), Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+3), Pendaftaran.Upd.Program_penyaluran.Alur_biaya)
				f.SetCellValue(Sheet, "G"+strconv.Itoa(Program()+4), Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab)
				ProgramIndex += 5
				for key, val := range Pendaftaran.Upd.Rekomendasi {
					if key >= 1 {
						err = f.InsertRow(Sheet, Rekomendasi())
						err = f.MergeCell(Sheet, "C"+strconv.Itoa(Rekomendasi()), "H"+strconv.Itoa(Rekomendasi()))
					}
					f.SetCellValue(Sheet, "B"+strconv.Itoa(Rekomendasi()), key+1)
					f.SetCellValue(Sheet, "C"+strconv.Itoa(Rekomendasi()), val)
					RekomendasiIndex++
				}
				nama = Pendaftaran.Muztahiks.Nama
				kategori = Pendaftaran.Persetujuan.Kategori_program

				f.SetCellValue(Sheet, "D"+strconv.Itoa(Rekomendasi()+4), "Tgl : "+t.Format("02 Jan 2006 "))
			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		default:
			{
				c.JSON(500, gin.H{
					"data": "Kategori tidak ditemukan",
				})
			}
		}
	}

	style, err := f.NewStyle(`{"border":[{"type":"left","color":"222222","style":1},{"type":"top","color":"222222","style":1},{"type":"bottom","color":"222222","style":1},{"type":"right","color":"222222","style":1}], "alignment":{"horizontal":"left","vertical":"top","wrap_text":true,"reading_order":0,"relative_indent":1,"shrink_to_fit":true}, "font":{"size":14}}`)

	if err != nil {
		fmt.Println(err)
	}

	styleHeader, err := f.NewStyle(`{"border":[{"type":"left","color":"222222","style":1},{"type":"top","color":"222222","style":1},{"type":"bottom","color":"222222","style":1},{"type":"right","color":"222222","style":1}], "alignment":{"horizontal":"center","vertical":"center","wrap_text":true},"font":{"bold":true,"size":16}}`)

	if err != nil {
		fmt.Println(err)
	}

	styleTTD, err := f.NewStyle(`{"border":[{"type":"left","color":"222222","style":1},{"type":"top","color":"222222","style":1},{"type":"bottom","color":"222222","style":1},{"type":"right","color":"222222","style":1}], "alignment":{"horizontal":"center","vertical":"center","wrap_text":true},"font":{"size":14}}`)

	if err != nil {
		fmt.Println(err)
	}

	err = f.SetCellStyle(Sheet, "A5", "H"+strconv.Itoa(Rekomendasi()), style)

	err = f.SetCellStyle(Sheet, "A5", "A"+strconv.Itoa(Rekomendasi()-2), styleHeader)

	err = f.SetCellStyle(Sheet, "A"+strconv.Itoa(Rekomendasi()+3), "F"+strconv.Itoa(Rekomendasi()+10), styleTTD)
	url := strings.Replace("/public/report/UPD_"+t.Format("02_Jan_2006 15_04_05")+"_"+nama+" "+kategori+".xlsx", " ", "_", -1)
	err = f.SaveAs("." + url)
	if err != nil {
		fmt.Println(err)
	}

	// Simpan Data URL

	results, errs := collection.UpdateOne(ctx, filter, bson.D{
		{"$set", bson.D{
			{"upd.url", url},
		}},
	})

	if errs != nil {
		fmt.Print(errs)
		c.JSON(500, gin.H{
			"Message": "Error while updating",
		})
		return
	}
	if results.MatchedCount < 1 {
		c.JSON(200, gin.H{
			"Message": "Id Not Found",
		})
		return
	}
	if results.ModifiedCount < 1 {
		c.JSON(200, gin.H{
			"Message": "Data Is Fresh, Nothing change in your data",
		})
		return
	}

	c.JSON(200, gin.H{
		"data": "report has been created",
		"url":  url,
	})
	return
}

// func CheckData(){

// 	Pendaftaran := CheckType(Kat)
// 	result.Decode(Pendaftaran)

// 	// Mengambil nilai pendaftaran
// 	// var reflectValue = reflect.ValueOf(Pendaftaran)

// 	//Cek apakah pointer
// 	// if reflectValue.Kind() == reflect.Ptr {
// 	// 	reflectValue = reflectValue.Elem()
// 	// }

// 	//ga bisa ngambil embbed struct, jadi pake ini tapi tetep ga bisa nge get

// 	var reflectValue = reflect.Indirect(reflect.ValueOf(Pendaftaran))
// 	// Upd := reflectValue.FieldByName("Upd").Interface()
// 	fmt.Printf("%+v", reflectValue)
// 	// Akhirnya stop karna takut banyak error
// 	panic("stop")
// }

// func CheckType(Kat int) interface{}{
// 	// Check kategori akan di return sebagai fungsinya
//     switch Kat{
//         case 1:
//             return &models.PendaftaranASM{}
// 	}
// 	return nil
// }

func VerifikasiProposal(c *gin.Context) {

	/* ---------------------------- Start of GET Data ---------------------------*/
	var (
		Sheet          string = "FORM VERIFIKASI"
		nama, kategori string
	)

	PihakIndex, PenerimaIndex, HasilIndex := 19, 0, 0
	Penerima := func() int {
		return PihakIndex + 2 + PenerimaIndex
	}

	Hasil := func() int {
		return Penerima() + 2 + HasilIndex
	}

	_ = Penerima() + Hasil()

	t := time.Now()

	collection := db.Collection("pendaftaran")
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)
	//claims := c.MustGet("decoded").(*models.Claims)
	_id, _ := primitive.ObjectIDFromHex(c.Param("id"))
	Kat, _ := strconv.Atoi(c.Param("kat"))
	filter := bson.D{{"_id", _id}, {"kategori", Kat}}

	//get data taro di cursor
	result := collection.FindOne(ctx, filter)
	// if err != nil {
	// 	c.JSON(500, gin.H{
	// 		"data": "Id tidak ditemukan",
	// 	})
	// 	return
	// }

	/* ---------------------------- End of GET Data ---------------------------*/

	/* ---------------------------- Start of Setup Excel ---------------------------*/

	f, err := excelize.OpenFile("./public/report/VERIFIKASI.xlsx")
	if err != nil {
		c.JSON(500, gin.H{
			"data": "Data dasar tidak ditemukan",
		})
		return
	}

	if Kat == 0 {
		// If the structure of the body is wrong, return an HTTP error
		// fmt.Println(err)
	} else {
		switch Kat {
		// Kategori KSM
		case 1:
			Pendaftaran := &models.PendaftaranKSM{}
			result.Decode(Pendaftaran)
			nama = Pendaftaran.Muztahiks.Nama
			kategori = Pendaftaran.Persetujuan.Kategori_program
			t = Pendaftaran.Tanggal_proposal
			if Pendaftaran.Verifikasi != nil {
				f.SetCellValue(Sheet, "F6", Pendaftaran.Verifikasi.Tanggal_verifikasi)
				f.SetCellValue(Sheet, "H8", Pendaftaran.Verifikasi.Nama_pelaksana)
				f.SetCellValue(Sheet, "H9", Pendaftaran.Verifikasi.Jabatan_pelaksana)
				f.SetCellValue(Sheet, "F11", Pendaftaran.Judul_proposal)
				f.SetCellValue(Sheet, "F12", Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "F13", Pendaftaran.Kategoris.Jumlah_bantuan)
				for _, val := range Pendaftaran.Verifikasi.Cara_verifikasi {
					if ok, _ := strconv.Atoi(val); ok == 1 {
						f.SetCellValue(Sheet, "H15", "V")
					} else if ok, _ := strconv.Atoi(val); ok == 2 {
						f.SetCellValue(Sheet, "H16", "V")
					}
				}

				for key, val := range Pendaftaran.Verifikasi.Pihak_konfirmasi {
					if key > 2 {
						break
					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+1), val.Lembaga)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+2), val.Jabatan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+3), val.Telepon)
					for key, val := range val.Hasil {
						if key <= 3 {
							f.SetCellValue(Sheet, "J"+strconv.Itoa(PihakIndex+key), key+1)
							f.SetCellValue(Sheet, "K"+strconv.Itoa(PihakIndex+key), val)
						}
					}

					PihakIndex += 4

				}
				if len(Pendaftaran.Verifikasi.Pihak_konfirmasi) < 3 {
					PihakIndex = 31
				}

				for key, val := range Pendaftaran.Verifikasi.Penerima_manfaat {
					if key > 0 {
						for i := 0; i <= 4; i++ {
							_ = f.DuplicateRow(Sheet, Penerima()+i)
						}

						f.SetCellValue(Sheet, "E"+strconv.Itoa(Penerima()), key+1)
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()), "Nama")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+1), "Usia")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+2), "Tanggungan")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+3), "Alamat")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+4), "Telepon")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+1), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+2), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+3), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+4), ":")

						_ = f.MergeCell(Sheet, "E"+strconv.Itoa(Penerima()), "E"+strconv.Itoa(Penerima()+4))

						arrayKotak := []string{"E", "F", "G", "H", "J", "K"}
						for _, val := range arrayKotak {
							styleNumber, err := f.NewStyle(`{"border":[{"type":"left","color":"222222","style":1},{"type":"top","color":"222222","style":1},{"type":"bottom","color":"222222","style":1},{"type":"right","color":"222222","style":1}], "alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}`)

							if err != nil {
								fmt.Println(err)
							}

							err = f.SetCellStyle(Sheet, val+strconv.Itoa(Penerima()), val+strconv.Itoa(Penerima()+4), styleNumber)
						}

					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+1), val.Usia)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+2), val.Tanggungan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+3), val.Alamat)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+4), val.Telepon)

					PenerimaIndex += 5
				}
				fmt.Println(Hasil())
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+1), Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+2), Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+3), Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi)
				f.SetCellValue(Sheet, "C"+strconv.Itoa(Hasil()+11), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue(Sheet, "F"+strconv.Itoa(Hasil()+11), Pendaftaran.Verifikasi.Nama_pelaksana)

			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		case 2:
			Pendaftaran := &models.PendaftaranRBM{}
			result.Decode(Pendaftaran)
			nama = Pendaftaran.Muztahiks.Nama
			kategori = Pendaftaran.Persetujuan.Kategori_program
			t = Pendaftaran.Tanggal_proposal
			if Pendaftaran.Verifikasi != nil {
				f.SetCellValue(Sheet, "F6", Pendaftaran.Verifikasi.Tanggal_verifikasi)
				f.SetCellValue(Sheet, "H8", Pendaftaran.Verifikasi.Nama_pelaksana)
				f.SetCellValue(Sheet, "H9", Pendaftaran.Verifikasi.Jabatan_pelaksana)
				f.SetCellValue(Sheet, "F11", Pendaftaran.Judul_proposal)
				f.SetCellValue(Sheet, "F12", Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "F13", Pendaftaran.Kategoris.Jumlah_bantuan)
				for _, val := range Pendaftaran.Verifikasi.Cara_verifikasi {
					if ok, _ := strconv.Atoi(val); ok == 1 {
						f.SetCellValue(Sheet, "H15", "V")
					} else if ok, _ := strconv.Atoi(val); ok == 2 {
						f.SetCellValue(Sheet, "H16", "V")
					}
				}

				for key, val := range Pendaftaran.Verifikasi.Pihak_konfirmasi {
					if key > 2 {
						break
					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+1), val.Lembaga)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+2), val.Jabatan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+3), val.Telepon)
					for key, val := range val.Hasil {
						if key <= 3 {
							f.SetCellValue(Sheet, "J"+strconv.Itoa(PihakIndex+key), key+1)
							f.SetCellValue(Sheet, "K"+strconv.Itoa(PihakIndex+key), val)
						}
					}

					PihakIndex += 4

				}
				if len(Pendaftaran.Verifikasi.Pihak_konfirmasi) < 3 {
					PihakIndex = 31
				}

				for key, val := range Pendaftaran.Verifikasi.Penerima_manfaat {
					if key > 0 {
						for i := 0; i <= 4; i++ {
							_ = f.DuplicateRow(Sheet, Penerima()+i)
						}

						f.SetCellValue(Sheet, "E"+strconv.Itoa(Penerima()), key+1)
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()), "Nama")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+1), "Usia")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+2), "Tanggungan")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+3), "Alamat")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+4), "Telepon")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+1), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+2), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+3), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+4), ":")

						_ = f.MergeCell(Sheet, "E"+strconv.Itoa(Penerima()), "E"+strconv.Itoa(Penerima()+4))

						arrayKotak := []string{"E", "F", "G", "H", "J", "K"}
						for _, val := range arrayKotak {
							styleNumber, err := f.NewStyle(`{"border":[{"type":"left","color":"222222","style":1},{"type":"top","color":"222222","style":1},{"type":"bottom","color":"222222","style":1},{"type":"right","color":"222222","style":1}], "alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}`)

							if err != nil {
								fmt.Println(err)
							}

							err = f.SetCellStyle(Sheet, val+strconv.Itoa(Penerima()), val+strconv.Itoa(Penerima()+4), styleNumber)
						}

					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+1), val.Usia)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+2), val.Tanggungan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+3), val.Alamat)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+4), val.Telepon)

					PenerimaIndex += 5
				}
				fmt.Println(Hasil())
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+1), Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+2), Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+3), Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi)
				f.SetCellValue(Sheet, "C"+strconv.Itoa(Hasil()+11), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue(Sheet, "F"+strconv.Itoa(Hasil()+11), Pendaftaran.Verifikasi.Nama_pelaksana)

			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		// Kategori PAUD
		case 3:
			Pendaftaran := &models.PendaftaranPAUD{}
			result.Decode(Pendaftaran)
			nama = Pendaftaran.Muztahiks.Nama
			kategori = Pendaftaran.Persetujuan.Kategori_program
			t = Pendaftaran.Tanggal_proposal
			if Pendaftaran.Verifikasi != nil {
				f.SetCellValue(Sheet, "F6", Pendaftaran.Verifikasi.Tanggal_verifikasi)
				f.SetCellValue(Sheet, "H8", Pendaftaran.Verifikasi.Nama_pelaksana)
				f.SetCellValue(Sheet, "H9", Pendaftaran.Verifikasi.Jabatan_pelaksana)
				f.SetCellValue(Sheet, "F11", Pendaftaran.Judul_proposal)
				f.SetCellValue(Sheet, "F12", Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "F13", Pendaftaran.Kategoris.Jumlah_bantuan)
				for _, val := range Pendaftaran.Verifikasi.Cara_verifikasi {
					if ok, _ := strconv.Atoi(val); ok == 1 {
						f.SetCellValue(Sheet, "H15", "V")
					} else if ok, _ := strconv.Atoi(val); ok == 2 {
						f.SetCellValue(Sheet, "H16", "V")
					}
				}

				for key, val := range Pendaftaran.Verifikasi.Pihak_konfirmasi {
					if key > 2 {
						break
					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+1), val.Lembaga)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+2), val.Jabatan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+3), val.Telepon)
					for key, val := range val.Hasil {
						if key <= 3 {
							f.SetCellValue(Sheet, "J"+strconv.Itoa(PihakIndex+key), key+1)
							f.SetCellValue(Sheet, "K"+strconv.Itoa(PihakIndex+key), val)
						}
					}

					PihakIndex += 4

				}
				if len(Pendaftaran.Verifikasi.Pihak_konfirmasi) < 3 {
					PihakIndex = 31
				}

				for key, val := range Pendaftaran.Verifikasi.Penerima_manfaat {
					if key > 0 {
						for i := 0; i <= 4; i++ {
							_ = f.DuplicateRow(Sheet, Penerima()+i)
						}

						f.SetCellValue(Sheet, "E"+strconv.Itoa(Penerima()), key+1)
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()), "Nama")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+1), "Usia")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+2), "Tanggungan")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+3), "Alamat")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+4), "Telepon")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+1), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+2), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+3), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+4), ":")

						_ = f.MergeCell(Sheet, "E"+strconv.Itoa(Penerima()), "E"+strconv.Itoa(Penerima()+4))

						arrayKotak := []string{"E", "F", "G", "H", "J", "K"}
						for _, val := range arrayKotak {
							styleNumber, err := f.NewStyle(`{"border":[{"type":"left","color":"222222","style":1},{"type":"top","color":"222222","style":1},{"type":"bottom","color":"222222","style":1},{"type":"right","color":"222222","style":1}], "alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}`)

							if err != nil {
								fmt.Println(err)
							}

							err = f.SetCellStyle(Sheet, val+strconv.Itoa(Penerima()), val+strconv.Itoa(Penerima()+4), styleNumber)
						}

					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+1), val.Usia)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+2), val.Tanggungan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+3), val.Alamat)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+4), val.Telepon)

					PenerimaIndex += 5
				}
				fmt.Println(Hasil())
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+1), Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+2), Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+3), Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi)
				f.SetCellValue(Sheet, "C"+strconv.Itoa(Hasil()+11), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue(Sheet, "F"+strconv.Itoa(Hasil()+11), Pendaftaran.Verifikasi.Nama_pelaksana)

			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		// Kategori KAFALA
		case 4:
			Pendaftaran := &models.PendaftaranKAFALA{}
			result.Decode(Pendaftaran)
			nama = Pendaftaran.Muztahiks.Nama
			kategori = Pendaftaran.Persetujuan.Kategori_program
			t = Pendaftaran.Tanggal_proposal
			if Pendaftaran.Verifikasi != nil {
				f.SetCellValue(Sheet, "F6", Pendaftaran.Verifikasi.Tanggal_verifikasi)
				f.SetCellValue(Sheet, "H8", Pendaftaran.Verifikasi.Nama_pelaksana)
				f.SetCellValue(Sheet, "H9", Pendaftaran.Verifikasi.Jabatan_pelaksana)
				f.SetCellValue(Sheet, "F11", Pendaftaran.Judul_proposal)
				f.SetCellValue(Sheet, "F12", Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "F13", Pendaftaran.Kategoris.Jumlah_bantuan)
				for _, val := range Pendaftaran.Verifikasi.Cara_verifikasi {
					if ok, _ := strconv.Atoi(val); ok == 1 {
						f.SetCellValue(Sheet, "H15", "V")
					} else if ok, _ := strconv.Atoi(val); ok == 2 {
						f.SetCellValue(Sheet, "H16", "V")
					}
				}

				for key, val := range Pendaftaran.Verifikasi.Pihak_konfirmasi {
					if key > 2 {
						break
					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+1), val.Lembaga)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+2), val.Jabatan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+3), val.Telepon)
					for key, val := range val.Hasil {
						if key <= 3 {
							f.SetCellValue(Sheet, "J"+strconv.Itoa(PihakIndex+key), key+1)
							f.SetCellValue(Sheet, "K"+strconv.Itoa(PihakIndex+key), val)
						}
					}

					PihakIndex += 4

				}
				if len(Pendaftaran.Verifikasi.Pihak_konfirmasi) < 3 {
					PihakIndex = 31
				}
				for key, val := range Pendaftaran.Verifikasi.Penerima_manfaat {
					if key > 0 {
						for i := 0; i <= 4; i++ {
							_ = f.DuplicateRow(Sheet, Penerima()+i)
						}

						f.SetCellValue(Sheet, "E"+strconv.Itoa(Penerima()), key+1)
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()), "Nama")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+1), "Usia")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+2), "Tanggungan")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+3), "Alamat")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+4), "Telepon")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+1), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+2), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+3), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+4), ":")

						_ = f.MergeCell(Sheet, "E"+strconv.Itoa(Penerima()), "E"+strconv.Itoa(Penerima()+4))

						arrayKotak := []string{"E", "F", "G", "H", "J", "K"}
						for _, val := range arrayKotak {
							styleNumber, err := f.NewStyle(`{"border":[{"type":"left","color":"222222","style":1},{"type":"top","color":"222222","style":1},{"type":"bottom","color":"222222","style":1},{"type":"right","color":"222222","style":1}], "alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}`)

							if err != nil {
								fmt.Println(err)
							}

							err = f.SetCellStyle(Sheet, val+strconv.Itoa(Penerima()), val+strconv.Itoa(Penerima()+4), styleNumber)
						}

					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+1), val.Usia)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+2), val.Tanggungan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+3), val.Alamat)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+4), val.Telepon)

					PenerimaIndex += 5
				}
				fmt.Println(Hasil())
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+1), Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+2), Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+3), Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi)
				f.SetCellValue(Sheet, "C"+strconv.Itoa(Hasil()+11), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue(Sheet, "F"+strconv.Itoa(Hasil()+11), Pendaftaran.Verifikasi.Nama_pelaksana)

			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		// Kategori JSM
		case 5:
			Pendaftaran := &models.PendaftaranJSM{}
			result.Decode(Pendaftaran)
			nama = Pendaftaran.Muztahiks.Nama
			kategori = Pendaftaran.Persetujuan.Kategori_program
			t = Pendaftaran.Tanggal_proposal
			if Pendaftaran.Verifikasi != nil {
				f.SetCellValue(Sheet, "F6", Pendaftaran.Verifikasi.Tanggal_verifikasi)
				f.SetCellValue(Sheet, "H8", Pendaftaran.Verifikasi.Nama_pelaksana)
				f.SetCellValue(Sheet, "H9", Pendaftaran.Verifikasi.Jabatan_pelaksana)
				f.SetCellValue(Sheet, "F11", Pendaftaran.Judul_proposal)
				f.SetCellValue(Sheet, "F12", Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "F13", Pendaftaran.Kategoris.Jumlah_bantuan)
				for _, val := range Pendaftaran.Verifikasi.Cara_verifikasi {
					if ok, _ := strconv.Atoi(val); ok == 1 {
						f.SetCellValue(Sheet, "H15", "V")
					} else if ok, _ := strconv.Atoi(val); ok == 2 {
						f.SetCellValue(Sheet, "H16", "V")
					}
				}

				for key, val := range Pendaftaran.Verifikasi.Pihak_konfirmasi {
					if key > 2 {
						break
					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+1), val.Lembaga)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+2), val.Jabatan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+3), val.Telepon)
					for key, val := range val.Hasil {
						if key <= 3 {
							f.SetCellValue(Sheet, "J"+strconv.Itoa(PihakIndex+key), key+1)
							f.SetCellValue(Sheet, "K"+strconv.Itoa(PihakIndex+key), val)
						}
					}

					PihakIndex += 4

				}
				if len(Pendaftaran.Verifikasi.Pihak_konfirmasi) < 3 {
					PihakIndex = 31
				}

				for key, val := range Pendaftaran.Verifikasi.Penerima_manfaat {
					if key > 0 {
						for i := 0; i <= 4; i++ {
							_ = f.DuplicateRow(Sheet, Penerima()+i)
						}

						f.SetCellValue(Sheet, "E"+strconv.Itoa(Penerima()), key+1)
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()), "Nama")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+1), "Usia")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+2), "Tanggungan")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+3), "Alamat")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+4), "Telepon")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+1), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+2), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+3), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+4), ":")

						_ = f.MergeCell(Sheet, "E"+strconv.Itoa(Penerima()), "E"+strconv.Itoa(Penerima()+4))

						arrayKotak := []string{"E", "F", "G", "H", "J", "K"}
						for _, val := range arrayKotak {
							styleNumber, err := f.NewStyle(`{"border":[{"type":"left","color":"222222","style":1},{"type":"top","color":"222222","style":1},{"type":"bottom","color":"222222","style":1},{"type":"right","color":"222222","style":1}], "alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}`)

							if err != nil {
								fmt.Println(err)
							}

							err = f.SetCellStyle(Sheet, val+strconv.Itoa(Penerima()), val+strconv.Itoa(Penerima()+4), styleNumber)
						}

					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+1), val.Usia)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+2), val.Tanggungan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+3), val.Alamat)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+4), val.Telepon)

					PenerimaIndex += 5
				}
				fmt.Println(Hasil())
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+1), Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+2), Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+3), Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi)
				f.SetCellValue(Sheet, "C"+strconv.Itoa(Hasil()+11), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue(Sheet, "F"+strconv.Itoa(Hasil()+11), Pendaftaran.Verifikasi.Nama_pelaksana)

			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		// Kategori DZM
		case 6:
			Pendaftaran := &models.PendaftaranDZM{}
			result.Decode(Pendaftaran)
			nama = Pendaftaran.Muztahiks.Nama
			kategori = Pendaftaran.Persetujuan.Kategori_program
			t = Pendaftaran.Tanggal_proposal
			if Pendaftaran.Verifikasi != nil {
				f.SetCellValue(Sheet, "F6", Pendaftaran.Verifikasi.Tanggal_verifikasi)
				f.SetCellValue(Sheet, "H8", Pendaftaran.Verifikasi.Nama_pelaksana)
				f.SetCellValue(Sheet, "H9", Pendaftaran.Verifikasi.Jabatan_pelaksana)
				f.SetCellValue(Sheet, "F11", Pendaftaran.Judul_proposal)
				f.SetCellValue(Sheet, "F12", Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "F13", Pendaftaran.Kategoris.Jumlah_bantuan)
				for _, val := range Pendaftaran.Verifikasi.Cara_verifikasi {
					if ok, _ := strconv.Atoi(val); ok == 1 {
						f.SetCellValue(Sheet, "H15", "V")
					} else if ok, _ := strconv.Atoi(val); ok == 2 {
						f.SetCellValue(Sheet, "H16", "V")
					}
				}

				for key, val := range Pendaftaran.Verifikasi.Pihak_konfirmasi {
					if key > 2 {
						break
					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+1), val.Lembaga)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+2), val.Jabatan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+3), val.Telepon)
					for key, val := range val.Hasil {
						if key <= 3 {
							f.SetCellValue(Sheet, "J"+strconv.Itoa(PihakIndex+key), key+1)
							f.SetCellValue(Sheet, "K"+strconv.Itoa(PihakIndex+key), val)
						}
					}

					PihakIndex += 4
				}
				if len(Pendaftaran.Verifikasi.Pihak_konfirmasi) < 3 {
					PihakIndex = 31
				}

				for key, val := range Pendaftaran.Verifikasi.Penerima_manfaat {
					if key > 0 {
						for i := 0; i <= 4; i++ {
							_ = f.DuplicateRow(Sheet, Penerima()+i)
						}

						f.SetCellValue(Sheet, "E"+strconv.Itoa(Penerima()), key+1)
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()), "Nama")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+1), "Usia")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+2), "Tanggungan")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+3), "Alamat")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+4), "Telepon")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+1), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+2), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+3), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+4), ":")

						_ = f.MergeCell(Sheet, "E"+strconv.Itoa(Penerima()), "E"+strconv.Itoa(Penerima()+4))

						arrayKotak := []string{"E", "F", "G", "H", "J", "K"}
						for _, val := range arrayKotak {
							styleNumber, err := f.NewStyle(`{"border":[{"type":"left","color":"222222","style":1},{"type":"top","color":"222222","style":1},{"type":"bottom","color":"222222","style":1},{"type":"right","color":"222222","style":1}], "alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}`)

							if err != nil {
								fmt.Println(err)
							}

							err = f.SetCellStyle(Sheet, val+strconv.Itoa(Penerima()), val+strconv.Itoa(Penerima()+4), styleNumber)
						}

					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+1), val.Usia)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+2), val.Tanggungan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+3), val.Alamat)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+4), val.Telepon)

					PenerimaIndex += 5
				}
				fmt.Println(Hasil())
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+1), Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+2), Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+3), Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi)
				f.SetCellValue(Sheet, "C"+strconv.Itoa(Hasil()+11), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue(Sheet, "F"+strconv.Itoa(Hasil()+11), Pendaftaran.Verifikasi.Nama_pelaksana)

			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		// Kategori BSU
		case 7:
			Pendaftaran := &models.PendaftaranBSU{}
			result.Decode(Pendaftaran)
			nama = Pendaftaran.Muztahiks.Nama
			kategori = Pendaftaran.Persetujuan.Kategori_program
			if Pendaftaran.Verifikasi != nil {
				f.SetCellValue(Sheet, "F6", Pendaftaran.Verifikasi.Tanggal_verifikasi)
				f.SetCellValue(Sheet, "H8", Pendaftaran.Verifikasi.Nama_pelaksana)
				f.SetCellValue(Sheet, "H9", Pendaftaran.Verifikasi.Jabatan_pelaksana)
				f.SetCellValue(Sheet, "F11", Pendaftaran.Judul_proposal)
				f.SetCellValue(Sheet, "F12", Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "F13", Pendaftaran.Kategoris.Jumlah_bantuan)
				for _, val := range Pendaftaran.Verifikasi.Cara_verifikasi {
					if ok, _ := strconv.Atoi(val); ok == 1 {
						f.SetCellValue(Sheet, "H15", "V")
					} else if ok, _ := strconv.Atoi(val); ok == 2 {
						f.SetCellValue(Sheet, "H16", "V")
					}
				}

				for key, val := range Pendaftaran.Verifikasi.Pihak_konfirmasi {
					if key > 2 {
						break
					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+1), val.Lembaga)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+2), val.Jabatan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+3), val.Telepon)
					for key, val := range val.Hasil {
						if key <= 3 {
							f.SetCellValue(Sheet, "J"+strconv.Itoa(PihakIndex+key), key+1)
							f.SetCellValue(Sheet, "K"+strconv.Itoa(PihakIndex+key), val)
						}
					}

					PihakIndex += 4

				}
				if len(Pendaftaran.Verifikasi.Pihak_konfirmasi) < 3 {
					PihakIndex = 31
				}

				for key, val := range Pendaftaran.Verifikasi.Penerima_manfaat {
					if key > 0 {
						for i := 0; i <= 4; i++ {
							_ = f.DuplicateRow(Sheet, Penerima()+i)
						}

						f.SetCellValue(Sheet, "E"+strconv.Itoa(Penerima()), key+1)
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()), "Nama")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+1), "Usia")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+2), "Tanggungan")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+3), "Alamat")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+4), "Telepon")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+1), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+2), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+3), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+4), ":")

						_ = f.MergeCell(Sheet, "E"+strconv.Itoa(Penerima()), "E"+strconv.Itoa(Penerima()+4))

						arrayKotak := []string{"E", "F", "G", "H", "J", "K"}
						for _, val := range arrayKotak {
							styleNumber, err := f.NewStyle(`{"border":[{"type":"left","color":"222222","style":1},{"type":"top","color":"222222","style":1},{"type":"bottom","color":"222222","style":1},{"type":"right","color":"222222","style":1}], "alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}`)

							if err != nil {
								fmt.Println(err)
							}

							err = f.SetCellStyle(Sheet, val+strconv.Itoa(Penerima()), val+strconv.Itoa(Penerima()+4), styleNumber)
						}

					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+1), val.Usia)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+2), val.Tanggungan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+3), val.Alamat)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+4), val.Telepon)

					PenerimaIndex += 5
				}
				fmt.Println(Hasil())
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+1), Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+2), Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+3), Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi)
				f.SetCellValue(Sheet, "C"+strconv.Itoa(Hasil()+11), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue(Sheet, "F"+strconv.Itoa(Hasil()+11), Pendaftaran.Verifikasi.Nama_pelaksana)

			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		// Kategori Rescue
		case 8:
			Pendaftaran := &models.PendaftaranRescue{}
			result.Decode(Pendaftaran)
			nama = Pendaftaran.Muztahiks.Nama
			kategori = Pendaftaran.Persetujuan.Kategori_program
			t = Pendaftaran.Tanggal_proposal
			if Pendaftaran.Verifikasi != nil {
				f.SetCellValue(Sheet, "F6", Pendaftaran.Verifikasi.Tanggal_verifikasi)
				f.SetCellValue(Sheet, "H8", Pendaftaran.Verifikasi.Nama_pelaksana)
				f.SetCellValue(Sheet, "H9", Pendaftaran.Verifikasi.Jabatan_pelaksana)
				f.SetCellValue(Sheet, "F11", Pendaftaran.Judul_proposal)
				f.SetCellValue(Sheet, "F12", Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "F13", Pendaftaran.Kategoris.Jumlah_bantuan)
				for _, val := range Pendaftaran.Verifikasi.Cara_verifikasi {
					if ok, _ := strconv.Atoi(val); ok == 1 {
						f.SetCellValue(Sheet, "H15", "V")
					} else if ok, _ := strconv.Atoi(val); ok == 2 {
						f.SetCellValue(Sheet, "H16", "V")
					}
				}

				for key, val := range Pendaftaran.Verifikasi.Pihak_konfirmasi {
					if key > 2 {
						break
					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+1), val.Lembaga)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+2), val.Jabatan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+3), val.Telepon)
					for key, val := range val.Hasil {
						if key <= 3 {
							f.SetCellValue(Sheet, "J"+strconv.Itoa(PihakIndex+key), key+1)
							f.SetCellValue(Sheet, "K"+strconv.Itoa(PihakIndex+key), val)
						}
					}

					PihakIndex += 4

				}
				if len(Pendaftaran.Verifikasi.Pihak_konfirmasi) < 3 {
					PihakIndex = 31
				}

				for key, val := range Pendaftaran.Verifikasi.Penerima_manfaat {
					if key > 0 {
						for i := 0; i <= 4; i++ {
							_ = f.DuplicateRow(Sheet, Penerima()+i)
						}

						f.SetCellValue(Sheet, "E"+strconv.Itoa(Penerima()), key+1)
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()), "Nama")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+1), "Usia")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+2), "Tanggungan")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+3), "Alamat")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+4), "Telepon")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+1), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+2), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+3), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+4), ":")

						_ = f.MergeCell(Sheet, "E"+strconv.Itoa(Penerima()), "E"+strconv.Itoa(Penerima()+4))

						arrayKotak := []string{"E", "F", "G", "H", "J", "K"}
						for _, val := range arrayKotak {
							styleNumber, err := f.NewStyle(`{"border":[{"type":"left","color":"222222","style":1},{"type":"top","color":"222222","style":1},{"type":"bottom","color":"222222","style":1},{"type":"right","color":"222222","style":1}], "alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}`)

							if err != nil {
								fmt.Println(err)
							}

							err = f.SetCellStyle(Sheet, val+strconv.Itoa(Penerima()), val+strconv.Itoa(Penerima()+4), styleNumber)
						}

					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+1), val.Usia)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+2), val.Tanggungan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+3), val.Alamat)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+4), val.Telepon)

					PenerimaIndex += 5
				}
				fmt.Println(Hasil())
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+1), Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+2), Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+3), Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi)
				f.SetCellValue(Sheet, "C"+strconv.Itoa(Hasil()+11), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue(Sheet, "F"+strconv.Itoa(Hasil()+11), Pendaftaran.Verifikasi.Nama_pelaksana)

			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		// Kategori BTM
		case 9:
			Pendaftaran := &models.PendaftaranBTM{}
			result.Decode(Pendaftaran)
			nama = Pendaftaran.Muztahiks.Nama
			kategori = Pendaftaran.Persetujuan.Kategori_program
			t = Pendaftaran.Tanggal_proposal
			if Pendaftaran.Verifikasi != nil {
				f.SetCellValue(Sheet, "F6", Pendaftaran.Verifikasi.Tanggal_verifikasi)
				f.SetCellValue(Sheet, "H8", Pendaftaran.Verifikasi.Nama_pelaksana)
				f.SetCellValue(Sheet, "H9", Pendaftaran.Verifikasi.Jabatan_pelaksana)
				f.SetCellValue(Sheet, "F11", Pendaftaran.Judul_proposal)
				f.SetCellValue(Sheet, "F12", Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "F13", Pendaftaran.Kategoris.Jumlah_bantuan)
				for _, val := range Pendaftaran.Verifikasi.Cara_verifikasi {
					if ok, _ := strconv.Atoi(val); ok == 1 {
						f.SetCellValue(Sheet, "H15", "V")
					} else if ok, _ := strconv.Atoi(val); ok == 2 {
						f.SetCellValue(Sheet, "H16", "V")
					}
				}

				for key, val := range Pendaftaran.Verifikasi.Pihak_konfirmasi {
					if key > 2 {
						break
					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+1), val.Lembaga)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+2), val.Jabatan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+3), val.Telepon)
					for key, val := range val.Hasil {
						if key <= 3 {
							f.SetCellValue(Sheet, "J"+strconv.Itoa(PihakIndex+key), key+1)
							f.SetCellValue(Sheet, "K"+strconv.Itoa(PihakIndex+key), val)
						}
					}

					PihakIndex += 4

				}
				if len(Pendaftaran.Verifikasi.Pihak_konfirmasi) < 3 {
					PihakIndex = 31
				}

				for key, val := range Pendaftaran.Verifikasi.Penerima_manfaat {
					if key > 0 {
						for i := 0; i <= 4; i++ {
							_ = f.DuplicateRow(Sheet, Penerima()+i)
						}

						f.SetCellValue(Sheet, "E"+strconv.Itoa(Penerima()), key+1)
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()), "Nama")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+1), "Usia")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+2), "Tanggungan")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+3), "Alamat")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+4), "Telepon")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+1), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+2), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+3), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+4), ":")

						_ = f.MergeCell(Sheet, "E"+strconv.Itoa(Penerima()), "E"+strconv.Itoa(Penerima()+4))

						arrayKotak := []string{"E", "F", "G", "H", "J", "K"}
						for _, val := range arrayKotak {
							styleNumber, err := f.NewStyle(`{"border":[{"type":"left","color":"222222","style":1},{"type":"top","color":"222222","style":1},{"type":"bottom","color":"222222","style":1},{"type":"right","color":"222222","style":1}], "alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}`)

							if err != nil {
								fmt.Println(err)
							}

							err = f.SetCellStyle(Sheet, val+strconv.Itoa(Penerima()), val+strconv.Itoa(Penerima()+4), styleNumber)
						}

					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+1), val.Usia)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+2), val.Tanggungan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+3), val.Alamat)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+4), val.Telepon)

					PenerimaIndex += 5
				}
				fmt.Println(Hasil())
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+1), Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+2), Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+3), Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi)
				f.SetCellValue(Sheet, "C"+strconv.Itoa(Hasil()+11), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue(Sheet, "F"+strconv.Itoa(Hasil()+11), Pendaftaran.Verifikasi.Nama_pelaksana)

			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		// Kategori BSM
		case 10:
			Pendaftaran := &models.PendaftaranBSM{}
			result.Decode(Pendaftaran)
			nama = Pendaftaran.Muztahiks.Nama
			kategori = Pendaftaran.Persetujuan.Kategori_program
			t = Pendaftaran.Tanggal_proposal
			if Pendaftaran.Verifikasi != nil {
				f.SetCellValue(Sheet, "F6", Pendaftaran.Verifikasi.Tanggal_verifikasi)
				f.SetCellValue(Sheet, "H8", Pendaftaran.Verifikasi.Nama_pelaksana)
				f.SetCellValue(Sheet, "H9", Pendaftaran.Verifikasi.Jabatan_pelaksana)
				f.SetCellValue(Sheet, "F11", Pendaftaran.Judul_proposal)
				f.SetCellValue(Sheet, "F12", Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "F13", Pendaftaran.Kategoris.Jumlah_bantuan)
				for _, val := range Pendaftaran.Verifikasi.Cara_verifikasi {
					if ok, _ := strconv.Atoi(val); ok == 1 {
						f.SetCellValue(Sheet, "H15", "V")
					} else if ok, _ := strconv.Atoi(val); ok == 2 {
						f.SetCellValue(Sheet, "H16", "V")
					}
				}

				for key, val := range Pendaftaran.Verifikasi.Pihak_konfirmasi {
					if key > 2 {
						break
					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+1), val.Lembaga)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+2), val.Jabatan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+3), val.Telepon)
					for key, val := range val.Hasil {
						if key <= 3 {
							f.SetCellValue(Sheet, "J"+strconv.Itoa(PihakIndex+key), key+1)
							f.SetCellValue(Sheet, "K"+strconv.Itoa(PihakIndex+key), val)
						}
					}

					PihakIndex += 4

				}
				if len(Pendaftaran.Verifikasi.Pihak_konfirmasi) < 3 {
					PihakIndex = 31
				}

				for key, val := range Pendaftaran.Verifikasi.Penerima_manfaat {
					if key > 0 {
						for i := 0; i <= 4; i++ {
							_ = f.DuplicateRow(Sheet, Penerima()+i)
						}

						f.SetCellValue(Sheet, "E"+strconv.Itoa(Penerima()), key+1)
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()), "Nama")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+1), "Usia")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+2), "Tanggungan")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+3), "Alamat")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+4), "Telepon")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+1), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+2), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+3), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+4), ":")

						_ = f.MergeCell(Sheet, "E"+strconv.Itoa(Penerima()), "E"+strconv.Itoa(Penerima()+4))

						arrayKotak := []string{"E", "F", "G", "H", "J", "K"}
						for _, val := range arrayKotak {
							styleNumber, err := f.NewStyle(`{"border":[{"type":"left","color":"222222","style":1},{"type":"top","color":"222222","style":1},{"type":"bottom","color":"222222","style":1},{"type":"right","color":"222222","style":1}], "alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}`)

							if err != nil {
								fmt.Println(err)
							}

							err = f.SetCellStyle(Sheet, val+strconv.Itoa(Penerima()), val+strconv.Itoa(Penerima()+4), styleNumber)
						}

					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+1), val.Usia)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+2), val.Tanggungan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+3), val.Alamat)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+4), val.Telepon)

					PenerimaIndex += 5
				}
				fmt.Println(Hasil())
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+1), Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+2), Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+3), Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi)
				f.SetCellValue(Sheet, "C"+strconv.Itoa(Hasil()+11), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue(Sheet, "F"+strconv.Itoa(Hasil()+11), Pendaftaran.Verifikasi.Nama_pelaksana)

			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		// Kategori BCM
		case 11:
			Pendaftaran := &models.PendaftaranBCM{}
			result.Decode(Pendaftaran)
			nama = Pendaftaran.Muztahiks.Nama
			kategori = Pendaftaran.Persetujuan.Kategori_program
			t = Pendaftaran.Tanggal_proposal
			if Pendaftaran.Verifikasi != nil {
				f.SetCellValue(Sheet, "F6", Pendaftaran.Verifikasi.Tanggal_verifikasi)
				f.SetCellValue(Sheet, "H8", Pendaftaran.Verifikasi.Nama_pelaksana)
				f.SetCellValue(Sheet, "H9", Pendaftaran.Verifikasi.Jabatan_pelaksana)
				f.SetCellValue(Sheet, "F11", Pendaftaran.Judul_proposal)
				f.SetCellValue(Sheet, "F12", Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "F13", Pendaftaran.Kategoris.Jumlah_bantuan)
				for _, val := range Pendaftaran.Verifikasi.Cara_verifikasi {
					if ok, _ := strconv.Atoi(val); ok == 1 {
						f.SetCellValue(Sheet, "H15", "V")
					} else if ok, _ := strconv.Atoi(val); ok == 2 {
						f.SetCellValue(Sheet, "H16", "V")
					}
				}

				for key, val := range Pendaftaran.Verifikasi.Pihak_konfirmasi {
					if key > 2 {
						break
					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+1), val.Lembaga)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+2), val.Jabatan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+3), val.Telepon)
					for key, val := range val.Hasil {
						if key <= 3 {
							f.SetCellValue(Sheet, "J"+strconv.Itoa(PihakIndex+key), key+1)
							f.SetCellValue(Sheet, "K"+strconv.Itoa(PihakIndex+key), val)
						}
					}

					PihakIndex += 4

				}

				for key, val := range Pendaftaran.Verifikasi.Penerima_manfaat {
					if key > 0 {
						for i := 0; i <= 4; i++ {
							_ = f.DuplicateRow(Sheet, Penerima()+i)
						}

						f.SetCellValue(Sheet, "E"+strconv.Itoa(Penerima()), key+1)
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()), "Nama")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+1), "Usia")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+2), "Tanggungan")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+3), "Alamat")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+4), "Telepon")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+1), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+2), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+3), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+4), ":")

						_ = f.MergeCell(Sheet, "E"+strconv.Itoa(Penerima()), "E"+strconv.Itoa(Penerima()+4))

						arrayKotak := []string{"E", "F", "G", "H", "J", "K"}
						for _, val := range arrayKotak {
							styleNumber, err := f.NewStyle(`{"border":[{"type":"left","color":"222222","style":1},{"type":"top","color":"222222","style":1},{"type":"bottom","color":"222222","style":1},{"type":"right","color":"222222","style":1}], "alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}`)

							if err != nil {
								fmt.Println(err)
							}

							err = f.SetCellStyle(Sheet, val+strconv.Itoa(Penerima()), val+strconv.Itoa(Penerima()+4), styleNumber)
						}

					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+1), val.Usia)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+2), val.Tanggungan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+3), val.Alamat)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+4), val.Telepon)

					PenerimaIndex += 5
				}
				fmt.Println(Hasil())
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+1), Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+2), Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+3), Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi)
				f.SetCellValue(Sheet, "C"+strconv.Itoa(Hasil()+11), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue(Sheet, "F"+strconv.Itoa(Hasil()+11), Pendaftaran.Verifikasi.Nama_pelaksana)

			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		// Kategori ASM
		case 12:
			Pendaftaran := &models.PendaftaranASM{}
			result.Decode(Pendaftaran)
			nama = Pendaftaran.Muztahiks.Nama
			kategori = Pendaftaran.Persetujuan.Kategori_program
			t = Pendaftaran.Tanggal_proposal
			if Pendaftaran.Verifikasi != nil {
				f.SetCellValue(Sheet, "F6", Pendaftaran.Verifikasi.Tanggal_verifikasi)
				f.SetCellValue(Sheet, "H8", Pendaftaran.Verifikasi.Nama_pelaksana)
				f.SetCellValue(Sheet, "H9", Pendaftaran.Verifikasi.Jabatan_pelaksana)
				f.SetCellValue(Sheet, "F11", Pendaftaran.Judul_proposal)
				f.SetCellValue(Sheet, "F12", Pendaftaran.Verifikasi.Bentuk_bantuan)
				f.SetCellValue(Sheet, "F13", Pendaftaran.Kategoris.Jumlah_bantuan)
				for _, val := range Pendaftaran.Verifikasi.Cara_verifikasi {
					if ok, _ := strconv.Atoi(val); ok == 1 {
						f.SetCellValue(Sheet, "H15", "V")
					} else if ok, _ := strconv.Atoi(val); ok == 2 {
						f.SetCellValue(Sheet, "H16", "V")
					}
				}

				for key, val := range Pendaftaran.Verifikasi.Pihak_konfirmasi {
					if key > 2 {
						break
					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+1), val.Lembaga)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+2), val.Jabatan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(PihakIndex+3), val.Telepon)
					for key, val := range val.Hasil {
						if key <= 3 {
							f.SetCellValue(Sheet, "J"+strconv.Itoa(PihakIndex+key), key+1)
							f.SetCellValue(Sheet, "K"+strconv.Itoa(PihakIndex+key), val)
						}
					}

					PihakIndex += 4

				}

				for key, val := range Pendaftaran.Verifikasi.Penerima_manfaat {
					if key > 0 {
						for i := 0; i <= 4; i++ {
							_ = f.DuplicateRow(Sheet, Penerima()+i)
						}

						f.SetCellValue(Sheet, "E"+strconv.Itoa(Penerima()), key+1)
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()), "Nama")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+1), "Usia")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+2), "Tanggungan")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+3), "Alamat")
						f.SetCellValue(Sheet, "F"+strconv.Itoa(Penerima()+4), "Telepon")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+1), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+2), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+3), ":")
						f.SetCellValue(Sheet, "G"+strconv.Itoa(Penerima()+4), ":")

						_ = f.MergeCell(Sheet, "E"+strconv.Itoa(Penerima()), "E"+strconv.Itoa(Penerima()+4))

						arrayKotak := []string{"E", "F", "G", "H", "J", "K"}
						for _, val := range arrayKotak {
							styleNumber, err := f.NewStyle(`{"border":[{"type":"left","color":"222222","style":1},{"type":"top","color":"222222","style":1},{"type":"bottom","color":"222222","style":1},{"type":"right","color":"222222","style":1}], "alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}`)

							if err != nil {
								fmt.Println(err)
							}

							err = f.SetCellStyle(Sheet, val+strconv.Itoa(Penerima()), val+strconv.Itoa(Penerima()+4), styleNumber)
						}

					}
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()), val.Nama)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+1), val.Usia)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+2), val.Tanggungan)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+3), val.Alamat)
					f.SetCellValue(Sheet, "H"+strconv.Itoa(Penerima()+4), val.Telepon)

					PenerimaIndex += 5
				}
				fmt.Println(Hasil())
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()), Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+1), Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+2), Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan)
				f.SetCellValue(Sheet, "H"+strconv.Itoa(Hasil()+3), Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi)
				f.SetCellValue(Sheet, "C"+strconv.Itoa(Hasil()+11), Pendaftaran.Persetujuan.Manager_nama)
				f.SetCellValue(Sheet, "F"+strconv.Itoa(Hasil()+11), Pendaftaran.Verifikasi.Nama_pelaksana)

			} else {
				c.JSON(500, gin.H{
					"data": "Belum Membuat UPD",
				})
				return
			}
		default:
			{
				c.JSON(500, gin.H{
					"data": "Kategori tidak ditemukan",
				})
			}
		}

		url := strings.Replace("/public/report/Verifikasi_"+t.Format("02_Jan_2006 15_04_05")+"_"+nama+" "+kategori+".xlsx", " ", "_", -1)
		err = f.SaveAs("." + url)
		if err != nil {
			fmt.Println(err)
		}

		c.JSON(200, gin.H{
			"data": "report has been created",
			"url":  url,
		})
		return
	}
}

func KomiteProposal(c *gin.Context) {

	/* ---------------------------- Start of GET Data ---------------------------*/
	var (
		Sheet          string
		nama, kategori string
	)

	PihakIndex, PenerimaIndex, HasilIndex := 19, 0, 0
	Penerima := func() int {
		return PihakIndex + 2 + PenerimaIndex
	}

	Hasil := func() int {
		return Penerima() + 2 + HasilIndex
	}

	_ = Penerima() + Hasil()

	t := time.Now()

	collection := db.Collection("pendaftaran")
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)
	//claims := c.MustGet("decoded").(*models.Claims)
	_id, _ := primitive.ObjectIDFromHex(c.Param("id"))
	Kat, _ := strconv.Atoi(c.Param("kat"))
	filter := bson.D{{"_id", _id}, {"kategori", Kat}}

	//get data taro di cursor
	result := collection.FindOne(ctx, filter)
	// if err != nil {
	// 	c.JSON(500, gin.H{
	// 		"data": "Id tidak ditemukan",
	// 	})
	// 	return
	// }

	/* ---------------------------- End of GET Data ---------------------------*/

	/* ---------------------------- Start of Setup Excel ---------------------------*/

	f, err := excelize.OpenFile("./public/report/KOMITE.xlsx")
	if err != nil {
		c.JSON(500, gin.H{
			"data": "Data dasar tidak ditemukan",
		})
		return
	}

	if Kat == 0 {
		// If the structure of the body is wrong, return an HTTP error
		// fmt.Println(err)
	} else {
		switch Kat {
			// Kategori KSM
			case 1:
				Pendaftaran := &models.PendaftaranKSM{}
				result.Decode(Pendaftaran)
				level := CekBantuan(Pendaftaran.Kategoris.Jumlah_bantuan)
				Sheet = "KOMITE ORIGINAL level " + level
				nama = Pendaftaran.Muztahiks.Nama
				kategori = Pendaftaran.Persetujuan.Kategori_program
				t = Pendaftaran.Tanggal_proposal
				f.SetCellValue(Sheet, "D7", Pendaftaran.Persetujuan.Tanggal_komite.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "I7", Pendaftaran.Persetujuan.Nomor_permohonan)
				f.SetCellValue(Sheet, "D8", Pendaftaran.Kategoris.Sub_program)
				f.SetCellValue(Sheet, "D9", Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue(Sheet, "D10", Pendaftaran.Tujuan_proposal)
				f.SetCellValue(Sheet, "E11", Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue(Sheet, "I11", Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue(Sheet, "F14", Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "I14", Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue(Sheet, "G17", Terbilang(int64(Pendaftaran.Kategoris.Jumlah_bantuan)) + " Rupiah ")
				f.SetCellValue(Sheet, "E18", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat)
				f.SetCellValue(Sheet, "D21", Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "G21", CekAsnaf(Pendaftaran.Kategoris.Asnaf))
				f.SetCellValue(Sheet, "D22", Pendaftaran.Persetujuan.Mitra_pelaksana)
				f.SetCellValue(Sheet, "D23", Pendaftaran.Persetujuan.Tanggal_pelaksanaan.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "D24", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellValue(Sheet, "E25", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellFormula(Sheet, "F17", "=F14")
				var numKadiv,numPengurus, numPengawas  [][]string
				switch val, _ := strconv.Atoi(level); val {
				case 1:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					kadiv :=  0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}
					}
				case 2:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
					}
					
					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							fmt.Println( numKadiv[kadiv][0])
							fmt.Println( numKadiv[kadiv][2])
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 3:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}

					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 4:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}
					numPengawas = [][]string{
						[]string{
							"B48",
							"E49",
							"G49",
						},
					}
					kadiv, pengurus, pengawas :=  0, 0,0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}else if val.User.Role == 8 {
							f.SetCellValue(Sheet, numPengawas[pengawas][0], val.User.Name)
							f.SetCellValue(Sheet, numPengawas[pengawas][2], val.Catatan)
							pengurus++
						}
						
					}
				}

			case 2:
				Pendaftaran := &models.PendaftaranRBM{}
				result.Decode(Pendaftaran)
				level := CekBantuan(Pendaftaran.Kategoris.Jumlah_bantuan)
				Sheet = "KOMITE ORIGINAL level " + level
				nama = Pendaftaran.Muztahiks.Nama
				t = Pendaftaran.Tanggal_proposal
				kategori = Pendaftaran.Persetujuan.Kategori_program
				f.SetCellValue(Sheet, "D7", Pendaftaran.Persetujuan.Tanggal_komite.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "I7", Pendaftaran.Persetujuan.Nomor_permohonan)
				f.SetCellValue(Sheet, "D8", Pendaftaran.Kategoris.Sub_program)
				f.SetCellValue(Sheet, "D9", Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue(Sheet, "D10", Pendaftaran.Tujuan_proposal)
				f.SetCellValue(Sheet, "E11", Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue(Sheet, "I11", Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue(Sheet, "F14", Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "I14", Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue(Sheet, "G17", Terbilang(int64(Pendaftaran.Kategoris.Jumlah_bantuan)) + " Rupiah ")
				f.SetCellValue(Sheet, "E18", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat)
				f.SetCellValue(Sheet, "D21", Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "G21", CekAsnaf(Pendaftaran.Kategoris.Asnaf))
				f.SetCellValue(Sheet, "D22", Pendaftaran.Persetujuan.Mitra_pelaksana)
				f.SetCellValue(Sheet, "D23", Pendaftaran.Persetujuan.Tanggal_pelaksanaan.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "D24", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellValue(Sheet, "E25", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellFormula(Sheet, "F17", "=F14")
				var numKadiv,numPengurus, numPengawas  [][]string
				switch val, _ := strconv.Atoi(level); val {
				case 1:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					kadiv :=  0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}
					}
				case 2:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
					}
					
					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							fmt.Println( numKadiv[kadiv][0])
							fmt.Println( numKadiv[kadiv][2])
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 3:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}

					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 4:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}
					numPengawas = [][]string{
						[]string{
							"B48",
							"E49",
							"G49",
						},
					}
					kadiv, pengurus, pengawas :=  0, 0,0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}else if val.User.Role == 8 {
							f.SetCellValue(Sheet, numPengawas[pengawas][0], val.User.Name)
							f.SetCellValue(Sheet, numPengawas[pengawas][2], val.Catatan)
							pengurus++
						}
						
					}
				}
			// Kategori PAUD
			case 3:
				Pendaftaran := &models.PendaftaranPAUD{}
				result.Decode(Pendaftaran)
				level := CekBantuan(Pendaftaran.Kategoris.Jumlah_bantuan)
				Sheet = "KOMITE ORIGINAL level " + level
				nama = Pendaftaran.Muztahiks.Nama
				t = Pendaftaran.Tanggal_proposal
				kategori = Pendaftaran.Persetujuan.Kategori_program
				f.SetCellValue(Sheet, "D7", Pendaftaran.Persetujuan.Tanggal_komite.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "I7", Pendaftaran.Persetujuan.Nomor_permohonan)
				f.SetCellValue(Sheet, "D8", Pendaftaran.Kategoris.Sub_program)
				f.SetCellValue(Sheet, "D9", Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue(Sheet, "D10", Pendaftaran.Tujuan_proposal)
				f.SetCellValue(Sheet, "E11", Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue(Sheet, "I11", Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue(Sheet, "F14", Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "I14", Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue(Sheet, "G17", Terbilang(int64(Pendaftaran.Kategoris.Jumlah_bantuan)) + " Rupiah ")
				f.SetCellValue(Sheet, "E18", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat)
				f.SetCellValue(Sheet, "D21", Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "G21", CekAsnaf(Pendaftaran.Kategoris.Asnaf))
				f.SetCellValue(Sheet, "D22", Pendaftaran.Persetujuan.Mitra_pelaksana)
				f.SetCellValue(Sheet, "D23", Pendaftaran.Persetujuan.Tanggal_pelaksanaan.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "D24", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellValue(Sheet, "E25", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellFormula(Sheet, "F17", "=F14")
				var numKadiv,numPengurus, numPengawas  [][]string
				switch val, _ := strconv.Atoi(level); val {
				case 1:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					kadiv :=  0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}
					}
				case 2:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
					}
					
					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							fmt.Println( numKadiv[kadiv][0])
							fmt.Println( numKadiv[kadiv][2])
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 3:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}

					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 4:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}
					numPengawas = [][]string{
						[]string{
							"B48",
							"E49",
							"G49",
						},
					}
					kadiv, pengurus, pengawas :=  0, 0,0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}else if val.User.Role == 8 {
							f.SetCellValue(Sheet, numPengawas[pengawas][0], val.User.Name)
							f.SetCellValue(Sheet, numPengawas[pengawas][2], val.Catatan)
							pengurus++
						}
						
					}
				}
			// Kategori KAFALA
			case 4:
				
				Pendaftaran := &models.PendaftaranKAFALA{}
				result.Decode(Pendaftaran)
				level := CekBantuan(Pendaftaran.Kategoris.Jumlah_bantuan)
				Sheet = "KOMITE ORIGINAL level " + level
				nama = Pendaftaran.Muztahiks.Nama
				t = Pendaftaran.Tanggal_proposal
				kategori = Pendaftaran.Persetujuan.Kategori_program
				f.SetCellValue(Sheet, "D7", Pendaftaran.Persetujuan.Tanggal_komite.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "I7", Pendaftaran.Persetujuan.Nomor_permohonan)
				f.SetCellValue(Sheet, "D8", Pendaftaran.Kategoris.Sub_program)
				f.SetCellValue(Sheet, "D9", Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue(Sheet, "D10", Pendaftaran.Tujuan_proposal)
				f.SetCellValue(Sheet, "E11", Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue(Sheet, "I11", Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue(Sheet, "F14", Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "I14", Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue(Sheet, "G17", Terbilang(int64(Pendaftaran.Kategoris.Jumlah_bantuan)) + " Rupiah ")
				f.SetCellValue(Sheet, "E18", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat)
				f.SetCellValue(Sheet, "D21", Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "G21", CekAsnaf(Pendaftaran.Kategoris.Asnaf))
				f.SetCellValue(Sheet, "D22", Pendaftaran.Persetujuan.Mitra_pelaksana)
				f.SetCellValue(Sheet, "D23", Pendaftaran.Persetujuan.Tanggal_pelaksanaan.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "D24", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellValue(Sheet, "E25", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellFormula(Sheet, "F17", "=F14")
				var numKadiv,numPengurus, numPengawas  [][]string
				switch val, _ := strconv.Atoi(level); val {
				case 1:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					kadiv :=  0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}
					}
				case 2:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
					}
					
					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							fmt.Println( numKadiv[kadiv][0])
							fmt.Println( numKadiv[kadiv][2])
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 3:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}

					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 4:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}
					numPengawas = [][]string{
						[]string{
							"B48",
							"E49",
							"G49",
						},
					}
					kadiv, pengurus, pengawas :=  0, 0,0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}else if val.User.Role == 8 {
							f.SetCellValue(Sheet, numPengawas[pengawas][0], val.User.Name)
							f.SetCellValue(Sheet, numPengawas[pengawas][2], val.Catatan)
							pengurus++
						}
						
					}
				}
			
			// Kategori JSM
			case 5:
				
				Pendaftaran := &models.PendaftaranJSM{}
				result.Decode(Pendaftaran)
				level := CekBantuan(Pendaftaran.Kategoris.Jumlah_bantuan)
				Sheet = "KOMITE ORIGINAL level " + level
				nama = Pendaftaran.Muztahiks.Nama
				t = Pendaftaran.Tanggal_proposal
				kategori = Pendaftaran.Persetujuan.Kategori_program
				f.SetCellValue(Sheet, "D7", Pendaftaran.Persetujuan.Tanggal_komite.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "I7", Pendaftaran.Persetujuan.Nomor_permohonan)
				f.SetCellValue(Sheet, "D8", Pendaftaran.Kategoris.Sub_program)
				f.SetCellValue(Sheet, "D9", Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue(Sheet, "D10", Pendaftaran.Tujuan_proposal)
				f.SetCellValue(Sheet, "E11", Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue(Sheet, "I11", Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue(Sheet, "F14", Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "I14", Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue(Sheet, "G17", Terbilang(int64(Pendaftaran.Kategoris.Jumlah_bantuan)) + " Rupiah ")
				f.SetCellValue(Sheet, "E18", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat)
				f.SetCellValue(Sheet, "D21", Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "G21", CekAsnaf(Pendaftaran.Kategoris.Asnaf))
				f.SetCellValue(Sheet, "D22", Pendaftaran.Persetujuan.Mitra_pelaksana)
				f.SetCellValue(Sheet, "D23", Pendaftaran.Persetujuan.Tanggal_pelaksanaan.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "D24", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellValue(Sheet, "E25", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellFormula(Sheet, "F17", "=F14")
				var numKadiv,numPengurus, numPengawas  [][]string
				switch val, _ := strconv.Atoi(level); val {
				case 1:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					kadiv :=  0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}
					}
				case 2:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
					}
					
					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							fmt.Println( numKadiv[kadiv][0])
							fmt.Println( numKadiv[kadiv][2])
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 3:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}

					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 4:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}
					numPengawas = [][]string{
						[]string{
							"B48",
							"E49",
							"G49",
						},
					}
					kadiv, pengurus, pengawas :=  0, 0,0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}else if val.User.Role == 8 {
							f.SetCellValue(Sheet, numPengawas[pengawas][0], val.User.Name)
							f.SetCellValue(Sheet, numPengawas[pengawas][2], val.Catatan)
							pengurus++
						}
						
					}
				}
			
			// Kategori DZM
			case 6:
				
				Pendaftaran := &models.PendaftaranDZM{}
				result.Decode(Pendaftaran)
				level := CekBantuan(Pendaftaran.Kategoris.Jumlah_bantuan)
				Sheet = "KOMITE ORIGINAL level " + level
				nama = Pendaftaran.Muztahiks.Nama
				t = Pendaftaran.Tanggal_proposal
				kategori = Pendaftaran.Persetujuan.Kategori_program
				f.SetCellValue(Sheet, "D7", Pendaftaran.Persetujuan.Tanggal_komite.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "I7", Pendaftaran.Persetujuan.Nomor_permohonan)
				f.SetCellValue(Sheet, "D8", Pendaftaran.Kategoris.Sub_program)
				f.SetCellValue(Sheet, "D9", Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue(Sheet, "D10", Pendaftaran.Tujuan_proposal)
				f.SetCellValue(Sheet, "E11", Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue(Sheet, "I11", Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue(Sheet, "F14", Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "I14", Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue(Sheet, "G17", Terbilang(int64(Pendaftaran.Kategoris.Jumlah_bantuan)) + " Rupiah ")
				f.SetCellValue(Sheet, "E18", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat)
				f.SetCellValue(Sheet, "D21", Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "G21", CekAsnaf(Pendaftaran.Kategoris.Asnaf))
				f.SetCellValue(Sheet, "D22", Pendaftaran.Persetujuan.Mitra_pelaksana)
				f.SetCellValue(Sheet, "D23", Pendaftaran.Persetujuan.Tanggal_pelaksanaan.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "D24", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellValue(Sheet, "E25", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellFormula(Sheet, "F17", "=F14")
				var numKadiv,numPengurus, numPengawas  [][]string
				switch val, _ := strconv.Atoi(level); val {
				case 1:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					kadiv :=  0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}
					}
				case 2:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
					}
					
					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							fmt.Println( numKadiv[kadiv][0])
							fmt.Println( numKadiv[kadiv][2])
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 3:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}

					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 4:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}
					numPengawas = [][]string{
						[]string{
							"B48",
							"E49",
							"G49",
						},
					}
					kadiv, pengurus, pengawas :=  0, 0,0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}else if val.User.Role == 8 {
							f.SetCellValue(Sheet, numPengawas[pengawas][0], val.User.Name)
							f.SetCellValue(Sheet, numPengawas[pengawas][2], val.Catatan)
							pengurus++
						}
						
					}
				}
			
			// Kategori BSU
			case 7:
				
				Pendaftaran := &models.PendaftaranBSU{}
				result.Decode(Pendaftaran)
				level := CekBantuan(Pendaftaran.Kategoris.Jumlah_bantuan)
				Sheet = "KOMITE ORIGINAL level " + level
				nama = Pendaftaran.Muztahiks.Nama
				t = Pendaftaran.Tanggal_proposal
				kategori = Pendaftaran.Persetujuan.Kategori_program
				f.SetCellValue(Sheet, "D7", Pendaftaran.Persetujuan.Tanggal_komite.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "I7", Pendaftaran.Persetujuan.Nomor_permohonan)
				f.SetCellValue(Sheet, "D8", Pendaftaran.Kategoris.Sub_program)
				f.SetCellValue(Sheet, "D9", Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue(Sheet, "D10", Pendaftaran.Tujuan_proposal)
				f.SetCellValue(Sheet, "E11", Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue(Sheet, "I11", Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue(Sheet, "F14", Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "I14", Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue(Sheet, "G17", Terbilang(int64(Pendaftaran.Kategoris.Jumlah_bantuan)) + " Rupiah ")
				f.SetCellValue(Sheet, "E18", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat)
				f.SetCellValue(Sheet, "D21", Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "G21", CekAsnaf(Pendaftaran.Kategoris.Asnaf))
				f.SetCellValue(Sheet, "D22", Pendaftaran.Persetujuan.Mitra_pelaksana)
				f.SetCellValue(Sheet, "D23", Pendaftaran.Persetujuan.Tanggal_pelaksanaan.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "D24", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellValue(Sheet, "E25", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellFormula(Sheet, "F17", "=F14")
				var numKadiv,numPengurus, numPengawas  [][]string
				switch val, _ := strconv.Atoi(level); val {
				case 1:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					kadiv :=  0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}
					}
				case 2:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
					}
					
					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							fmt.Println( numKadiv[kadiv][0])
							fmt.Println( numKadiv[kadiv][2])
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 3:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}

					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 4:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}
					numPengawas = [][]string{
						[]string{
							"B48",
							"E49",
							"G49",
						},
					}
					kadiv, pengurus, pengawas :=  0, 0,0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}else if val.User.Role == 8 {
							f.SetCellValue(Sheet, numPengawas[pengawas][0], val.User.Name)
							f.SetCellValue(Sheet, numPengawas[pengawas][2], val.Catatan)
							pengurus++
						}
						
					}
				}
			
			// Kategori Rescue
			case 8:
				
				Pendaftaran := &models.PendaftaranRescue{}
				result.Decode(Pendaftaran)
				level := CekBantuan(Pendaftaran.Kategoris.Jumlah_bantuan)
				Sheet = "KOMITE ORIGINAL level " + level
				nama = Pendaftaran.Muztahiks.Nama
				t = Pendaftaran.Tanggal_proposal
				kategori = Pendaftaran.Persetujuan.Kategori_program
				f.SetCellValue(Sheet, "D7", Pendaftaran.Persetujuan.Tanggal_komite.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "I7", Pendaftaran.Persetujuan.Nomor_permohonan)
				f.SetCellValue(Sheet, "D8", Pendaftaran.Kategoris.Sub_program)
				f.SetCellValue(Sheet, "D9", Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue(Sheet, "D10", Pendaftaran.Tujuan_proposal)
				f.SetCellValue(Sheet, "E11", Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue(Sheet, "I11", Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue(Sheet, "F14", Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "I14", Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue(Sheet, "G17", Terbilang(int64(Pendaftaran.Kategoris.Jumlah_bantuan)) + " Rupiah ")
				f.SetCellValue(Sheet, "E18", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat)
				f.SetCellValue(Sheet, "D21", Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "G21", CekAsnaf(Pendaftaran.Kategoris.Asnaf))
				f.SetCellValue(Sheet, "D22", Pendaftaran.Persetujuan.Mitra_pelaksana)
				f.SetCellValue(Sheet, "D23", Pendaftaran.Persetujuan.Tanggal_pelaksanaan.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "D24", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellValue(Sheet, "E25", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellFormula(Sheet, "F17", "=F14")
				var numKadiv,numPengurus, numPengawas  [][]string
				switch val, _ := strconv.Atoi(level); val {
				case 1:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					kadiv :=  0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}
					}
				case 2:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
					}
					
					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							fmt.Println( numKadiv[kadiv][0])
							fmt.Println( numKadiv[kadiv][2])
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 3:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}

					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 4:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}
					numPengawas = [][]string{
						[]string{
							"B48",
							"E49",
							"G49",
						},
					}
					kadiv, pengurus, pengawas :=  0, 0,0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}else if val.User.Role == 8 {
							f.SetCellValue(Sheet, numPengawas[pengawas][0], val.User.Name)
							f.SetCellValue(Sheet, numPengawas[pengawas][2], val.Catatan)
							pengurus++
						}
						
					}
				}
			
			// Kategori BTM
			case 9:
				
				Pendaftaran := &models.PendaftaranBTM{}
				result.Decode(Pendaftaran)
				level := CekBantuan(Pendaftaran.Kategoris.Jumlah_bantuan)
				Sheet = "KOMITE ORIGINAL level " + level
				nama = Pendaftaran.Muztahiks.Nama
				t = Pendaftaran.Tanggal_proposal
				kategori = Pendaftaran.Persetujuan.Kategori_program
				f.SetCellValue(Sheet, "D7", Pendaftaran.Persetujuan.Tanggal_komite.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "I7", Pendaftaran.Persetujuan.Nomor_permohonan)
				f.SetCellValue(Sheet, "D8", Pendaftaran.Kategoris.Sub_program)
				f.SetCellValue(Sheet, "D9", Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue(Sheet, "D10", Pendaftaran.Tujuan_proposal)
				f.SetCellValue(Sheet, "E11", Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue(Sheet, "I11", Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue(Sheet, "F14", Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "I14", Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue(Sheet, "G17", Terbilang(int64(Pendaftaran.Kategoris.Jumlah_bantuan)) + " Rupiah ")
				f.SetCellValue(Sheet, "E18", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat)
				f.SetCellValue(Sheet, "D21", Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "G21", CekAsnaf(Pendaftaran.Kategoris.Asnaf))
				f.SetCellValue(Sheet, "D22", Pendaftaran.Persetujuan.Mitra_pelaksana)
				f.SetCellValue(Sheet, "D23", Pendaftaran.Persetujuan.Tanggal_pelaksanaan.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "D24", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellValue(Sheet, "E25", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellFormula(Sheet, "F17", "=F14")
				var numKadiv,numPengurus, numPengawas  [][]string
				switch val, _ := strconv.Atoi(level); val {
				case 1:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					kadiv :=  0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}
					}
				case 2:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
					}
					
					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							fmt.Println( numKadiv[kadiv][0])
							fmt.Println( numKadiv[kadiv][2])
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 3:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}

					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 4:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}
					numPengawas = [][]string{
						[]string{
							"B48",
							"E49",
							"G49",
						},
					}
					kadiv, pengurus, pengawas :=  0, 0,0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}else if val.User.Role == 8 {
							f.SetCellValue(Sheet, numPengawas[pengawas][0], val.User.Name)
							f.SetCellValue(Sheet, numPengawas[pengawas][2], val.Catatan)
							pengurus++
						}
						
					}
				}
			
			// Kategori BSM
			case 10:
				
				Pendaftaran := &models.PendaftaranBSM{}
				result.Decode(Pendaftaran)
				level := CekBantuan(Pendaftaran.Kategoris.Jumlah_bantuan)
				Sheet = "KOMITE ORIGINAL level " + level
				nama = Pendaftaran.Muztahiks.Nama
				t = Pendaftaran.Tanggal_proposal
				kategori = Pendaftaran.Persetujuan.Kategori_program
				f.SetCellValue(Sheet, "D7", Pendaftaran.Persetujuan.Tanggal_komite.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "I7", Pendaftaran.Persetujuan.Nomor_permohonan)
				f.SetCellValue(Sheet, "D8", Pendaftaran.Kategoris.Sub_program)
				f.SetCellValue(Sheet, "D9", Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue(Sheet, "D10", Pendaftaran.Tujuan_proposal)
				f.SetCellValue(Sheet, "E11", Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue(Sheet, "I11", Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue(Sheet, "F14", Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "I14", Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue(Sheet, "G17", Terbilang(int64(Pendaftaran.Kategoris.Jumlah_bantuan)) + " Rupiah ")
				f.SetCellValue(Sheet, "E18", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat)
				f.SetCellValue(Sheet, "D21", Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "G21", CekAsnaf(Pendaftaran.Kategoris.Asnaf))
				f.SetCellValue(Sheet, "D22", Pendaftaran.Persetujuan.Mitra_pelaksana)
				f.SetCellValue(Sheet, "D23", Pendaftaran.Persetujuan.Tanggal_pelaksanaan.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "D24", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellValue(Sheet, "E25", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellFormula(Sheet, "F17", "=F14")
				var numKadiv,numPengurus, numPengawas  [][]string
				switch val, _ := strconv.Atoi(level); val {
				case 1:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					kadiv :=  0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}
					}
				case 2:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
					}
					
					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							fmt.Println( numKadiv[kadiv][0])
							fmt.Println( numKadiv[kadiv][2])
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 3:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}

					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 4:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}
					numPengawas = [][]string{
						[]string{
							"B48",
							"E49",
							"G49",
						},
					}
					kadiv, pengurus, pengawas :=  0, 0,0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}else if val.User.Role == 8 {
							f.SetCellValue(Sheet, numPengawas[pengawas][0], val.User.Name)
							f.SetCellValue(Sheet, numPengawas[pengawas][2], val.Catatan)
							pengurus++
						}
						
					}
				}
			
			// Kategori BCM
			case 11:
				
				Pendaftaran := &models.PendaftaranBCM{}
				result.Decode(Pendaftaran)
				level := CekBantuan(Pendaftaran.Kategoris.Jumlah_bantuan)
				Sheet = "KOMITE ORIGINAL level " + level
				nama = Pendaftaran.Muztahiks.Nama
				t = Pendaftaran.Tanggal_proposal
				kategori = Pendaftaran.Persetujuan.Kategori_program
				f.SetCellValue(Sheet, "D7", Pendaftaran.Persetujuan.Tanggal_komite.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "I7", Pendaftaran.Persetujuan.Nomor_permohonan)
				f.SetCellValue(Sheet, "D8", Pendaftaran.Kategoris.Sub_program)
				f.SetCellValue(Sheet, "D9", Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue(Sheet, "D10", Pendaftaran.Tujuan_proposal)
				f.SetCellValue(Sheet, "E11", Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue(Sheet, "I11", Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue(Sheet, "F14", Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "I14", Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue(Sheet, "G17", Terbilang(int64(Pendaftaran.Kategoris.Jumlah_bantuan)) + " Rupiah ")
				f.SetCellValue(Sheet, "E18", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat)
				f.SetCellValue(Sheet, "D21", Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "G21", CekAsnaf(Pendaftaran.Kategoris.Asnaf))
				f.SetCellValue(Sheet, "D22", Pendaftaran.Persetujuan.Mitra_pelaksana)
				f.SetCellValue(Sheet, "D23", Pendaftaran.Persetujuan.Tanggal_pelaksanaan.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "D24", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellValue(Sheet, "E25", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellFormula(Sheet, "F17", "=F14")
				var numKadiv,numPengurus, numPengawas  [][]string
				switch val, _ := strconv.Atoi(level); val {
				case 1:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					kadiv :=  0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}
					}
				case 2:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
					}
					
					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							fmt.Println( numKadiv[kadiv][0])
							fmt.Println( numKadiv[kadiv][2])
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 3:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}

					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 4:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}
					numPengawas = [][]string{
						[]string{
							"B48",
							"E49",
							"G49",
						},
					}
					kadiv, pengurus, pengawas :=  0, 0,0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}else if val.User.Role == 8 {
							f.SetCellValue(Sheet, numPengawas[pengawas][0], val.User.Name)
							f.SetCellValue(Sheet, numPengawas[pengawas][2], val.Catatan)
							pengurus++
						}
						
					}
				}
			
			// Kategori ASM
			case 12:
				
				Pendaftaran := &models.PendaftaranASM{}
				result.Decode(Pendaftaran)
				level := CekBantuan(Pendaftaran.Kategoris.Jumlah_bantuan)
				Sheet = "KOMITE ORIGINAL level " + level
				nama = Pendaftaran.Muztahiks.Nama
				t = Pendaftaran.Tanggal_proposal
				kategori = Pendaftaran.Persetujuan.Kategori_program
				f.SetCellValue(Sheet, "D7", Pendaftaran.Persetujuan.Tanggal_komite.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "I7", Pendaftaran.Persetujuan.Nomor_permohonan)
				f.SetCellValue(Sheet, "D8", Pendaftaran.Kategoris.Sub_program)
				f.SetCellValue(Sheet, "D9", Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue(Sheet, "D10", Pendaftaran.Tujuan_proposal)
				f.SetCellValue(Sheet, "E11", Pendaftaran.Muztahiks.Kabupaten)
				f.SetCellValue(Sheet, "I11", Pendaftaran.Muztahiks.Provinsi)
				f.SetCellValue(Sheet, "F14", Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue(Sheet, "I14", Pendaftaran.Persetujuan.Sumber_dana)
				f.SetCellValue(Sheet, "G17", Terbilang(int64(Pendaftaran.Kategoris.Jumlah_bantuan)) + " Rupiah ")
				f.SetCellValue(Sheet, "E18", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat)
				f.SetCellValue(Sheet, "D21", Pendaftaran.Kategoris.Asnaf)
				f.SetCellValue(Sheet, "G21", CekAsnaf(Pendaftaran.Kategoris.Asnaf))
				f.SetCellValue(Sheet, "D22", Pendaftaran.Persetujuan.Mitra_pelaksana)
				f.SetCellValue(Sheet, "D23", Pendaftaran.Persetujuan.Tanggal_pelaksanaan.Format("02-Jan-2006"))
				f.SetCellValue(Sheet, "D24", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellValue(Sheet, "E25", Pendaftaran.Persetujuan.Pic_nama)
				f.SetCellFormula(Sheet, "F17", "=F14")
				var numKadiv,numPengurus, numPengawas  [][]string
				switch val, _ := strconv.Atoi(level); val {
				case 1:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					kadiv :=  0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}
					}
				case 2:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
					}
					
					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							fmt.Println( numKadiv[kadiv][0])
							fmt.Println( numKadiv[kadiv][2])
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 3:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}

					kadiv, pengurus :=  0, 0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}
					}
				case 4:
					numKadiv = [][]string{
						[]string{
							"B28",
							"E29",
							"G29",
						},
						[]string {
							"B31",
							"E32",
							"G32",
						},
					}
					numPengurus = [][]string{
						[]string{
							"B35",
							"E36",
							"G36",
						},
						[]string{
							"B38",
							"E39",
							"G39",
						},
					}
					numPengawas = [][]string{
						[]string{
							"B48",
							"E49",
							"G49",
						},
					}
					kadiv, pengurus, pengawas :=  0, 0,0
					for _, val :=  range Pendaftaran.Komite {
						if val.User.Role == 4 {
							fmt.Println(val)
							f.SetCellValue(Sheet, numKadiv[kadiv][0], val.User.Name)
							f.SetCellValue(Sheet, numKadiv[kadiv][2], val.Catatan)
							kadiv++
						}else if val.User.Role == 7 {
							f.SetCellValue(Sheet, numPengurus[pengurus][0], val.User.Name)
							f.SetCellValue(Sheet, numPengurus[pengurus][2], val.Catatan)
							pengurus++
						}else if val.User.Role == 8 {
							f.SetCellValue(Sheet, numPengawas[pengawas][0], val.User.Name)
							f.SetCellValue(Sheet, numPengawas[pengawas][2], val.Catatan)
							pengurus++
						}
						
					}
				}
			
			default:
				{
					c.JSON(500, gin.H{
						"data": "Kategori tidak ditemukan",
					})
				}
			}

		url := strings.Replace("/public/report/Komite"+t.Format("02_Jan_2006 15_04_05")+"_"+nama+" "+kategori+".xlsx", " ", "_", -1)
		err = f.SaveAs("." + url)
		if err != nil {
			fmt.Println(err)
		}

		c.JSON(200, gin.H{
			"data": "report has been created",
			"url":  url,
		})
		return
	}
}

func PpdProposal(c *gin.Context) {

	/* ---------------------------- Start of GET Data ---------------------------*/
	var (
		Sheet          string = "PPD"
		nama, kategori string
	)

	PihakIndex, PenerimaIndex, HasilIndex := 19, 0, 0
	Penerima := func() int {
		return PihakIndex + 2 + PenerimaIndex
	}

	Hasil := func() int {
		return Penerima() + 2 + HasilIndex
	}

	_ = Penerima() + Hasil()

	t := time.Now()

	collection := db.Collection("pendaftaran")
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)
	//claims := c.MustGet("decoded").(*models.Claims)
	_id, _ := primitive.ObjectIDFromHex(c.Param("id"))
	Kat, _ := strconv.Atoi(c.Param("kat"))
	filter := bson.D{{"_id", _id}, {"kategori", Kat}}

	//get data taro di cursor
	result := collection.FindOne(ctx, filter)
	// if err != nil {
	// 	c.JSON(500, gin.H{
	// 		"data": "Id tidak ditemukan",
	// 	})
	// 	return
	// }

	/* ---------------------------- End of GET Data ---------------------------*/

	/* ---------------------------- Start of Setup Excel ---------------------------*/

	f, err := excelize.OpenFile("./public/report/PPD.xlsx")
	if err != nil {
		c.JSON(500, gin.H{
			"data": "Data dasar tidak ditemukan",
		})
		return
	}

	if Kat == 0 {
		// If the structure of the body is wrong, return an HTTP error
		// fmt.Println(err)
	} else {
		switch Kat {
		// Kategori KSM
		case 1:
			Pendaftaran := &models.PendaftaranKSM{}
			result.Decode(Pendaftaran)
			nama = Pendaftaran.Muztahiks.Nama
			kategori = Pendaftaran.Persetujuan.Kategori_program
			t = Pendaftaran.Tanggal_proposal
			f.SetCellValue(Sheet, "C8", Pendaftaran.Persetujuan.Nomor_ppd)
			f.SetCellValue(Sheet, "C9", Pendaftaran.Persetujuan.Tanggal_ppd.Format("02-Jan-2006"))
			f.SetCellValue(Sheet, "C10", "Direktur Eksekutif")
			if Pendaftaran.Persetujuan.Anggaran_biaya == "Dianggarkan" {
				f.SetCellValue(Sheet, "H13", "V")
			} else  if Pendaftaran.Persetujuan.Anggaran_biaya == "Tidak Dianggarkan" {
				f.SetCellValue(Sheet, "L13", "V")
			}

			if Pendaftaran.Persetujuan.Jenis_pengeluaran == "Realisasi Biaya" {
				f.SetCellValue(Sheet, "R8", "V")
			} else  if Pendaftaran.Persetujuan.Jenis_pengeluaran == "Uang Muka" {
				f.SetCellValue(Sheet, "R10", "V")
			} else  if Pendaftaran.Persetujuan.Jenis_pengeluaran == "Lainnya" {
				f.SetCellValue(Sheet, "R12", "V")
			}

			f.SetCellValue(Sheet, "P15", "V")
			
			collection2 := db.Collection("kategori")
			filter2 := bson.D{{"KodeP", Pendaftaran.Kategori_program}}
			//get data taro di cursor
			result2 := collection2.FindOne(ctx, filter2)
			kats := &models.Kategori{}
			result2.Decode(kats)
			if kats != nil {
				f.SetCellValue(Sheet, "P15", ":" +  kats.KodeN + " " + kats.Kode)
			}
			f.SetCellValue(Sheet, "I17", Pendaftaran.Kategoris.Jumlah_bantuan )
			f.SetCellValue(Sheet, "S29", Pendaftaran.Kategoris.Jumlah_bantuan )
			f.SetCellValue(Sheet, "J18", Terbilang(int64(Pendaftaran.Kategoris.Jumlah_bantuan)) + " Rupiah" )
			f.SetCellValue(Sheet, "B22", Pendaftaran.Persetujuan.Sumber_dana )
			f.SetCellValue(Sheet, "C24", Pendaftaran.Kategoris.Asnaf )
			f.SetCellValue(Sheet, "B26", Pendaftaran.Persetujuan.Bank_tertuju )
			f.SetCellValue(Sheet, "B26", Pendaftaran.Persetujuan.Keterangan )
		case 2:
		// Kategori PAUD
		case 3:
		// Kategori KAFALA
		case 4:
		// Kategori JSM	
		case 5:
		// Kategori DZM
		case 6:
		// Kategori BSU
		case 7:
		// Kategori Rescue
		case 8:
		// Kategori BTM
		case 9:
		// Kategori BSM
		case 10:// Kategori BCM
		case 11:// Kategori ASM
		case 12:
		default:
			{
				c.JSON(500, gin.H{
					"data": "Kategori tidak ditemukan",
				})
			}
		}

		url := strings.Replace("/public/report/Verifikasi_"+t.Format("02_Jan_2006 15_04_05")+"_"+nama+" "+kategori+".xlsx", " ", "_", -1)
		err = f.SaveAs("." + url)
		if err != nil {
			fmt.Println(err)
		}

		c.JSON(200, gin.H{
			"data": "report has been created",
			"url":  url,
		})
		return
	}
}


func CekBantuan(jumlah int32) string {
	Sheet := ""
	if jumlah <= 10000000 {
		Sheet = "1"
	} else if jumlah <= 50000000 {
		Sheet = "2"
	} else if jumlah <= 100000000 {
		Sheet = "3"
	} else {
		Sheet = "4"
	}

	return Sheet
}

func CekAsnaf(asnaf string) string {
	var returnAsnaf string
	switch asnaf {
	case "Fakir":
		returnAsnaf = "Mereka yang hampir tidak memiliki apa-apa sehingga tidak mampu memenuhi kebutuhan pokok hidup."
	case "Miskin":
		returnAsnaf = "Mereka yang memiliki harta namun tidak cukup untuk memenuhi kebutuhan dasar untuk hidup."
	case "Amil":
		returnAsnaf = "Mereka yang mengumpulkan dan mendistribusikan zakat."
	case "Mu'allaf":
		returnAsnaf = "Mereka yang baru masuk Islam dan membutuhkan bantuan untuk menguatkan dalam tauhid dan syariah."
	case "Hamba sahaya":
		returnAsnaf = "Budak yang ingin memerdekakan dirinya."
	case "Gharimin":
		returnAsnaf = "Mereka yang berhutang untuk kebutuhan hidup dalam mempertahankan jiwa dan izzahnya."
	case "Fisabilillah":
		returnAsnaf = " Mereka yang berjuang di jalan Allah dalam bentuk kegiatan dakwah, jihad dan sebagainya."
	case "Ibnus Sabil":
		returnAsnaf = "Mereka yang kehabisan biaya di perjalanan dalam ketaatan kepada Allah."
	}

	return returnAsnaf
}

func Terbilang(nilai int64) string {
	huruf := []string{
		"", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas",
	}
	var stringNilai string

	if nilai == 0 {
		// stringNilai = "Kosong"
	} else if nilai < 12 && nilai != 0 {
		stringNilai = "" + huruf[nilai]
	} else if nilai < 20 {
		stringNilai = Terbilang(nilai-10) + " Belas "
	} else if nilai < 100 {
		stringNilai = Terbilang(nilai/10) + " Puluh " + Terbilang(nilai%10)
	} else if nilai < 200 {
		stringNilai = " Seratus " + Terbilang(nilai-100)
	} else if nilai < 1000 {
		stringNilai = Terbilang(nilai/100) + " Ratus " + Terbilang(nilai%100)
	} else if nilai < 2000 {
		stringNilai = " Seribu " + Terbilang(nilai-1000)
	} else if nilai < 1000000 {
		stringNilai = Terbilang(nilai/1000) + " Ribu " + Terbilang(nilai%1000)
	} else if nilai < 1000000000 {
		stringNilai = Terbilang(nilai/1000000) + " Juta " + Terbilang(nilai%1000000)
	} else if nilai < 1000000000000 {
		stringNilai = Terbilang(nilai/1000000000) + " Milyar " + Terbilang(nilai%1000000000)
	} else if nilai < 100000000000000 {
		stringNilai = Terbilang(nilai/1000000000000) + " Trilyun " + Terbilang(nilai%1000000000000)
	} else if nilai <= 100000000000000 {
		stringNilai = "Maaf Tidak Dapat di Prose Karena Jumlah nilai Terlalu Besar "
	}
	return stringNilai
}

