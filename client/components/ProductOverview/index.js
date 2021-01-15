import React from 'react';
import { ImageGallery } from './layouts/ImageGallery';
import { ProductMainInfos } from './layouts/ProductMainInfos';
import { ProductSubInfo } from './layouts/ProductSubInfo';

export const ProductOverview = () => {
  return (
      <div className="mBody">
        <div className="mRowA">
          <ImageGallery />
          <ProductMainInfos />
        </div>
        <div className="mRowB">
          <ProductSubInfo />
        </div>
      </div>
  );
};
