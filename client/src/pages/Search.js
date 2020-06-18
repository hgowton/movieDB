import React, { Component } from "react";
import { MovieGrid } from '../components/Styled'
import Movie from '../components/Movie';
import Accordian from '../start/Accordian';
import { Container, Row, Col } from '../components/Grid';
import { FormBtn, Input } from '../components/Form';
import API from "../utils/API";


class Search extends Component {

    state = {
        movies: [],
        query: '',
        selected: {},
    }; 

    movieSearch = query => {
        API.movieSearch(query)
        .then(res => {
            this.setState({ movies: res.data})
            // console.log("movieSearch: ", res)
        })
        .catch(err => console.log(err))
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [ name ]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.movieSearch(this.state.query)
    }

    handleSelected = () => {
        console.log("selected")
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-10">
                    <Input
                    value={this.state.query}
                    handleInputChange={this.handleInputChange}
                    name='query'
                    placeholder='Search for movie' />
                    </Col>
                    <Col size="md-2">
                    <FormBtn
                    disabled={!this.state.query}
                    onClick={this.handleFormSubmit} 
                    required />
                    </Col>
                </Row>
                <Accordian movie="hello" />
            <MovieGrid>
                {this.state.movies.map(movie => 
                <Movie key={movie.id} movie={movie} />)}
            </MovieGrid>
            </Container>
        )
    }
}



export default Search;
