package controller

import (
	"context"
	"fmt"
	"net/http"
	"strconv"
	"strings"
	"time"

	"go.mongodb.org/mongo-driver/mongo/options"

	"github.com/gin-gonic/gin/binding"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"

	"github.com/bbliong/sim-bmm/config"
	"github.com/bbliong/sim-bmm/models"
	"github.com/gin-gonic/gin"
)

func init() {
	// // Mengambil Koneksi
	db = config.Connect()
}

// CreatePendaftaran fungsi untuk membuat data Pendaftaran
func CreatePendaftaran(c *gin.Context) {

	var (
		err          error
		Pendaftarans interface{}
		Kat          models.Kat
	)

	claims := c.MustGet("decoded").(*models.Claims)

	if claims.IsAdmP() || claims.IsAdmin() {
		fmt.Println("You have permission for this access")
	} else {
		c.JSON(500, gin.H{
			"Message": "You don't have the permission ",
		})
		return
	}

	err = c.ShouldBindBodyWith(&Kat, binding.JSON)
	if err != nil {
		// If the structure of the body is wrong, return an HTTP error
		c.JSON(500, gin.H{
			"Message": "Error while parsing ",
		})
		return
	}
	Pendaftarans, err = switchKategoriPendaftaran(Kat.Kategori, c)

	if err != nil {
		result := gin.H{
			"Status": err,
		}
		c.JSON(501, result)
		return
	}

	collection := db.Collection("pendaftaran")

	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)

	result, _ := collection.InsertOne(ctx, Pendaftarans)
	c.JSON(200, gin.H{
		"Data":    result,
		"Message": "Berhasil mendaftarkan ",
	})
	return

}

func switchKategoriPendaftaran(kat int32, c *gin.Context) (interface{}, error) {
	var (
		Pendaftarans interface{}
		err          error
	)

	switch kat {
	// Kategori KSM
	case 1:
		Pendaftaran := models.PendaftaranKSM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		Pendaftaran.Persetujuan.Level_persetujuan = 0
		Pendaftaran.Persetujuan.Kategori_program = "KOMUNITAS SEHAT MUAMALAT"
		Pendaftaran.Muztahiks = getSingleMuztahikById(c, Pendaftaran.Muztahik)
		Pendaftarans = Pendaftaran
	case 2:
		Pendaftaran := models.PendaftaranRBM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		Pendaftaran.Persetujuan.Level_persetujuan = 0
		Pendaftaran.Persetujuan.Kategori_program = "RUMAH BERKAH MUAMALAT"
		Pendaftaran.Muztahiks = getSingleMuztahikById(c, Pendaftaran.Muztahik)
		Pendaftarans = Pendaftaran
	// Kategori PAUD
	case 3:
		Pendaftaran := models.PendaftaranPAUD{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		Pendaftaran.Persetujuan.Level_persetujuan = 0
		Pendaftaran.Persetujuan.Kategori_program = "PANGAN UNTUK DHUAFA"
		Pendaftaran.Muztahiks = getSingleMuztahikById(c, Pendaftaran.Muztahik)
		Pendaftarans = Pendaftaran
	// Kategori KAFALA
	case 4:
		Pendaftaran := models.PendaftaranKAFALA{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		Pendaftaran.Persetujuan.Level_persetujuan = 0
		Pendaftaran.Persetujuan.Kategori_program = "KAFALA"
		Pendaftaran.Muztahiks = getSingleMuztahikById(c, Pendaftaran.Muztahik)
		Pendaftarans = Pendaftaran
	// Kategori JSM
	case 5:
		Pendaftaran := models.PendaftaranJSM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		Pendaftaran.Persetujuan.Level_persetujuan = 0
		Pendaftaran.Persetujuan.Kategori_program = "JAMINAN SOSIAL MUAMALAT"
		Pendaftaran.Muztahiks = getSingleMuztahikById(c, Pendaftaran.Muztahik)
		Pendaftarans = Pendaftaran
	// Kategori DZM
	case 6:
		Pendaftaran := models.PendaftaranDZM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		Pendaftaran.Persetujuan.Level_persetujuan = 0
		Pendaftaran.Persetujuan.Kategori_program = "DUSUN ZAKAT MUAMALAT"
		Pendaftaran.Muztahiks = getSingleMuztahikById(c, Pendaftaran.Muztahik)
		Pendaftarans = Pendaftaran
	// Kategori BSU
	case 7:
		Pendaftaran := models.PendaftaranBSU{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		Pendaftaran.Persetujuan.Level_persetujuan = 0
		Pendaftaran.Persetujuan.Kategori_program = "BMM SAHABAT UKM"
		Pendaftaran.Muztahiks = getSingleMuztahikById(c, Pendaftaran.Muztahik)
		Pendaftarans = Pendaftaran
	// Kategori Rescue
	case 8:
		Pendaftaran := models.PendaftaranRescue{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		Pendaftaran.Persetujuan.Level_persetujuan = 0
		Pendaftaran.Persetujuan.Kategori_program = "BMM RESCUE"
		Pendaftaran.Muztahiks = getSingleMuztahikById(c, Pendaftaran.Muztahik)
		Pendaftarans = Pendaftaran
	// Kategori BTM
	case 9:
		Pendaftaran := models.PendaftaranBTM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		Pendaftaran.Persetujuan.Level_persetujuan = 0
		Pendaftaran.Persetujuan.Kategori_program = "BEASISWA TAHFIZH MUAMALAT"
		Pendaftaran.Muztahiks = getSingleMuztahikById(c, Pendaftaran.Muztahik)
		Pendaftarans = Pendaftaran
	// Kategori BSM
	case 10:
		Pendaftaran := models.PendaftaranBSM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		Pendaftaran.Persetujuan.Level_persetujuan = 0
		Pendaftaran.Persetujuan.Kategori_program = "BEASISWA SARJANA MUAMALAT"
		Pendaftaran.Muztahiks = getSingleMuztahikById(c, Pendaftaran.Muztahik)
		Pendaftarans = Pendaftaran
	// Kategori BCM
	case 11:
		Pendaftaran := models.PendaftaranBCM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		Pendaftaran.Persetujuan.Level_persetujuan = 0
		Pendaftaran.Persetujuan.Kategori_program = "BEASISWA CIKAL MUAMALAT"
		Pendaftaran.Muztahiks = getSingleMuztahikById(c, Pendaftaran.Muztahik)
		Pendaftarans = Pendaftaran
	// Kategori ASM
	case 12:
		Pendaftaran := models.PendaftaranASM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		Pendaftaran.Persetujuan.Level_persetujuan = 0
		Pendaftaran.Persetujuan.Kategori_program = "AKSI SEHAT MUAMALAT"
		Pendaftaran.Muztahiks = getSingleMuztahikById(c, Pendaftaran.Muztahik)
		Pendaftarans = Pendaftaran
	default:
		{
			return nil, fmt.Errorf("Kategori tidak ditemukan")
		}
	}
	return Pendaftarans, err
}

// GetAllPendaftaran fungsi untuk mengambil seluruh data Pendaftaran
func GetAllPendaftaran(c *gin.Context) {

	var (
		Kat          models.Kat
		Pendaftarans []interface{}
	)

	// Memilih Tabel
	collection := db.Collection("pendaftaran")

	// Menentukan waktu koneksi query
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)

	claims := c.MustGet("decoded").(*models.Claims)

	filterRole := FilterRole(claims.Role)

	// Fungi jika terdapat filter yang dikirim kan lewat parameter
	search := c.Request.URL.Query()
	filter := bson.M{}
	var startDate time.Time
	if len(search) > 0 {
		for key, val := range search {
			if key == "muztahik_id" {
				_id, _ := primitive.ObjectIDFromHex(val[0])
				filter[key] = _id
			} else if key == "tanggal_mulai" {
				date, err := time.Parse("2006-01-02T15:04:05Z", val[0])
				if err != nil {
					panic(err)
				}
				filter["tanggal_proposal"] = bson.M{
					"$gte": date,
				}
				startDate = date
			} else if key == "tanggal_akhir" {
				date, err := time.Parse("2006-01-02T15:04:05Z", val[0])
				if err != nil {
					panic(err)
				}
				filter["tanggal_proposal"] = bson.M{
					"$gte": startDate,
					"$lte": date,
				}
			} else {
				if _, exist := filter["$or"]; !exist {
					filter["$or"] = []bson.M{}
				}
				if key == "kategori" {
					val, _ := strconv.Atoi(val[0])
					if val != 0 {
						filter["$or"] = append(filter["$or"].([]bson.M), bson.M{key: val})
					}
				}
				filter["$or"] = append(filter["$or"].([]bson.M), bson.M{key: primitive.Regex{Pattern: val[0], Options: "i"}})

			}
		}
	} else {
		y, m, _ := time.Now().Date()
		firstDay := time.Date(y, m, 1, 0, 0, 0, 0, time.UTC)
		lastDay := time.Date(y, m+1, 1, 0, 0, 0, -1, time.UTC)

		filter["tanggal_proposal"] = bson.M{
			"$gte": firstDay,
			"$lte": lastDay,
		}
	}

	// Check apakah urlnya adalah PPD
	url := strings.Split(fmt.Sprintf("%s", c.Request.URL), "/")

	_, exist := filter["muztahik_id"]

	if !exist {
		if len(filterRole) != 0 {
			filter["persetujuan.level_persetujuan"] = filterRole
		}

		if url[2] == "ppd" {
			if claims.Role == 4 || claims.Role == 2 || claims.Role == 3 || claims.Role == 9 {
				filter["ppd.user._id"] = claims.ID
			}
		} else {
			if claims.Role == 2 {
				filter["persetujuan.disposisi_pic_id"] = claims.ID
			}

			if claims.Role == 3 {
				filter["persetujuan.manager_id"] = claims.ID
			}

			if (claims.Role == 4 && claims.Department != 1) || claims.Role == 7 || claims.Role == 8 {
				filter["komite.user._id"] = claims.ID
			}
		}
	}

	fmt.Println(filter)
	// Set Projection
	filterProjection := FilterProjection(claims.Role)
	cursor, err := collection.Find(ctx, filter, options.Find().SetProjection(filterProjection))
	//get data taro di cursor
	//cursor, err := collection.Find(ctx, filter)

	if err != nil {
		result := gin.H{
			"Status": err,
		}
		c.JSON(501, result)
		return
	}
	defer cursor.Close(ctx)

	// Loping data cursor
	for cursor.Next(ctx) {
		cursor.Decode(&Kat)
		if err != nil {
			// If the structure of the body is wrong, return an HTTP error
			c.JSON(500, gin.H{
				"Message": "Error while parsing ",
			})
			return
		}

		if Kat.Kategori == 0 {
			// If the structure of the body is wrong, return an HTTP error
			fmt.Println("Kategori tidak ada ")
		} else {
			switch Kat.Kategori {
			// Kategori KSM
			case 1:
				Pendaftaran := models.PendaftaranKSM{}
				cursor.Decode(&Pendaftaran)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			// Kategori RBM
			case 2:
				Pendaftaran := models.PendaftaranRBM{}
				cursor.Decode(&Pendaftaran)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			// Kategori PAUD
			case 3:
				Pendaftaran := models.PendaftaranPAUD{}
				cursor.Decode(&Pendaftaran)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			// Kategori KAFALA
			case 4:
				Pendaftaran := models.PendaftaranKAFALA{}
				cursor.Decode(&Pendaftaran)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			// Kategori JSM
			case 5:
				Pendaftaran := models.PendaftaranJSM{}
				cursor.Decode(&Pendaftaran)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			// Kategori DZM
			case 6:
				Pendaftaran := models.PendaftaranDZM{}
				cursor.Decode(&Pendaftaran)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			// Kategori BSU
			case 7:
				Pendaftaran := models.PendaftaranBSU{}
				cursor.Decode(&Pendaftaran)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			// Kategori Rescue
			case 8:
				Pendaftaran := models.PendaftaranRescue{}
				cursor.Decode(&Pendaftaran)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			// Kategori BTM
			case 9:
				Pendaftaran := models.PendaftaranBTM{}
				cursor.Decode(&Pendaftaran)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			// Kategori BSM
			case 10:
				Pendaftaran := models.PendaftaranBSM{}
				cursor.Decode(&Pendaftaran)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			// Kategori BCM
			case 11:
				Pendaftaran := models.PendaftaranBCM{}
				cursor.Decode(&Pendaftaran)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			// Kategori ASM
			case 12:
				Pendaftaran := models.PendaftaranASM{}
				cursor.Decode(&Pendaftaran)
				// masukan kedalam array struct
				Pendaftarans = append(Pendaftarans, Pendaftaran)
			default:
				{
					fmt.Println(err)
					result := gin.H{
						"Status": err,
					}
					c.JSON(501, result)
					return
				}
			}
		}

	}
	if err := cursor.Err(); err != nil {
		result := gin.H{
			"Status": err,
		}
		c.JSON(501, result)
		return
	}

	result := gin.H{
		"data": Pendaftarans,
	}
	c.JSON(http.StatusOK, result)
}

// GetAllPendaftaran fungsi untuk mengambil seluruh data Pendaftaran
func GetAllPendaftaranCount(c *gin.Context) {

	var (
		Kat  models.Kat
		Kats = map[string]int32{
			"KSM":    0,
			"RBM":    0,
			"PAUD":   0,
			"KAFALA": 0,
			"JSM":    0,
			"DZM":    0,
			"BSU":    0,
			"BR":     0,
			"BTM":    0,
			"BSM":    0,
			"BCM":    0,
			"ASM":    0,
		}
	)

	// Memilih Tabel
	collection := db.Collection("pendaftaran")

	// Menentukan waktu koneksi query
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)

	projection := bson.D{
		{"_id", 1},
		{"kategori", 1},
	}

	//Set Projection
	cursor, err := collection.Find(ctx, bson.M{}, options.Find().SetProjection(projection))
	if err != nil {
		result := gin.H{
			"Status": err,
		}
		c.JSON(501, result)
		return
	}
	defer cursor.Close(ctx)

	// Loping data cursor
	for cursor.Next(ctx) {
		cursor.Decode(&Kat)
		switch Kat.Kategori {
		case 1:
			Kats["KSM"]++
		case 2:
			Kats["RBM"]++
		case 3:
			Kats["PAUD"]++
		case 4:
			Kats["KAFALA"]++
		case 5:
			Kats["JSM"]++
		case 6:
			Kats["DZM"]++
		case 7:
			Kats["BSU"]++
		case 8:
			Kats["BR"]++
		case 9:
			Kats["BTM"]++
		case 10:
			Kats["BSM"]++
		case 11:
			Kats["BCM"]++
		case 12:
			Kats["ASM"]++
		}
	}

	result := gin.H{
		"data": Kats,
	}
	c.JSON(http.StatusOK, result)
}

// Fungsinya terlalu banyak makan query ketika request
func getSingleMuztahikById(c *gin.Context, id primitive.ObjectID) models.Muztahik {

	var Muztahik models.Muztahik

	// Memilih Tabel
	collection := db.Collection("muztahik")
	// Menentukan waktu koneksi query
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)
	filter := bson.D{{"_id", id}}
	errSQL := collection.FindOne(ctx, filter).Decode(&Muztahik)
	if errSQL != nil {
		// If the structure of the body is wrong, return an HTTP error
		fmt.Println(errSQL)
		c.JSON(500, gin.H{
			"Message": "Data Id not found",
		})
		panic(errSQL)
	}
	return Muztahik
}

// CreateMuztahik fungsi untuk membuat data muztahik
func UpdatePendaftaran(c *gin.Context) {
	var (
		result *mongo.UpdateResult
		errs   error
	)

	P := struct {
		Persetujuan models.Persetujuan `json:"persetujuan,omitempty" bson:"persetujuan,omitempty"`
	}{}

	_id, _ := primitive.ObjectIDFromHex(c.Param("id"))

	//verif := c.Param("verifikator")

	url := strings.Split(fmt.Sprintf("%s", c.Request.URL), "/")
	err := c.ShouldBindBodyWith(&P, binding.JSON)
	if err != nil {
		//fmt.Println(err)
		// If the structure of the body is wrong, return an HTTP error
		c.JSON(500, gin.H{
			"Message": "Error while parsing ",
		})
		return
	}

	collection := db.Collection("pendaftaran")

	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)

	filter := bson.D{{"_id", _id}}

	claims := c.MustGet("decoded").(*models.Claims)

	updateFilters, err, insertFilter := UpdateFilter(claims, P.Persetujuan, c, url[2])
	switch claims.Role {
	case 1:
	case 2:

		fmt.Println(P.Persetujuan)
		if P.Persetujuan.Level_persetujuan == 2 && url[2] == "upd" {
			updateFilters = append(updateFilters, bson.E{"persetujuan.level_persetujuan", 3})
		} else if P.Persetujuan.Level_persetujuan == 5 {
			updateFilters = append(updateFilters, bson.E{"persetujuan.level_persetujuan", 7})
		} else if P.Persetujuan.Level_persetujuan == 7 {
			updateFilters = append(updateFilters, bson.E{"persetujuan.level_persetujuan", 8})
		} else if P.Persetujuan.Level_persetujuan == 8 {
			updateFilters = append(updateFilters, bson.E{"persetujuan.level_persetujuan", 9})
		}
		break
	case 3:
		if P.Persetujuan.Level_persetujuan < 1 {
			updateFilters = append(updateFilters, bson.E{"persetujuan.level_persetujuan", 1})
		} else if P.Persetujuan.Level_persetujuan == 1 {
			updateFilters = append(updateFilters, bson.E{"persetujuan.level_persetujuan", 2})
		} else if P.Persetujuan.Level_persetujuan == 3 {
			updateFilters = append(updateFilters, bson.E{"persetujuan.level_persetujuan", 4})
		}
		break
	case 4, 9:
		if P.Persetujuan.Level_persetujuan >= 4 && P.Persetujuan.Level_persetujuan <= 6 && (claims.Department == 1 || claims.Role == 9) && url[2] != "komite" {
			if P.Persetujuan.Status_persetujuan_kadiv == 1 {
				updateFilters = append(updateFilters, bson.E{"persetujuan.level_persetujuan", 5})
			} else {
				updateFilters = append(updateFilters, bson.E{"persetujuan.level_persetujuan", 6})
			}
		}
		break
	}

	if insertFilter != nil {
		result, errs = collection.UpdateOne(ctx, filter, bson.D{
			{"$set", insertFilter},
		})

		if errs != nil {
			fmt.Print(errs)
			c.JSON(500, gin.H{
				"Message": "Error while updating",
			})
			return
		}
	} else {
		result, errs = collection.UpdateOne(ctx, filter, bson.D{
			{"$set", updateFilters},
		})

		if errs != nil {
			fmt.Println(errs)
			c.JSON(500, gin.H{
				"Message": "Error while updating",
			})
			return
		}
	}

	if result.MatchedCount < 1 {
		c.JSON(200, gin.H{
			"Message": "Id Not Found",
		})
		return
	}
	if result.ModifiedCount < 1 {
		c.JSON(200, gin.H{
			"Message": "Data Is Fresh, Nothing change in your data",
		})
		return
	}
	c.JSON(200, gin.H{
		"Message": "Data Updated",
	})
	return

}

