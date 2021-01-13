import { createContext, useState } from 'react';
import { singleProd } from '../components/ProductOverview/tempData';

export const ProductContext = createContext();
export const ProductProvider = ({ child }) => {
  const [curProduct, setCurProduct] = useState(singleProd);

  return (
    <ProductContext.Provider value={{ curProduct }}>
      {child}
    </ProductContext.Provider>
  );
};
