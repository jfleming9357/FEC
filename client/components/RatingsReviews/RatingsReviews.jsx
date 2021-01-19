import React, { useState, useEffect } from 'react';
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
    .catch((err) => {
      throw err;
    });
};

const RatingsAndReviews = (props) => {
  const [metaData, setMetaData] = useState(undefined);
  useEffect(() => {
    getMetaData(props.product_id)
      .then((data) => {
        setMetaData(data.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  if (metaData) {
    return (<div className="jcontainer">
      <SortReviews />
      <ReviewList id={props.product_id || 12012}/>
      <div className="ReviewSideBar">
        <div className="SideBarContainer">
          <RatingSummary allRatings={metaData.ratings}/>
          <RatingBreakdown allRatings={metaData.ratings}/>
          <ProductBreakdown characteristics={metaData.characteristics}/>
        </div>
      </div>
    </div>);
  } else { return (<div>Loading...</div>); }
};

export default RatingsAndReviews;