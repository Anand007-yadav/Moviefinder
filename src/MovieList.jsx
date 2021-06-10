import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Container, Row, Col } from "react-bootstrap";
const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
		<Container fluid className="main" >
		<Row  col={7} >
			{props.movies.map((movie, index) => (
				
					
				<Col md={4} sm={6} >
                      <Zoom>
					<img  className="photo" src={movie.Poster} width="250" height="300" alt='movie'></img>
					</Zoom>
					{/* <div>jhbsbskjbskjdas</div> */}
					<div
						onClick={() => props.handleFavouritesClick(movie)}
				         className='d-flex justify-content-center align-content-center  favour'
					>
					<FavouriteComponent /></div>  
					
				</Col>

			)
			)}
			</Row>
			
			</Container>
			<hr/>
			<Container>
			{props.movies.map((movie, index) => (
				
					
				<Col md={4} sm={6}>
			  
			{/* <img src={movie.Poster} alt='movie'></img> */}
			
			
		  <div
			 	onClick={() => props.handleFavouritesClick(movie)}
			 className='overlay d-flex align-items-center justify-content-center'
			 >
			
			 </div> 

			 </Col>	

	)
	)}
			</Container>
		</>
	);
};

export default MovieList;