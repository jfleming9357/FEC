import React from 'react';
import StarRatings from 'react-star-ratings';
import { helpfulClick, reportClick } from './handleReviewClicks.jsx';

export const IndividualReview = ({ counter, result, date }) => {
  return (
    <div className='ReviewList' key={result.review_id}>
      <div className="IndividualReview">
        <div className="jStars">
          <StarRatings
            rating={result.rating}
            starRatedColor='#394a6d'
            numberOfStars={5}
            name='rating'
            starDimension='20px'
          /></div>
        <div className="jDate">{result.reviewer_name + ' ' + result.date}</div><br />
        <div className="ReviewText">
          <strong>{result.summary}</strong>
          <div>{result.body}</div>
          <div id="jResponse">{result.response}</div>
          <div id="helpfulAndReport">Helpful?&nbsp;
            <span
              className="d-underlined"
              onClick={helpfulClick}
            >Yes</span> {result.helpfulness}   |&nbsp;
            <span onClick={reportClick}>Report</span></div>
        </div>
      </div>
    </div>
  );
};