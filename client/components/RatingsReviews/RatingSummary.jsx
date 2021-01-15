import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const RatingSummary = (props) => {
  return (
    <div>
      <div>Ratings {'&'} Reviews </div>
      <div className='RatingSummary'>
        <div className='jstars'>
          <StarRatings
            rating={3.5}
            starRatedColor='#394a6d'
            numberOfStars={5}
            name='rating'
            starDimension='15px'
          />
        </div>
        <div className='overallRating'>3.5</div>
      </div>
    </div>
  );
};

export default RatingSummary;