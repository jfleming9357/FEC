import React from 'react';
import { AddToBag } from '../widgets/AddToBag';
import { AddToFav } from '../widgets/AddToFav';
import { CustomSelect } from '../widgets/CustomSelect';
import { Ratings } from '../widgets/Ratings';
import { StyleSelector } from '../widgets/StyleSelector';

export const ProductMainInfos = () => {
  let dOptions = ['S', 'M', 'L'];
  let dQty = [1, 2, 3];
  return (
    <div className="mProdMainInfo">
      <Ratings />
      <div className="prodCate">CATEGORY</div>
      <div className="prodName">PRODUCT NAME</div>
      <div className="prodPrice">#369</div>
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
