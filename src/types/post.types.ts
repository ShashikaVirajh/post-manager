export type TPost = {
  postId: string;
  author: object;
  body: string;
  title: string;
  createdDate: Date;
};

export type TPostList = {
  posts: TPost[];
};
