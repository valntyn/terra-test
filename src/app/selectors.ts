import { createSelector } from '@reduxjs/toolkit';

import { Root } from '../types/Root';

export const selectAllPosts
  = (state: { posts: { posts: Root[]; }; }) => state.posts.posts;

export const selectQuery
  = (
    state: {
      appliedQuery: { appliedQuery: string; };
    },
  ) => state.appliedQuery.appliedQuery;

export const selectPostsBySearch = createSelector(
  [selectAllPosts, selectQuery],
  (allPosts: Root[], query: string) => {
    if (query) {
      return allPosts.filter(({ title, text }) => (
        title.toLowerCase().trim().includes(query)
        || text?.toLowerCase().trim().includes(query)
      ));
    }

    return allPosts;
  },
);
