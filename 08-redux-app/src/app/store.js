import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import myCounterReducer from '../features/myCounter/counterSlice';

export const store = configureStore({
  reducer: {
    myCounter: myCounterReducer,
  },
});
