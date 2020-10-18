import React, { Component } from "react";
import { Switch, Route, Link } from 'react-router-dom'
import { hot } from "react-hot-loader";
import "./App.sass";

import About from './routes/About'
import Home from './routes/Home'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar-container">
          <Link className="button" to="/">Home</Link>
          <Link className="button" to="/about">About</Link>
        </div>

        <div className="main"> this is the main area
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);