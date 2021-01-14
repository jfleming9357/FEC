import React, { useState } from 'react';
import { ReviewList } from './ReviewList.jsx';
const RatingsAndReviews = (props) => {
  return (<div>
    <ReviewList id={props.reviewId || 12012}/>
  </div>);
};

export default RatingsAndReviews;