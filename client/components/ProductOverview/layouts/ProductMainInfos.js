import { ProductContext } from '../../../context/ProductContext';
import React, { useContext } from 'react';
import { CustomSelect } from '../widgets/CustomSelect';
import { Ratings } from '../widgets/Ratings';
import { StyleSelector } from '../widgets/StyleSelector';
import { ToBagToFavBtns } from '../widgets/ToBagToFavBtns';

export const ProductMainInfos = () => {
  const { curProduct, curStyle } = useContext(ProductContext);
  const curSizes = [];
  const curQty = [];

  for (let i in curStyle.skus) {
    curSizes.push(curStyle.skus[i].size);
    curQty.push(curStyle.skus[i].quantity);
  }

  return (
    <div className="mProdMainInfo">
      <Ratings />
      <div className="fs-4 text-muted">{curProduct.category}</div>
      <div className="fs-2 fw-bold">{curProduct.name}</div>
      {curStyle.sale_price ? (
        <div className="fs-5 fw-bold d-flex">
          <p style={{ color: 'red' }}>${curStyle.sale_price}</p>
          <u style={{ marginLeft: '10px', textDecoration: 'line-through' }}>
            ${curStyle.original_price}
          </u>
        </div>
      ) : (
        <div className="fs-5 fw-bold d-flex">
          <p>${curStyle.original_price}</p>
        </div>
      )}

      <StyleSelector />

      <div className="mSizeQtyRow">
        <CustomSelect options={curSizes} defaultTitle="Select Size" />
      </div>

      <div className="mCartStar">
        <ToBagToFavBtns />
      </div>
    </div>
  );
};
