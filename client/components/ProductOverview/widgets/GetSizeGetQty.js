import React, { useContext, useState } from 'react';
import { ProductContext } from '../../../context/ProductContext';

export const GetSizeGetQty = () => {
  const { curStyle } = useContext(ProductContext);
  const [totalQty, setTotalQty] = useState([<option key="123">QTY</option>]);
  const [sizeSelected, setSizeSelected] = useState(false);

  const getSizeHandler = (e) => {
    let qtyLimit = e.target.value > 15 ? 15 : e.target.value;
    const newItems = [];
    for (let i = 0; i < qtyLimit; i++) {
      newItems.push(<option key={i}>{i + 1}</option>);
    }
    setSizeSelected(true);
    setTotalQty([newItems]);
  };

  return (
    <div className="row g-7 ">
      <div className="col-8">
        <select onChange={getSizeHandler} className="form-select">
          {sizeSelected === false && <option>Select Size</option>}
          {Object.keys(curStyle.skus).map((key, i) => (
            <option key={i} value={curStyle.skus[key].quantity}>
              {curStyle.skus[key].size}
            </option>
          ))}
        </select>
      </div>
      <div className="col-4">
        {!sizeSelected ? (
          <select className="form-select" disabled>
            <option value="empty">-</option>
          </select>
        ) : (
          <select className="form-select">{totalQty}</select>
        )}
      </div>
    </div>
  );
};