func UpdatePendaftaranView(c *gin.Context) {

	var result gin.H

	claims := c.MustGet("decoded").(*models.Claims)

	// if claims.IsKadiv() || claims.IsMGR() || claims.IsPIC() || claims.IsAdmin() || claims.IsVerifikator() || claims.IsAdmP() {
	// 	fmt.Println("You have permission for this access")
	// } else {
	// 	c.JSON(500, gin.H{
	// 		"Message": "You don't have the permission ",
	// 	})
	// 	return
	//}

	_id, _ := primitive.ObjectIDFromHex(c.Param("id"))
	Kat, _ := strconv.Atoi(c.Param("kat"))

	// Memilih Tabel
	collection := db.Collection("pendaftaran")
	// Menentukan waktu koneksi query
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)
	filter := bson.D{{"_id", _id}}

	switch Kat {
	// Kategori KSM
	case 1:
		Pendaftaran := models.PendaftaranKSM{}

		// Set Projection
		filterProjection := FilterProjection(claims.Role)
		errSQL := collection.FindOne(ctx, filter, options.FindOne().SetProjection(filterProjection)).Decode(&Pendaftaran)

		if errSQL != nil {
			// If the structure of the body is wrong, return an HTTP error
			fmt.Println(errSQL)
			c.JSON(500, gin.H{
				"Message": "Data tidak ditemukan ",
			})
			return
		}
		result = gin.H{
			"Data": Pendaftaran,
		}

	// Kategori RBMs
	case 2:
		Pendaftaran := models.PendaftaranRBM{}
		// Set Projection
		filterProjection := FilterProjection(claims.Role)
		errSQL := collection.FindOne(ctx, filter, options.FindOne().SetProjection(filterProjection)).Decode(&Pendaftaran)

		if errSQL != nil {
			// If the structure of the body is wrong, return an HTTP error
			fmt.Printf("%+v", errSQL)
			c.JSON(500, gin.H{
				"Message": " Data tidak ditemukan",
			})
			return
		}
		result = gin.H{
			"Data": Pendaftaran,
		}
	// Kategori PAUD
	case 3:
		Pendaftaran := models.PendaftaranPAUD{}

		// Set Projection
		filterProjection := FilterProjection(claims.Role)
		errSQL := collection.FindOne(ctx, filter, options.FindOne().SetProjection(filterProjection)).Decode(&Pendaftaran)

		if errSQL != nil {
			// If the structure of the body is wrong, return an HTTP error
			fmt.Println(errSQL)
			c.JSON(500, gin.H{
				"Message": "Data tidak ditemukan",
			})
			return
		}
		result = gin.H{
			"Data": Pendaftaran,
		}
	// Kategori KAFALA
	case 4:
		Pendaftaran := models.PendaftaranKAFALA{}

		// Set Projection
		filterProjection := FilterProjection(claims.Role)
		errSQL := collection.FindOne(ctx, filter, options.FindOne().SetProjection(filterProjection)).Decode(&Pendaftaran)

		if errSQL != nil {
			// If the structure of the body is wrong, return an HTTP error
			fmt.Println(errSQL)
			c.JSON(500, gin.H{
				"Message": "Data tidak ditemukan",
			})
			return
		}
		result = gin.H{
			"Data": Pendaftaran,
		}
	// Kategori JSM
	case 5:
		Pendaftaran := models.PendaftaranJSM{}

		// Set Projection
		filterProjection := FilterProjection(claims.Role)
		errSQL := collection.FindOne(ctx, filter, options.FindOne().SetProjection(filterProjection)).Decode(&Pendaftaran)
		if errSQL != nil {
			// If the structure of the body is wrong, return an HTTP error
			fmt.Println(errSQL)
			c.JSON(500, gin.H{
				"Message": "Data tidak ditemukan",
			})
			return
		}
		result = gin.H{
			"Data": Pendaftaran,
		}
	// Kategori DZM
	case 6:
		Pendaftaran := models.PendaftaranDZM{}

		// Set Projection
		filterProjection := FilterProjection(claims.Role)
		errSQL := collection.FindOne(ctx, filter, options.FindOne().SetProjection(filterProjection)).Decode(&Pendaftaran)

		if errSQL != nil {
			// If the structure of the body is wrong, return an HTTP error
			fmt.Println(errSQL)
			c.JSON(500, gin.H{
				"Message": "Data tidak ditemukan ",
			})
			return
		}
		result = gin.H{
			"Data": Pendaftaran,
		}
	// Kategori BSU
	case 7:
		Pendaftaran := models.PendaftaranBSU{}

		// Set Projection
		filterProjection := FilterProjection(claims.Role)
		errSQL := collection.FindOne(ctx, filter, options.FindOne().SetProjection(filterProjection)).Decode(&Pendaftaran)

		if errSQL != nil {
			// If the structure of the body is wrong, return an HTTP error
			fmt.Println(errSQL)
			c.JSON(500, gin.H{
				"Message": "Data tidak ditemukan",
			})
			return
		}
		result = gin.H{
			"Data": Pendaftaran,
		}
	// Kategori Rescue
	case 8:
		Pendaftaran := models.PendaftaranRescue{}

		// Set Projection
		filterProjection := FilterProjection(claims.Role)
		errSQL := collection.FindOne(ctx, filter, options.FindOne().SetProjection(filterProjection)).Decode(&Pendaftaran)

		if errSQL != nil {
			// If the structure of the body is wrong, return an HTTP error
			fmt.Println(errSQL)
			c.JSON(500, gin.H{
				"Message": "Data tidak ditemukan ",
			})
			return
		}
		result = gin.H{
			"Data": Pendaftaran,
		}
	// Kategori BTM
	case 9:
		Pendaftaran := models.PendaftaranBTM{}

		// Set Projection
		filterProjection := FilterProjection(claims.Role)
		errSQL := collection.FindOne(ctx, filter, options.FindOne().SetProjection(filterProjection)).Decode(&Pendaftaran)

		if errSQL != nil {
			// If the structure of the body is wrong, return an HTTP error
			fmt.Println(errSQL)
			c.JSON(500, gin.H{
				"Message": "Data tidak ditemukan ",
			})
			return
		}
		result = gin.H{
			"Data": Pendaftaran,
		}
	// Kategori BSM
	case 10:
		Pendaftaran := models.PendaftaranBSM{}

		// Set Projection
		filterProjection := FilterProjection(claims.Role)
		errSQL := collection.FindOne(ctx, filter, options.FindOne().SetProjection(filterProjection)).Decode(&Pendaftaran)

		if errSQL != nil {
			// If the structure of the body is wrong, return an HTTP error
			fmt.Println(errSQL)
			c.JSON(500, gin.H{
				"Message": "Data tidak ditemukan ",
			})
			return
		}
		result = gin.H{
			"Data": Pendaftaran,
		}
	// Kategori BCM
	case 11:
		Pendaftaran := models.PendaftaranBCM{}

		// Set Projection
		filterProjection := FilterProjection(claims.Role)
		errSQL := collection.FindOne(ctx, filter, options.FindOne().SetProjection(filterProjection)).Decode(&Pendaftaran)

		if errSQL != nil {
			// If the structure of the body is wrong, return an HTTP error
			fmt.Println(errSQL)
			c.JSON(500, gin.H{
				"Message": "Data tidak ditemukan ",
			})
			return
		}
		result = gin.H{
			"Data": Pendaftaran,
		}
	// Kategori ASM
	case 12:
		Pendaftaran := models.PendaftaranASM{}

		// Set Projection
		filterProjection := FilterProjection(claims.Role)
		errSQL := collection.FindOne(ctx, filter, options.FindOne().SetProjection(filterProjection)).Decode(&Pendaftaran)

		if errSQL != nil {
			// If the structure of the body is wrong, return an HTTP error
			fmt.Println(errSQL)
			c.JSON(500, gin.H{
				"Message": "Data tidak ditemukan",
			})
			return
		}
		result = gin.H{
			"Data": Pendaftaran,
		}
	default:
		{
			result := gin.H{
				"Status": "Kategori Not FOund",
			}
			c.JSON(501, result)
			return
		}
	}
	c.JSON(200, result)
	return

}

// GetMuztahik fungsi untuk mengambil salah satu data muztahik
func DeletePendaftaran(c *gin.Context) {

	claims := c.MustGet("decoded").(*models.Claims)

	if claims.IsAdmP() || claims.IsAdmin() {
		fmt.Println("You have permission for this access")
	} else {
		c.JSON(500, gin.H{
			"Message": "You don't have the permission ",
		})
		return
	}

	_id, _ := primitive.ObjectIDFromHex(c.Param("id"))

	// Memilih Tabel
	collection := db.Collection("pendaftaran")

	// Menentukan waktu koneksi query
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)
	filter := bson.D{{"_id", _id}}
	result, errSQL := collection.DeleteOne(ctx, filter)
	if errSQL != nil {
		// If the structure of the body is wrong, return an HTTP error
		fmt.Println(errSQL)
		c.JSON(500, gin.H{
			"Message": errSQL,
		})
		return
	}
	if result.DeletedCount < 1 {
		c.JSON(200, gin.H{
			"Message": "Nothing Deleted ",
		})
		return
	}
	c.JSON(200, gin.H{
		"Message": "Your data with ID " + c.Param("id") + " was deleted",
	})
	return

	c.JSON(http.StatusOK, result)
}

