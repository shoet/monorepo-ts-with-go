package main

import (
	"context"
	"log"

	"github.com/shoet/monorepo-ts-with-backend/handler"
)

func main() {
	server, err := handler.NewServer(3000)
	if err != nil {
		log.Fatal(err)
	}
	if err := server.Run(context.Background()); err != nil {
		log.Fatal(err)
	}
}
