import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

ReactDOM.render(  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
