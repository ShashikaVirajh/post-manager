import { Box } from '@mui/material';
import PostList from 'components/post/post-list.component';
import { PostContext } from 'contexts/post/post.context';
import { useContext, useEffect, useState } from 'react';

const ProfilePosts = (): JSX.Element => {
  const [posts, setPosts] = useState([]);
  const { authUserPost } = useContext(PostContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getAuthPosts = async (): Promise<void> => {
    const data = await authUserPost();
    setPosts(data);
    // console.log(data);
  };

  useEffect(() => {
    getAuthPosts();
  }, [getAuthPosts]);

  return (
    <Box className="list-group">
      {posts.map((post) => {
        return <PostList posts={posts} />;
      })}
    </Box>
  );
};

export default ProfilePosts;
