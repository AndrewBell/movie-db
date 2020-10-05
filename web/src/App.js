import React, {useState} from 'react';
import './App.css';
import Container from "react-bootstrap/Container";
import NavBar from "./navbar/NavBar";
import MovieCard from "./MovieCard/MovieCard";
import CardColumns from "react-bootstrap/CardColumns"

function App() {

	const [movies, setMovies] = useState([{title: "foo"}, {title: "bar"}, {title: "biz"}, {title: "baz"}, {title: "buzz"}, {title: "battle"}]);

	return (
		<React.Fragment>
			<NavBar/>
			<Container fluid>
				<CardColumns>
					{movies.map(m => <MovieCard title={m.title} key={m.title}/>)}
				</CardColumns>
			</Container>
		</React.Fragment>
	);
}

export default App;
