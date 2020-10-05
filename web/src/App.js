import React, {useEffect, useState} from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import NavBar from "./NavBar/NavBar";
import MovieCard from "./MovieCard/MovieCard";
import CardColumns from "react-bootstrap/CardColumns"
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import Pagination from "react-bootstrap/Pagination";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {

	const PAGE_SIZE = 9;
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		axios.get(`http://${process.env.REACT_APP_SERVER_HOST}:8080/movies`)
			.then(res => {
				console.log("Loading movies complete");
				setMovies(res.data);
			})
	}, []);

	return (
		<React.Fragment>
			<NavBar/>
			<Container fluid>
				{movies.length === 0 &&
				<div className="flex-center-content">
					Loading your movies...&nbsp;
					<Spinner animation="border" role="status" size="sm">
						<span className="sr-only">Loading...</span>
					</Spinner>
				</div>
				}

				{movies.length !== 0 &&
				<div>
					<Row>
						<Col>
							<h1>Results ({movies.length})</h1>
						</Col>
						<Col>
							<Pagination className="flex-center-content float-right" size="lg">
								<Pagination.Prev disabled={page === 1} onClick={() => setPage(page - 1)}/>
								<Pagination.Item disabled>{page}</Pagination.Item>
								<Pagination.Next disabled={(page * PAGE_SIZE) >= movies.length} onClick={() => setPage(page + 1)}/>
							</Pagination>
						</Col>
					</Row>
					<CardColumns>
						{movies
							.slice((page - 1) * PAGE_SIZE, ((page - 1) * PAGE_SIZE) + PAGE_SIZE)
							.map(m =>
								<MovieCard data={m} key={m.id}/>)
						}
					</CardColumns>
				</div>
				}
			</Container>
		</React.Fragment>
	);
}

export default App;
