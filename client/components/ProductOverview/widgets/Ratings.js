import StarRatings from 'react-star-ratings';
import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../context/ProductContext';

export const Ratings = () => {
  const { curProduct, getProductRating } = useContext(ProductContext);
  const [curRating, setCurRating] = useState(0);

  useEffect(() => {
    getProductRating().then((data) => setCurRating(data));
  }, [curProduct]);

  return (
    <div className="col">
      <StarRatings starDimension="20px" rating={curRating} starSpacing="3px" />
      <small>
        <u>Read all reveiws</u>
      </small>
    </div>
  );
};
