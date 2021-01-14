import React, { useState } from 'react';
import { ReviewList } from './ReviewList.jsx';
import RatingSummary from './RatingSummary.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import AddReview from './AddReview.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import SortReviews from './SortReviews.jsx';

const RatingsAndReviews = (props) => {
  return (<div className='jcontainer'>
    <SortReviews />
    <ReviewList id={props.reviewId || 12012}/>
    <div className='ReviewSideBar'>
      <RatingSummary />
      <RatingBreakdown />
      <ProductBreakdown />
    </div>
  </div>);
};

export default RatingsAndReviews;