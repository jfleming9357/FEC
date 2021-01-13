import React, { useState } from 'react';
import axios from 'axios';
const getReviews = (pId) => {
  let url = 'http://localhost:3000/api/products';
  axios.get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export const ReviewList = (props) => {
  getReviews(props.id);
  return (<div>
    Hello from review list
  </div>);
};