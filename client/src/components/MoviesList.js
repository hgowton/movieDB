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
        .then(res => {
            this.setState({ movies: res.data})
        })
        .catch(err => console.log(err))
    }

    render() { 

        return (
            <MovieGrid>
                {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
            </MovieGrid>
        )
    }
}

export default MoviesList;

const MovieGrid = styled.div `
display: grid;
padding: 1rem;
grid-template-columns: repeat(5, 1fr);
grid-row-gap: 1rem;`
