import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';

// Provider
import { Provider } from 'react-redux';

// Redux logger for seeing errors
import logger from 'redux-logger';

// Reducers
const feelingReducer = (state = 0, action) => {
  // console.log('Feeling Reducer');
  if (action.type === 'SET_FEELING') return action.payload;
  else if (action.type === 'RESET') return [];
  return state;
};

const understandingReducer = (state = 0, action) => {
  // console.log('Understanding Reducer');
  if (action.type === 'SET_UNDERSTANDING') return action.payload;
  else if (action.type === 'RESET') return [];
  return state;
};

const supportReducer = (state = 0, action) => {
  // console.log('Support Reducer');
  if (action.type === 'SET_SUPPORT') return action.payload;
  else if (action.type === 'RESET') return [];
  return state;
};

const commentsReducer = (state = 0, action) => {
  // console.log('Comments Reducer');
  if (action.type === 'SET_COMMENTS') return action.payload;
  else if (action.type === 'RESET') return [];
  return state;
};



// store!
const storeInstance = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentsReducer,
  }),
  applyMiddleware(logger)
);

// Blaine's hack
window.store = storeInstance;

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);