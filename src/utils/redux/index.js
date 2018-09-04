import { createStore, combineReducers } from 'redux';
import user from './user';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  combineReducers({
    user,
  }),
  devTools
);

export default store;
