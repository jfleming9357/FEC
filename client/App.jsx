import React from 'react';
import { Header } from './components/defaults/Header.js';
import { ProductOverview } from './components/ProductOverview/index';
import RatingsAndReviews from './components/RatingsReviews/RatingsReviews.jsx';
import QuestionsAndAnswers from './components/QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RelatedAndOutfit from './components/RelatedAndOutfit/RelatedAndOutfit.jsx';

export const App = () => {
  return (
    <div>
      <Header />
      <br />
      <div style={{ overflow: 'hidden' }} className="container">
        <ProductOverview />
      </div>
      <div> <br />
        <RelatedAndOutfit />
      </div>
      <QuestionsAndAnswers product_id={12012} /> {/* Placeholder product id before we connect modules */}
      <div> <br />
        <RatingsAndReviews />
      </div>

    </div>
  );
};
