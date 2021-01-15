import React from 'react';
import { render } from 'react-dom';
import { App } from './App.jsx';
import { ProductProvider } from './context/ProductContext';



render(<ProductProvider><App /></ProductProvider>, document.getElementById('root'));