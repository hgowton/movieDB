import React, { Component } from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import API from '../utils/API';

class MoviesList extends Component {
    
    state = {
        movies: [],
    }

    componentDidMount() {
        this.movieOptions();

    }

    movieOptions = () => {
        API.movieOptions()
        .then(res => console.log("testing" , res))
        .catch(err => console.log(err))
    }

    render() { 
        console.log(this.state.movies)

        return (
            <MovieGrid>
                {/* {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)} */}
            </MovieGrid>
        )
    }
}

export default MoviesList;

const MovieGrid = styled.div `
display: grid;
padding: 1rem;
grid-template-columns: repeat(6, 1fr);
grid-row-gap: 1rem;`
