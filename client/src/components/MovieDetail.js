import React, { Component } from 'react'; 
// import { Link } from 'react-router-dom';
import { MovieWrapper, MovieInfo} from './Styled';
import { Poster } from './Styled';
import API from '../utils/API';
var moment = require('moment');

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {

    state = {
        movie: {},
    }

    componentDidMount() {
        this.filmSearch(this.props.location.pathname.slice(1));
    }

    filmSearch = filmId => {
        API.filmSearch(filmId)
        .then(res => {this.setState({ movie: res.data})
        })
        .catch(err => console.log(err))
    }

    render() {
        const { movie } = this.state;

        return (
            <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`} >
                <MovieInfo>
                    {movie.link ? 
                    ( <a href={movie.link} target="_blank" rel="noopener noreferrer">
                    <Poster src={movie.poster_path ? 
                    `${POSTER_PATH}${movie.poster_path}` :
                    "http://gearr.scannain.com/wp-content/uploads/2015/02/noposter.jpg"} 
                    alt="{movie.title}" />
                    </a> ) : 
                    ( <Poster src={movie.poster_path ? 
                    `${POSTER_PATH}${movie.poster_path}` :
                    "http://gearr.scannain.com/wp-content/uploads/2015/02/noposter.jpg"} 
                    alt="{movie.title}" /> )
                    }

                    <div>
                        <h1>{movie.title}</h1>
                        <h3>{moment(movie.release).format("MMMM Do YYYY")}</h3>
                        <p>{movie.runtime} minutes</p>
                        <p>{movie.overview}</p>
                    </div>
                </MovieInfo>
            </MovieWrapper>

        )
    }
}

export default MovieDetail;