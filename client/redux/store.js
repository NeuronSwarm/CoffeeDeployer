import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as coffee } from './reducers/coffee-api';
import { reducer as users } from './reducers/user-api';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {combineForms} from 'react-redux-form';

//var initialUserState = { name: ''}
const store = createStore(
  combineReducers( {coffee, users } ),
  applyMiddleware(
    thunkMiddleware
  )
);

export default store;