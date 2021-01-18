import React from 'react';

export const ToBagToFavBtns = () => {
  return (
    <>
      <div className="row g-7">
        <div className="col-10">
          <div className="btn form-control btn-outline-secondary btn-lg">
            ADD TO BAG
          </div>
        </div>
        <div className="col-2">
          <div className="btn form-control btn-outline-secondary btn-lg">
            <i className="bi bi-star"></i>
          </div>
        </div>
      </div>
    </>
  );
};
