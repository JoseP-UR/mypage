import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { hot } from "react-hot-loader";
import "./App.sass";
import img from './assets/test.png'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />

          <Switch>
            <Route path="/">
              <div className="main"> this is the main area
          <img className="imagem" src={img}></img>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
              </div>
            </Route>
            <Route path="/about">
              <div className="main"> this is the about area
                <div>about</div>
                <div>about</div>
                <div>about</div>
                <div>about</div>
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default hot(module)(App);