package controller

import (
	"context"
	"fmt"
	"net/http"
	"strconv"
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
	fmt.Println(Kat)
	Pendaftarans, err = switchKategoriPendaftaran(Kat.Kategori, c)

	if err != nil {
		result := gin.H{
			"Status": err,
		}
		fmt.Println(err)
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

	search := c.Request.URL.Query()
	filter := bson.M{}
	if len(search) > 0 {
		filter["$or"] = []bson.M{}
		for key, val := range search {
			if key == "muztahik_id" {
				_id, _ := primitive.ObjectIDFromHex(val[0])
				filter["$or"] = append(filter["$or"].([]bson.M), bson.M{key: _id})
			} else {
				filter["$or"] = append(filter["$or"].([]bson.M), bson.M{key: primitive.Regex{Pattern: val[0], Options: "i"}})
			}

		}
	}

	if len(filterRole) != 0 {
		filter["$or"] = append(filter["$or"].([]bson.M), filterRole)
	}

	// Set Projection
	//projection := Filter(claims.Role)
	//cursor, err := collection.Find(ctx, bson.M{}, options.Find().SetProjection(projection))

	//get data taro di cursor
	cursor, err := collection.Find(ctx, filter)
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
		Persetujuan models.Persetujuan
		result      *mongo.UpdateResult
		errs        error
	)

	_id, _ := primitive.ObjectIDFromHex(c.Param("id"))

	err := c.ShouldBindBodyWith(&Persetujuan, binding.JSON)

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

	updateFilters, err, insertFilter := UpdateFilter(claims.Role, Persetujuan, c)

	if insertFilter != nil {
		result, errs = collection.UpdateOne(ctx, filter, bson.D{
			{"$set", insertFilter},
		})
	} else {
		fmt.Printf("%+v", updateFilters)
		result, errs = collection.UpdateOne(ctx, filter, bson.D{
			{"$set", updateFilters},
		})
	}

	if errs != nil {
		fmt.Print(errs)
		c.JSON(500, gin.H{
			"Message": "Error while updating",
		})
		return
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

	if claims.IsKadiv() || claims.IsMGR() || claims.IsPIC() || claims.IsAdmin() {
		fmt.Println("You have permission for this access")
	} else {
		c.JSON(500, gin.H{
			"Message": "You don't have the permission ",
		})
		return
	}

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
		errSQL := collection.FindOne(ctx, filter).Decode(&Pendaftaran)
		if errSQL != nil {
			// If the structure of the body is wrong, return an HTTP error
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
		errSQL := collection.FindOne(ctx, filter).Decode(&Pendaftaran)
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
		errSQL := collection.FindOne(ctx, filter).Decode(&Pendaftaran)
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
		errSQL := collection.FindOne(ctx, filter).Decode(&Pendaftaran)
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
		errSQL := collection.FindOne(ctx, filter).Decode(&Pendaftaran)
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
		errSQL := collection.FindOne(ctx, filter).Decode(&Pendaftaran)
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
		errSQL := collection.FindOne(ctx, filter).Decode(&Pendaftaran)
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
		errSQL := collection.FindOne(ctx, filter).Decode(&Pendaftaran)
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
		errSQL := collection.FindOne(ctx, filter).Decode(&Pendaftaran)
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
		errSQL := collection.FindOne(ctx, filter).Decode(&Pendaftaran)
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
		errSQL := collection.FindOne(ctx, filter).Decode(&Pendaftaran)
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
		errSQL := collection.FindOne(ctx, filter).Decode(&Pendaftaran)
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

func FilterProjection(role int) bson.D {
	var projection bson.D
	switch role {
	// Admin
	case 1:
		projection = bson.D{}
	// PIC
	case 2:
		projection = bson.D{
			// {"pic_tanggal", 1},
			// {"pic_nama", 1},
			// {"keterangan_pic", 1},
			{"persetujuan.manager_tanggal", 0},
			{"persetujuan.manager_nama", 0},
			{"persetujuan.keterangan_manager", 0},
			{"persetujuan.status_persetujuan_manager", 0},
			{"persetujuan.kadiv_tanggal", 0},
			{"persetujuan.kadiv_nama", 0},
			{"persetujuan.keterangan_kadiv", 0},
			{"persetujuan.status_persetujuan_kadiv", 0},
		}
	// Manager
	case 3:
	// Kadiv
	case 4:
	// Administrator
	case 5:
	// Keuangan
	case 6:

	}
	return projection
}

func FilterRole(role int32) bson.M {
	var filter bson.M
	switch role {
	// Admin
	case 1, 5:
		filter = bson.M{}
	// PIC
	case 2:
		filter = bson.M{
			"persetujuan.level_persetujuan": bson.M{
				"$gt": 0,
			},
		}
	// Manager
	case 3:
		filter = bson.M{
			"persetujuan.level_persetujuan": bson.M{
				"$gt": 1,
			},
		}
	// Kadiv
	case 4:
		filter = bson.M{
			"persetujuan.level_persetujuan": bson.M{
				"$gt": 2,
			},
		}
	case 6:
		filter = bson.M{
			"persetujuan.level_persetujuan": bson.M{
				"$gt": 3,
			},
		}
	default:
		{
			filter = bson.M{
				"persetujuan.level_persetujuan": bson.M{
					"$gt": 10,
				},
			}
		}
	}

	return filter
}

func UpdateFilter(role int32, persetujuan models.Persetujuan, c *gin.Context) (bson.D, error, interface{}) {

	var (
		err          error
		Kat          models.Kat
		KatBaru      models.Kat
		updateFilter bson.D
		//Pendaftarans interface{}
	)

	switch role {
	case 1, 5:
		err = c.ShouldBindBodyWith(&Kat, binding.JSON)
		if err != nil {
			fmt.Println(err)
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
			fmt.Printf("%+v", Kat)
			fmt.Println(errSQL)
			c.JSON(500, gin.H{
				"Message": errSQL,
			})
			return bson.D{}, errSQL, nil
		}
		if Kat != KatBaru {
			insert, err := switchKategoriPendaftaran(Kat.Kategori, c)
			return bson.D{}, err, insert
		}

		switch Kat.Kategori {
		// Kategori KSM
		case 1:
			Pendaftaran := models.PendaftaranKSM{}
			err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
			updateFilter = bson.D{
				// {"tangal_proposal", Pendaftaran.Tanggal_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.sub_program", Pendaftaran.Kategoris.Sub_program},
				{"kategoris.kategori", Pendaftaran.Kategoris.Kategori},
				{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
			}
		case 2:
			Pendaftaran := models.PendaftaranRBM{}
			err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
			updateFilter = bson.D{
				{"tangal_proposal", Pendaftaran.Tanggal_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.kategori", Pendaftaran.Kategoris.Kategori},
				{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
				{"kategoris.jumlah_muztahik", Pendaftaran.Kategoris.Jumlah_muztahik},
			}
		// Kategori PAUD
		case 3:
			Pendaftaran := models.PendaftaranPAUD{}
			err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
			updateFilter = bson.D{
				{"tangal_proposal", Pendaftaran.Tanggal_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.kategori", Pendaftaran.Kategoris.Kategori},
				{"kategoris.cabang", Pendaftaran.Kategoris.Cabang},
				{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
			}
		// Kategori KAFALA
		case 4:
			Pendaftaran := models.PendaftaranKAFALA{}
			err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
			updateFilter = bson.D{
				{"tangal_proposal", Pendaftaran.Tanggal_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.ui_id", Pendaftaran.Kategoris.Ui_id},
				{"kategoris.pengasuh", Pendaftaran.Kategoris.Pengasuh},
				{"kategoris.tanggal_lahir", Pendaftaran.Kategoris.Tanggal_lahir},
				{"kategoris.mitra", Pendaftaran.Kategoris.Mitra},
				{"kategoris.ytm", Pendaftaran.Kategoris.Ytm},
				{"kategoris.kelas", Pendaftaran.Kategoris.Kelas},
				{"kategoris.jumlah_hafalan", Pendaftaran.Kategoris.Jumlah_hafalan},
				{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
				{"kategoris.jenis_dana", Pendaftaran.Kategoris.Jenis_dana},
			}
		// Kategori JSM
		case 5:
			Pendaftaran := models.PendaftaranJSM{}
			err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
			updateFilter = bson.D{
				{"tangal_proposal", Pendaftaran.Tanggal_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.kategori", Pendaftaran.Kategoris.Kategori},
				{"kategoris.afiliasi", Pendaftaran.Kategoris.Afiliasi},
				{"kategoris.non_afiliasi", Pendaftaran.Kategoris.Non_afiliasi},
				{"kategoris.bidang", Pendaftaran.Kategoris.Bidang},
				{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
			}
		// Kategori DZM
		case 6:
			Pendaftaran := models.PendaftaranDZM{}
			err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
			updateFilter = bson.D{
				{"tangal_proposal", Pendaftaran.Tanggal_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.kategori", Pendaftaran.Kategoris.Kategori},
				{"kategoris.jenis_infrastruktur", Pendaftaran.Kategoris.Jenis_infrastruktur},
				{"kategoris.volume", Pendaftaran.Kategoris.Volume},
				{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
				{"kategoris.jumlah_penduduk_desa", Pendaftaran.Kategoris.Jumlah_penduduk_desa},
			}
		// Kategori BSU
		case 7:
			Pendaftaran := models.PendaftaranBSU{}
			err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
			updateFilter = bson.D{
				{"tangal_proposal", Pendaftaran.Tanggal_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.kategori", Pendaftaran.Kategoris.Kategori},
				{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
				{"kategoris.jumlah_muztahik", Pendaftaran.Kategoris.Jumlah_muztahik},
				{"kategoris.jenis_dana", Pendaftaran.Kategoris.Jenis_dana},
				{"kategoris.pendapatan_perhari", Pendaftaran.Kategoris.Pendapatan_perhari},
				{"kategoris.jenis_produk", Pendaftaran.Kategoris.Jenis_produk},
				{"kategoris.aset", Pendaftaran.Kategoris.Aset},
			}
		// Kategori Rescue
		case 8:
			Pendaftaran := models.PendaftaranRescue{}
			err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
			updateFilter = bson.D{
				{"tangal_proposal", Pendaftaran.Tanggal_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.kategori", Pendaftaran.Kategoris.Kategori},
				{"kategoris.skala_bencana", Pendaftaran.Kategoris.Skala_bencana},
				{"kategoris.tanggal_respon_bencana", Pendaftaran.Kategoris.Tanggal_respon_bencana},
				{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
				{"kategoris.tahapan_bencana", Pendaftaran.Kategoris.Tahapan_bencana},
			}
		// Kategori BTM
		case 9:
			Pendaftaran := models.PendaftaranBTM{}
			err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
			updateFilter = bson.D{
				{"tangal_proposal", Pendaftaran.Tanggal_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.kategori", Pendaftaran.Kategoris.Kategori},
				{"kategoris.tempat", Pendaftaran.Kategoris.Tempat},
				{"kategoris.tanggal_lahir", Pendaftaran.Kategoris.Tanggal_lahir},
				{"kategoris.alamat", Pendaftaran.Kategoris.Alamat},
				{"kategoris.mitra", Pendaftaran.Kategoris.Mitra},
				{"kategoris.kelas", Pendaftaran.Kategoris.Kelas},
				{"kategoris.jumlah_hafalan", Pendaftaran.Kategoris.Jumlah_hafalan},
				{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
				{"kategoris.jenis_dana", Pendaftaran.Kategoris.Jenis_dana},
			}
		// Kategori BSM
		case 10:
			Pendaftaran := models.PendaftaranBSM{}
			err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
			updateFilter = bson.D{
				{"tangal_proposal", Pendaftaran.Tanggal_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.kategori", Pendaftaran.Kategoris.Kategori},
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
		// Kategori BCM
		case 11:
			Pendaftaran := models.PendaftaranBCM{}
			err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
			updateFilter = bson.D{
				{"tangal_proposal", Pendaftaran.Tanggal_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.kategori", Pendaftaran.Kategoris.Kategori},
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
		// Kategori ASM
		case 12:
			Pendaftaran := models.PendaftaranASM{}
			err = c.ShouldBindBodyWith(&Pendaftaran, binding.JSON)
			updateFilter = bson.D{
				{"tangal_proposal", Pendaftaran.Tanggal_proposal},
				{"kategori", Pendaftaran.Kategori_program},
				{"kategoris.asnaf", Pendaftaran.Kategoris.Asnaf},
				{"kategoris.kategori", Pendaftaran.Kategoris.Kategori},
				{"kategoris.komunitas", Pendaftaran.Kategoris.Komunitas},
				{"kategoris.kegiatan", Pendaftaran.Kategoris.Kegiatan},
				{"kategoris.jumlah_bantuan", Pendaftaran.Kategoris.Jumlah_bantuan},
			}
		default:
			{
				updateFilter = bson.D{}
			}
		}
	// // PIC
	case 2:
		updateFilter = bson.D{
			{"persetujuan.pic_nama", persetujuan.Pic_nama},
			{"persetujuan.pic_tanggal", persetujuan.Pic_tanggal},
			{"persetujuan.status_persetujuan_pic", persetujuan.Status_persetujuan_pic},
			{"persetujuan.keterangan_pic", persetujuan.Keterangan_pic},
		}
	// Manager
	case 3:
		updateFilter = bson.D{
			{"persetujuan.manager_nama", persetujuan.Manager_nama},
			{"persetujuan.manager_tanggal", persetujuan.Manager_tanggal},
			{"persetujuan.status_persetujuan_manager", persetujuan.Status_persetujuan_manager},
			{"persetujuan.keterangan_manager", persetujuan.Keterangan_manager},
		}
	// Kadiv
	case 4:
		updateFilter = bson.D{
			{"persetujuan.kadiv_nama", persetujuan.Kadiv_nama},
			{"persetujuan.kadiv_tanggal", persetujuan.Kadiv_tanggal},
			{"persetujuan.status_persetujuan_kadiv", persetujuan.Status_persetujuan_kadiv},
			{"persetujuan.keterangan_kadiv", persetujuan.Keterangan_kadiv},
		}
	case 6:
		updateFilter = bson.D{
			{"persetujuan.jumlah_pencairan", persetujuan.Jumlah_pencairan},
			{"persetujuan.tanggal_pencairan", persetujuan.Tanggal_pencairan},
			{"persetujuan.keterangan", persetujuan.Keterangan},
		}
	default:
		{
			updateFilter = bson.D{}
		}
	}
	return updateFilter, nil, nil
}
