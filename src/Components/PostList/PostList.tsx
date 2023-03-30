import styles from './PostList.module.scss';
import { useAppSelector } from '../../app/hooks';
import { selectedPosts }
  from '../../features/visiblePostsSlice/selectVisibleProducts';
import { FilterBar } from '../FilterBar';
import { Post } from '../Post/Post';

export const PostList = () => {
  const visiblePosts = useAppSelector(selectedPosts);

  return (
    <div>
      <FilterBar />
      <ul className={styles.postList}>
        {visiblePosts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};
