import React, { useContext, useState } from 'react';
import { ProductContext } from '../../../context/ProductContext';
import { SelectorIndicator } from './SelectorIndicator';
import { motion } from 'framer-motion';

export const StyleSelector = () => {
  const { curProduct, curStyle, updateCurStyle } = useContext(ProductContext);

  return (
    <div className="mStyleBody">
      <div className="fs-4">
        STYLE <b>&gt;</b> {curStyle.name}
      </div>
      <div className="prodStyles">
        {curProduct.styles.results.map((product, i) => (
          <motion.div
            key={i}
            onClick={() => updateCurStyle(product)}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 0.95 }}
            animate={{ scale: 0.85 }}
            initial={{ scale: 0.9 }}
            style={{
              cursor: 'pointer',
              height: '80px',
              width: '80px',
              backgroundColor: 'lightcoral',
              backgroundSize: 'cover',
              backgroundImage: `url(${product.photos[0].thumbnail_url})`,
            }}
          >
            {curStyle.style_id === product.style_id && <SelectorIndicator />}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
