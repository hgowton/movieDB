import React from 'react';
import { Poster, PosterAlt, Title, LinkDefault } from './Styled';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
    <LinkDefault href={`/${movie.id}`}>
        {movie.poster_path ? 
        <Poster src={`${POSTER_PATH}${movie.poster_path}`}
        alt="{movie.title}" /> :
        <PosterAlt>
            <Title>{movie.title}</Title>
        </PosterAlt>
    }
    </LinkDefault>
);

export default Movie;

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string,
        overview: PropTypes.string,
        poster_path: PropTypes.string,
    }).isRequired,
};

