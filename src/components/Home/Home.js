import React from 'react'
import genColoredText from '../../misc/genColoredText'
import './Home.sass'

class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            welcome: []
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ welcome: genColoredText('Welcome') })
        }, 500)
    }

    render() {
        return (
            <div className="home-container">
                <div className="title-container">
                    <div className="title">{this.state.welcome}</div>
                </div>
                <div className="greeting-container">
                    My name is José Paulo and this is my website
                </div>
            </div>
        )
    }
}

export default Home;