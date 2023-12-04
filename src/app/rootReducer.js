import { combineReducers } from '@reduxjs/toolkit';
// src/app/rootReducer.js
import counterReducer from '../features/counter/counterSlice';
// Import other reducers as needed

const rootReducer = combineReducers({
  counter: counterReducer,

});

export default rootReducer;
