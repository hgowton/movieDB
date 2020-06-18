import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MoviesList from "./components/MoviesList";
import MovieDetail from "./components/MovieDetail";
import Search from './pages/Search';
import Nav from './start/Nav';
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/:id" component={MovieDetail} />
          <Route extact path="/" component={MoviesList} />
        </Switch>
      </div>
    </Router>
  )};

export default App;
