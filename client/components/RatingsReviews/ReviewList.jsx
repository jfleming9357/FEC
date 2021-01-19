import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddReview from './AddReview.jsx';
import StarRatings from 'react-star-ratings';
import { helpfulClick, reportClick } from './handleReviewClicks.jsx';

const getReviews = (productId) => {
  let url = 'http://localhost:3000/proxy/api/fec2/hratx/reviews/?product_id=' + productId;
  return axios.get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export const ReviewList = (props) => {
  // const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState(<div>Loading reviews...</div>);
  const [moreReviews, setMoreReviews] = useState('');
  const [numReviews, setNumReviews] = useState(2);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  useEffect(() => {
    let counter = 0;
    getReviews(props.id)
      .then(((data) => {
        setReviews(data.data.results.map((result) => {
          counter++;
          let date = new Date(result.date);
          result.date = monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
          if (counter <= numReviews ) {
            return (
              <div className='ReviewList' key={result.review_id}>
                <div className="IndividualReview">
                  <div className="jStars"> <StarRatings
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
          }
        }));
      }))
      .catch((err) => {
        throw err;
      });
  }, [numReviews]);

  return (
    <div className='ReviewList'>
      <div>{reviews}</div>
      <div className='jButtonContainer'>
        { reviews.length > numReviews
          ?
          <button className='jButton' onClick={() => {
            setNumReviews(numReviews + 2);
          }}>More Reviews</button>
          :
          null
        }
        <AddReview />
      </div>
    </div>
  );
};