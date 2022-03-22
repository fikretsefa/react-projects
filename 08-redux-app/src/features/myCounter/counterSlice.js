import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 13
};


export const counterSlice = createSlice({
    name: 'myCounter',
    initialState,
    reducers: {
      increment: (state) => {
        state.value += 1;
      },
      decrement: (state) => {
        state.value -= 1;
      },   
      incrementByAmount: (state, action) => {
        state.value += action.payload;
      },
    },
  });

  export const { increment, decrement, incrementByAmount } = counterSlice.actions;  
  export const selectCount = (state) => state.myCounter.value;
  export default counterSlice.reducer;