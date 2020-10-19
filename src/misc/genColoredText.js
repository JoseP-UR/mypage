import genRandomColorHex from './genRandomColorHex'
import React from 'react'

function genColoredText(text) {
    let textArray = text.split('');
    let result = [];

    textArray.forEach((item, index) => {
        result.push(<span key={index} className="colored-text" style={ { color : genRandomColorHex() } }>{item}</span>)
    })

    return result;
}

export default genColoredText;