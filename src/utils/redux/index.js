import { createStore, combineReducers } from 'redux';
import user from './user';

const devTools = __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  combineReducers({
    user,
  }),
  __DEV__ ? devTools : null
);

export default store;
