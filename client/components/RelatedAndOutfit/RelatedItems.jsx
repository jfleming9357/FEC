import React from 'react';
import axios from 'axios';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import exampleData from './exampleData.js';
import 'pure-react-carousel/dist/react-carousel.es.css';
import CardRelated from './CardRelated.jsx';



class RelatedItems extends React.Component {
  constructor() {
    super();
    this.state = {
      relatedProductIds: [],
      relatedProductInfo: undefined,
      /// once a product has been gathered, don't do it again!
      cachedProductInfo: {}
    }
  }

  getRelatedProductInfo(array) {
    let relatedProdInfoArr = [];
    return Promise.all(
      array.map((item) => {
        // if (!this.state.cachedProductInfo[item]) {
          let url = 'http://localhost:3000/proxy/api/fec2/hratx/products/' + item.toString();
          axios.get(url)
          .then((results) => {
            relatedProdInfoArr.push(results.data);
          })
          .catch((error) => { console.error(`OOOPS!  There was an error getting the information about related product ${item}.`)
          })
        // }  else {
        //   return this.state.cachedProductInfo[item];
        // }
      })
    )
    .then(() => {
      console.log(relatedProdInfoArr);
      this.setState({ relatedProductInfo: relatedProdInfoArr }, () => {
      })
    })
  }

  getRelatedProductIds(productId) {
    let url = 'http://localhost:3000/proxy/api/fec2/hratx/products/' + productId + '/related';
    axios.get(url)
    .then((results) => {this.state.relatedProductIds = results.data})
    .then(() => this.getRelatedProductInfo(this.state.relatedProductIds))
    .then((data) => {

      })
    .catch((error) => {
      console.error('OOOPS!  There was an error getting the list of items related to this one.');
    })
  }

  componentDidMount() {
    this.getRelatedProductIds(12013/*someday I'll be a real variable!*/);
  }

  render() {
    // console.log('Got related product ids? ', this.state.relatedProductIds);
    console.log('Got related product info? ', this.state.relatedProductInfo);
    if (this.state.relatedProductInfo) {
      console.log('rel', this.state.relatedProductInfo);
      return (<div>{this.state.relatedProductInfo.map((data) => {
        return (
          <div>data.id</div>
        )
      })}</div>);
    } else {
      return (<div>nothing</div>)
    }

    //return (
        {/*this.state.relatedProductInfo ? <div>Data Found {this.state.relatedProductInfo.length}</div> : <div onClick={() => {console.log(this.state.relatedProductInfo)}}>Loading....</div>}
      <div style={{ height: 'auto', width: '400px' }}>
      <CarouselProvider
        className='c-related-items-carousel'
        naturalSlideHeight={500}
        naturalSlideWidth={380}
        totalSlides={this.state.relatedProductIds.length}
        visibleSlides={1}
        >
        <Slider>
          {this.state.relatedProductIds.map((product) => {
            console.log('Do I ever hit this line? ', product);
            return (
            <Slide key={product}>
              <header
                className="c-card-related-header">
                <button
                  className="c-related-card-button">
                  <i className="c-related-card-button-icon"></i>
                  Compare this item
                </button>
              </header>
              <div className="c-related-card-body">
                <p>Product Category</p>
                <h3>Product Name</h3>
                <h5>Product Price, StarsRating</h5>
              </div>
            </Slide>
            )})}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
      </div> */ }
  //  );
  }

}

export default RelatedItems;