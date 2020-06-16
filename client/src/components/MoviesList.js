import React, { Component } from 'react';
import { MovieGrid } from './Styled';
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