func FilterProjection(role int32) bson.D {
	var projection bson.D
	switch role {
	// Admin
	case 1, 5:
		projection = bson.D{
			// {"persetujuan.level_persetujuan", 1},
			// {"persetujuan.kategori_program", 1},
			{"persetujuan.proposal", 0},
			{"persetujuan.disposisi_pic", 0},
			{"persetujuan.perihal", 0},
			{"persetujuan.tanggal_disposisi", 0},
			{"persetujuan.verifikator_nama", 0},
			{"persetujuan.manager_nama", 0},
			{"persetujuan.pic_nama", 0},
			{"persetujuan.kadiv_nama", 0},
			{"persetujuan.verifikator_tanggal", 0},
			{"persetujuan.manager_tanggal", 0},
			{"persetujuan.kadiv_tanggal", 0},
			{"persetujuan.pic_tanggal", 0},
			{"persetujuan.keterangan_pic", 0},
			{"persetujuan.keterangan_manager", 0},
			{"persetujuan.keterangan_kadiv", 0},
			{"persetujuan.status_persetujuan_pic", 0},
			{"persetujuan.status_persetujuan_manager", 0},
			{"persetujuan.status_persetujuan_kadiv", 0},
			{"persetujuan.status_persetujuan", 0},
			{"persetujuan.tanggal_persetujuan", 0},
			{"persetujuan.sumber_dana", 0},
			{"persetujuan.ppd_pic", 0},
			{"persetujuan.ppd_manager", 0},
			{"persetujuan.ppd_kadiv", 0},
			{"persetujuan.ppd_keuangan", 0},
			{"persetujuan.jumlah_pencairan", 0},
			{"persetujuan.tanggal_pencairan", 0},
			{"persetujuan.keterangan", 0},
			{"verifikasi", 0},
		}
	// PIC
	case 2:
		projection = bson.D{
		// {"pic_tanggal", 1},
		// {"pic_nama", 1},
		// {"keterangan_pic", 1},
		// {"persetujuan.manager_tanggal", 0},
		// {"persetujuan.manager_nama", 0},
		// {"persetujuan.keterangan_manager", 0},
		// {"persetujuan.status_persetujuan_manager", 0},
		// {"persetujuan.kadiv_tanggal", 0},
		// {"persetujuan.kadiv_nama", 0},
		// {"persetujuan.keterangan_kadiv", 0},
		// {"persetujuan.status_persetujuan_kadiv", 0},
		}
	// Manager
	case 3:
		projection = bson.D{
			// {"persetujuan.level_persetujuan", 1},
			// {"persetujuan.kategori_program", 1},
			{"persetujuan.proposal", 0},
			{"persetujuan.disposisi_pic", 0},
			{"persetujuan.perihal", 0},
			{"persetujuan.tanggal_disposisi", 0},
			// {"persetujuan.verifikator_nama", 0},
			// {"persetujuan.manager_nama", 0},
			// {"persetujuan.pic_nama", 0},
			// {"persetujuan.kadiv_nama", 0},
			// {"persetujuan.verifikator_tanggal", 0},
			// {"persetujuan.manager_tanggal", 0},
			// {"persetujuan.kadiv_tanggal", 0},
			// {"persetujuan.pic_tanggal", 0},
			{"persetujuan.keterangan_pic", 0},
			{"persetujuan.keterangan_manager", 0},
			{"persetujuan.keterangan_kadiv", 0},
			{"persetujuan.status_persetujuan_pic", 0},
			{"persetujuan.status_persetujuan_manager", 0},
			// {"persetujuan.status_persetujuan_kadiv", 0},
			// {"persetujuan.status_persetujuan", 0},
			// {"persetujuan.tanggal_persetujuan", 0},
			// {"persetujuan.sumber_dana", 0},
			{"persetujuan.ppd_pic", 0},
			{"persetujuan.ppd_manager", 0},
			{"persetujuan.ppd_kadiv", 0},
			{"persetujuan.ppd_keuangan", 0},
			{"persetujuan.jumlah_pencairan", 0},
			{"persetujuan.tanggal_pencairan", 0},
			{"persetujuan.keterangan", 0},
		}
	// Kadiv
	case 4, 9:
		projection = bson.D{
			// {"persetujuan.level_persetujuan", 1},
			// {"persetujuan.kategori_program", 1},
			{"persetujuan.proposal", 0},
			{"persetujuan.disposisi_pic", 0},
			{"persetujuan.perihal", 0},
			{"persetujuan.tanggal_disposisi", 0},
			// {"persetujuan.verifikator_nama", 0},
			// {"persetujuan.manager_nama", 0},
			// {"persetujuan.pic_nama", 0},
			// {"persetujuan.kadiv_nama", 0},
			// {"persetujuan.verifikator_tanggal", 0},
			// {"persetujuan.manager_tanggal", 0},
			// {"persetujuan.kadiv_tanggal", 0},
			{"persetujuan.pic_tanggal", 0},
			{"persetujuan.keterangan_pic", 0},
			{"persetujuan.keterangan_manager", 0},
			// {"persetujuan.keterangan_kadiv", 0},
			{"persetujuan.status_persetujuan_pic", 0},
			{"persetujuan.status_persetujuan_manager", 0},
			{"persetujuan.status_persetujuan_kadiv", 0},
			// {"persetujuan.status_persetujuan", 0},
			// {"persetujuan.tanggal_persetujuan", 0},
			// {"persetujuan.sumber_dana", 0},
			{"persetujuan.ppd_pic", 0},
			{"persetujuan.ppd_manager", 0},
			{"persetujuan.ppd_kadiv", 0},
			{"persetujuan.ppd_keuangan", 0},
			{"persetujuan.jumlah_pencairan", 0},
			{"persetujuan.tanggal_pencairan", 0},
			{"persetujuan.keterangan", 0},
		}
	// Keuangan
	case 6:
	// Verfikator
	case 7:
		projection = bson.D{
			// {"persetujuan.level_persetujuan", 1},
			// {"persetujuan.kategori_program", 1},
			{"persetujuan.proposal", 0},
			{"persetujuan.disposisi_pic", 0},
			{"persetujuan.perihal", 0},
			{"persetujuan.tanggal_disposisi", 0},
			{"persetujuan.verifikator_nama", 0},
			{"persetujuan.manager_nama", 0},
			{"persetujuan.pic_nama", 0},
			{"persetujuan.kadiv_nama", 0},
			{"persetujuan.verifikator_tanggal", 0},
			{"persetujuan.manager_tanggal", 0},
			{"persetujuan.kadiv_tanggal", 0},
			{"persetujuan.pic_tanggal", 0},
			{"persetujuan.keterangan_pic", 0},
			{"persetujuan.keterangan_manager", 0},
			{"persetujuan.keterangan_kadiv", 0},
			{"persetujuan.status_persetujuan_pic", 0},
			{"persetujuan.status_persetujuan_manager", 0},
			{"persetujuan.status_persetujuan_kadiv", 0},
			{"persetujuan.status_persetujuan", 0},
			{"persetujuan.tanggal_persetujuan", 0},
			{"persetujuan.sumber_dana", 0},
			{"persetujuan.ppd_pic", 0},
			{"persetujuan.ppd_manager", 0},
			{"persetujuan.ppd_kadiv", 0},
			{"persetujuan.ppd_keuangan", 0},
			{"persetujuan.jumlah_pencairan", 0},
			{"persetujuan.tanggal_pencairan", 0},
			{"persetujuan.keterangan", 0},
		}
	}

	return projection
}

func FilterRole(role int32) bson.M {
	var filter bson.M
	switch role {
	// Admin // Manager
	case 1, 5, 3, 7, 8, 9:
		// }
		filter = bson.M{
			"$gte": 0,
		}
	// PIC
	case 2:
		// filter = bson.M{
		// 	"persetujuan.level_persetujuan": bson.M{
		// 		"$gt": 1,
		// 	},
		// }
		filter = bson.M{
			"$gte": 1,
		}

	// Kadiv
	case 4:
		filter = bson.M{
			"$gte": 2,
		}
	case 6:
		filter = bson.M{
			"$gt": 4,
		}
	default:
		{
			filter = bson.M{
				"$gt": 10,
			}
		}
	}

	return filter
}

