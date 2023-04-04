import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './Homepage.module.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectPostsBySearch } from '../../app/selectors';
import { FormForNewItem } from '../../Components/Form';
import { PostList } from '../../Components/PostList';
import { Spinner } from '../../Components/Spinner';
import { getPostsFromServer } from '../../features/postsSlice/postsSlice';
import { setVisiblePosts } from '../../features/visiblePostsSlice';

export const Homepage = () => {
  const dispatch = useAppDispatch();

  const { isLoad, posts, hasError } = useAppSelector(state => state.posts);

  const searchedPosts = useSelector(selectPostsBySearch);

  useEffect(() => {
    dispatch(getPostsFromServer());
  }, []);

  useEffect(() => {
    dispatch(setVisiblePosts(searchedPosts));
  }, [dispatch, posts, searchedPosts]);

  if (hasError) {
    return (
      <div className={styles.container}>
        <h1 className="mb-[18px]">
          Something went wrong! Refresh the page
        </h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className="mb-[18px]">Posts from API</h1>
      {isLoad && <Spinner />}
      <div className={styles.gridBox}>
        <PostList />
        <FormForNewItem />
      </div>
    </div>
  );
};
