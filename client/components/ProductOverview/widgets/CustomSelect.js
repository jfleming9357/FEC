import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../../../context/ProductContext';

export const CustomSelect = ({ options, defaultTitle }) => {
  const { curStyle } = useContext(ProductContext);
  let [curSize, setCurSize] = useState('Size');
  let [curQty, setCurQty] = useState('Qty');
  let [totalQty, setTotalQty] = useState([1]);

  useEffect(() => {
    setCurQty('Qty');
  }, [curSize]);

  return (
    <>
      <div className="custom-select-wrapper">
        <div className="custom-select">
          <div className="custom-select__trigger">
            <span>{curSize}</span>
            <div className="arrow"></div>
          </div>
          <div className="custom-options">
            {Object.keys(curStyle.skus).map((key) => (
              <span
                onClick={() => {
                  setCurSize(curStyle.skus[key].size);
                  setTotalQty(Array(curStyle.skus[key].quantity).fill(5));
                }}
                key={key}
                className="custom-option"
              >
                {curStyle.skus[key].size}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="custom-select-wrapper">
        <div className="custom-select">
          <div className="custom-select__trigger">
            <span>{curQty}</span>
            <div className="arrow"></div>
          </div>
          <div className="custom-options">
            {totalQty.map((key, i) => (
              <span
                onClick={() => setCurQty(i + 1)}
                key={i}
                className="custom-option"
              >
                {i + 1}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
