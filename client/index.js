import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import Routes from './components/Routes'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <Routes/>
    </BrowserRouter >
  </Provider>,
  document.getElementById('root')
);