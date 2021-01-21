import React, { useState, useContext, createContext } from 'react';
export const SortContext = createContext({
  sortMethod: 'relevance',
  setSortMethod: (method) => {}
});

export const SortProvider = ({children}) => {
  const [sortMethod, setSortMethod] = useState('helpfulness');
  return (
    <SortContext.Provider value={{sortMethod, setSortMethod}}>{children}
    </SortContext.Provider>
  );
};

export const sort = (reviews, method) => {
  const sortHelpful = (a, b) => (
    b.helpfulness - a.helpfulness
  );

  const sortNewest = (a, b) => (
    b.review_id - a.review_id
  );

  if (method === 'helpfulness') {
    return reviews.sort(sortHelpful);
  } else if (method === 'newest') {
    return reviews.sort(sortNewest);
  } else if (method === 'relevance') {
    reviews.sort(sortNewest);
    return reviews.sort(sortHelpful);
  }
  return reviews;
};