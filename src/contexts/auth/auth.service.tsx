import Axios from 'axios';

export const signIn = async (username: string, password: string): Promise<void> => {
  try {
    const { data } = await Axios.post('/login', {
      username,
      password,
    });

    localStorage.setItem('postManagerToken', data?.token);
    localStorage.setItem('postManagerUsername', data?.username);
    localStorage.setItem('postManagerAvatar', data?.avatar);
  } catch (error) {
    // console.log(error);
  }
};

export const singOut = async (username: string, email: string, password: string): Promise<void> => {
  try {
    await Axios.post('/register', {
      username,
      email,
      password,
    });
  } catch (error) {
    // console.log(error);
  }
};
