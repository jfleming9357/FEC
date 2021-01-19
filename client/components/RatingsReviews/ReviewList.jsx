import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddReview from './AddReview.jsx';
import StarRatings from 'react-star-ratings';
import { helpfulClick, reportClick } from './handleReviewClicks.jsx';
import { IndividualReview } from './individualReview.jsx';

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
              <IndividualReview
                result={result}
                counter={counter}
                date={date}
                key={counter}
              />
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