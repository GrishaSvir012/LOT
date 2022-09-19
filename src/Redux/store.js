import { configureStore } from '@reduxjs/toolkit';
import lotsReducer from './reducers/lotsReducer';

const store = configureStore({
  reducer: {
    lot: lotsReducer,
  },
});
export default store;
