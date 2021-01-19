import React from 'react';
import exampleData from './exampleData.js';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';



class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfitList: exampleData.exampleProductsList
    }
  }

  addItemClick(item) {
    this.setState({ outfitList: (this.state.outfitList.concat(item))})
  }

  render() {
    console.log('what is in this outfit?', this.state.outfitList)
    return (
      <div style={{ height: '500px', width: '380px' }}>
      <CarouselProvider
        className='c-outfit-carousel'
        naturalSlideHeight={500}
        naturalSlideWidth={380}
        totalSlides={this.state.outfitList.length}
        visibleSlides={1}
        >
        <Slider>
        <Slide className="outfit-adder-slide">
            <header
              className="c-card-outfit-adder-header">
              <button
                className="c-outfit-adder-card-button">
                <i className="c-outfit-card-button-icon"></i>
                Add {12012} to your collection
              </button>
            </header>
          </Slide>
          {this.state.outfitList.map((product) => {
            return (
            <Slide key={product.id}>
                <button
                  className="c-outfit-remover-card-button">
                  <i className="c-outfit-remover-card-button-icon"></i>
                X</button>
              <div className="c-outfit-card-body">
                <h3>{product.name}</h3>
              </div>
            </Slide>
            )})}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </div>
    )
  }
}

export default Outfit;