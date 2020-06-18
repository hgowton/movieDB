import React from 'react';
import { Poster, PosterAlt, Title } from '../components/Styled';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

export function Movie ({ movie , props}) {
    return(
    // <button href={`/${movie.id}`}>
    <button {...props}>
        {movie.poster_path ? 
        <Poster src={`${POSTER_PATH}${movie.poster_path}`}
        alt="{movie.title}" /> :
        <PosterAlt>
            <Title>{movie.title}</Title>
        </PosterAlt>
    }
    </button>

    )
}



