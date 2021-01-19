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
    <div className="dropdown">
      <div className="row g-7 ">
        <div className="col-8">
          <select
            disabled={curStyle.skus.null ? true : false}
            onChange={getSizeHandler}
            className="form-select"
          >
            {sizeSelected === false && (
              <option>
                {curStyle.skus.null ? 'OUT OF STOCK' : 'Select Size'}
              </option>
            )}
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
      <br />
      <div className="row g-7">
        <div className="col-10">
          {curStyle.skus.null ? (
            <></>
          ) : (
            <div className="btn form-control btn-outline-secondary btn-lg">
              ADD TO BAG
            </div>
          )}
        </div>
        <div className="col-2">
          <div className="btn form-control btn-outline-secondary btn-lg">
            <i className="bi bi-star"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
