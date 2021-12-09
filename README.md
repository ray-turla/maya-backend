# Server MayaJS Project

This project was created with [MayaJS CLI](https://github.com/mayajs/cli) version 0.6.3 0.5.4.

## Development Server

Run `maya serve` or `maya s` to run the server. Navigate to `http://localhost:3333`. Hot reload will watch for file changes and restart the server.

> maya serve

## Code scaffolding

Run `maya generate <service | controller | model | route> < name | directory >` to create a new component.

### Create controller

> maya generate controller name-of-controller

### Create service

> maya generate service name-of-service

### Create model

For MongoDB

> maya generate model name-of-model schema=mongo

For SQL

> maya generate model name-of-model schema=sql

### Create route

> maya generate route name-of-route

## Build

Run `maya build` or `maya b` to build the project. Use the `--prod` flag for a production build. The build files will be created in the `dist/` directory.

> maya build
