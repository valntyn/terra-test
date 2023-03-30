import { RootState } from '../../app/store';

export const selectedPosts
  = (state: RootState) => state.visiblePosts.visiblePosts;
