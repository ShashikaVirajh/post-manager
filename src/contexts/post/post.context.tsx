import { createContext, ReactNode } from 'react';
import { addPost } from './post.service';

type Props = {
  children: ReactNode;
};

type TPostContext = {
  addPost: (title: string, body: string) => void;
};

const defaultValues: TPostContext = {
  addPost: (itle: string, body: string) => null,
};

export const PostContext = createContext(defaultValues);

export const PostProvider = ({ children }: Props): JSX.Element => {
  const value = {
    addPost,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
