import { ProductProvider } from './context/ProductContext.js';
import { render } from 'react-dom';
import { App } from './App.js';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <ProductProvider>
    <App />
  </ProductProvider>,
  document.getElementById('root')
);
