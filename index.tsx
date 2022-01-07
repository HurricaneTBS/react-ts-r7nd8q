import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import App from './src/components/app';
import { Provider } from 'react-redux';
import store from './src/store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
