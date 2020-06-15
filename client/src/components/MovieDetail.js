import React, { Component } from 'react'; 
import styled from 'styled-components';
import { Poster } from './Movie';
import API from '../utils/API';

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
        console.log("check: ", filmId)
        API.filmSearch(filmId)
        .then(res => 
            {
            this.setState({ movie: res.data})
        }
        )
        .catch(err => console.log(err))
    }

    render() {
        const { movie } = this.state;
        console.log(this.props.location.pathname.slice(1))

        return (
            <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`} >
                <MovieInfo>
                    <Poster src={movie.poster_path ? 
                    `${POSTER_PATH}${movie.poster_path}` :
                    "http://gearr.scannain.com/wp-content/uploads/2015/02/noposter.jpg"} 
                    alt="{movie.title}" />
                    <div>
                        <h1>{movie.title}</h1>
                        <h3>{movie.release}</h3>
                        <p>{movie.overview}</p>
                    </div>
                </MovieInfo>
            </MovieWrapper>

        )
    }
}

export default MovieDetail;

const MovieWrapper = styled.div `
position: relative;
padding-top: 50vh;
background: url(${props => props.backdrop}) no-repeat;
background-size: ConvolverNode;
`;

const MovieInfo = styled.div `
background: white;
text-align: left;
padding 2rem 10%;
display: flex;
> div {
    margin-left: 20px;
}
img { 
    position: relative;
    top: -5rem;
}`