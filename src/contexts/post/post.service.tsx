import Axios from 'axios';

export const addPost = async (title: string, body: string): Promise<void> => {
  try {
    await Axios.post('/create-post', {
      title,
      body,
      token: localStorage.getItem('postManagerToken'),
    });
  } catch (error) {
    // console.log(error);
  }
};
