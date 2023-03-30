/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type QueryState = {
  appliedQuery: string;
};

const initialState: QueryState = {
  appliedQuery: '',
};

export const appliedQuerySlice = createSlice({
  name: 'appliedQuery',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.appliedQuery = action.payload;
    },
  },
});

export const {
  setQuery,
} = appliedQuerySlice.actions;

export default appliedQuerySlice.reducer;
