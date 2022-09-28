import Axios from 'axios';

type TPost = {
  postId: number;
  postTitle: string;
  postBody: string;
};

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

export const authUserPost = async (): Promise<TPost[]> => {
  const username = localStorage.getItem('postManagerUsername');
  try {
    const { data } = await Axios.get(`/profile/${username}/posts`);
    return data;
  } catch (error) {
    throw error;
  }
};
