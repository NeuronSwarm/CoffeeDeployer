import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/coffee-api';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {combineForms} from 'react-redux-form';

//var initialUserState = { name: ''}
const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
);

export default store;