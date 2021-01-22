import React from 'react';
import exampleData from './exampleData.js';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';



class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfitList: []
    };
  }

  addItemClick(item) {
    this.setState({ outfitList: (this.state.outfitList.concat(item))})
  }

  render() {
    // console.log('what is in this outfit?', this.state.outfitList)
    return (
      <div>
        <b>YOUR OUTFIT</b>
      </div>
    );
  }
}

export default Outfit;