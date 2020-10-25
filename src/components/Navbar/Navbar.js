import React, { Component } from "react";
import './Navbar.sass';
import PixelSmileyFace from '../../assets/images/PixelsmileyFace.png';
import { setSmileyPosition, switchSmileyFace } from './helpers';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSmiley: PixelSmileyFace
        }
        this.switchSmileyFace = switchSmileyFace.bind(this)
    }

    render() {
        const charStyle = setSmileyPosition(this.props.charPos)
        return (
            <div className="navbar-container">
                <div style={charStyle} id="character">
                    <img
                        src={this.state.currentSmiley}
                        onMouseEnter={this.switchSmileyFace}
                        onMouseLeave={this.switchSmileyFace} />
                </div>
            </div>
        )
    }
}


export default Navbar