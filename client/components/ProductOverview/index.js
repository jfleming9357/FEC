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
        <div className="col-lg-7"> 
          <NewImg />
        </div>
        <div className="col-lg-5 row d-flex flex-wrap align-content-around">
          <ProductMainInfos />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-7">
          <div className="fs-3">{curProduct.slogan}</div>
          <div className="fs-6">{curProduct.description}</div>
        </div>
        <div className="col-lg-5">
          {curProduct.features.map((feature) => (
            <div key={feature.feature} className="fs-4 text-center">
              {feature.feature}: {feature.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
