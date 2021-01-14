import React, { useContext } from 'react';
import { ProductContext } from '../../../context/ProductContext';

export const StyleSelector = () => {
  const { curProduct } = useContext(ProductContext);
  // backgroundImage: `url(${
  //   product['default?']
  //     ? 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
  //     : 'https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
  // })`,

  return (
    <div>
      <div className="styleSelectorLbl">
        STYLE = {curProduct.styles.results[0].name}
      </div>
      <div className="prodStyles">
        {curProduct.styles.results.map((product, i) => (
          <div
            key={i}
            style={{
              height: '80px',
              width: '80px',
              backgroundColor: 'lightcoral',
              backgroundSize: 'cover',
              backgroundImage: `url(${product.photos[0].thumbnail_url})`,
            }}
          >
            <div>X</div>
          </div>
        ))}
      </div>
    </div>
  );
};
