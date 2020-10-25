function setSmileyPosition(config) {
    let { initial, actual, max } = config;
    let maxValue = initial - max;
    let currentValue = actual - max;

    let sizePercentage = Math.floor(100 - ((currentValue * 100) / maxValue)) + 3

    return {
        width: `${(sizePercentage > 100) ? 100 : sizePercentage}%`
    }
}

export default setSmileyPosition