import React from 'react';
import { Header } from './components/defaults/header';
import { ProductOverview } from './components/ProductOverview/index';
import RatingsAndReviews from './components/RatingsReviews/RatingsReviews.jsx';
import QuestionsAndAnswers from './components/QuestionsAndAnswers/QuestionsAndAnswers.jsx';

export const App = () => {
  return (
    <div>
      <Header />
      <br />
      <div className="container">
        <ProductOverview />
      </div>
      <QuestionsAndAnswers product_id={12012} /> {/* Placeholder product id before we connect modules */}
      <div>
        <RatingsAndReviews />
      </div>
    </div>
  );
};
