import React, { Component } from "react";
import { FormBtn, Input } from '../components/Form';
import API from "../utils/API";

class Search extends Component {

    state = {
        movies: [],
        query: '',
    }; 

    movieSearch = query => {
        API.movieSearch(query)
        .then(res => {
            console.log("movieSearch: ", res)
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

    render() {
        return (
            <div>
                <Input
                value={this.state.query}
                handleInputChange={this.handleInputChange}
                name='query'
                placeholder='Search for movie' />
                <FormBtn
                disabled={!this.state.query}
                onClick={this.handleFormSubmit} 
                required />
            </div>
        )
    }
}



export default Search;
