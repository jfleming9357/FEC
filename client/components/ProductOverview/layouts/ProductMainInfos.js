import React, { useContext } from 'react';
import { ProductContext } from '../../../context/ProductContext';
import { AddToBag } from '../widgets/AddToBag';
import { AddToFav } from '../widgets/AddToFav';
import { CustomSelect } from '../widgets/CustomSelect';
import { Ratings } from '../widgets/Ratings';
import { StyleSelector } from '../widgets/StyleSelector';

export const ProductMainInfos = () => {
  const { curProduct } = useContext(ProductContext);
  let dOptions = ['S', 'M', 'L'];
  let dQty = [1, 2, 3];
  return (
    <div className="mProdMainInfo">
      <Ratings />
      <div className="fs-4 text-muted">{curProduct.category}</div>
      <div className="fs-2 fw-bold">{curProduct.name}</div>
      <div className="fs-5">${curProduct.default_price}</div>
      <StyleSelector />

      <div className="mSizeQtyRow">
        <CustomSelect options={dOptions} defaultTitle="Select Size" />
        <CustomSelect options={dQty} defaultTitle="Select Qty" />
      </div>

      <div className="mCartStar">
        <AddToBag />
        <AddToFav />
      </div>
    </div>
  );
};
