import React, { useState } from 'react';
import { ReviewList } from './ReviewList.jsx';
import RatingSummary from './RatingSummary.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import AddReview from './AddReview.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import SortReviews from './SortReviews.jsx';
import axios from 'axios';

const getMetaData = function (productId) {
  let url = 'http://localhost:3000/proxy/api/fec2/hratx/reviews/meta?product_id=' + productId;
  return axios.get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const RatingsAndReviews = (props) => {
  const [metaData, setMetaData] = useState([]);
  if (metaData.length === 0) {
    getMetaData(props.product_id)
      .then((data) => {
        setMetaData(data);
      })
      .catch((err) => {
        throw err;
      });
    return (<div>Loading...</div>);
  } else {
    return (<div className='jcontainer'>
      <SortReviews />
      <ReviewList id={props.product_id || 12012}/>
      <div className='ReviewSideBar'>
        <div className='SideBarContainer'>
          <RatingSummary allRatings={metaData.data.ratings}/>
          <RatingBreakdown allRatings={metaData.data.ratings}/>
          <ProductBreakdown characteristics={metaData.data.characteristics}/>
        </div>
      </div>
    </div>);
  }

};

export default RatingsAndReviews;