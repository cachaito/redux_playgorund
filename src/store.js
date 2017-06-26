import { createStore, applyMiddleware, compose } from 'redux';
// import { logger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import userReducer from './reducers/user';

export default createStore(
  userReducer,
  compose(
    applyMiddleware(promise()),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
