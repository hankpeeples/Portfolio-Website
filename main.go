package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	err := r.SetTrustedProxies([]string{"127.0.0.1"})
	if err != nil {
		log.Fatalf("SetTrustedProxies failed...\n%v", err)
	}

	r.LoadHTMLGlob("build/*.html")
	r.Static("/static", "build/static")

	r.GET("/", func(ctx *gin.Context) {
		ctx.HTML(http.StatusOK, "index.html", nil)
	})

	r.GET("/ping", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})

	err = r.Run(":3000")
	if err != nil {
		log.Fatalf("Run failed...\n%v", err)
	}
}
