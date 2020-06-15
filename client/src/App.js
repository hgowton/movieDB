import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import logo from "./logo.svg";
import MoviesList from "./components/MoviesList";
import MovieDetail from "./components/MovieDetail";
import "./App.css";


const App = () => (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Switch>
          <Route path="/:id" component={MovieDetail} />
          <Route extact path="/" component={MoviesList} />
        </Switch>
      </div>
    </Router>
);

export default App;
