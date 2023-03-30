import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import postsReducer from '../features/postsSlice/postsSlice';
import appliedQueryReducer from '../features/querySlice/querySlice';
import visiblePostsReducer
  from '../features/visiblePostsSlice/visiblePostsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    appliedQuery: appliedQueryReducer,
    visiblePosts: visiblePostsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
/* eslint-enable @typescript-eslint/indent */
