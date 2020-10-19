import React from 'react'
import genColoredText from '../misc/genColoredText'
import './style/Home.sass'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            welcome: []
        }
        
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({welcome: genColoredText('Welcome')})
        }, 500)
    }
    render() {
        
        return (
            <div className="home-container">
                <div className="title">{this.state.welcome}</div>
            </div>
        )
    }
}

export default Home;