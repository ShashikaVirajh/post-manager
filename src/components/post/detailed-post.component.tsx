import { Avatar, Box, Typography } from '@mui/material';
import { PageContainor } from 'components/container/page.container.component';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deletePost, getPostDetail } from 'contexts/post/post.service';
import { useContext, useEffect, useState } from 'react';
import { TPost } from 'types/post.types';
import { MessageContext } from 'contexts/message.context';
import { PROFILE_ROUTES } from 'enums/routes.enums';

const DetailedPost = (): JSX.Element => {
  const postId = useParams().id ?? '';
  const [post, setPost] = useState<TPost | null>();
  const { addMessage } = useContext(MessageContext);
  const navigate = useNavigate();

  const getPost = async (): Promise<void> => {
    const post = await getPostDetail(postId);
    setPost(post);
  };

  useEffect(() => {
    getPost();
  }, []);

  const deleteHandler = async (): Promise<void> => {
    const areYouSure = window.confirm('Do you really want to delete this post?');
    if (areYouSure) {
      await deletePost(postId);
      addMessage('Post was successfully deleted.');
      navigate(`/profile/${post?.author.username}`);
    }
  };

  return (
    <PageContainor title="Detail Of Post">
      <Box>
        <Box display="flex" flexDirection="column" style={styles.headerConatiner}>
          <Box display="flex" flexDirection="row">
            <Typography variant="h3">{post?.title}</Typography>
            <Box style={styles.iconConatiner}>
              <Link to={`/post/${postId}/edit`} title="Edit">
                <EditIcon></EditIcon>
              </Link>{' '}
              <Link to={''} title="Delete">
                <DeleteIcon onClick={deleteHandler}></DeleteIcon>
              </Link>
            </Box>
          </Box>

          <Box display="flex" flexDirection="row">
            <Link to={`${PROFILE_ROUTES.PROFILE}/${post?.author.username}`}>
              <Avatar alt="Remy Sharp" src={post?.author.avatar ?? ''} />
            </Link>
            <Box sx={styles.postDetail}>
              Posted by
              <strong>
                {' '}
                <Link style={styles.link} to={`/profile/${post?.author.username}`}>
                  {post?.author.username}
                </Link>
              </strong>{' '}
              on 2/10/2020
            </Box>
          </Box>
        </Box>

        <Box style={styles.boxConatiner}>
          <Box>{post?.body}</Box>
        </Box>
      </Box>
    </PageContainor>
  );
};

export default DetailedPost;

const styles = {
  boxConatiner: {
    display: 'flex',
    alignSelf: 'center',
    paddingTop: '1rem',
    paddingLeft: '5rem',
    paddingRight: '5rem',
    lineHeight: '2rem',
    fontSize: 20,
    fontWeight: '500',
  },
  postDetail: {
    paddingTop: '1rem',
    marginLeft: '0.5rem',
    textDecoration: 'none',
  },
  headerConatiner: {
    paddingLeft: '5rem',
  },
  iconConatiner: {
    paddingLeft: '5rem',
    paddingTop: '1rem',
  },
  link: {
    textDecoration: 'none',
  },
};
