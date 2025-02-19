import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
}

const initialState = {
  count: 5
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      if (state.count <= 0) return;
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    reset: state => {
      state = initialState;
    }
  }
});

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

export default counterSlice.reducer
