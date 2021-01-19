import React, { createContext, useEffect, useState } from 'react';
import {
  singleProd,
  singleProdStyle,
} from '../components/ProductOverview/tempData';
import axios from 'axios';

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState(null);
  const [curProduct, setCurProduct] = useState(null);
  const [curStyle, setCurStyle] = useState(null);

  useEffect(() => {
    if (!allProducts) {
      getAllProduct();
    } else {
      // getSingleProduct(allProducts[0].id);
      getSingleProduct(12016);
    }
  }, [allProducts]);

  const getAllProduct = () => {
    return axios
      .get('/proxy/api/fec2/hratx/products')
      .then(({ data }) => setAllProducts(data))
      .catch((err) => console.log(err));
  };

  const getSingleProduct = (prodID) => {
    let tempProduct;
    axios
      .get(`/proxy/api/fec2/hratx/products/${prodID}`)
      .then(({ data }) => {
        tempProduct = data;
      })
      .then(() => {
        return axios
          .get(`/proxy/api/fec2/hratx/products/${prodID}/styles`)
          .then(({ data }) => {
            tempProduct.styles = data;
            setCurProduct(tempProduct);

            let tempStyle = tempProduct.styles.results[0];

            tempProduct.styles.results.forEach((prod) => {
              if (prod['default?']) {
                tempStyle = prod;
              }
            });

            setCurStyle(tempStyle);
          });
      })
      .catch((err) => console.log(err));
  };

  const updateCurStyle = (prodStyle) => {
    setCurStyle(prodStyle);
  };

  return (
    <ProductContext.Provider value={{ curProduct, curStyle, updateCurStyle }}>
      {children}
    </ProductContext.Provider>
  );
};
