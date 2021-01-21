import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import ratingCalculations from './ratingCalculations.js';

const RatingSummary = ({ allRatings }) => {
  let { ratingAverage } = ratingCalculations(allRatings);

  return (
    <div>
<<<<<<< HEAD:client/components/RatingsReviews/RatingSummary.jsx
      <b>Ratings &amp; Reviews </b>
      <div className='RatingSummary'>
        <div className='jstars'>
=======
      <div>Ratings &amp; Reviews </div>
      <div className="RatingSummary">
        <div className="jstars">
>>>>>>> main:client/components/RatingsReviews/RatingSummary.js
          <StarRatings
            rating={ratingAverage}
            starRatedColor="#394a6d"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
          />
        </div>
        <div className="overallRating">{ratingAverage.toFixed(1)}</div>
      </div>
    </div>
  );
};

export default RatingSummary;
