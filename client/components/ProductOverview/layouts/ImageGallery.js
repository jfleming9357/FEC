import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../context/ProductContext';
import 'pure-react-carousel/dist/react-carousel.es.css';

export const ImageGallery = () => {
  const { curStyle } = useContext(ProductContext);
  const [slideValue, setSlideValue] = useState(1);

  const nextBtnHandler = () => {};
  const prevBtnHandler = () => {};

  return (
    <div id="mainProdCarousel" className="carousel slide" data-wrap="false">
      <div
        className="position-absolute row h-100 w-100"
        style={{ zIndex: '1' }}
      >
        <div className="col-2">
          <div className="col p-3">
            {curStyle.photos.map((thumbnail, i) => (
              <div
                key={i}
                data-bs-target="#mainProdCarousel"
                data-bs-slide-to={i}
                className="bg-secondary my-3"
                style={{
                  height: '60px',
                  width: '60px',
                  backgroundImage: `url(${thumbnail.thumbnail_url})`,
                  borderBottom: '3px solid black',
                  opacity: 0.5,
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className="col-10 d-flex justify-content-between align-items-center">
          <a
            onClick={() => console.log('PREV')}
            href="#mainProdCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </a>
          <a
            onClick={() => console.log('NEXT')}
            href="#mainProdCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </div>
      <div style={{ height: '700px' }} className="carousel-inner">
        {curStyle.photos.map((photo, i) => (
          <div
            key={i}
            className={
              i === 0 ? 'carousel-item active h-100' : 'carousel-item h-100'
            }
          >
            <img src={photo.url} className="d-block w-100 h-100" />
          </div>
        ))}
      </div>
    </div>
  );
};
