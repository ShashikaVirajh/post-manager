import { createContext, ReactNode } from 'react';
import { TEditPayloadType, TPost, TPostList } from 'types/post.types';
import { addPost, deletePost, editPost, getAuthUserPost, getPostDetail } from './post.service';

type Props = {
  children: ReactNode;
};

type TPostContext = {
  addPost: (title: string, body: string) => void;
  getAuthUserPost: () => Promise<TPostList[]>;
  getPostDetail: (id: string) => Promise<TPost | null>;
  deletePost: (id: string) => Promise<void | null>;
  editPost: (payload: TEditPayloadType) => Promise<void | null>;
};

const defaultValues: TPostContext = {
  addPost: (title: string, body: string) => null,
  getAuthUserPost: async () => [],
  getPostDetail: async () => null,
  deletePost: async () => null,
  editPost: async () => null,
};

export const PostContext = createContext(defaultValues);

export const PostProvider = ({ children }: Props): JSX.Element => {
  const value = {
    addPost,
    getAuthUserPost,
    getPostDetail,
    deletePost,
    editPost,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
