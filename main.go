package main

import (
	"github.com/gin-gonic/contrib/static"

	"github.com/bbliong/sim-bmm/Auth"
	"github.com/bbliong/sim-bmm/controller"
	//"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	// "github.com/itsjamie/gin-cors"

	cors "github.com/rs/cors/wrapper/gin"
	//ssl
	// "github.com/gin-gonic/autotls"
	// "github.com/gin-gonic/gin"
	// "golang.org/x/crypto/acme/autocert"
)

func main() {

	router := gin.Default()
	router.Use(cors.AllowAll())

	// router.Use(static.Serve("/", static.LocalFile("./frontend", true)))

	// //Membuat port untuk handlernya
	router.Use(static.Serve("/public", static.LocalFile("./public", true)))

	api := router.Group("/api")
	{
		// api.Use(cors.Middleware(cors.Config{
		// 	Origins:         "http://127.0.0.1:8081/",
		// 	Methods:         "GET, PUT, POST, DELETE",
		// 	RequestHeaders:  "Origin, Authorization, Content-Type",
		// 	ExposedHeaders:  "",
		// 	MaxAge:          50 * time.Second,
		// 	Credentials:     true,
		// 	ValidateHeaders: false,
		// }))

		api.POST("/signin", auth.SignIn)
		api.GET("/refresh", auth.Refresh)
		api.GET("/kategori", controller.GetAllKategori)
		api.Use(auth.Auth)
		{
			// Muztahik
			api.GET("/muztahiks", controller.GetAllMuztahik)
			api.GET("/muztahik/:id", controller.GetMuztahik)
			api.POST("/muztahik", controller.CreateMuztahik)
			api.PUT("/muztahik", controller.UpdateMuztahik)
			api.DELETE("/muztahik/:id", controller.DeleteMuztahik)

			// Pendaftaran
			api.GET("/pendaftaran", controller.GetAllPendaftaran)
			api.GET("/pendaftarancount", controller.GetAllPendaftaranCount)
			api.GET("/pendaftaran/:kat/:id", controller.UpdatePendaftaranView)
			api.POST("/pendaftaran", controller.CreatePendaftaran)
			api.PUT("/pendaftaran/:id", controller.UpdatePendaftaran)
			api.PUT("/verifikator/:id", controller.UpdatePendaftaran)
			api.PUT("/upd/:id", controller.UpdatePendaftaran)
			api.PUT("/komite/:id", controller.UpdatePendaftaran)
			api.DELETE("/pendaftaran/:id", controller.DeletePendaftaran)

			// User
			api.GET("/users", controller.GetAllUser)
			api.GET("/user/:id", controller.GetUser)
			api.POST("/user", controller.CreateUser)
			api.PUT("/user/:id", controller.UpdateUser)
			api.DELETE("/user/:id", controller.DeleteUser)

			// Function
			api.POST("/user/password", controller.UpdatePassword)
			api.POST("/upload", controller.UploadImage)
			api.GET("/report/proposal", controller.ManageProposal)
			api.GET("/report/upd/:kat/:id", controller.UpdProposal)
			api.GET("/report/verifikasi/:kat/:id", controller.VerifikasiProposal)
			api.GET("/report/komite/:kat/:id", controller.KomiteProposal)
		}

	}

	router.Use(static.Serve("/", static.LocalFile("./frontend/build/es6-bundled", true)))

	// Masalah 404
	router.NoRoute(func(c *gin.Context) {
		c.File("./frontend/build/es6-bundled/index.html")
	})
	router.Run(":3000")
	// m := autocert.Manager{
	// 	Prompt:     autocert.AcceptTOS,
	// 	HostPolicy: autocert.HostWhitelist("api.bbliong.me"),
	// 	Cache:      autocert.DirCache("/var/www/.cache"),
	// }

	// log.Fatal(autotls.RunWithManager(router, &m))
}
