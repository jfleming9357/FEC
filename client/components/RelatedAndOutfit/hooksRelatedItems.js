import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import axios from 'axios';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import exampleData from './exampleData.js';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Modal } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

export const HooksRelatedItems = () => {
  const { curProduct, getSingleProduct, getProductRating } = useContext(ProductContext);
  const [relatedProductIds, setRelatedProductIds] = useState([]);
  const [relatedProductInfo, setRelatedProductInfo] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [combinedFeatures, setCombinedFeatures] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const getRelatedProductInfo = () => {
    let relatedProdInfoArr = [];
    relatedProductIds.map((item) => {
      let tempObj = {};
      let url1 =
        '/proxy/api/fec2/hratx/products/' +
        item.toString();
      let url2 =
        '/proxy/api/fec2/hratx/products/' +
        item.toString() +
        '/styles';
      axios
        .get(url1)
        .then((results) => {
          tempObj = results.data;
        })
        .then(() => {
          return axios
            .get(url2)
            .then((results) => {
              if (results.data.results[0].photos[0].thumbnail_url) {
                tempObj.thumbnail =
                  results.data.results[0].photos[0].thumbnail_url.split('&w=')[0] + '&crop=faces&w=200&h=300&q=80';
              }
            })
            .catch((error) => {
              console.error(
                error,
                `OH NOOOOO there was an error getting the thumbnail for product ${item.id}`
              );
            });
        })
        .then(() => {
          relatedProdInfoArr.push(tempObj);
          if (relatedProdInfoArr.length === relatedProductIds.length) {
            setRelatedProductInfo(relatedProdInfoArr);
          }
        })
        .catch((error) => {
          console.error(
            error,
            'OOOPS!  There was an error getting the information about related product.'
          );
        });
    });
  };

  const updateSelectedProduct = (product) => {
    // selectedProduct features + curProduct features
    let tempFeatures = Array.from(
      new Set(
        product.features
          .map((i) => i.feature)
          .concat(curProduct.features.map((i) => i.feature))
      )
    );
    setSelectedProduct(product);
    setShow(true);
    setCombinedFeatures(tempFeatures);
  };

  useEffect(() => {
    let url = `/proxy/api/fec2/hratx/products/${curProduct.id}/related`;
    axios
      .get(url)
      .then((results) => {
        setRelatedProductIds(results.data);
      })
      .catch((error) => {
        console.error(
          error,
          'OOOPS!  There was an error getting the list of items related to this one.'
        );
      });
  }, [curProduct]);

  useEffect(() => {
    getRelatedProductInfo();
  }, [relatedProductIds]);

  return (
    <>
      <b>RELATED PRODUCTS</b>
      <div className="border" style={{ height: '450px', overflow: 'hidden' }}>
        <CarouselProvider
          className="c-related-items-carousel"
          naturalSlideHeight={100}
          naturalSlideWidth={100}
          totalSlides={relatedProductInfo.length}
          visibleSlides={3}
          dragEnabled={false}
        >
          <div>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
          </div>
          <Slider aria-label="related products carousel">
            {relatedProductInfo.map((product) => (
              (product.thumbnail &&
              <Slide
                aria-label="product slide"
                key={Math.random()}
                style={{
                  height: '400px',
                  width: '300px',
                  marginLeft: '7px',
                  marginRight: '7px',
                }}
                index={0}
              >
                <div style={{ height: '450px', width: '280px', position: 'relative'}}>
                  <p
                    style={{
                      color: 'yellow',
                      fontSize: '25px',
                      textAlign: 'right',
                      zIndex: '100',
                      position: 'absolute'
                    }}
                    onClick={() => { setShow(true); updateSelectedProduct(product); }}
                  >
                      &#9733;
                  </p>
                  <div onClick={() => {
                    getSingleProduct(product.id);
                  }}
                  style={{
                    height: '450px',
                    width: '300px',
                    backgroundImage: product.thumbnail
                      ? `url(${product.thumbnail})`
                      : null,
                    backgroundRepeat: 'no-repeat',
                  }}
                  >

                  </div>
                  <div style={{ height: '30%', width: '100%' }}>
                    <div className="fs-6 m-0">{product.category}</div>
                    <div className="fs-6 m-0">{product.name}</div>
                    <div className="fs-6 m-0">${product.default_price}</div>
                    <div className="fs-6 m-0">
                      <StarRatings
                        rating={4.2}
                        starRatedColor="#394a6d"
                        numberOfStars={5}
                        name="rating"
                        starDimension="20px"
                      />
                    </div>
                  </div>
                </div>
              </Slide> )
            ))}
          </Slider>
        </CarouselProvider>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Choices, choices....</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table>
              <tbody>
                <tr>
                  <th>{selectedProduct && selectedProduct.name}</th>
                  <th>vs.</th>
                  <th>{curProduct.name}</th>
                </tr>
                {combinedFeatures.map((feat) => {
                  let theValueL = '';
                  let theValueR = '';
                  selectedProduct.features.find((i) => {
                    if (i.feature === feat) {
                      theValueL = i.value;
                    }
                  });
                  curProduct.features.find((i) => {
                    if (i.feature === feat) {
                      theValueR = i.value;
                    }
                  });
                  return (
                    <tr>
                      <td>{theValueL}</td>
                      <td>{feat}</td>
                      <td>{theValueR}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
