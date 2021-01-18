import React, { useContext, useState } from 'react';
import { ProductContext } from '../../../context/ProductContext';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonNext,
  ButtonBack,
  Dot,
} from 'pure-react-carousel';

export const ImageGallery = () => {
  const { curStyle } = useContext(ProductContext);
  const [curSlide, setCurSlide] = useState(0);

  return (
    <CarouselProvider
      totalSlides={curStyle.photos.length}
      naturalSlideHeight={100}
      naturalSlideWidth={100}
      dragEnabled={false}
    >
      <div style={{ height: '700px', width: '700px', position: 'relative' }}>
        <div
          className="position-absolute row h-100 w-100"
          style={{ zIndex: '1' }}
        >
          <div className="col-2">
            <div className="col p-3">
              {curStyle.photos.map((thumbnail, i) => (
                <Dot
                  onClick={() => setCurSlide(i)}
                  className="mCarouselStyle"
                  slide={i}
                  key={i}
                >
                  <div
                    className="bg-secondary my-3"
                    style={{
                      height: '60px',
                      width: '60px',
                      backgroundImage: `url(${thumbnail.thumbnail_url})`,
                      opacity: curSlide === i ? '' : '50%',
                      border: curSlide === i && '2px solid black',
                    }}
                  ></div>
                </Dot>
              ))}
            </div>
          </div>
          <div className="col-10 d-flex justify-content-between align-items-center">
            {curSlide !== 0 ? (
              <ButtonBack
                onClick={() => setCurSlide(curSlide - 1)}
                className="mCarouselStyle"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
              </ButtonBack>
            ) : (
              <div></div>
            )}

            {curSlide !== curStyle.photos.length - 1 ? (
              <ButtonNext
                onClick={() => setCurSlide(curSlide + 1)}
                className="mCarouselStyle float-right"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
              </ButtonNext>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="position-absolute row w-100 h-100">
          <Slider>
            {curStyle.photos.map((photo, i) => (
              <Slide index={i} key={i}>
                <div
                  style={{
                    height: '700px',
                    width: '700px',
                  }}
                >
                  <img src={photo.url} className="d-block w-100 h-100" />
                </div>
              </Slide>
            ))}
          </Slider>
        </div>
      </div>
    </CarouselProvider>
  );
};
