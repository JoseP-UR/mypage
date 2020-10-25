import PixelSmileyFace from '../../../assets/images/PixelsmileyFace.png'
import PixelHappyFace from '../../../assets/images/PixelhappyFace.png'

function switchSmileyFace(e) {
    let { currentSmiley } = this.state;
    currentSmiley = (currentSmiley == PixelSmileyFace) ? PixelHappyFace : PixelSmileyFace;

    this.setState({...this.state, currentSmiley})
}

export default switchSmileyFace;