import React from 'react';
import './MovieCard.css';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

function MovieCard(props) {

	/*
	* cast: null
director: "Unknown"
genre: "unknown"
id: 1
origin: "American"
plot: "A bartender is working at a saloon, serving drinks to customers. After he fills a stereotypically Irish man's bucket with beer, Carrie Nation and her followers burst inside. They assault the Irish man, pulling his hat over his eyes and then dumping the beer over his head. The group then begin wrecking the bar, smashing the fixtures, mirrors, and breaking the cash register. The bartender then sprays seltzer water in Nation's face before a group of policemen appear and order everybody to leave.[1]"
title: "Kansas Saloon Smashers"
wiki: "https://en.wikipedia.org/wiki/Kansas_Saloon_Smashers"
year: 1901
	*
	* */

	return (
		<Card>
			<Card.Body>
				<Card.Title>{props.data.title}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">{props.data.year}</Card.Subtitle>
				<Card.Text>
					{props.data.plot}
				</Card.Text>
			</Card.Body>
			<ListGroup className="list-group-flush">
				<ListGroupItem><b>Direct By:</b> {props.data.director}</ListGroupItem>
				<ListGroupItem><b>Genre:</b> {props.data.genre}</ListGroupItem>
				<ListGroupItem><b>Origin:</b> {props.data.origin}</ListGroupItem>
				<ListGroupItem><b>Cast:</b> {props.data.cast}</ListGroupItem>
			</ListGroup>
			<Card.Body>
				<Card.Link href={props.data.wiki}>Wiki</Card.Link>
			</Card.Body>
		</Card>
	);
}

export default MovieCard;
