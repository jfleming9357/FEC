import React from 'react';
import { ProductOverview } from './components/ProductOverview/index';
import RatingsAndReviews from './components/RatingsReviews/RatingsReviews.jsx';
import QuestionsAndAnswers from './components/QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RelatedAndOutfit from './components/RelatedAndOutfit/RelatedAndOutfit.jsx';

export const App = () => {
  return (
    <div>
      <div>
        <ProductOverview />
      </div>
      <QuestionsAndAnswers product_id={12012} /> {/* Placeholder product id before we connect modules */}
      <div>
        <RatingsAndReviews />
      </div>
      <div>
        <RelatedAndOutfit />
      </div>
    </div>
  );
};
