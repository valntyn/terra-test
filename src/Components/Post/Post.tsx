import classNames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './Post.module.scss';
import { useAppDispatch } from '../../app/hooks';
import {
  removePost,
  toggleStatusDone,
  toggleStatusUndone,
} from '../../features/postsSlice/postsSlice';
import { Root } from '../../types/Root';
import { withoutImg } from '../../variables';

type PropTypes = {
  post: Root
};

export const Post: React.FC<PropTypes> = ({ post }) => {
  const {
    title,
    text,
    image,
    id,
    url,
    active,
  } = post;

  const dispatch = useAppDispatch();

  const handleClickDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    currentId: number,
  ) => {
    e.stopPropagation();

    dispatch(removePost(currentId));
  };

  const handleClickChange = (
    e: React.MouseEvent<HTMLButtonElement>,
    currentPost: Root,
  ) => {
    e.stopPropagation();

    if (currentPost.active) {
      dispatch(toggleStatusUndone(currentPost));
    } else {
      dispatch(toggleStatusDone(currentPost));
    }
  };

  return (
    <li className={styles.post}>
      <button
        type="button"
        className={styles.button}
        onClick={(e) => handleClickDelete(e, id)}
      >
        <div className={styles.cross} />
      </button>
      <Link
        to={`/${url}`}
      >
        <div>
          <img
            src={
              image?.includes('.png')
                ? image
                : withoutImg
            }
            alt="post-card"
            className={styles.img}
          />
        </div>
      </Link>
      <div className="px-4 py-3">
        <div className="flex flex-col">
          <h6 className="mb-3">{title}</h6>
          <p
            className={classNames(
              'overflow-hidden mb-2.5',
              { 'text-[#d9d9d9] line-through': active },
            )}
          >
            {text}
          </p>
          <button
            type="button"
            className={styles.buttonMod}
            onClick={(e) => handleClickChange(e, post)}
          >
            {active
              ? 'deactivate'
              : 'activate'}
          </button>
        </div>
      </div>
    </li>
  );
};
