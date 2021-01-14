import React, { useState, useEffect } from 'react';
import axios from 'axios';
const getReviews = (pId) => {
  let url = 'http://localhost:3000/proxy/api/fec2/hratx/reviews/?product_id=' + pId;
  return axios.get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export const ReviewList = (props) => {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState(<div>Loading reviews...</div>);
  if (loading) {
    getReviews(props.id)
      .then(((data) => {
        console.log(data.data.results);
        setLoading(false);
        setReviews(data.data.results.map((result) => {
          return (
            <div key={result.review_id}>{result.summary}</div>
          );
        }));
      }));
  }
  return (
    <div>{reviews}</div>
  );
};