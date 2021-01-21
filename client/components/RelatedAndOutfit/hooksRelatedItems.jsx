import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import exampleData from './exampleData.js';
import 'pure-react-carousel/dist/react-carousel.es.css';
import CardRelated from './CardRelated.jsx';
import ComparisonModal from './ComparisonModal.jsx';

export const HooksRelatedItems = () => {
  const [relatedProductIds, setRelatedProductIds] = useState([]);
  const [relatedProductInfo, setRelatedProductInfo] = useState([]);

  const getRelatedProductInfo = () => {
    let relatedProdInfoArr = [];
    relatedProductIds.map((item) => {
      let tempObj = {};
      let url1 = 'http://localhost:3000/proxy/api/fec2/hratx/products/' + item.toString();
      let url2 = 'http://localhost:3000/proxy/api/fec2/hratx/products/' + item.toString() + '/styles';
      axios.get(url1)
        .then((results) => {
          tempObj = results.data;
        })
        .then(() => {
          return axios.get(url2)
          .then((results) => {
            if (results.data.results[0].photos[0].thumbnail_url) {
              tempObj.thumbnail = results.data.results[0].photos[0].thumbnail_url;
            }
          })
          .catch((error) => {
            console.error(error, `OH NOOOOO there was an error getting the thumbnail for product ${item.id}`)
          })
        })
        .then(() => {
          relatedProdInfoArr.push(tempObj);
          if (relatedProdInfoArr.length === relatedProductIds.length) {
            setRelatedProductInfo(relatedProdInfoArr);
          }
        })
        .catch((error) => {
          console.error(error, 'OOOPS!  There was an error getting the information about related product.');
        });
    });
  };

  useEffect(() => {
    let url = 'http://localhost:3000/proxy/api/fec2/hratx/products/12016/related';
    axios.get(url)
      .then((results) => {
        setRelatedProductIds(results.data);
      })
      .catch((error) => {
        console.error(error, 'OOOPS!  There was an error getting the list of items related to this one.');
      });
  }, []);

  useEffect(() => {
    getRelatedProductInfo();
  }, [relatedProductIds]);

  return (
    <div className="border" style={{ height: '450px', overflow: 'hidden' }}>
      <CarouselProvider
        className='c-related-items-carousel'
        naturalSlideHeight={100}
        naturalSlideWidth={100}
        totalSlides={relatedProductInfo.length}
        visibleSlides={3}
        >
        <div>
          <ButtonBack>Back</ButtonBack>
        </div>
        <Slider>
          {relatedProductInfo.map((product) => (
            <Slide key={product.id} style={{height:'450px', width:'280px', marginLeft: '7px', marginRight: '7px'}} index={0} onClick={() => console.log(relatedProductInfo)}>
              <div style={{height:'450px', width:'280px'}}>
                <div style={{height:'70%', width: '100%', backgroundImage: `url(${(product.thumbnail)})`, backgroundRepeat: 'no-repeat'}}><p style={{color:'yellow', fontSize:'25px', textAlign:'right'}} onClick={() => (<ComparisonModal product={product}/>)}>&#9733;</p>
                </div>
                <div style={{height:'30%', width: '100%'}}>
                  <p className="fs-6 m-0">{product.category}</p>
                  <p className="fs-6 m-0">{product.name}</p>
                  <p className="fs-6 m-0">${product.default_price}</p>
                  <p className="fs-6 m-0">STARS</p>
                  {/* <p  onClick={() => console.log(relatedProductInfo)} className="fs-6 m-0"></p> */}
                </div>
              </div>
            </Slide>
          ))}
        </Slider>
        <div>
          <ButtonNext>Next</ButtonNext>
        </div>
      </CarouselProvider>

    </div>
  )
};

