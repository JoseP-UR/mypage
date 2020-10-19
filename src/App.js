import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import { hot } from "react-hot-loader";
import "./assets/App.sass";
import Navbar from './components/Navbar'
import About from './routes/About'
import Home from './routes/Home'


class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
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