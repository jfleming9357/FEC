import React, { useState, useContext, createContext } from 'react';
export const SortContext = createContext();

export const SortProvider = ({children}) => {
  // if (!sortMethod) {
  //   sortMethod = 'helpfulness';
  // }
  return (
    <SortContext.Provider value={{}}>{children}
    </SortContext.Provider>
  );
};
const SortReviews = () => {
  const handleChange = (e) => {
    sortProvider(e.target.value);
  };

  return (
    <div className='SortReviews'>Sort Placeholder</div>
  );
};

export const sort = (reviews, method) => {
  // console.log(reviews, method);
  return reviews;
};

export default SortReviews;