# Movie DB

An example CRUD app to list, search, add, edit and delete movies.

## Goals

-   allows users to list, search, add, edit and delete movies
- 	store movies to a database
-	process for ingesting that csv into the database
-	provide a frontend to perform operations on the database more easily

## Requirements

-   [Node](https://nodejs.org/en/download/) - Tested on v12.16.1
-   [npm](https://www.npmjs.com/package/npm) - (Bundled with Node) Tested on v6.13.4
-   [Docker](https://docs.docker.com/installation/)(Optional, if you would like to run the example in Docker)

## Running This Project

### Run Docker

`docker-compose up`

### Shut down Docker

`docker-compose down`

## Developing

Individual components can be started as follows:

`docker-compose up db` to start a local mysql db

`docker-compose up db server` if you just are developing web

`cd /server` and `npm run dev` for starting the api

`cd /web` and `npm start` for starting the web project

## Build Notes

Here are some steps followed to develop

* Initialize a project scaffold, some files generated with [starter-files](https://github.com/AndrewBell/starter-files)
* `npm init`, create stubbed endpoints, and Docker support
* Import test data from CSV via DataGrip
    * Ideally, would import from CSV directly, but ran into challenges
    * 16 rows failed to import due to missing record separators(?)
    * As a workaround to importing the CSV directly, `2_insert_data.sql` was created from a sql data dump after uploading CSV in DataGrip
* Implement `GET /movies` to return all movies
* Bootstrap a React project with `npm init react-app`
* Create a simple UI that renders sample data using React Bootstrap
* Connect UI to server to load movies
* Add a loading spinner and basic pagination
    * Local API response time is ~2 seconds, but the rendering time for all elements is awful
    * Typically, a paged API response is preferable to returning all records
* Add search capability

## References

* [Express Documentation and Examples](https://expressjs.com/)
* [Docker Compose](https://docs.docker.com/compose/)
* [MySQL Docker](https://hub.docker.com/_/mysql)
* [Dockerizing a Node.js App](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
* [MySQL npm](https://www.npmjs.com/package/mysql)
* [Dockerizing create-react-app](https://mherman.org/blog/dockerizing-a-react-app/)
* [React Bootstrap](https://react-bootstrap.netlify.app/)

## Tools Used

* IntelliJ IDEA Ultimate
* DataGrip
* create-react-app
