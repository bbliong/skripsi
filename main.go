package main

import (
	"github.com/bbliong/sim-bmm/Auth"
	"github.com/bbliong/sim-bmm/controller"
	//"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	// "github.com/itsjamie/gin-cors"
	cors "github.com/rs/cors/wrapper/gin"
)

func main() {

	router := gin.Default()
	router.Use(cors.AllowAll())

	//Membuat port untuk handlernya

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

		api.Use(auth.Auth)
		{
			// Muztahik
			api.GET("/muztahiks", controller.GetAllMuztahik)
			api.GET("/muztahik/:id", controller.GetMuztahik)
			api.POST("/muztahik", controller.CreateMuztahik)
			api.PUT("/muztahik/:id", controller.UpdateMuztahik)
			api.DELETE("/muztahik/:id", controller.DeleteMuztahik)

			// Pendaftaran
			api.GET("/pendaftaran", controller.GetAllPendaftaran)
			api.GET("/pendaftarancount", controller.GetAllPendaftaranCount)
			api.GET("/pendaftaran/:kat/:id", controller.UpdatePendaftaranView)
			api.POST("/pendaftaran", controller.CreatePendaftaran)
			api.PUT("/pendaftaran/:id", controller.UpdatePendaftaran)
			api.DELETE("/pendaftaran/:id", controller.DeletePendaftaran)

			// User
			api.GET("/users", controller.GetAllUser)
			api.GET("/user/:id", controller.GetUser)
			api.POST("/user", controller.CreateUser)
			api.PUT("/user/:id", controller.UpdateUser)
			api.DELETE("/user/:id", controller.DeleteUser)

			api.POST("/user/password", controller.UpdatePassword)
			api.GET("/excel", controller.ManageProposal)
		}

	}

	router.Run(":3000")
}
