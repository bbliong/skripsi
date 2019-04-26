package main

import (
	"github.com/bbliong/sim-bmm/Auth"
	"github.com/bbliong/sim-bmm/controller"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {

	router := gin.Default()

	// Handling CORS
	router.Use(cors.Default())

	//Membuat port untuk handlernya

	api := router.Group("/api")
	{
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
			api.GET("/pendaftaran/:kat/:id", controller.UpdatePendaftaranView)
			api.POST("/pendaftaran", controller.CreatePendaftaran)
			api.PUT("/pendaftaran/:id", controller.UpdatePendaftaran)
			api.DELETE("/pendaftaran/:id", controller.DeletePendaftaran)

			// Muztahik
			api.GET("/users", controller.GetAllUser)
			api.GET("/user/:id", controller.GetUser)
			api.POST("/user", controller.CreateUser)
			api.PUT("/user/:id", controller.UpdateUser)
			api.DELETE("/user/:id", controller.DeleteUser)

		}

	}

	router.Run(":3000")
}
