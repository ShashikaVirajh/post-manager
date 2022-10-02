import { createContext, ReactNode } from 'react';
import { TPost, TPostList } from 'types/post.types';
import { addPost, getAuthUserPost, getPostDetail } from './post.service';

type Props = {
  children: ReactNode;
};

type TPostContext = {
  addPost: (title: string, body: string) => void;
  getAuthUserPost: () => Promise<TPostList[]>;
  getPostDetail: (id: string) => Promise<TPost | null>;
};

const defaultValues: TPostContext = {
  addPost: (title: string, body: string) => null,
  getAuthUserPost: async () => [],
  getPostDetail: async () => null,
};

export const PostContext = createContext(defaultValues);

export const PostProvider = ({ children }: Props): JSX.Element => {
  const value = {
    addPost,
    getAuthUserPost,
    getPostDetail,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
