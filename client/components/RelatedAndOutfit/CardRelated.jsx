import React from 'react';

var CardRelated = (props) => {
  console.log("got props?", props)
  return (
    <article className="c-related-card">
      {/* NEEDS IMAGE */}
      <header
        className="c-card-related-header">
        <button
          className="c-related-card-button">
          <i className="c-related-card-button-icon"></i>
          Compare this item
        </button>
      </header>
      <div className="c-related-card-body">
        <p>Product Category</p>
        <h3>Product Name</h3>
        <h5>Product Price, StarsRating</h5>
      </div>
  </article>
  )
}


export default CardRelated;