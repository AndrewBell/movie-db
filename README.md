# Movie DB

An example CRUD app to list, search, add, edit and delete movies.

## Goals

-   allows users to list, search, add, edit and delete movies
- 	store movies to a database
-		process for ingesting that csv into the database
-		provide a frontend to perform operations on the database more easily

## Requirements

-   [Node](https://nodejs.org/en/download/) - Tested on v12.16.1
-   [npm](https://www.npmjs.com/package/npm) - (Bundled with Node) Tested on v6.13.4
-   [Docker](https://docs.docker.com/installation/)(Optional, if you would like to run the example in Docker)

## Running This Project

### Build

`gradle build`

### Test

`gradle test`

### Run

`gradle bootRun`

### Run Docker

`docker build . --tag projectname`

`docker run projectname`

## Build Notes

Here are some of the steps followed to develop

* Initialize a project scaffold, some files generated with [starter-files](https://github.com/AndrewBell/starter-files)
