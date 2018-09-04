import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import user from './user';

const store = createStore(combineReducers({ user }), composeWithDevTools());

export default store;
