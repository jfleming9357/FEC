import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AddReview from './AddReview.jsx';
import StarRatings from 'react-star-ratings';
import { helpfulClick, reportClick } from './handleReviewClicks.jsx';
import { IndividualReview } from './individualReview.jsx';
import { sort, SortContext } from './SortReviews.jsx';

const getReviews = (productId) => {
  let url = 'http://localhost:3000/proxy/api/fec2/hratx/reviews/?product_id=' + productId;
  return axios.get(url)
    .then((response) => {
      response = sort(response);
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export const ReviewList = (props) => {
  // const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState(<div>Loading reviews...</div>);
  const [numReviews, setNumReviews] = useState(2);
  const { sortMethod } = useContext(SortContext);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];



  useEffect(() => {
    getReviews(props.id)
      .then(((data) => {
        setReviews(data.data.results.map((result, index) => {
          let date = new Date(result.date);
          result.date = monthNames[date.getMonth()] + ' ' + (parseInt(date.getDate()) + 1) + ', ' + date.getFullYear();
          if (index < numReviews ) {
            return (
              <IndividualReview
                counter={index}
                result={result}
                date={date}
                key={index}
              />
            );
          }
        }));
      }))
      .catch((err) => {
        throw err;
      });
  }, [numReviews]);
  // useEffect(() => {

  //   setReviews(sort(reviews, sortMethod));
  //   console.log(reviews);
  // }, [sortMethod]);

  return (
    <div className='ReviewList'>
      <div>{reviews}</div>
      <div className='jButtonContainer'>
        { reviews.length > numReviews
          &&
          <button className='jButton' onClick={() => {
            setNumReviews(numReviews + 2);
          }}>More Reviews</button>
        }
        <AddReview productId={props.id} characteristics={props.characteristics}/>
      </div>
    </div>
  );
};