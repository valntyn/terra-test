/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Root } from '../../types/Root';

type VisibleState = {
  visiblePosts: Root[];
};

const initialState: VisibleState = {
  visiblePosts: [],
};

export const visiblePostsSlice = createSlice({
  name: 'visiblePosts',
  initialState,
  reducers: {
    setVisiblePosts: (state, action: PayloadAction<Root[]>) => {
      state.visiblePosts = action.payload;
    },
  },
});

export const {
  setVisiblePosts,
} = visiblePostsSlice.actions;

export default visiblePostsSlice.reducer;
