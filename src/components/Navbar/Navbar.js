import React, { Component } from "react";
import './Navbar.sass'
import smiley from '../../assets/smiley.png'

function calculateCharStyles(config) {
    let {initial, actual, max} = config;
    let maxValue = initial - max;

    let currentValue = actual - max;

    let sizePercentage = Math.floor(100 - ((currentValue * 100) / maxValue)) + 3

    return {
        width: `${(sizePercentage > 100) ? 100 : sizePercentage}%`
    }
    // console.log (actual - max)
}
class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const charStyle = calculateCharStyles(this.props.charPos)
        console.log(charStyle)
        return (
            <div className="navbar-container">
                <div style={charStyle} id="character"><img src={smiley} /></div>
            </div>
        )
    }
}


export default Navbar