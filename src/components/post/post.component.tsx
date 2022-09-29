import { Avatar, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const Post = ({ post }: any): JSX.Element => {
  const date = new Date(post.createdDate);
  const dataFormatted = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  return (
    <Link key={post._id} to={`/post/${post._id}`} style={styles.link}>
      <Box display="flex" flexDirection="row" style={styles.mainContainer}>
        <Avatar src={post.author.avatar} />
        <Box style={styles.postContainer}>
          <strong>{post.title}</strong> on {dataFormatted}
        </Box>
      </Box>
    </Link>
  );
};

const styles = {
  mainContainer: {
    padding: '0.5rem',
  },
  postContainer: {
    marginTop: '0.5rem',
    paddingLeft: '0.5rem',
  },
  link: {
    textDecoration: 'none',
  },
};
