import { createContext, ReactNode } from 'react';
import { addPost, authUserPost } from './post.service';

type Props = {
  children: ReactNode;
};

type TPostContext = {
  addPost: (title: string, body: string) => void;
  authUserPost: () => any;
};

const defaultValues: TPostContext = {
  addPost: (title: string, body: string) => null,
  authUserPost: () => null,
};

export const PostContext = createContext(defaultValues);

export const PostProvider = ({ children }: Props): JSX.Element => {
  const value = {
    addPost,
    authUserPost,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
