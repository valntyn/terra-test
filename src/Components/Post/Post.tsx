import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../app/hooks';
import {
  removePost,
  toggleStatusDone,
  toggleStatusUndone,
} from '../../features/postsSlice/postsSlice';
import { Root } from '../../types/Root';
import { withoutImg } from '../../variables';

import './Post.scss';

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
    <li className="card">
      <button
        type="button"
        className="card__button-delete"
        onClick={(e) => handleClickDelete(e, id)}
      >
        <div className="card__cross" />
      </button>
      <Link
        to={`/${url}`}
      >
        <div className="card__img-box">
          <img
            src={
              image?.includes('.png')
                ? image
                : withoutImg
            }
            alt="product-card"
            className="card__img"
          />
        </div>
      </Link>
      <div className="card__wrapper">
        <div className="card__information">
          <h6 className="card__name">{title}</h6>
          <p
            className={classNames(
              'card__text',
              { 'card__text-active': active },
            )}
          >
            {text}
          </p>
          <button
            type="button"
            className="card__button-mod"
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
