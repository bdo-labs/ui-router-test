
#
# Path
#

SHELL:=/bin/bash
PATH:=./node_modules/.bin:$(PATH)


#
# Sources
#

SRC:=$(wildcard lib/*.js)


#
# Targets
#

all: build

build: node_modules $(SRC)
	atomify --output $@/$@
	cp test/index.html build

node_modules: package.json
	npm install

test: build
	cd build && browser-sync start --server --files='./*'

clean:
	rm -fr build

.PHONY: clean test