func UpdateFilter(claims *models.Claims, persetujuan models.Persetujuan, c *gin.Context, url string) (bson.D, error, interface{}) {

	var (
		err          error
		Kat          models.Kat
		KatBaru      models.Kat
		updateFilter bson.D
		//Pendaftarans interface{}
	)

	var role = claims.Role

	// switch role {
	// case 1, 5, 2, 3:
	err = c.ShouldBindBodyWith(&Kat, binding.JSON)
	if err != nil {
		// If the structure of the body is wrong, return an HTTP error
		c.JSON(500, gin.H{
			"Message": "Error while parsing ",
		})
		return bson.D{}, err, nil
	}

	// Melihat apakah ada perubahan pada kategori yang dituju, jika ada maka seluruh persetujuan akan dihapus dan diulang kembali

	// Memilih Tabel
	collection := db.Collection("pendaftaran")
	// Menentukan waktu koneksi query
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)

	// ambil dari parameter lalu diubah jadi object id
	Kat.Id, _ = primitive.ObjectIDFromHex(c.Param("id"))

	filter := bson.D{{"_id", Kat.Id}}

	errSQL := collection.FindOne(ctx, filter).Decode(&KatBaru)

	if errSQL != nil {
		// If the structure of the body is wrong, return an HTTP error
		c.JSON(500, gin.H{
			"Message": errSQL,
		})
		return bson.D{}, errSQL, nil
	}

	// fmt.Println(Kat != KatBaru)
	// panic("as")

	// if Kat != KatBaru {
	// 	insert, err := switchKategoriPendaftaran(Kat.Kategori, c)
	// 	return bson.D{}, err, insert
	// }

	switch KatBaru.Kategori {
	// Kategori KSM
	case 1:
		Pendaftaran := models.PendaftaranKSM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		if role == 2 || role == 3 || role == 4 || role == 9 || role == 7 || role == 8 {
			if url == "pendaftaran" {
				if role == 2 {
					updateFilter = bson.D{
						{"persetujuan.pic_nama", persetujuan.Pic_nama},
						{"persetujuan.pic_tanggal", persetujuan.Pic_tanggal},
						// {"persetujuan.status_persetujuan_pic", persetujuan.Status_persetujuan_pic},
						// {"persetujuan.keterangan_pic", persetujuan.Keterangan_pic},
					}
				} else if role == 3 {
					updateFilter = bson.D{
						{"persetujuan.disposisi_pic", persetujuan.Disposisi_pic},
						{"persetujuan.disposisi_pic_id", persetujuan.Disposisi_pic_id},
						{"persetujuan.manager_nama", claims.Name},
						// {"persetujuan.manager_tanggal", time.Now()},
						// {"persetujuan.status_persetujuan_manager", persetujuan.Status_persetujuan_manager},
						// {"persetujuan.keterangan_manager", persetujuan.Keterangan_manager},
					}
				} else if role == 4 {
					updateFilter = bson.D{
						{"persetujuan.kadiv_nama", persetujuan.Kadiv_nama},
						{"persetujuan.kadiv_tanggal", persetujuan.Kadiv_tanggal},
						{"persetujuan.status_persetujuan_kadiv", persetujuan.Status_persetujuan_kadiv},
						{"persetujuan.keterangan_kadiv", persetujuan.Keterangan_kadiv},
					}
				}
				break
			} else if (url == "upd" && claims.Department == 1) || (url == "upd" && claims.Role == 9) {
				updateFilter = bson.D{
					{"upd.tujuan", Pendaftaran.Upd.Tujuan},
					{"upd.latar_belakang", Pendaftaran.Upd.Latar_belakang},
					{"upd.analisis_kelayakan", Pendaftaran.Upd.Analisis_kelayakan},
					{"upd.rekomendasi", Pendaftaran.Upd.Rekomendasi},
					{"upd.program_penyaluran.pelaksana_teknis", Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis},
					{"upd.program_penyaluran.alur_biaya", Pendaftaran.Upd.Program_penyaluran.Alur_biaya},
					{"upd.program_penyaluran.penanggung_jawab", Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab},
				}

				if role == 2 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.pic_nama", claims.Name})

				} else if role == 3 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_nama", claims.Name})
				} else if role == 4 || role == 9 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.keterangan_kadiv", Pendaftaran.Persetujuan.Keterangan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan_kadiv", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_id", claims.ID})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.tanggal_persetujuan", time.Now()})
				}
				break
			} else if url == "verifikator" {
				updateFilter = bson.D{
					{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
					{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
					{"verifikasi.tanggal_verifikasi", Pendaftaran.Verifikasi.Tanggal_verifikasi},
					{"verifikasi.nama_pelaksana", Pendaftaran.Verifikasi.Nama_pelaksana},
					{"verifikasi.jabatan_pelaksana", Pendaftaran.Verifikasi.Jabatan_pelaksana},
					{"verifikasi.bentuk_bantuan", Pendaftaran.Verifikasi.Bentuk_bantuan},
					{"verifikasi.hasil_verifikasi.kelengkapan_adm", Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm},
					{"verifikasi.hasil_verifikasi.direkomendasikan", Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan},
					{"verifikasi.hasil_verifikasi.dokumentasi", Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi},
					{"verifikasi.cara_verifikasi", Pendaftaran.Verifikasi.Cara_verifikasi},
					{"verifikasi.pihak_konfirmasi", Pendaftaran.Verifikasi.Pihak_konfirmasi},
					{"verifikasi.penerima_manfaat", Pendaftaran.Verifikasi.Penerima_manfaat},
				}

				if role == 3 {
					updateFilter = append(updateFilter, bson.E{"verifikasi.tanggal_verifikasi_manager", time.Now()})
				}

			} else if url == "komite" {
				for key, value := range Pendaftaran.Komite {
					if value.User.ID == claims.ID {
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".catatan", value.Catatan})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".status", value.Status})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}

				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_komite", Pendaftaran.Persetujuan.Tanggal_komite},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"tujuan_proposal", Pendaftaran.Tujuan_proposal},
						{"persetujuan.sifat_santunan", Pendaftaran.Persetujuan.Sifat_santunan},
						{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
						{"persetujuan.sumber_dana", Pendaftaran.Persetujuan.Sumber_dana},
						{"persetujuan.jumlah_penerima_manfaat", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat},
						{"persetujuan.mitra_pelaksana", Pendaftaran.Persetujuan.Mitra_pelaksana},
						{"persetujuan.nomor_permohonan", Pendaftaran.Persetujuan.Nomor_permohonan},
						{"komite", Pendaftaran.Komite},
					}
				}
			} else if url == "ppd" {
				for key, value := range Pendaftaran.Ppd {
					if value.User.ID == claims.ID {
						updateFilter = append(updateFilter, bson.E{"ppd." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}

				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_ppd", Pendaftaran.Persetujuan.Tanggal_ppd},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"persetujuan.bank_tertuju", Pendaftaran.Persetujuan.Bank_tertuju},
						{"persetujuan.anggaran_biaya", Pendaftaran.Persetujuan.Anggaran_biaya},
						{"persetujuan.referensi", Pendaftaran.Persetujuan.Referensi},
						{"persetujuan.jenis_pengeluaran", Pendaftaran.Persetujuan.Jenis_pengeluaran},
						{"persetujuan.nomor_ppd", Pendaftaran.Persetujuan.Nomor_ppd},
						{"ppd", Pendaftaran.Ppd},
					}
				}
			}  else if url == "pencairan" {
				updateFilter = bson.D{
					{"persetujuan.tanggal_pencairan", Pendaftaran.Persetujuan.Tanggal_pencairan},
					{"persetujuan.keterangan", Pendaftaran.Persetujuan.Keterangan},
					{"persetujuan.jumlah_pencairan", Pendaftaran.Persetujuan.Jumlah_pencairan},
				}
			} else {
				updateFilter = bson.D{}
			}
		} else {
			updateFilter = bson.D{
				{"persetujuan.manager_id", Pendaftaran.Persetujuan.Manager},
				{"persetujuan.disposisi_pic_id", Pendaftaran.Persetujuan.Disposisi_pic_id},
				{"tanggal_proposal", Pendaftaran.Tanggal_proposal},
				{"judul_proposal", Pendaftaran.Judul_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.sub_program", Pendaftaran.Kategoris.Sub_program},
				{"kategoris.kategori", Pendaftaran.Kategoris.Kategori},
				{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
			}
		}
	//Kategori RRBM
	case 2:
		Pendaftaran := models.PendaftaranRBM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		if role == 2 || role == 3 || role == 4 || role == 9 || role == 7 || role == 8 {
			if url == "pendaftaran" {
				if role == 2 {
					updateFilter = bson.D{
						{"persetujuan.pic_nama", persetujuan.Pic_nama},
						{"persetujuan.pic_tanggal", persetujuan.Pic_tanggal},
						// {"persetujuan.status_persetujuan_pic", persetujuan.Status_persetujuan_pic},
						// {"persetujuan.keterangan_pic", persetujuan.Keterangan_pic},
					}
				} else if role == 3 {
					updateFilter = bson.D{
						{"persetujuan.disposisi_pic", persetujuan.Disposisi_pic},
						{"persetujuan.disposisi_pic_id", persetujuan.Disposisi_pic_id},
						{"persetujuan.manager_nama", claims.Name},
						// {"persetujuan.manager_tanggal", time.Now()},
						// {"persetujuan.status_persetujuan_manager", persetujuan.Status_persetujuan_manager},
						// {"persetujuan.keterangan_manager", persetujuan.Keterangan_manager},
					}
				} else if role == 4 {
					updateFilter = bson.D{
						{"persetujuan.kadiv_nama", persetujuan.Kadiv_nama},
						{"persetujuan.kadiv_tanggal", persetujuan.Kadiv_tanggal},
						{"persetujuan.status_persetujuan_kadiv", persetujuan.Status_persetujuan_kadiv},
						{"persetujuan.keterangan_kadiv", persetujuan.Keterangan_kadiv},
					}
				}
				break
			} else if url == "upd" {
				updateFilter = bson.D{
					{"upd.tujuan", Pendaftaran.Upd.Tujuan},
					{"upd.latar_belakang", Pendaftaran.Upd.Latar_belakang},
					{"upd.analisis_kelayakan", Pendaftaran.Upd.Analisis_kelayakan},
					{"upd.rekomendasi", Pendaftaran.Upd.Rekomendasi},
					{"upd.program_penyaluran.pelaksana_teknis", Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis},
					{"upd.program_penyaluran.alur_biaya", Pendaftaran.Upd.Program_penyaluran.Alur_biaya},
					{"upd.program_penyaluran.penanggung_jawab", Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab},
				}

				if role == 2 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.pic_nama", claims.Name})
				} else if role == 3 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_nama", claims.Name})
				} else if role == 4 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.keterangan_kadiv", Pendaftaran.Persetujuan.Keterangan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan_kadiv", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.tanggal_persetujuan", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_id", claims.ID})
				}
				break
			} else if url == "verifikator" {
				updateFilter = bson.D{
					{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
					{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
					{"verifikasi.tanggal_verifikasi", Pendaftaran.Verifikasi.Tanggal_verifikasi},
					{"verifikasi.nama_pelaksana", Pendaftaran.Verifikasi.Nama_pelaksana},
					{"verifikasi.jabatan_pelaksana", Pendaftaran.Verifikasi.Jabatan_pelaksana},
					{"verifikasi.bentuk_bantuan", Pendaftaran.Verifikasi.Bentuk_bantuan},
					{"verifikasi.hasil_verifikasi.kelengkapan_adm", Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm},
					{"verifikasi.hasil_verifikasi.direkomendasikan", Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan},
					{"verifikasi.hasil_verifikasi.dokumentasi", Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi},
					{"verifikasi.cara_verifikasi", Pendaftaran.Verifikasi.Cara_verifikasi},
					{"verifikasi.pihak_konfirmasi", Pendaftaran.Verifikasi.Pihak_konfirmasi},
					{"verifikasi.penerima_manfaat", Pendaftaran.Verifikasi.Penerima_manfaat},
				}

				if role == 3 {
					updateFilter = append(updateFilter, bson.E{"verifikasi.tanggal_verifikasi_manager", time.Now()})
				}
			} else if url == "komite" {
				for key, value := range Pendaftaran.Komite {
					if value.User.ID == claims.ID {

						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".catatan", value.Catatan})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".status", value.Status})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}

				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_komite", Pendaftaran.Persetujuan.Tanggal_komite},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"tujuan_proposal", Pendaftaran.Tujuan_proposal},
						{"persetujuan.sifat_santunan", Pendaftaran.Persetujuan.Sifat_santunan},
						{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
						{"persetujuan.sumber_dana", Pendaftaran.Persetujuan.Sumber_dana},
						{"persetujuan.jumlah_penerima_manfaat", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat},
						{"persetujuan.mitra_pelaksana", Pendaftaran.Persetujuan.Mitra_pelaksana},
						{"persetujuan.nomor_permohonan", Pendaftaran.Persetujuan.Nomor_permohonan},
						{"komite", Pendaftaran.Komite},
					}
				}
			} else if url == "ppd" {
				for key, value := range Pendaftaran.Ppd {
					if value.User.ID == claims.ID {
						updateFilter = append(updateFilter, bson.E{"ppd." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}

				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_ppd", Pendaftaran.Persetujuan.Tanggal_ppd},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"persetujuan.bank_tertuju", Pendaftaran.Persetujuan.Bank_tertuju},
						{"persetujuan.anggaran_biaya", Pendaftaran.Persetujuan.Anggaran_biaya},
						{"persetujuan.referensi", Pendaftaran.Persetujuan.Referensi},
						{"persetujuan.jenis_pengeluaran", Pendaftaran.Persetujuan.Jenis_pengeluaran},
						{"persetujuan.nomor_ppd", Pendaftaran.Persetujuan.Nomor_ppd},
						{"ppd", Pendaftaran.Ppd},
					}
				}
			} else if url == "pencairan" {
				updateFilter = bson.D{
					{"persetujuan.tanggal_pencairan", Pendaftaran.Persetujuan.Tanggal_pencairan},
					{"persetujuan.keterangan", Pendaftaran.Persetujuan.Keterangan},
					{"persetujuan.jumlah_pencairan", Pendaftaran.Persetujuan.Jumlah_pencairan},
				}
			} else {
				updateFilter = bson.D{}
			}

		} else {
			updateFilter = bson.D{
				{"persetujuan.manager_id", Pendaftaran.Persetujuan.Manager},
				{"persetujuan.disposisi_pic_id", Pendaftaran.Persetujuan.Disposisi_pic_id},
				{"tanggal_proposal", Pendaftaran.Tanggal_proposal},
				{"judul_proposal", Pendaftaran.Judul_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.kategori", Pendaftaran.Kategoris.Kategori},
				{"kategoris.sub_program", Pendaftaran.Kategoris.Sub_program},
				{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
				{"kategoris.jumlah_muztahik", Pendaftaran.Kategoris.Jumlah_muztahik},
			}
		}
	// Kategori PAUD
	case 3:
		Pendaftaran := models.PendaftaranPAUD{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		if role == 2 || role == 3 || role == 4 || role == 9 || role == 7 || role == 8 {
			if url == "pendaftaran" {
				if role == 2 {
					updateFilter = bson.D{
						{"persetujuan.pic_nama", persetujuan.Pic_nama},
						{"persetujuan.pic_tanggal", persetujuan.Pic_tanggal},
						// {"persetujuan.status_persetujuan_pic", persetujuan.Status_persetujuan_pic},
						// {"persetujuan.keterangan_pic", persetujuan.Keterangan_pic},
					}
				} else if role == 3 {
					updateFilter = bson.D{
						{"persetujuan.disposisi_pic", persetujuan.Disposisi_pic},
						{"persetujuan.disposisi_pic_id", persetujuan.Disposisi_pic_id},
						{"persetujuan.manager_nama", claims.Name},
						// {"persetujuan.manager_tanggal", time.Now()},
						// {"persetujuan.status_persetujuan_manager", persetujuan.Status_persetujuan_manager},
						// {"persetujuan.keterangan_manager", persetujuan.Keterangan_manager},
					}
				} else if role == 4 {
					updateFilter = bson.D{
						{"persetujuan.kadiv_nama", persetujuan.Kadiv_nama},
						{"persetujuan.kadiv_tanggal", persetujuan.Kadiv_tanggal},
						{"persetujuan.status_persetujuan_kadiv", persetujuan.Status_persetujuan_kadiv},
						{"persetujuan.keterangan_kadiv", persetujuan.Keterangan_kadiv},
					}
				}
				break
			} else if url == "upd" {
				updateFilter = bson.D{
					{"upd.tujuan", Pendaftaran.Upd.Tujuan},
					{"upd.latar_belakang", Pendaftaran.Upd.Latar_belakang},
					{"upd.analisis_kelayakan", Pendaftaran.Upd.Analisis_kelayakan},
					{"upd.rekomendasi", Pendaftaran.Upd.Rekomendasi},
					{"upd.program_penyaluran.pelaksana_teknis", Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis},
					{"upd.program_penyaluran.alur_biaya", Pendaftaran.Upd.Program_penyaluran.Alur_biaya},
					{"upd.program_penyaluran.penanggung_jawab", Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab},
				}

				if role == 2 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.pic_nama", claims.Name})
				} else if role == 3 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_nama", claims.Name})
				} else if role == 4 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.keterangan_kadiv", Pendaftaran.Persetujuan.Keterangan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan_kadiv", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.tanggal_persetujuan", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_id", claims.ID})
				}
				break
			} else if url == "verifikator" {
				updateFilter = bson.D{
					{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
					{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
					{"verifikasi.tanggal_verifikasi", Pendaftaran.Verifikasi.Tanggal_verifikasi},
					{"verifikasi.nama_pelaksana", Pendaftaran.Verifikasi.Nama_pelaksana},
					{"verifikasi.jabatan_pelaksana", Pendaftaran.Verifikasi.Jabatan_pelaksana},
					{"verifikasi.bentuk_bantuan", Pendaftaran.Verifikasi.Bentuk_bantuan},
					{"verifikasi.hasil_verifikasi.kelengkapan_adm", Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm},
					{"verifikasi.hasil_verifikasi.direkomendasikan", Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan},
					{"verifikasi.hasil_verifikasi.dokumentasi", Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi},
					{"verifikasi.cara_verifikasi", Pendaftaran.Verifikasi.Cara_verifikasi},
					{"verifikasi.pihak_konfirmasi", Pendaftaran.Verifikasi.Pihak_konfirmasi},
					{"verifikasi.penerima_manfaat", Pendaftaran.Verifikasi.Penerima_manfaat},
				}
				if role == 3 {
					updateFilter = append(updateFilter, bson.E{"verifikasi.tanggal_verifikasi_manager", time.Now()})
				}
			} else if url == "komite" {
				for key, value := range Pendaftaran.Komite {
					if value.User.ID == claims.ID {

						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".catatan", value.Catatan})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".status", value.Status})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}

				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_komite", Pendaftaran.Persetujuan.Tanggal_komite},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"tujuan_proposal", Pendaftaran.Tujuan_proposal},
						{"persetujuan.sifat_santunan", Pendaftaran.Persetujuan.Sifat_santunan},
						{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
						{"persetujuan.sumber_dana", Pendaftaran.Persetujuan.Sumber_dana},
						{"persetujuan.jumlah_penerima_manfaat", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat},
						{"persetujuan.mitra_pelaksana", Pendaftaran.Persetujuan.Mitra_pelaksana},
						{"persetujuan.nomor_permohonan", Pendaftaran.Persetujuan.Nomor_permohonan},
						{"komite", Pendaftaran.Komite},
					}
				}
			} else if url == "ppd" {
				for key, value := range Pendaftaran.Ppd {
					if value.User.ID == claims.ID {
						updateFilter = append(updateFilter, bson.E{"ppd." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}

				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_ppd", Pendaftaran.Persetujuan.Tanggal_ppd},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"persetujuan.bank_tertuju", Pendaftaran.Persetujuan.Bank_tertuju},
						{"persetujuan.anggaran_biaya", Pendaftaran.Persetujuan.Anggaran_biaya},
						{"persetujuan.referensi", Pendaftaran.Persetujuan.Referensi},
						{"persetujuan.jenis_pengeluaran", Pendaftaran.Persetujuan.Jenis_pengeluaran},
						{"persetujuan.nomor_ppd", Pendaftaran.Persetujuan.Nomor_ppd},
						{"ppd", Pendaftaran.Ppd},
					}
				}
			} else if url == "pencairan" {
				updateFilter = bson.D{
					{"persetujuan.tanggal_pencairan", Pendaftaran.Persetujuan.Tanggal_pencairan},
					{"persetujuan.keterangan", Pendaftaran.Persetujuan.Keterangan},
					{"persetujuan.jumlah_pencairan", Pendaftaran.Persetujuan.Jumlah_pencairan},
				}
			} else {
				updateFilter = bson.D{}
			}
		} else {
			updateFilter = bson.D{
				{"persetujuan.manager_id", Pendaftaran.Persetujuan.Manager},
				{"persetujuan.disposisi_pic_id", Pendaftaran.Persetujuan.Disposisi_pic_id},
				{"tanggal_proposal", Pendaftaran.Tanggal_proposal},
				{"judul_proposal", Pendaftaran.Judul_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.kategori", Pendaftaran.Kategoris.Kategori},
				{"kategoris.sub_program", Pendaftaran.Kategoris.Sub_program},
				{"kategoris.cabang", Pendaftaran.Kategoris.Cabang},
				{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
			}
		}
	// Kategori KAFALA
	case 4:
		Pendaftaran := models.PendaftaranKAFALA{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		if role == 2 || role == 3 || role == 4 || role == 9 || role == 7 || role == 8 {
			if url == "pendaftaran" {
				if role == 2 {
					updateFilter = bson.D{
						{"persetujuan.pic_nama", persetujuan.Pic_nama},
						{"persetujuan.pic_tanggal", persetujuan.Pic_tanggal},
						// {"persetujuan.status_persetujuan_pic", persetujuan.Status_persetujuan_pic},
						// {"persetujuan.keterangan_pic", persetujuan.Keterangan_pic},
					}
				} else if role == 3 {
					updateFilter = bson.D{
						{"persetujuan.disposisi_pic", persetujuan.Disposisi_pic},
						{"persetujuan.disposisi_pic_id", persetujuan.Disposisi_pic_id},
						{"persetujuan.manager_nama", claims.Name},
						// {"persetujuan.manager_tanggal", time.Now()},
						// {"persetujuan.status_persetujuan_manager", persetujuan.Status_persetujuan_manager},
						// {"persetujuan.keterangan_manager", persetujuan.Keterangan_manager},
					}
				} else if role == 4 {
					updateFilter = bson.D{
						{"persetujuan.kadiv_nama", persetujuan.Kadiv_nama},
						{"persetujuan.kadiv_tanggal", persetujuan.Kadiv_tanggal},
						{"persetujuan.status_persetujuan_kadiv", persetujuan.Status_persetujuan_kadiv},
						{"persetujuan.keterangan_kadiv", persetujuan.Keterangan_kadiv},
					}
				}
				break
			} else if url == "upd" {
				updateFilter = bson.D{
					{"upd.tujuan", Pendaftaran.Upd.Tujuan},
					{"upd.latar_belakang", Pendaftaran.Upd.Latar_belakang},
					{"upd.analisis_kelayakan", Pendaftaran.Upd.Analisis_kelayakan},
					{"upd.rekomendasi", Pendaftaran.Upd.Rekomendasi},
					{"upd.program_penyaluran.pelaksana_teknis", Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis},
					{"upd.program_penyaluran.alur_biaya", Pendaftaran.Upd.Program_penyaluran.Alur_biaya},
					{"upd.program_penyaluran.penanggung_jawab", Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab},
				}

				if role == 2 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.pic_nama", claims.Name})
				} else if role == 3 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_nama", claims.Name})
				} else if role == 4 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.keterangan_kadiv", Pendaftaran.Persetujuan.Keterangan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan_kadiv", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.tanggal_persetujuan", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_id", claims.ID})
				}
				break
			} else if url == "verifikator" {
				updateFilter = bson.D{
					{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
					{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
					{"verifikasi.tanggal_verifikasi", Pendaftaran.Verifikasi.Tanggal_verifikasi},
					{"verifikasi.nama_pelaksana", Pendaftaran.Verifikasi.Nama_pelaksana},
					{"verifikasi.jabatan_pelaksana", Pendaftaran.Verifikasi.Jabatan_pelaksana},
					{"verifikasi.bentuk_bantuan", Pendaftaran.Verifikasi.Bentuk_bantuan},
					{"verifikasi.hasil_verifikasi.kelengkapan_adm", Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm},
					{"verifikasi.hasil_verifikasi.direkomendasikan", Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan},
					{"verifikasi.hasil_verifikasi.dokumentasi", Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi},
					{"verifikasi.cara_verifikasi", Pendaftaran.Verifikasi.Cara_verifikasi},
					{"verifikasi.pihak_konfirmasi", Pendaftaran.Verifikasi.Pihak_konfirmasi},
					{"verifikasi.penerima_manfaat", Pendaftaran.Verifikasi.Penerima_manfaat},
				}
				if role == 3 {
					updateFilter = append(updateFilter, bson.E{"verifikasi.tanggal_verifikasi_manager", time.Now()})
				}
			} else if url == "ppd" {
				for key, value := range Pendaftaran.Ppd {
					if value.User.ID == claims.ID {
						updateFilter = append(updateFilter, bson.E{"ppd." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}

				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_ppd", Pendaftaran.Persetujuan.Tanggal_ppd},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"persetujuan.bank_tertuju", Pendaftaran.Persetujuan.Bank_tertuju},
						{"persetujuan.anggaran_biaya", Pendaftaran.Persetujuan.Anggaran_biaya},
						{"persetujuan.referensi", Pendaftaran.Persetujuan.Referensi},
						{"persetujuan.jenis_pengeluaran", Pendaftaran.Persetujuan.Jenis_pengeluaran},
						{"persetujuan.nomor_ppd", Pendaftaran.Persetujuan.Nomor_ppd},
						{"ppd", Pendaftaran.Ppd},
					}
				}
			} else if url == "komite" {
				for key, value := range Pendaftaran.Komite {
					if value.User.ID == claims.ID {

						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".catatan", value.Catatan})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".status", value.Status})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}

				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_komite", Pendaftaran.Persetujuan.Tanggal_komite},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"tujuan_proposal", Pendaftaran.Tujuan_proposal},
						{"persetujuan.sifat_santunan", Pendaftaran.Persetujuan.Sifat_santunan},
						{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
						{"persetujuan.sumber_dana", Pendaftaran.Persetujuan.Sumber_dana},
						{"persetujuan.jumlah_penerima_manfaat", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat},
						{"persetujuan.mitra_pelaksana", Pendaftaran.Persetujuan.Mitra_pelaksana},
						{"persetujuan.nomor_permohonan", Pendaftaran.Persetujuan.Nomor_permohonan},
						{"komite", Pendaftaran.Komite},
					}
				}
			} else if url == "pencairan" {
				updateFilter = bson.D{
					{"persetujuan.tanggal_pencairan", Pendaftaran.Persetujuan.Tanggal_pencairan},
					{"persetujuan.keterangan", Pendaftaran.Persetujuan.Keterangan},
					{"persetujuan.jumlah_pencairan", Pendaftaran.Persetujuan.Jumlah_pencairan},
				}
			} else {
				updateFilter = bson.D{}
			}

		} else {
			updateFilter = bson.D{
				{"persetujuan.manager_id", Pendaftaran.Persetujuan.Manager},
				{"persetujuan.disposisi_pic_id", Pendaftaran.Persetujuan.Disposisi_pic_id},
				{"tanggal_proposal", Pendaftaran.Tanggal_proposal},
				{"judul_proposal", Pendaftaran.Judul_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.kategori", Pendaftaran.Kategoris.Kategori},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.ui_id", Pendaftaran.Kategoris.Ui_id},
				{"kategoris.pengasuh", Pendaftaran.Kategoris.Pengasuh},
				{"kategoris.sub_program", Pendaftaran.Kategoris.Sub_program},
				{"kategoris.tanggal_lahir", Pendaftaran.Kategoris.Tanggal_lahir},
				{"kategoris.mitra", Pendaftaran.Kategoris.Mitra},
				{"kategoris.ytm", Pendaftaran.Kategoris.Ytm},
				{"kategoris.kelas", Pendaftaran.Kategoris.Kelas},
				{"kategoris.jumlah_hafalan", Pendaftaran.Kategoris.Jumlah_hafalan},
				{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
				{"kategoris.jenis_dana", Pendaftaran.Kategoris.Jenis_dana},
			}
		}
	// Kategori JSM
	case 5:
		Pendaftaran := models.PendaftaranJSM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		if role == 2 || role == 3 || role == 4 || role == 9 || role == 7 || role == 8 {
			if url == "pendaftaran" {
				if role == 2 {
					updateFilter = bson.D{
						{"persetujuan.pic_nama", persetujuan.Pic_nama},
						{"persetujuan.pic_tanggal", persetujuan.Pic_tanggal},
						// {"persetujuan.status_persetujuan_pic", persetujuan.Status_persetujuan_pic},
						// {"persetujuan.keterangan_pic", persetujuan.Keterangan_pic},
					}
				} else if role == 3 {
					updateFilter = bson.D{
						{"persetujuan.disposisi_pic", persetujuan.Disposisi_pic},
						{"persetujuan.disposisi_pic_id", persetujuan.Disposisi_pic_id},
						{"persetujuan.manager_nama", claims.Name},
						// {"persetujuan.manager_tanggal", time.Now()},
						// {"persetujuan.status_persetujuan_manager", persetujuan.Status_persetujuan_manager},
						// {"persetujuan.keterangan_manager", persetujuan.Keterangan_manager},
					}
				} else if role == 4 {
					updateFilter = bson.D{
						{"persetujuan.kadiv_nama", persetujuan.Kadiv_nama},
						{"persetujuan.kadiv_tanggal", persetujuan.Kadiv_tanggal},
						{"persetujuan.status_persetujuan_kadiv", persetujuan.Status_persetujuan_kadiv},
						{"persetujuan.keterangan_kadiv", persetujuan.Keterangan_kadiv},
					}
				}
				break
			} else if url == "upd" {
				updateFilter = bson.D{
					{"upd.tujuan", Pendaftaran.Upd.Tujuan},
					{"upd.latar_belakang", Pendaftaran.Upd.Latar_belakang},
					{"upd.analisis_kelayakan", Pendaftaran.Upd.Analisis_kelayakan},
					{"upd.rekomendasi", Pendaftaran.Upd.Rekomendasi},
					{"upd.program_penyaluran.pelaksana_teknis", Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis},
					{"upd.program_penyaluran.alur_biaya", Pendaftaran.Upd.Program_penyaluran.Alur_biaya},
					{"upd.program_penyaluran.penanggung_jawab", Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab},
				}

				if role == 2 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.pic_nama", claims.Name})
				} else if role == 3 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_nama", claims.Name})
				} else if role == 4 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.keterangan_kadiv", Pendaftaran.Persetujuan.Keterangan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan_kadiv", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.tanggal_persetujuan", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_id", claims.ID})
				}
				break
			} else if url == "verifikator" {
				updateFilter = bson.D{
					{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
					{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
					{"verifikasi.tanggal_verifikasi", Pendaftaran.Verifikasi.Tanggal_verifikasi},
					{"verifikasi.nama_pelaksana", Pendaftaran.Verifikasi.Nama_pelaksana},
					{"verifikasi.jabatan_pelaksana", Pendaftaran.Verifikasi.Jabatan_pelaksana},
					{"verifikasi.bentuk_bantuan", Pendaftaran.Verifikasi.Bentuk_bantuan},
					{"verifikasi.hasil_verifikasi.kelengkapan_adm", Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm},
					{"verifikasi.hasil_verifikasi.direkomendasikan", Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan},
					{"verifikasi.hasil_verifikasi.dokumentasi", Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi},
					{"verifikasi.cara_verifikasi", Pendaftaran.Verifikasi.Cara_verifikasi},
					{"verifikasi.pihak_konfirmasi", Pendaftaran.Verifikasi.Pihak_konfirmasi},
					{"verifikasi.penerima_manfaat", Pendaftaran.Verifikasi.Penerima_manfaat},
				}
				if role == 3 {
					updateFilter = append(updateFilter, bson.E{"verifikasi.tanggal_verifikasi_manager", time.Now()})
				}
			} else if url == "komite" {
				for key, value := range Pendaftaran.Komite {
					if value.User.ID == claims.ID {

						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".catatan", value.Catatan})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".status", value.Status})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}
				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_komite", Pendaftaran.Persetujuan.Tanggal_komite},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"tujuan_proposal", Pendaftaran.Tujuan_proposal},
						{"persetujuan.sifat_santunan", Pendaftaran.Persetujuan.Sifat_santunan},
						{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
						{"persetujuan.sumber_dana", Pendaftaran.Persetujuan.Sumber_dana},
						{"persetujuan.jumlah_penerima_manfaat", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat},
						{"persetujuan.mitra_pelaksana", Pendaftaran.Persetujuan.Mitra_pelaksana},
						{"persetujuan.nomor_permohonan", Pendaftaran.Persetujuan.Nomor_permohonan},
						{"komite", Pendaftaran.Komite},
					}
				}
			} else if url == "ppd" {
				for key, value := range Pendaftaran.Ppd {
					if value.User.ID == claims.ID {
						updateFilter = append(updateFilter, bson.E{"ppd." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}

				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_ppd", Pendaftaran.Persetujuan.Tanggal_ppd},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"persetujuan.bank_tertuju", Pendaftaran.Persetujuan.Bank_tertuju},
						{"persetujuan.anggaran_biaya", Pendaftaran.Persetujuan.Anggaran_biaya},
						{"persetujuan.referensi", Pendaftaran.Persetujuan.Referensi},
						{"persetujuan.jenis_pengeluaran", Pendaftaran.Persetujuan.Jenis_pengeluaran},
						{"persetujuan.nomor_ppd", Pendaftaran.Persetujuan.Nomor_ppd},
						{"ppd", Pendaftaran.Ppd},
					}
				}
			} else if url == "pencairan" {
				updateFilter = bson.D{
					{"persetujuan.tanggal_pencairan", Pendaftaran.Persetujuan.Tanggal_pencairan},
					{"persetujuan.keterangan", Pendaftaran.Persetujuan.Keterangan},
					{"persetujuan.jumlah_pencairan", Pendaftaran.Persetujuan.Jumlah_pencairan},
				}
			} else {
				updateFilter = bson.D{}
			}

		} else {
			updateFilter = bson.D{
				{"persetujuan.manager_id", Pendaftaran.Persetujuan.Manager},
				{"persetujuan.disposisi_pic_id", Pendaftaran.Persetujuan.Disposisi_pic_id},
				{"tanggal_proposal", Pendaftaran.Tanggal_proposal},
				{"judul_proposal", Pendaftaran.Judul_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.kategori", Pendaftaran.Kategoris.Kategori},
				{"kategoris.sub_program", Pendaftaran.Kategoris.Sub_program},
				{"kategoris.afiliasi", Pendaftaran.Kategoris.Afiliasi},
				{"kategoris.non_afiliasi", Pendaftaran.Kategoris.Non_afiliasi},
				{"kategoris.bidang", Pendaftaran.Kategoris.Bidang},
				{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
			}
		}
	// Kategori DZM
	case 6:
		Pendaftaran := models.PendaftaranDZM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		if role == 2 || role == 3 || role == 4 || role == 9 || role == 7 || role == 8 {
			if url == "pendaftaran" {
				if role == 2 {
					updateFilter = bson.D{
						{"persetujuan.pic_nama", persetujuan.Pic_nama},
						{"persetujuan.pic_tanggal", persetujuan.Pic_tanggal},
						// {"persetujuan.status_persetujuan_pic", persetujuan.Status_persetujuan_pic},
						// {"persetujuan.keterangan_pic", persetujuan.Keterangan_pic},
					}
				} else if role == 3 {
					updateFilter = bson.D{
						{"persetujuan.disposisi_pic", persetujuan.Disposisi_pic},
						{"persetujuan.disposisi_pic_id", persetujuan.Disposisi_pic_id},
						{"persetujuan.manager_nama", claims.Name},
						// {"persetujuan.manager_tanggal", time.Now()},
						// {"persetujuan.status_persetujuan_manager", persetujuan.Status_persetujuan_manager},
						// {"persetujuan.keterangan_manager", persetujuan.Keterangan_manager},
					}
				} else if role == 4 {
					updateFilter = bson.D{
						{"persetujuan.kadiv_nama", persetujuan.Kadiv_nama},
						{"persetujuan.kadiv_tanggal", persetujuan.Kadiv_tanggal},
						{"persetujuan.status_persetujuan_kadiv", persetujuan.Status_persetujuan_kadiv},
						{"persetujuan.keterangan_kadiv", persetujuan.Keterangan_kadiv},
					}
				}
				break
			} else if url == "upd" {
				updateFilter = bson.D{
					{"upd.tujuan", Pendaftaran.Upd.Tujuan},
					{"upd.latar_belakang", Pendaftaran.Upd.Latar_belakang},
					{"upd.analisis_kelayakan", Pendaftaran.Upd.Analisis_kelayakan},
					{"upd.rekomendasi", Pendaftaran.Upd.Rekomendasi},
					{"upd.program_penyaluran.pelaksana_teknis", Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis},
					{"upd.program_penyaluran.alur_biaya", Pendaftaran.Upd.Program_penyaluran.Alur_biaya},
					{"upd.program_penyaluran.penanggung_jawab", Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab},
				}

				if role == 2 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.pic_nama", claims.Name})
				} else if role == 3 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_nama", claims.Name})
				} else if role == 4 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.keterangan_kadiv", Pendaftaran.Persetujuan.Keterangan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan_kadiv", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.tanggal_persetujuan", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_id", claims.ID})
				}
				break
			} else if url == "verifikator" {
				updateFilter = bson.D{
					{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
					{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
					{"verifikasi.tanggal_verifikasi", Pendaftaran.Verifikasi.Tanggal_verifikasi},
					{"verifikasi.nama_pelaksana", Pendaftaran.Verifikasi.Nama_pelaksana},
					{"verifikasi.jabatan_pelaksana", Pendaftaran.Verifikasi.Jabatan_pelaksana},
					{"verifikasi.bentuk_bantuan", Pendaftaran.Verifikasi.Bentuk_bantuan},
					{"verifikasi.hasil_verifikasi.kelengkapan_adm", Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm},
					{"verifikasi.hasil_verifikasi.direkomendasikan", Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan},
					{"verifikasi.hasil_verifikasi.dokumentasi", Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi},
					{"verifikasi.cara_verifikasi", Pendaftaran.Verifikasi.Cara_verifikasi},
					{"verifikasi.pihak_konfirmasi", Pendaftaran.Verifikasi.Pihak_konfirmasi},
					{"verifikasi.penerima_manfaat", Pendaftaran.Verifikasi.Penerima_manfaat},
				}
				if role == 3 {
					updateFilter = append(updateFilter, bson.E{"verifikasi.tanggal_verifikasi_manager", time.Now()})
				}
			} else if url == "komite" {

				for key, value := range Pendaftaran.Komite {
					if value.User.ID == claims.ID {

						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".catatan", value.Catatan})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".status", value.Status})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}

				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_komite", Pendaftaran.Persetujuan.Tanggal_komite},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"tujuan_proposal", Pendaftaran.Tujuan_proposal},
						{"persetujuan.sifat_santunan", Pendaftaran.Persetujuan.Sifat_santunan},
						{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
						{"persetujuan.sumber_dana", Pendaftaran.Persetujuan.Sumber_dana},
						{"persetujuan.jumlah_penerima_manfaat", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat},
						{"persetujuan.mitra_pelaksana", Pendaftaran.Persetujuan.Mitra_pelaksana},
						{"persetujuan.nomor_permohonan", Pendaftaran.Persetujuan.Nomor_permohonan},
						{"komite", Pendaftaran.Komite},
					}
				}

			} else if url == "ppd" {
				for key, value := range Pendaftaran.Ppd {
					if value.User.ID == claims.ID {
						updateFilter = append(updateFilter, bson.E{"ppd." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}

				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_ppd", Pendaftaran.Persetujuan.Tanggal_ppd},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"persetujuan.bank_tertuju", Pendaftaran.Persetujuan.Bank_tertuju},
						{"persetujuan.anggaran_biaya", Pendaftaran.Persetujuan.Anggaran_biaya},
						{"persetujuan.referensi", Pendaftaran.Persetujuan.Referensi},
						{"persetujuan.jenis_pengeluaran", Pendaftaran.Persetujuan.Jenis_pengeluaran},
						{"persetujuan.nomor_ppd", Pendaftaran.Persetujuan.Nomor_ppd},
						{"ppd", Pendaftaran.Ppd},
					}
				}
			} else if url == "pencairan" {
				updateFilter = bson.D{
					{"persetujuan.tanggal_pencairan", Pendaftaran.Persetujuan.Tanggal_pencairan},
					{"persetujuan.keterangan", Pendaftaran.Persetujuan.Keterangan},
					{"persetujuan.jumlah_pencairan", Pendaftaran.Persetujuan.Jumlah_pencairan},
				}
			} else {
				updateFilter = bson.D{}
			}
		} else {
			updateFilter = bson.D{
				{"persetujuan.manager_id", Pendaftaran.Persetujuan.Manager},
				{"persetujuan.disposisi_pic_id", Pendaftaran.Persetujuan.Disposisi_pic_id},
				{"tanggal_proposal", Pendaftaran.Tanggal_proposal},
				{"judul_proposal", Pendaftaran.Judul_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.kategori", Pendaftaran.Kategoris.Kategori},
				{"kategoris.sub_program", Pendaftaran.Kategoris.Sub_program},
				{"kategoris.jenis_infrastruktur", Pendaftaran.Kategoris.Jenis_infrastruktur},
				{"kategoris.volume", Pendaftaran.Kategoris.Volume},
				{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
				{"kategoris.jumlah_penduduk_desa", Pendaftaran.Kategoris.Jumlah_penduduk_desa},
			}
		}
	// Kategori BSU
	case 7:
		Pendaftaran := models.PendaftaranBSU{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		if role == 2 || role == 3 || role == 4 || role == 9 || role == 7 || role == 8 {
			if url == "pendaftaran" {
				if role == 2 {
					updateFilter = bson.D{
						{"persetujuan.pic_nama", persetujuan.Pic_nama},
						{"persetujuan.pic_tanggal", persetujuan.Pic_tanggal},
						// {"persetujuan.status_persetujuan_pic", persetujuan.Status_persetujuan_pic},
						// {"persetujuan.keterangan_pic", persetujuan.Keterangan_pic},
					}
				} else if role == 3 {
					updateFilter = bson.D{
						{"persetujuan.disposisi_pic", persetujuan.Disposisi_pic},
						{"persetujuan.disposisi_pic_id", persetujuan.Disposisi_pic_id},
						{"persetujuan.manager_nama", claims.Name},
						// {"persetujuan.manager_tanggal", time.Now()},
						// {"persetujuan.status_persetujuan_manager", persetujuan.Status_persetujuan_manager},
						// {"persetujuan.keterangan_manager", persetujuan.Keterangan_manager},
					}
				} else if role == 4 {
					updateFilter = bson.D{
						{"persetujuan.kadiv_nama", persetujuan.Kadiv_nama},
						{"persetujuan.kadiv_tanggal", persetujuan.Kadiv_tanggal},
						{"persetujuan.status_persetujuan_kadiv", persetujuan.Status_persetujuan_kadiv},
						{"persetujuan.keterangan_kadiv", persetujuan.Keterangan_kadiv},
					}
				}
				break
			} else if url == "upd" {
				updateFilter = bson.D{
					{"upd.tujuan", Pendaftaran.Upd.Tujuan},
					{"upd.latar_belakang", Pendaftaran.Upd.Latar_belakang},
					{"upd.analisis_kelayakan", Pendaftaran.Upd.Analisis_kelayakan},
					{"upd.rekomendasi", Pendaftaran.Upd.Rekomendasi},
					{"upd.program_penyaluran.pelaksana_teknis", Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis},
					{"upd.program_penyaluran.alur_biaya", Pendaftaran.Upd.Program_penyaluran.Alur_biaya},
					{"upd.program_penyaluran.penanggung_jawab", Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab},
				}

				if role == 2 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.pic_nama", claims.Name})
				} else if role == 3 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_nama", claims.Name})
				} else if role == 4 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.keterangan_kadiv", Pendaftaran.Persetujuan.Keterangan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan_kadiv", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.tanggal_persetujuan", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_id", claims.ID})
				}
				break
			} else if url == "verifikator" {
				updateFilter = bson.D{
					{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
					{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
					{"verifikasi.tanggal_verifikasi", Pendaftaran.Verifikasi.Tanggal_verifikasi},
					{"verifikasi.nama_pelaksana", Pendaftaran.Verifikasi.Nama_pelaksana},
					{"verifikasi.jabatan_pelaksana", Pendaftaran.Verifikasi.Jabatan_pelaksana},
					{"verifikasi.bentuk_bantuan", Pendaftaran.Verifikasi.Bentuk_bantuan},
					{"verifikasi.hasil_verifikasi.kelengkapan_adm", Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm},
					{"verifikasi.hasil_verifikasi.direkomendasikan", Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan},
					{"verifikasi.hasil_verifikasi.dokumentasi", Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi},
					{"verifikasi.cara_verifikasi", Pendaftaran.Verifikasi.Cara_verifikasi},
					{"verifikasi.pihak_konfirmasi", Pendaftaran.Verifikasi.Pihak_konfirmasi},
					{"verifikasi.penerima_manfaat", Pendaftaran.Verifikasi.Penerima_manfaat},
				}
				if role == 3 {
					updateFilter = append(updateFilter, bson.E{"verifikasi.tanggal_verifikasi_manager", time.Now()})
				}
			} else if url == "komite" {
				for key, value := range Pendaftaran.Komite {
					if value.User.ID == claims.ID {

						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".catatan", value.Catatan})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".status", value.Status})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}

				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_komite", Pendaftaran.Persetujuan.Tanggal_komite},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"tujuan_proposal", Pendaftaran.Tujuan_proposal},
						{"persetujuan.sifat_santunan", Pendaftaran.Persetujuan.Sifat_santunan},
						{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
						{"persetujuan.sumber_dana", Pendaftaran.Persetujuan.Sumber_dana},
						{"persetujuan.jumlah_penerima_manfaat", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat},
						{"persetujuan.mitra_pelaksana", Pendaftaran.Persetujuan.Mitra_pelaksana},
						{"persetujuan.nomor_permohonan", Pendaftaran.Persetujuan.Nomor_permohonan},
						{"komite", Pendaftaran.Komite},
					}
				}
			} else if url == "ppd" {
				for key, value := range Pendaftaran.Ppd {
					if value.User.ID == claims.ID {
						updateFilter = append(updateFilter, bson.E{"ppd." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}

				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_ppd", Pendaftaran.Persetujuan.Tanggal_ppd},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"persetujuan.bank_tertuju", Pendaftaran.Persetujuan.Bank_tertuju},
						{"persetujuan.anggaran_biaya", Pendaftaran.Persetujuan.Anggaran_biaya},
						{"persetujuan.referensi", Pendaftaran.Persetujuan.Referensi},
						{"persetujuan.jenis_pengeluaran", Pendaftaran.Persetujuan.Jenis_pengeluaran},
						{"persetujuan.nomor_ppd", Pendaftaran.Persetujuan.Nomor_ppd},
						{"ppd", Pendaftaran.Ppd},
					}
				}
			} else if url == "pencairan" {
				updateFilter = bson.D{
					{"persetujuan.tanggal_pencairan", Pendaftaran.Persetujuan.Tanggal_pencairan},
					{"persetujuan.keterangan", Pendaftaran.Persetujuan.Keterangan},
					{"persetujuan.jumlah_pencairan", Pendaftaran.Persetujuan.Jumlah_pencairan},
				}
			} else {
				updateFilter = bson.D{}
			}

		} else {
			updateFilter = bson.D{
				{"persetujuan.manager_id", Pendaftaran.Persetujuan.Manager},
				{"persetujuan.disposisi_pic_id", Pendaftaran.Persetujuan.Disposisi_pic_id},
				{"tanggal_proposal", Pendaftaran.Tanggal_proposal},
				{"judul_proposal", Pendaftaran.Judul_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.kategori", Pendaftaran.Kategoris.Kategori},
				{"kategoris.sub_program", Pendaftaran.Kategoris.Sub_program},
				{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
				{"kategoris.jumlah_muztahik", Pendaftaran.Kategoris.Jumlah_muztahik},
				{"kategoris.jenis_dana", Pendaftaran.Kategoris.Jenis_dana},
				{"kategoris.pendapatan_perhari", Pendaftaran.Kategoris.Pendapatan_perhari},
				{"kategoris.jenis_produk", Pendaftaran.Kategoris.Jenis_produk},
				{"kategoris.aset", Pendaftaran.Kategoris.Aset},
			}
		}
	// Kategori Rescue
	case 8:
		Pendaftaran := models.PendaftaranRescue{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		if role == 2 || role == 3 || role == 4 || role == 9 || role == 7 || role == 8 {
			if url == "pendaftaran" {
				if role == 2 {
					updateFilter = bson.D{
						{"persetujuan.pic_nama", persetujuan.Pic_nama},
						{"persetujuan.pic_tanggal", persetujuan.Pic_tanggal},
						// {"persetujuan.status_persetujuan_pic", persetujuan.Status_persetujuan_pic},
						// {"persetujuan.keterangan_pic", persetujuan.Keterangan_pic},
					}
				} else if role == 3 {
					updateFilter = bson.D{
						{"persetujuan.disposisi_pic", persetujuan.Disposisi_pic},
						{"persetujuan.disposisi_pic_id", persetujuan.Disposisi_pic_id},
						{"persetujuan.manager_nama", claims.Name},
						// {"persetujuan.manager_tanggal", time.Now()},
						// {"persetujuan.status_persetujuan_manager", persetujuan.Status_persetujuan_manager},
						// {"persetujuan.keterangan_manager", persetujuan.Keterangan_manager},
					}
				} else if role == 4 {
					updateFilter = bson.D{
						{"persetujuan.kadiv_nama", persetujuan.Kadiv_nama},
						{"persetujuan.kadiv_tanggal", persetujuan.Kadiv_tanggal},
						{"persetujuan.status_persetujuan_kadiv", persetujuan.Status_persetujuan_kadiv},
						{"persetujuan.keterangan_kadiv", persetujuan.Keterangan_kadiv},
					}
				}
				break
			} else if url == "upd" {
				updateFilter = bson.D{
					{"upd.tujuan", Pendaftaran.Upd.Tujuan},
					{"upd.latar_belakang", Pendaftaran.Upd.Latar_belakang},
					{"upd.analisis_kelayakan", Pendaftaran.Upd.Analisis_kelayakan},
					{"upd.rekomendasi", Pendaftaran.Upd.Rekomendasi},
					{"upd.program_penyaluran.pelaksana_teknis", Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis},
					{"upd.program_penyaluran.alur_biaya", Pendaftaran.Upd.Program_penyaluran.Alur_biaya},
					{"upd.program_penyaluran.penanggung_jawab", Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab},
				}

				if role == 2 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.pic_nama", claims.Name})
				} else if role == 3 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_nama", claims.Name})
				} else if role == 4 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.keterangan_kadiv", Pendaftaran.Persetujuan.Keterangan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan_kadiv", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.tanggal_persetujuan", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_id", claims.ID})
				}
				break
			} else if url == "verifikator" {
				updateFilter = bson.D{
					{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
					{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
					{"verifikasi.tanggal_verifikasi", Pendaftaran.Verifikasi.Tanggal_verifikasi},
					{"verifikasi.nama_pelaksana", Pendaftaran.Verifikasi.Nama_pelaksana},
					{"verifikasi.jabatan_pelaksana", Pendaftaran.Verifikasi.Jabatan_pelaksana},
					{"verifikasi.bentuk_bantuan", Pendaftaran.Verifikasi.Bentuk_bantuan},
					{"verifikasi.hasil_verifikasi.kelengkapan_adm", Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm},
					{"verifikasi.hasil_verifikasi.direkomendasikan", Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan},
					{"verifikasi.hasil_verifikasi.dokumentasi", Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi},
					{"verifikasi.cara_verifikasi", Pendaftaran.Verifikasi.Cara_verifikasi},
					{"verifikasi.pihak_konfirmasi", Pendaftaran.Verifikasi.Pihak_konfirmasi},
					{"verifikasi.penerima_manfaat", Pendaftaran.Verifikasi.Penerima_manfaat},
				}
				if role == 3 {
					updateFilter = append(updateFilter, bson.E{"verifikasi.tanggal_verifikasi_manager", time.Now()})
				}
			} else if url == "komite" {
				for key, value := range Pendaftaran.Komite {
					if value.User.ID == claims.ID {

						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".catatan", value.Catatan})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".status", value.Status})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}

				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_komite", Pendaftaran.Persetujuan.Tanggal_komite},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"tujuan_proposal", Pendaftaran.Tujuan_proposal},
						{"persetujuan.sifat_santunan", Pendaftaran.Persetujuan.Sifat_santunan},
						{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
						{"persetujuan.sumber_dana", Pendaftaran.Persetujuan.Sumber_dana},
						{"persetujuan.jumlah_penerima_manfaat", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat},
						{"persetujuan.mitra_pelaksana", Pendaftaran.Persetujuan.Mitra_pelaksana},
						{"persetujuan.nomor_permohonan", Pendaftaran.Persetujuan.Nomor_permohonan},
						{"komite", Pendaftaran.Komite},
					}
				}
			} else if url == "ppd" {
				for key, value := range Pendaftaran.Ppd {
					if value.User.ID == claims.ID {
						updateFilter = append(updateFilter, bson.E{"ppd." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}

				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_ppd", Pendaftaran.Persetujuan.Tanggal_ppd},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"persetujuan.bank_tertuju", Pendaftaran.Persetujuan.Bank_tertuju},
						{"persetujuan.anggaran_biaya", Pendaftaran.Persetujuan.Anggaran_biaya},
						{"persetujuan.referensi", Pendaftaran.Persetujuan.Referensi},
						{"persetujuan.jenis_pengeluaran", Pendaftaran.Persetujuan.Jenis_pengeluaran},
						{"persetujuan.nomor_ppd", Pendaftaran.Persetujuan.Nomor_ppd},
						{"ppd", Pendaftaran.Ppd},
					}
				}
			} else if url == "pencairan" {
				updateFilter = bson.D{
					{"persetujuan.tanggal_pencairan", Pendaftaran.Persetujuan.Tanggal_pencairan},
					{"persetujuan.keterangan", Pendaftaran.Persetujuan.Keterangan},
					{"persetujuan.jumlah_pencairan", Pendaftaran.Persetujuan.Jumlah_pencairan},
				}
			} else {
				updateFilter = bson.D{}
			}

		} else {
			updateFilter = bson.D{
				{"persetujuan.manager_id", Pendaftaran.Persetujuan.Manager},
				{"persetujuan.disposisi_pic_id", Pendaftaran.Persetujuan.Disposisi_pic_id},
				{"tanggal_proposal", Pendaftaran.Tanggal_proposal},
				{"judul_proposal", Pendaftaran.Judul_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.kategori", Pendaftaran.Kategoris.Kategori},
				{"kategoris.sub_program", Pendaftaran.Kategoris.Sub_program},
				{"kategoris.skala_bencana", Pendaftaran.Kategoris.Skala_bencana},
				{"kategoris.tanggal_respon_bencana", Pendaftaran.Kategoris.Tanggal_respon_bencana},
				{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
				{"kategoris.tahapan_bencana", Pendaftaran.Kategoris.Tahapan_bencana},
			}
		}
	// Kategori BTM
	case 9:
		Pendaftaran := models.PendaftaranBTM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		if role == 2 || role == 3 || role == 4 || role == 9 || role == 7 || role == 8 {
			if url == "pendaftaran" {
				if role == 2 {
					updateFilter = bson.D{
						{"persetujuan.pic_nama", persetujuan.Pic_nama},
						{"persetujuan.pic_tanggal", persetujuan.Pic_tanggal},
						// {"persetujuan.status_persetujuan_pic", persetujuan.Status_persetujuan_pic},
						// {"persetujuan.keterangan_pic", persetujuan.Keterangan_pic},
					}
				} else if role == 3 {
					updateFilter = bson.D{
						{"persetujuan.disposisi_pic", persetujuan.Disposisi_pic},
						{"persetujuan.disposisi_pic_id", persetujuan.Disposisi_pic_id},
						{"persetujuan.manager_nama", claims.Name},
						// {"persetujuan.manager_tanggal", time.Now()},
						// {"persetujuan.status_persetujuan_manager", persetujuan.Status_persetujuan_manager},
						// {"persetujuan.keterangan_manager", persetujuan.Keterangan_manager},
					}
				} else if role == 4 {
					updateFilter = bson.D{
						{"persetujuan.kadiv_nama", persetujuan.Kadiv_nama},
						{"persetujuan.kadiv_tanggal", persetujuan.Kadiv_tanggal},
						{"persetujuan.status_persetujuan_kadiv", persetujuan.Status_persetujuan_kadiv},
						{"persetujuan.keterangan_kadiv", persetujuan.Keterangan_kadiv},
					}
				}
				break
			} else if url == "upd" {
				updateFilter = bson.D{
					{"upd.tujuan", Pendaftaran.Upd.Tujuan},
					{"upd.latar_belakang", Pendaftaran.Upd.Latar_belakang},
					{"upd.analisis_kelayakan", Pendaftaran.Upd.Analisis_kelayakan},
					{"upd.rekomendasi", Pendaftaran.Upd.Rekomendasi},
					{"upd.program_penyaluran.pelaksana_teknis", Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis},
					{"upd.program_penyaluran.alur_biaya", Pendaftaran.Upd.Program_penyaluran.Alur_biaya},
					{"upd.program_penyaluran.penanggung_jawab", Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab},
				}

				if role == 2 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.pic_nama", claims.Name})
				} else if role == 3 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_nama", claims.Name})
				} else if role == 4 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.keterangan_kadiv", Pendaftaran.Persetujuan.Keterangan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan_kadiv", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.tanggal_persetujuan", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_id", claims.ID})
				}
				break
			} else if url == "verifikator" {
				updateFilter = bson.D{
					{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
					{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
					{"verifikasi.tanggal_verifikasi", Pendaftaran.Verifikasi.Tanggal_verifikasi},
					{"verifikasi.nama_pelaksana", Pendaftaran.Verifikasi.Nama_pelaksana},
					{"verifikasi.jabatan_pelaksana", Pendaftaran.Verifikasi.Jabatan_pelaksana},
					{"verifikasi.bentuk_bantuan", Pendaftaran.Verifikasi.Bentuk_bantuan},
					{"verifikasi.hasil_verifikasi.kelengkapan_adm", Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm},
					{"verifikasi.hasil_verifikasi.direkomendasikan", Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan},
					{"verifikasi.hasil_verifikasi.dokumentasi", Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi},
					{"verifikasi.cara_verifikasi", Pendaftaran.Verifikasi.Cara_verifikasi},
					{"verifikasi.pihak_konfirmasi", Pendaftaran.Verifikasi.Pihak_konfirmasi},
					{"verifikasi.penerima_manfaat", Pendaftaran.Verifikasi.Penerima_manfaat},
				}
				if role == 3 {
					updateFilter = append(updateFilter, bson.E{"verifikasi.tanggal_verifikasi_manager", time.Now()})
				}
			} else if url == "komite" {
				for key, value := range Pendaftaran.Komite {
					if value.User.ID == claims.ID {

						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".catatan", value.Catatan})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".status", value.Status})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}

				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_komite", Pendaftaran.Persetujuan.Tanggal_komite},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"tujuan_proposal", Pendaftaran.Tujuan_proposal},
						{"persetujuan.sifat_santunan", Pendaftaran.Persetujuan.Sifat_santunan},
						{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
						{"persetujuan.sumber_dana", Pendaftaran.Persetujuan.Sumber_dana},
						{"persetujuan.jumlah_penerima_manfaat", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat},
						{"persetujuan.mitra_pelaksana", Pendaftaran.Persetujuan.Mitra_pelaksana},
						{"persetujuan.nomor_permohonan", Pendaftaran.Persetujuan.Nomor_permohonan},
						{"komite", Pendaftaran.Komite},
					}
				}
			} else if url == "ppd" {
				for key, value := range Pendaftaran.Ppd {
					if value.User.ID == claims.ID {
						updateFilter = append(updateFilter, bson.E{"ppd." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}

				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_ppd", Pendaftaran.Persetujuan.Tanggal_ppd},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"persetujuan.bank_tertuju", Pendaftaran.Persetujuan.Bank_tertuju},
						{"persetujuan.anggaran_biaya", Pendaftaran.Persetujuan.Anggaran_biaya},
						{"persetujuan.referensi", Pendaftaran.Persetujuan.Referensi},
						{"persetujuan.jenis_pengeluaran", Pendaftaran.Persetujuan.Jenis_pengeluaran},
						{"persetujuan.nomor_ppd", Pendaftaran.Persetujuan.Nomor_ppd},
						{"ppd", Pendaftaran.Ppd},
					}
				}
			} else if url == "pencairan" {
				updateFilter = bson.D{
					{"persetujuan.tanggal_pencairan", Pendaftaran.Persetujuan.Tanggal_pencairan},
					{"persetujuan.keterangan", Pendaftaran.Persetujuan.Keterangan},
					{"persetujuan.jumlah_pencairan", Pendaftaran.Persetujuan.Jumlah_pencairan},
				}
			} else {
				updateFilter = bson.D{}
			}

		} else {
			updateFilter = bson.D{
				{"persetujuan.manager_id", Pendaftaran.Persetujuan.Manager},
				{"persetujuan.disposisi_pic_id", Pendaftaran.Persetujuan.Disposisi_pic_id},
				{"tanggal_proposal", Pendaftaran.Tanggal_proposal},
				{"judul_proposal", Pendaftaran.Judul_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.kategori", Pendaftaran.Kategoris.Kategori},
				{"kategoris.sub_program", Pendaftaran.Kategoris.Sub_program},
				{"kategoris.tempat", Pendaftaran.Kategoris.Tempat},
				{"kategoris.tanggal_lahir", Pendaftaran.Kategoris.Tanggal_lahir},
				{"kategoris.alamat", Pendaftaran.Kategoris.Alamat},
				{"kategoris.mitra", Pendaftaran.Kategoris.Mitra},
				{"kategoris.kelas", Pendaftaran.Kategoris.Kelas},
				{"kategoris.jumlah_hafalan", Pendaftaran.Kategoris.Jumlah_hafalan},
				{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
				{"kategoris.jenis_dana", Pendaftaran.Kategoris.Jenis_dana},
			}
		}
	// Kategori BSM
	case 10:
		Pendaftaran := models.PendaftaranBSM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		if role == 2 || role == 3 || role == 4 || role == 9 || role == 7 || role == 8 {
			if url == "pendaftaran" {
				if role == 2 {
					updateFilter = bson.D{
						{"persetujuan.pic_nama", persetujuan.Pic_nama},
						{"persetujuan.pic_tanggal", persetujuan.Pic_tanggal},
						// {"persetujuan.status_persetujuan_pic", persetujuan.Status_persetujuan_pic},
						// {"persetujuan.keterangan_pic", persetujuan.Keterangan_pic},
					}
				} else if role == 3 {
					updateFilter = bson.D{
						{"persetujuan.disposisi_pic", persetujuan.Disposisi_pic},
						{"persetujuan.disposisi_pic_id", persetujuan.Disposisi_pic_id},
						{"persetujuan.manager_nama", claims.Name},
						// {"persetujuan.manager_tanggal", time.Now()},
						// {"persetujuan.status_persetujuan_manager", persetujuan.Status_persetujuan_manager},
						// {"persetujuan.keterangan_manager", persetujuan.Keterangan_manager},
					}
				} else if role == 4 {
					updateFilter = bson.D{
						{"persetujuan.kadiv_nama", persetujuan.Kadiv_nama},
						{"persetujuan.kadiv_tanggal", persetujuan.Kadiv_tanggal},
						{"persetujuan.status_persetujuan_kadiv", persetujuan.Status_persetujuan_kadiv},
						{"persetujuan.keterangan_kadiv", persetujuan.Keterangan_kadiv},
					}
				}
				break
			} else if url == "upd" {
				updateFilter = bson.D{
					{"upd.tujuan", Pendaftaran.Upd.Tujuan},
					{"upd.latar_belakang", Pendaftaran.Upd.Latar_belakang},
					{"upd.analisis_kelayakan", Pendaftaran.Upd.Analisis_kelayakan},
					{"upd.rekomendasi", Pendaftaran.Upd.Rekomendasi},
					{"upd.program_penyaluran.pelaksana_teknis", Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis},
					{"upd.program_penyaluran.alur_biaya", Pendaftaran.Upd.Program_penyaluran.Alur_biaya},
					{"upd.program_penyaluran.penanggung_jawab", Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab},
				}

				if role == 2 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.pic_nama", claims.Name})
				} else if role == 3 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_nama", claims.Name})
				} else if role == 4 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.keterangan_kadiv", Pendaftaran.Persetujuan.Keterangan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan_kadiv", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.tanggal_persetujuan", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_id", claims.ID})
				}
				break
			} else if url == "verifikator" {
				updateFilter = bson.D{
					{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
					{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
					{"verifikasi.tanggal_verifikasi", Pendaftaran.Verifikasi.Tanggal_verifikasi},
					{"verifikasi.nama_pelaksana", Pendaftaran.Verifikasi.Nama_pelaksana},
					{"verifikasi.jabatan_pelaksana", Pendaftaran.Verifikasi.Jabatan_pelaksana},
					{"verifikasi.bentuk_bantuan", Pendaftaran.Verifikasi.Bentuk_bantuan},
					{"verifikasi.hasil_verifikasi.kelengkapan_adm", Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm},
					{"verifikasi.hasil_verifikasi.direkomendasikan", Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan},
					{"verifikasi.hasil_verifikasi.dokumentasi", Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi},
					{"verifikasi.cara_verifikasi", Pendaftaran.Verifikasi.Cara_verifikasi},
					{"verifikasi.pihak_konfirmasi", Pendaftaran.Verifikasi.Pihak_konfirmasi},
					{"verifikasi.penerima_manfaat", Pendaftaran.Verifikasi.Penerima_manfaat},
				}
				if role == 3 {
					updateFilter = append(updateFilter, bson.E{"verifikasi.tanggal_verifikasi_manager", time.Now()})
				}
			} else if url == "komite" {
				for key, value := range Pendaftaran.Komite {
					if value.User.ID == claims.ID {

						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".catatan", value.Catatan})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".status", value.Status})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}

				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_komite", Pendaftaran.Persetujuan.Tanggal_komite},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"tujuan_proposal", Pendaftaran.Tujuan_proposal},
						{"persetujuan.sifat_santunan", Pendaftaran.Persetujuan.Sifat_santunan},
						{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
						{"persetujuan.sumber_dana", Pendaftaran.Persetujuan.Sumber_dana},
						{"persetujuan.jumlah_penerima_manfaat", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat},
						{"persetujuan.mitra_pelaksana", Pendaftaran.Persetujuan.Mitra_pelaksana},
						{"persetujuan.nomor_permohonan", Pendaftaran.Persetujuan.Nomor_permohonan},
						{"komite", Pendaftaran.Komite},
					}
				}
			} else if url == "ppd" {
				for key, value := range Pendaftaran.Ppd {
					if value.User.ID == claims.ID {
						updateFilter = append(updateFilter, bson.E{"ppd." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}

				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_ppd", Pendaftaran.Persetujuan.Tanggal_ppd},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"persetujuan.bank_tertuju", Pendaftaran.Persetujuan.Bank_tertuju},
						{"persetujuan.anggaran_biaya", Pendaftaran.Persetujuan.Anggaran_biaya},
						{"persetujuan.referensi", Pendaftaran.Persetujuan.Referensi},
						{"persetujuan.jenis_pengeluaran", Pendaftaran.Persetujuan.Jenis_pengeluaran},
						{"persetujuan.nomor_ppd", Pendaftaran.Persetujuan.Nomor_ppd},
						{"ppd", Pendaftaran.Ppd},
					}
				}
			} else if url == "pencairan" {
				updateFilter = bson.D{
					{"persetujuan.tanggal_pencairan", Pendaftaran.Persetujuan.Tanggal_pencairan},
					{"persetujuan.keterangan", Pendaftaran.Persetujuan.Keterangan},
					{"persetujuan.jumlah_pencairan", Pendaftaran.Persetujuan.Jumlah_pencairan},
				}
			} else {
				updateFilter = bson.D{}
			}

		} else {
			updateFilter = bson.D{
				{"persetujuan.manager_id", Pendaftaran.Persetujuan.Manager},
				{"persetujuan.disposisi_pic_id", Pendaftaran.Persetujuan.Disposisi_pic_id},
				{"tanggal_proposal", Pendaftaran.Tanggal_proposal},
				{"judul_proposal", Pendaftaran.Judul_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.kategori", Pendaftaran.Kategoris.Kategori},
				{"kategoris.sub_program", Pendaftaran.Kategoris.Sub_program},
				{"kategoris.tempat", Pendaftaran.Kategoris.Tempat},
				{"kategoris.tanggal_lahir", Pendaftaran.Kategoris.Tanggal_lahir},
				{"kategoris.alamat", Pendaftaran.Kategoris.Alamat},
				{"kategoris.mitra", Pendaftaran.Kategoris.Mitra},
				{"kategoris.semester", Pendaftaran.Kategoris.Semester},
				{"kategoris.jumlah_hafalan", Pendaftaran.Kategoris.Jumlah_hafalan},
				{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
				{"kategoris.jenis_dana", Pendaftaran.Kategoris.Jenis_dana},
				{"kategoris.karya", Pendaftaran.Kategoris.Karya},
			}
		}
	// Kategori BCM
	case 11:
		Pendaftaran := models.PendaftaranBCM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		if role == 2 || role == 3 || role == 4 || role == 9 || role == 7 || role == 8 {
			if url == "pendaftaran" {
				if role == 2 {
					updateFilter = bson.D{
						{"persetujuan.pic_nama", persetujuan.Pic_nama},
						{"persetujuan.pic_tanggal", persetujuan.Pic_tanggal},
						// {"persetujuan.status_persetujuan_pic", persetujuan.Status_persetujuan_pic},
						// {"persetujuan.keterangan_pic", persetujuan.Keterangan_pic},
					}
				} else if role == 3 {
					updateFilter = bson.D{
						{"persetujuan.disposisi_pic", persetujuan.Disposisi_pic},
						{"persetujuan.disposisi_pic_id", persetujuan.Disposisi_pic_id},
						{"persetujuan.manager_nama", claims.Name},
						// {"persetujuan.manager_tanggal", time.Now()},
						// {"persetujuan.status_persetujuan_manager", persetujuan.Status_persetujuan_manager},
						// {"persetujuan.keterangan_manager", persetujuan.Keterangan_manager},
					}
				} else if role == 4 {
					updateFilter = bson.D{
						{"persetujuan.kadiv_nama", persetujuan.Kadiv_nama},
						{"persetujuan.kadiv_tanggal", persetujuan.Kadiv_tanggal},
						{"persetujuan.status_persetujuan_kadiv", persetujuan.Status_persetujuan_kadiv},
						{"persetujuan.keterangan_kadiv", persetujuan.Keterangan_kadiv},
					}
				}
				break
			} else if url == "upd" {
				updateFilter = bson.D{
					{"upd.tujuan", Pendaftaran.Upd.Tujuan},
					{"upd.latar_belakang", Pendaftaran.Upd.Latar_belakang},
					{"upd.analisis_kelayakan", Pendaftaran.Upd.Analisis_kelayakan},
					{"upd.rekomendasi", Pendaftaran.Upd.Rekomendasi},
					{"upd.program_penyaluran.pelaksana_teknis", Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis},
					{"upd.program_penyaluran.alur_biaya", Pendaftaran.Upd.Program_penyaluran.Alur_biaya},
					{"upd.program_penyaluran.penanggung_jawab", Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab},
				}

				if role == 2 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.pic_nama", claims.Name})
				} else if role == 3 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_nama", claims.Name})
				} else if role == 4 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.keterangan_kadiv", Pendaftaran.Persetujuan.Keterangan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan_kadiv", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.tanggal_persetujuan", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_id", claims.ID})
				}
				break
			} else if url == "verifikator" {
				updateFilter = bson.D{
					{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
					{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
					{"verifikasi.tanggal_verifikasi", Pendaftaran.Verifikasi.Tanggal_verifikasi},
					{"verifikasi.nama_pelaksana", Pendaftaran.Verifikasi.Nama_pelaksana},
					{"verifikasi.jabatan_pelaksana", Pendaftaran.Verifikasi.Jabatan_pelaksana},
					{"verifikasi.bentuk_bantuan", Pendaftaran.Verifikasi.Bentuk_bantuan},
					{"verifikasi.hasil_verifikasi.kelengkapan_adm", Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm},
					{"verifikasi.hasil_verifikasi.direkomendasikan", Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan},
					{"verifikasi.hasil_verifikasi.dokumentasi", Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi},
					{"verifikasi.cara_verifikasi", Pendaftaran.Verifikasi.Cara_verifikasi},
					{"verifikasi.pihak_konfirmasi", Pendaftaran.Verifikasi.Pihak_konfirmasi},
					{"verifikasi.penerima_manfaat", Pendaftaran.Verifikasi.Penerima_manfaat},
				}
				if role == 3 {
					updateFilter = append(updateFilter, bson.E{"verifikasi.tanggal_verifikasi_manager", time.Now()})
				}
			} else if url == "komite" {
				for key, value := range Pendaftaran.Komite {
					if value.User.ID == claims.ID {

						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".catatan", value.Catatan})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".status", value.Status})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}

				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_komite", Pendaftaran.Persetujuan.Tanggal_komite},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"tujuan_proposal", Pendaftaran.Tujuan_proposal},
						{"persetujuan.sifat_santunan", Pendaftaran.Persetujuan.Sifat_santunan},
						{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
						{"persetujuan.sumber_dana", Pendaftaran.Persetujuan.Sumber_dana},
						{"persetujuan.jumlah_penerima_manfaat", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat},
						{"persetujuan.mitra_pelaksana", Pendaftaran.Persetujuan.Mitra_pelaksana},
						{"persetujuan.nomor_permohonan", Pendaftaran.Persetujuan.Nomor_permohonan},
						{"komite", Pendaftaran.Komite},
					}
				}
			} else if url == "ppd" {
				for key, value := range Pendaftaran.Ppd {
					if value.User.ID == claims.ID {
						updateFilter = append(updateFilter, bson.E{"ppd." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}

				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_ppd", Pendaftaran.Persetujuan.Tanggal_ppd},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"persetujuan.bank_tertuju", Pendaftaran.Persetujuan.Bank_tertuju},
						{"persetujuan.anggaran_biaya", Pendaftaran.Persetujuan.Anggaran_biaya},
						{"persetujuan.referensi", Pendaftaran.Persetujuan.Referensi},
						{"persetujuan.jenis_pengeluaran", Pendaftaran.Persetujuan.Jenis_pengeluaran},
						{"persetujuan.nomor_ppd", Pendaftaran.Persetujuan.Nomor_ppd},
						{"ppd", Pendaftaran.Ppd},
					}
				}
			} else if url == "pencairan" {
				updateFilter = bson.D{
					{"persetujuan.tanggal_pencairan", Pendaftaran.Persetujuan.Tanggal_pencairan},
					{"persetujuan.keterangan", Pendaftaran.Persetujuan.Keterangan},
					{"persetujuan.jumlah_pencairan", Pendaftaran.Persetujuan.Jumlah_pencairan},
				}
			} else {
				updateFilter = bson.D{}
			}

		} else {
			updateFilter = bson.D{
				{"persetujuan.manager_id", Pendaftaran.Persetujuan.Manager},
				{"persetujuan.disposisi_pic_id", Pendaftaran.Persetujuan.Disposisi_pic_id},
				{"tanggal_proposal", Pendaftaran.Tanggal_proposal},
				{"judul_proposal", Pendaftaran.Judul_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.kategori", Pendaftaran.Kategoris.Kategori},
				{"kategoris.sub_program", Pendaftaran.Kategoris.Sub_program},
				{"kategoris.tempat", Pendaftaran.Kategoris.Tempat},
				{"kategoris.tanggal_lahir", Pendaftaran.Kategoris.Tanggal_lahir},
				{"kategoris.alamat", Pendaftaran.Kategoris.Alamat},
				{"kategoris.mitra", Pendaftaran.Kategoris.Mitra},
				{"kategoris.kelas", Pendaftaran.Kategoris.Kelas},
				{"kategoris.jumlah_hafalan", Pendaftaran.Kategoris.Jumlah_hafalan},
				{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
				{"kategoris.jenis_dana", Pendaftaran.Kategoris.Jenis_dana},
				{"kategoris.jumlah_muztahik", Pendaftaran.Kategoris.Jumlah_muztahik},
				{"kategoris.karya", Pendaftaran.Kategoris.Karya},
			}
		}
	// Kategori ASM
	case 12:
		Pendaftaran := models.PendaftaranASM{}
		err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
		if role == 2 || role == 3 || role == 4 || role == 9 || role == 7 || role == 8 {
			if url == "pendaftaran" {
				if role == 2 {
					updateFilter = bson.D{
						{"persetujuan.pic_nama", persetujuan.Pic_nama},
						{"persetujuan.pic_tanggal", persetujuan.Pic_tanggal},
						// {"persetujuan.status_persetujuan_pic", persetujuan.Status_persetujuan_pic},
						// {"persetujuan.keterangan_pic", persetujuan.Keterangan_pic},
					}
				} else if role == 3 {
					updateFilter = bson.D{
						{"persetujuan.disposisi_pic", persetujuan.Disposisi_pic},
						{"persetujuan.disposisi_pic_id", persetujuan.Disposisi_pic_id},
						{"persetujuan.manager_nama", claims.Name},
						// {"persetujuan.manager_tanggal", time.Now()},
						// {"persetujuan.status_persetujuan_manager", persetujuan.Status_persetujuan_manager},
						// {"persetujuan.keterangan_manager", persetujuan.Keterangan_manager},
					}
				} else if role == 4 {
					updateFilter = bson.D{
						{"persetujuan.kadiv_nama", persetujuan.Kadiv_nama},
						{"persetujuan.kadiv_tanggal", persetujuan.Kadiv_tanggal},
						{"persetujuan.status_persetujuan_kadiv", persetujuan.Status_persetujuan_kadiv},
						{"persetujuan.keterangan_kadiv", persetujuan.Keterangan_kadiv},
					}
				}
				break
			} else if url == "upd" {
				updateFilter = bson.D{
					{"upd.tujuan", Pendaftaran.Upd.Tujuan},
					{"upd.latar_belakang", Pendaftaran.Upd.Latar_belakang},
					{"upd.analisis_kelayakan", Pendaftaran.Upd.Analisis_kelayakan},
					{"upd.rekomendasi", Pendaftaran.Upd.Rekomendasi},
					{"upd.program_penyaluran.pelaksana_teknis", Pendaftaran.Upd.Program_penyaluran.Pelaksana_teknis},
					{"upd.program_penyaluran.alur_biaya", Pendaftaran.Upd.Program_penyaluran.Alur_biaya},
					{"upd.program_penyaluran.penanggung_jawab", Pendaftaran.Upd.Program_penyaluran.Penanggung_jawab},
				}

				if role == 2 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.verifikator_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.pic_nama", claims.Name})
				} else if role == 3 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.manager_nama", claims.Name})
				} else if role == 4 {
					updateFilter = append(updateFilter, bson.E{"persetujuan.keterangan_kadiv", Pendaftaran.Persetujuan.Keterangan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan_kadiv", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_tanggal", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_nama", claims.Name})
					updateFilter = append(updateFilter, bson.E{"persetujuan.status_persetujuan", Pendaftaran.Persetujuan.Status_persetujuan_kadiv})
					updateFilter = append(updateFilter, bson.E{"persetujuan.tanggal_persetujuan", time.Now()})
					updateFilter = append(updateFilter, bson.E{"persetujuan.kadiv_id", claims.ID})
				}
				break
			} else if url == "verifikator" {
				updateFilter = bson.D{
					{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
					{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
					{"verifikasi.tanggal_verifikasi", Pendaftaran.Verifikasi.Tanggal_verifikasi},
					{"verifikasi.nama_pelaksana", Pendaftaran.Verifikasi.Nama_pelaksana},
					{"verifikasi.jabatan_pelaksana", Pendaftaran.Verifikasi.Jabatan_pelaksana},
					{"verifikasi.bentuk_bantuan", Pendaftaran.Verifikasi.Bentuk_bantuan},
					{"verifikasi.hasil_verifikasi.kelengkapan_adm", Pendaftaran.Verifikasi.Hasil_verifikasi.Kelengkapan_adm},
					{"verifikasi.hasil_verifikasi.direkomendasikan", Pendaftaran.Verifikasi.Hasil_verifikasi.Direkomendasikan},
					{"verifikasi.hasil_verifikasi.dokumentasi", Pendaftaran.Verifikasi.Hasil_verifikasi.Dokumentasi},
					{"verifikasi.cara_verifikasi", Pendaftaran.Verifikasi.Cara_verifikasi},
					{"verifikasi.pihak_konfirmasi", Pendaftaran.Verifikasi.Pihak_konfirmasi},
					{"verifikasi.penerima_manfaat", Pendaftaran.Verifikasi.Penerima_manfaat},
				}
				if role == 3 {
					updateFilter = append(updateFilter, bson.E{"verifikasi.tanggal_verifikasi_manager", time.Now()})
				}
			} else if url == "komite" {
				for key, value := range Pendaftaran.Komite {
					if value.User.ID == claims.ID {

						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".catatan", value.Catatan})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".status", value.Status})
						updateFilter = append(updateFilter, bson.E{"komite." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}

				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_komite", Pendaftaran.Persetujuan.Tanggal_komite},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"tujuan_proposal", Pendaftaran.Tujuan_proposal},
						{"persetujuan.sifat_santunan", Pendaftaran.Persetujuan.Sifat_santunan},
						{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
						{"persetujuan.sumber_dana", Pendaftaran.Persetujuan.Sumber_dana},
						{"persetujuan.jumlah_penerima_manfaat", Pendaftaran.Persetujuan.Jumlah_penerima_manfaat},
						{"persetujuan.mitra_pelaksana", Pendaftaran.Persetujuan.Mitra_pelaksana},
						{"persetujuan.nomor_permohonan", Pendaftaran.Persetujuan.Nomor_permohonan},
						{"komite", Pendaftaran.Komite},
					}
				}
			} else if url == "ppd" {
				for key, value := range Pendaftaran.Ppd {
					if value.User.ID == claims.ID {
						updateFilter = append(updateFilter, bson.E{"ppd." + strconv.Itoa(key) + ".tanggal", time.Now()})
					}
				}

				if len(updateFilter) == 0 {
					updateFilter = bson.D{
						{"persetujuan.tanggal_ppd", Pendaftaran.Persetujuan.Tanggal_ppd},
						{"persetujuan.tanggal_pelaksanaan", Pendaftaran.Persetujuan.Tanggal_pelaksanaan},
						{"persetujuan.bank_tertuju", Pendaftaran.Persetujuan.Bank_tertuju},
						{"persetujuan.anggaran_biaya", Pendaftaran.Persetujuan.Anggaran_biaya},
						{"persetujuan.referensi", Pendaftaran.Persetujuan.Referensi},
						{"persetujuan.jenis_pengeluaran", Pendaftaran.Persetujuan.Jenis_pengeluaran},
						{"persetujuan.nomor_ppd", Pendaftaran.Persetujuan.Nomor_ppd},
						{"ppd", Pendaftaran.Ppd},
					}
				}
			} else if url == "pencairan" {
				updateFilter = bson.D{
					{"persetujuan.tanggal_pencairan", Pendaftaran.Persetujuan.Tanggal_pencairan},
					{"persetujuan.keterangan", Pendaftaran.Persetujuan.Keterangan},
					{"persetujuan.jumlah_pencairan", Pendaftaran.Persetujuan.Jumlah_pencairan},
				}
			} else {
				updateFilter = bson.D{}
			}

		} else {
			updateFilter = bson.D{
				{"persetujuan.manager_id", Pendaftaran.Persetujuan.Manager},
				{"persetujuan.disposisi_pic_id", Pendaftaran.Persetujuan.Disposisi_pic_id},
				{"tanggal_proposal", Pendaftaran.Tanggal_proposal},
				{"judul_proposal", Pendaftaran.Judul_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.kategori", Pendaftaran.Kategoris.Kategori},
				{"kategoris.sub_program", Pendaftaran.Kategoris.Sub_program},
				{"kategoris.komunitas", Pendaftaran.Kategoris.Komunitas},
				{"kategoris.kegiatan", Pendaftaran.Kategoris.Kegiatan},
				{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
			}
		}
	default:
		{
			updateFilter = bson.D{}
		}
	}

	//Manager
	// case 3:
	// 	updateFilter = bson.D{
	// 		{"persetujuan.disposisi_pic", persetujuan.Disposisi_pic},
	// 		{"persetujuan.disposisi_pic_id", persetujuan.Disposisi_pic_id},
	// 		{"persetujuan.manager_nama", claims.Name},
	// 		{"persetujuan.manager_tanggal", persetujuan.Manager_tanggal},
	// 		{"persetujuan.status_persetujuan_manager", persetujuan.Status_persetujuan_manager},
	// 		{"persetujuan.keterangan_manager", persetujuan.Keterangan_manager},
	// 	}
	// // Kadiv
	// case 4:
	// updateFilter = bson.D{
	// 	{"persetujuan.kadiv_nama", persetujuan.Kadiv_nama},
	// 	{"persetujuan.kadiv_tanggal", persetujuan.Kadiv_tanggal},
	// 	{"persetujuan.status_persetujuan_kadiv", persetujuan.Status_persetujuan_kadiv},
	// 	{"persetujuan.keterangan_kadiv", persetujuan.Keterangan_kadiv},
	// }
	// case 6:
	// 	updateFilter = bson.D{
	// 		{"persetujuan.jumlah_pencairan", persetujuan.Jumlah_pencairan},
	// 		{"persetujuan.tanggal_pencairan", persetujuan.Tanggal_pencairan},
	// 		{"persetujuan.keterangan", persetujuan.Keterangan},
	// 	}
	// default:
	// 	{
	// 		updateFilter = bson.D{}
	// 	}
	// }
	return updateFilter, nil, nil
}
