import { useAppSelector } from '../../app/hooks';
import { selectedPosts }
  from '../../features/visiblePostsSlice/selectVisibleProducts';
import { FilterBar } from '../FilterBar';
import { Post } from '../Post/Post';

import './PostList.scss';

export const PostList = () => {
  const visiblePosts = useAppSelector(selectedPosts);

  return (
    <div>
      <FilterBar />
      <ul className="productList">
        {visiblePosts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};
