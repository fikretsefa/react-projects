import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
    value: 13,
    status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
      const response = await fetchCount(amount);
      return response.data;    
  }
);

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

    extraReducers: (builder) => {
      builder
        .addCase(incrementAsync.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(incrementAsync.fulfilled, (state, action) => {
          state.status = 'idle';
          state.value += action.payload;
        });
    },
  });

  export const incrementIfOdd = (amount) => (dispatch, getState) => {
    const currentValue = selectCount(getState());
    console.log(getState)
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };


  export const { increment, decrement, incrementByAmount } = counterSlice.actions;  
  export const selectCount = (state) => state.myCounter.value;
  export const selectStatus = (state) => state.myCounter.status;
  export default counterSlice.reducer;