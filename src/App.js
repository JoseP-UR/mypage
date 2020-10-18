import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import { hot } from "react-hot-loader";
import "./App.sass";
import Navbar from './components/Navbar'

import About from './routes/About'
import Home from './routes/Home'
class App extends Component {
  constructor(props) {
    super(props)
    console.log(process.env)
  }
  render() {
    return (
      <div className="App">
        <Navbar />
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