/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  deletePost,
  getPosts,
  postPost,
  updatePostOn,
} from '../../api/posts';
import { NewPost } from '../../types/newPost';
import { Root } from '../../types/Root';

type PostsState = {
  posts: Root[];
  isLoad: boolean;
  hasError: boolean,
};

export const getPostsFromServer = createAsyncThunk(
  'posts/load',

  async () => {
    return getPosts();
  },
);

export const addPostOnServer = createAsyncThunk(
  'posts/add',
  async (data: NewPost) => postPost(data),
);

const initialState: PostsState = {
  posts: [],
  isLoad: false,
  hasError: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    removePost: (state, action) => {
      state.posts = state.posts
        .filter(post => post.id !== action.payload);
      deletePost(action.payload);
    },
    toggleStatusDone: (state, action) => {
      const findItem = state.posts
        .find(obj => obj.id === action.payload.id);

      if (findItem && !findItem.active) {
        findItem.active = 1;
        updatePostOn(findItem.id, { ...findItem, active: 1 });
      }
    },
    toggleStatusUndone: (state, action) => {
      const findItem = state.posts
        .find(obj => obj.id === action.payload.id);

      if (findItem && findItem.active) {
        findItem.active = null;
        updatePostOn(findItem.id, { ...findItem, active: null });
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPostsFromServer.pending, (state) => {
        state.isLoad = true;
        state.hasError = false;
      })
      .addCase(getPostsFromServer.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoad = false;
      })
      .addCase(getPostsFromServer.rejected, (state) => {
        state.isLoad = false;
        state.hasError = true;
      })
      .addCase(addPostOnServer.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(addPostOnServer.rejected, (state) => {
        state.hasError = true;
      });
  },
});

export const {
  toggleStatusDone,
  toggleStatusUndone,
  removePost,
} = postsSlice.actions;

export default postsSlice.reducer;
