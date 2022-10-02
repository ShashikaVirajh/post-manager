import { Box } from '@mui/material';
import { Post } from 'components/post/post.component';
import { PostContext } from 'contexts/post/post.context';
import { useContext, useEffect, useState } from 'react';

export const PostList = (): JSX.Element => {
  const [posts, setPosts] = useState<any>([]);
  const { getAuthUserPost } = useContext(PostContext);

  const getAuthPosts = async (): Promise<void> => {
    const posts = await getAuthUserPost();
    setPosts(posts);
  };

  useEffect(() => {
    getAuthPosts();
  }, []);

  return (
    <Box className="list-group">
      {posts.map((post: any, index: number) => {
        return <Post key={index} post={post} />;
      })}
    </Box>
  );
};
