import React, { useState } from 'react';
import ratingCalculations from './ratingCalculations.jsx';

const RatingBreakdown = ({ allRatings }) => {
  //set ratings with 0 reviews to 0 and convert to array
  let ratingStats = ratingCalculations(allRatings);
  let ratingPercentages = [];
  // individual star review / ratingsCount
  for (let x = 1; x < 6; x++) {
    ratingPercentages.push((allRatings[x] / ratingStats.ratingsCount) * 100);
  }
  console.log(ratingPercentages);
  return (
    <div className='jbarGraph'>
      <div className="row">
        <div className="side">
          <div className='jXAxis'>5 stars</div>
        </div>
        <div className="middle">
          <div className="jbar-container">
            <div className="jbar-5" style={{'width': `${ratingPercentages[4] || '0'}%`}}></div>
          </div>
        </div>
        <div className="side right">
        </div>
        <div className="side">
          <div className='jXAxis'>4 stars</div>
        </div>
        <div className="middle">
          <div className="jbar-container">
            <div className="jbar-4" style={{'width': `${ratingPercentages[3] || '0'}%`}}></div>
          </div>
        </div>
        <div className="side right">
        </div>
        <div className="side">
          <div className='jXAxis'>3 star</div>
        </div>
        <div className="middle">
          <div className="jbar-container">
            <div className="jbar-3" style={{'width': `${ratingPercentages[2] || '0'}%`}}></div>
          </div>
        </div>
        <div className="side right">
        </div>
        <div className="side">
          <div className='jXAxis'>2 star</div>
        </div>
        <div className="middle">
          <div className="jbar-container">
            <div className="jbar-2" style={{'width': `${ratingPercentages[1] || '0'}%`}}></div>
          </div>
        </div>
        <div className="side right">
        </div>
        <div className="side">
          <div className='jXAxis'>1 star</div>
        </div>
        <div className="middle">
          <div className="jbar-container">
            <div className="jbar-1" style={{'width': `${ratingPercentages[0] || '0'}%`}}></div>
          </div>
        </div>
        <div className="side right">
        </div>
      </div>
    </div>

  );
};

export default RatingBreakdown;