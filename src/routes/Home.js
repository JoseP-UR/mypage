import React from 'react'
import img from '../assets/test.png'

class Home extends React.Component {
    render() {
        return (
            <div>
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