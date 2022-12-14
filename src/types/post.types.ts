export type TPost = {
  postId: string;
  author: TAuthor;
  body: string;
  title: string;
  createdDate: Date;
};

export type TPostList = {
  posts: TPost[];
};

export type TAuthor = {
  username: string;
  avatar: string;
};

export type TEditPayloadType = {
  id: string;
  title: string | undefined;
  body: string | undefined;
};
