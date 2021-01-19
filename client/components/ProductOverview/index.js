import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { ImageGallery } from './layouts/ImageGallery';
import { NewImg } from './layouts/NewImg';
import { ProductMainInfos } from './layouts/ProductMainInfos';

export const ProductOverview = () => {
  const { curProduct } = useContext(ProductContext);

  return (
    <div className="d-block">
      <div className="row">
        <div className="col-7">
          <ImageGallery />
        </div>
        <div className="col-5 row d-flex flex-wrap align-content-around">
          <ProductMainInfos />
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <div className="fs-3">{curProduct.slogan}</div>
          <div className="fs-6">{curProduct.description}</div>
        </div>
        <div className="col-5">
          {curProduct.features.map((feature, i) => {
            return feature.value ? (
              <div key={feature.feature} className="fs-4">
                {feature.feature}: {feature.value}
              </div>
            ) : (
              <div key={i}></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
