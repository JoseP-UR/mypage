function genRandomColorHex() {
    const hexChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let result = '#';

    while (result.length < 7) {
        result += hexChars[Math.floor(Math.random() * 16)];        
    }

    return result;
}

export default genRandomColorHex;