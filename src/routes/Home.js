import React from 'react'
import img from '../assets/test.png'
import genColoredText from '../misc/genColoredText'
import './style/Home.sass'

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <div className="title">{genColoredText('Welcome')}</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <img className="imagem" src={img}></img>
            </div>
        )
    }
}

export default Home;