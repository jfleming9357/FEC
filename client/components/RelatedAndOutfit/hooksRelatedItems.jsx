import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import exampleData from './exampleData.js';
import 'pure-react-carousel/dist/react-carousel.es.css';
import CardRelated from './CardRelated.jsx';

export const HooksRelatedItems = () => {
  const [relatedProductIds, setRelatedProductIds] = useState([]);
  const [relatedProductInfo, setRelatedProductInfo] = useState([]);

  const getRelatedProductInfo = () => {
    let relatedProdInfoArr = [];
    relatedProductIds.map((item, index) => {
      let url = 'http://localhost:3000/proxy/api/fec2/hratx/products/' + item.toString();
      axios.get(url)
        .then((results) => {
          relatedProdInfoArr.push(results.data);
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
    let url = 'http://localhost:3000/proxy/api/fec2/hratx/products/12013/related';
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

  return (<div onClick={() => {
  }}>{relatedProductInfo.map((item, index) => {
      return (<div key={index}>{item.name}</div>);
    })}</div>);
};