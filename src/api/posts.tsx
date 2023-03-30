import { client } from '../helpers/fetchClient';
import { NewPost } from '../types/newPost';
import { Root } from '../types/Root';

export const getPosts = () => {
  return client.get<Root[]>('/posts');
};

export const postPost = (post: NewPost) => {
  return client.post<Root>('/posts', post);
};

export const deletePost = (currentId: number) => {
  return client.delete(`/posts/${currentId}`);
};

export const updatePostOn = (
  currentId: number,
  post: Root,
) => {
  return client.put(`/posts/${currentId}`, post);
};
