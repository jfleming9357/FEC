import React from 'react';
import { Header } from './components/defaults/header';
import { ProductOverview } from './components/ProductOverview/index';
import RatingsAndReviews from './components/RatingsReviews/RatingsReviews.jsx';

export const App = () => {
  return (
    <div>
      <Header />
      <br />
      <div className="container">
        <ProductOverview />
      </div>
      <div></div>
      <div></div>
      <div>{/* <RatingsAndReviews /> */}</div>
    </div>
  );
};
