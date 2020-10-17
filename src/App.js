import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.sass";

class App extends Component{
  render(){
    return(
      <div className="App">
        <header className="header">this is the header</header>
        <div className="sidebar"> this is the sidebar</div>
        <div className="main"> this is the main area</div>
      </div>
    );
  }
}

export default hot(module)(App);