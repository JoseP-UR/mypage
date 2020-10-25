import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./assets/sass/App.sass";
import Navbar from './components/Navbar'
import Home from './components/Home'


class App extends Component {
  state = {
      charPos: {
        initial: 0,
        actual: 0,
        max: 100
      }
  }
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(e) {
    const element = e.target
    let result = {
        charPos: {
          initial: element.scrollHeight,
          actual: element.scrollHeight - element.scrollTop,
          max: element.clientHeight
        }
    }

    this.setState({...this.state,...result})

  }

  render() {
    return (
      <div className="App">
        <Navbar charPos={this.state.charPos} />
        <div className="main" onScroll={this.handleScroll}>
          <Home />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);