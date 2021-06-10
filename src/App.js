import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './MovieList.jsx';
import { Container, Row, Col } from "react-bootstrap";
import MovieListHeading from './MovieListHeading.jsx';
import SearchBox from './SearchBox.jsx';
import AddFavourites from './AddFavourites.jsx';
import RemoveFavourites from './RemoveFavourites.jsx';
import axios from 'axios';
const App = () => {
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	// const response;
	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ca51a59`;
		
		const res = await fetch(url);
		const response= await res.json();
    console.log(response);
		if (response.Search) {
			setMovies(response.Search);
		}
	
	};
      useEffect(() => {
		getMovieRequest(searchValue);},[searchValue]);
	  useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	return (
		<>
		<Container fluid className='movie-app'>
			<Row>
				<Col sm={12} md={5} className="heading" >
				<MovieListHeading heading='<MovieFinder>' />
				</Col>
				<Col sm={12}  md={5} className="searches">
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
				</Col>
			</Row>
			
			<div className='row '>
				<MovieList
					movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourites}
				/>
			</div>
			<div className='row heading'>
				<MovieListHeading heading='Favourites' />
			</div>
			<div className='row'>
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
			<Row  fluid className="footer">
			<p>This App is Designed & maintained by Anand Yadav</p>
			</Row>
		</Container>
		
        
       
		</>
	);
};
export default App;