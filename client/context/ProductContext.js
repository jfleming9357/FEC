import React, { createContext, useState } from 'react';
import {
  singleProd,
  singleProdStyle,
} from '../components/ProductOverview/tempData';

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  let currentProduct = singleProd;
  currentProduct.styles = singleProdStyle;
  const [curProduct, setCurProduct] = useState(currentProduct);

  return (
    <ProductContext.Provider value={{ curProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
