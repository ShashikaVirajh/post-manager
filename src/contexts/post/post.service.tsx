import Axios from 'axios';
import { TPost, TPostList } from 'types/post.types';

export const addPost = async (title: string, body: string): Promise<string> => {
  try {
    const { data: postId } = await Axios.post('/create-post', {
      title,
      body,
      token: localStorage.getItem('postManagerToken'),
    });

    return postId;
  } catch (error) {
    throw error;
  }
};

export const getAuthUserPost = async (): Promise<TPostList[]> => {
  const username = localStorage.getItem('postManagerUsername');
  try {
    const { data } = await Axios.get(`/profile/${username}/posts`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getPostDetail = async (id: string): Promise<TPost | null> => {
  try {
    const { data } = await Axios.get(`/post/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (id: string): Promise<void> => {
  try {
    await Axios.delete(`/post/${id}`, {
      data: { token: localStorage.getItem('postManagerToken') },
    });
  } catch (error) {
    throw error;
  }
};
