import React, { useContext } from 'react';
import { Header } from './components/defaults/Header.js';
import { ProductOverview } from './components/ProductOverview/index';
import RatingsAndReviews from './components/RatingsReviews/RatingsReviews.jsx';
import QuestionsAndAnswers from './components/QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RelatedAndOutfit from './components/RelatedAndOutfit/RelatedAndOutfit.jsx';
import { ProductContext } from './context/ProductContext.js';
import { Preloader, Circles } from 'react-preloader-icon';

export const App = () => {
  const { curStyle } = useContext(ProductContext);

  return curStyle ? (
    <div>
      <Header />
      <br />
      <div style={{ overflow: 'hidden' }} className="container">
        <ProductOverview />
      </div>
      <div> <br />
        <RelatedAndOutfit />
      </div>
      <QuestionsAndAnswers product_id={12012} />
      {/* Placeholder product id before we connect modules */}
      <div>
        <br />
        <RatingsAndReviews product_id={12012} />
      </div>
    </div>
  ) : (
    <div
      className="bg-secondary"
      style={{ height: '100vh', width: '100vw', display: 'flex' }}
    >
      <div className="m-auto">
        <Preloader
          use={Circles}
          size={100}
          strokeWidth={21}
          strokeColor="#262626"
          duration={2000}
        />
      </div>
    </div>
  );
};
