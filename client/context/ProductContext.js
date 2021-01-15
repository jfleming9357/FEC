import React, { createContext, useState } from 'react';
import {
  singleProd,
  singleProdStyle,
} from '../components/ProductOverview/tempData';

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  let currentProduct = singleProd;
  currentProduct.styles = singleProdStyle;

  const getDefaultStlye = () => {
    let curStyle = curProduct.styles.results[0];

    curProduct.styles.results.forEach((prod) => {
      if (prod['default?']) {
        curStyle = prod;
      }
    });

    return curStyle;
  };

  const [curProduct, setCurProduct] = useState(currentProduct);
  const [curStyle, setCurStyle] = useState(getDefaultStlye);

  const updateCurStyle = (prodStyle) => {
    setCurStyle(prodStyle);
  };

  return (
    <ProductContext.Provider value={{ curProduct, curStyle, updateCurStyle }}>
      {children}
    </ProductContext.Provider>
  );
};
