import React, { Component } from "react";
import { Link } from 'react-router-dom'


class Navbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <Link className="button" to="/">Home</Link>
                <Link className="button" to="/about">About</Link>
            </div>
        )
    }
}


export default Navbar