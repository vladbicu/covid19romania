import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import covidReducer from './reducer';

export default configureStore({
  reducer: {
    covid: covidReducer,
  },
  thunk
});
