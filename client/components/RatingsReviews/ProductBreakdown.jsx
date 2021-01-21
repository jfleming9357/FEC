import React, { useState } from 'react';
import ratingCalculations from './ratingCalculations.jsx';

const ProductBreakdown = ({ characteristics }) => {
  let charArray = [];
  for (let key in characteristics) {
    charArray.push([
      key, (characteristics[key].value * 20)]
    );
  }
  return (
    <div className="jbarGraph">
      <div className="row">
        {charArray.map((array, index) => {
          return <React.Fragment key={index}>
              <div className="side">
                <div className='jXAxis'>{array[0]}&nbsp;{array[1] / 20}&nbsp;</div>
              </div>
              <div className="middle">
                <div className="jbar-container">
                  <div className="jbars" style={{'width': `${array[1]}%`}}></div>
                </div>
              </div> <br />
            </React.Fragment>;
        })}
      </div>
    </div>
  );
};

export default ProductBreakdown;