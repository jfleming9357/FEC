import React from 'react';
import axios from 'axios';

export const AddToBag = () => {
  const testApi = () => {
    axios
      .get('/abc')
      .then(({ data }) => {
        console.log(data);
      })
      .then((err) => console.log(err));
  };

  return (
    <div onClick={() => testApi()} className="bagBtn">
      <p>ADD TO BAG</p>
    </div>
  );
};
