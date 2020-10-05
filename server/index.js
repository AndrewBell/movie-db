const express = require('express')
const app = express()
const port = 8080
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());

// Create DB connection based on env variables
const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
});

// Basic health check
app.get('/health', async (req, res) => {
	const results = await runQuery('SELECT count(*) FROM movies');
	if (results[0]['count(*)'] > 0) {
		res.send("OK");
	} else {
		res.status(500).send("NOT OK");
	}
});

app.get('/movies', async (req, res) => {

	let query = "SELECT * FROM movies";

	if (req.query.search) {
		query = `
			SELECT *
			FROM movies
			WHERE
				title LIKE ${connection.escape(req.query.search + '%')} OR
				origin LIKE ${connection.escape(req.query.search + '%')} OR
				director LIKE ${connection.escape(req.query.search + '%')} OR
				cast LIKE ${connection.escape(req.query.search + '%')} OR
				genre LIKE ${connection.escape(req.query.search + '%')} OR
				plot LIKE ${connection.escape(req.query.search + '%')};
		`
	}

	const results = await runQuery(query);
	res.send(results);
});

app.listen(port, () => {
	console.log(`Movies API listening at http://localhost:${port}`);
});

// Helper that wraps the query in a promise
const runQuery = (query) => new Promise((resolve, reject) => {
	connection.query(query, (error, results) => {
		if (error) reject(error);
		resolve(results);
	});
});

// Gracefully close database connection on exit, in case of any pending transactions
process.on('exit', function () {
	console.log('Exiting...');
	connection.end(function (err) {
		if (err) {
			console.log("Error closing database connection", err);
		}
	});
});

