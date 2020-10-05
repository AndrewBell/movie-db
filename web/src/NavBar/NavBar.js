import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import "./NavBar.css"

function NavBar(props) {

	const [query, setQuery] = useState('');

	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand>NOTFLIX</Navbar.Brand>
			<Form inline>
				<FormControl type="text" placeholder="Search" value={query} className="mr-sm-2"
										 onChange={(e) => setQuery(e.target.value)}/>
				<Button variant="outline-success" onClick={(e) => props.onSearch(query)}>Search</Button>
			</Form>
		</Navbar>
	);
}

export default NavBar;
