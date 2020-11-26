#!make
MAKEFLAGS += --silent
#include .env
#export $(shell sed 's/=.*//' .env)

#dev:
#	node_modules/.bin/nodemon server.js

#test:
#	NODE_ENV=test \
#	LOG_ENABLED=false \
#	LOG_LEVEL=silent \
#	npm test

#watch:
#	node_modules/.bin/chokidar 'test/*.js' -c 'node_modules/.bin/tape {path}'

#.PHONY: test
#.PHONY: dev
#.PHONY: watch

#Install dependencies
node_modules:
	npm install

#Start server.js with Node
node_start:
	node server.js

#executes node_modules and node_start
#Install dependencies and start server.js with Node
all:
	npm install
	node server.js
