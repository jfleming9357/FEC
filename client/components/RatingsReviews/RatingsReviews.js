import React, { useState, useEffect } from 'react';
import { ReviewList } from './ReviewList.js';
import RatingSummary from './RatingSummary.js';
import RatingBreakdown from './RatingBreakdown.js';
import AddReview from './AddReview.js';
import ProductBreakdown from './ProductBreakdown.js';
// import SortReviews from './SortReviews.js';
import axios from 'axios';
import { SortProvider } from './SortReviews.js';

const getMetaData = function (productId) {
  let url =
    'http://localhost:3000/proxy/api/fec2/hratx/reviews/meta?product_id=' +
    productId;
  return axios.get(url).catch((err) => {
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
    return (
      <div className="jcontainer">
        <SortProvider>
          <ReviewList
            id={props.product_id}
            characteristics={metaData.characteristics}
          />
        </SortProvider>
        <div className="ReviewSideBar">
          <div className="SideBarContainer">
            <RatingSummary allRatings={metaData.ratings} />
            <RatingBreakdown allRatings={metaData.ratings} />
            <ProductBreakdown characteristics={metaData.characteristics} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default RatingsAndReviews;
