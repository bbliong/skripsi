package controller

import (
	"context"
	"fmt"
	"strconv"
	"time"

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

	f, err := excelize.OpenFile("./report/FORMAT.xlsx")
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
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Asnaf)
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

				if Pendaftaran.Kategoris.Kategori == 1 {
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
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(KSM()), Pendaftaran.Asnaf)
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
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Asnaf)
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

				if Pendaftaran.Kategoris.Kategori == 1 {
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
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(RBM()), Pendaftaran.Asnaf)
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
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Asnaf)
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

				if Pendaftaran.Kategoris.Kategori == 1 {
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
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(PAUD()), Pendaftaran.Asnaf)
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
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Asnaf)
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
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(KAFALA()), Pendaftaran.Asnaf)
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
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Asnaf)
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

				if Pendaftaran.Kategoris.Kategori == 1 {
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
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(JSM()), Pendaftaran.Asnaf)
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
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Asnaf)
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

				if Pendaftaran.Kategoris.Kategori == 1 {
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
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(DZM()), Pendaftaran.Asnaf)
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
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Asnaf)
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

				if Pendaftaran.Kategoris.Kategori == 1 {
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
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(BSU()), Pendaftaran.Asnaf)
				f.SetCellValue("Sheet1", "L"+strconv.Itoa(BSU()), Pendaftaran.Persetujuan.Kategori_program)
				f.SetCellValue("Sheet1", "M"+strconv.Itoa(BSU()), Pendaftaran.Kategoris.Jumlah_bantuan)
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(BSU()), Pendaftaran.Kategoris.Jenis_dana)
				f.SetCellValue("Sheet1", "O"+strconv.Itoa(BSU()), Pendaftaran.Kategoris.Jumlah_muztahik)
				f.SetCellValue("Sheet1", "P"+strconv.Itoa(BSU()), Pendaftaran.Asnaf)
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
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Asnaf)
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

				if Pendaftaran.Kategoris.Kategori == 1 {
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
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(BR()), Pendaftaran.Asnaf)
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
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Asnaf)
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
				f.SetCellValue("Sheet1", "J"+strconv.Itoa(BTM()), Pendaftaran.Asnaf)
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
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Asnaf)
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

				if Pendaftaran.Kategoris.Kategori == 1 {
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
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(BSM()), Pendaftaran.Asnaf)
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
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Asnaf)
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

				if Pendaftaran.Kategoris.Kategori == 1 {
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
				f.SetCellValue("Sheet1", "N"+strconv.Itoa(BCM()), Pendaftaran.Asnaf)
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
				f.SetCellValue("Sheet1", "T"+strconv.Itoa(monitoringProposal), Pendaftaran.Asnaf)
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

				if Pendaftaran.Kategoris.Kategori == 1 {
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
				f.SetCellValue("Sheet1", "K"+strconv.Itoa(ASM()), Pendaftaran.Asnaf)
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

	err = f.SaveAs("./report/Report BMM " + t.Format("02-Jan-2006") + " .xlsx")
	if err != nil {
		fmt.Println(err)
	}

	c.JSON(200, gin.H{
		"data": "report has been created",
	})
}
