# .PHONY: help build-backend build-local up down logs ps generate
.PHONY: help build_backend build_local up down logs ps generate
.DEFAULT_GOAL := help

DOCKER_TAG := latest
build_backend: ## Build docker image to deploy
	docker build -t monorepo-ts-with-go-api:${DOCKER_TAG} --target deploy ./backend

build_local: ## Build docker image to local development
	docker compose build --no-cache

up: ## Do docker compose up with hot reload
	docker compose up -d

down: ## Do docker compose down
	docker compose down

logs: ## Tail docker compose logs
	docker compose logs -f

ps: ## Check container status
	docker compose ps

generate: ## Generate codes
	go generate ./...

help: ## Show options
	@grep -E '^[a-zA-Z_]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
	
