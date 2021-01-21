import React, { useState } from 'react';
import ratingCalculations from './ratingCalculations.js';

const ProductBreakdown = ({ characteristics }) => {
  let charArray = [];
  for (let key in characteristics) {
    charArray.push([key, characteristics[key].value * 20]);
  }
  return (
    <div className="jbarGraph">
      <div className="row">
        {charArray.map((array, index) => {
          return <React.Fragment key={index}>
              <div className="side">
<<<<<<< HEAD:client/components/RatingsReviews/ProductBreakdown.jsx
                <div className='jXAxis'>{array[0]}&nbsp;{array[1] / 20}&nbsp;</div>
              </div>
=======
                <div className="jXAxis">
                  {array[0]}&nbsp;{array[1] / 20}&nbsp;
                </div>
              </div>{' '}
              <br />
>>>>>>> main:client/components/RatingsReviews/ProductBreakdown.js
              <div className="middle">
                <div className="jbar-container">
                  <div
                    className="jbars"
                    style={{ width: `${array[1]}%` }}
                  ></div>
                </div>
<<<<<<< HEAD:client/components/RatingsReviews/ProductBreakdown.jsx
              </div> <br />
            </React.Fragment>;
=======
              </div>
            </div>
          );
>>>>>>> main:client/components/RatingsReviews/ProductBreakdown.js
        })}
      </div>
    </div>
  );
};

export default ProductBreakdown;
