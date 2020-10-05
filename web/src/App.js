import React, {useEffect, useState} from 'react';
import './App.css';
import Container from "react-bootstrap/Container";
import NavBar from "./navbar/NavBar";
import MovieCard from "./MovieCard/MovieCard";
import CardColumns from "react-bootstrap/CardColumns"
import axios from "axios"

function App() {

	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get(`http://${process.env.REACT_APP_SERVER_HOST}:8080/movies`)
			.then(res => {
				setMovies(res.data);
			})
	}, []);

	return (
		<React.Fragment>
			<NavBar/>
			<Container fluid>
				<CardColumns>
					{movies.map(m => <MovieCard data={m} key={m.id}/>)}
				</CardColumns>
			</Container>
		</React.Fragment>
	);
}

export default App;
