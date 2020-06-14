import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import logo from "./logo.svg";
import MoviesList from "./components/MoviesList";
import "./App.css";


class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Switch>
          <Route extact path="/" component={MoviesList} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
