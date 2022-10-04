import { Box, Button, Grid, TextField } from '@mui/material';
import { PageContainor } from 'components/container/page.container.component';
import { PostContext } from 'contexts/post/post.context';
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const EditPost = (): JSX.Element => {
  const navigate = useNavigate();
  const postId = useParams().id ?? '';
  const { getPostDetail, editPost } = useContext(PostContext);
  const [title, setTitle] = useState<string | undefined>('');
  const [body, setBody] = useState<string | undefined>('');

  const getPost = async (): Promise<void> => {
    const post = await getPostDetail(postId);
    setTitle(post?.title);
    setBody(post?.body);
  };

  useEffect(() => {
    getPost();
  }, []);

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const payload = {
      id: postId,
      title,
      body,
    };
    await editPost(payload);
    navigate(`/post/${postId}`);
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setBody(event.target.value);
  };

  return (
    <PageContainor title={'Edit Post'}>
      <Grid container justifyContent={'center'} xs={12}>
        <Link style={styles.link} to={`/post/${postId}`}>
          &laquo; Back to post permalink
        </Link>
        <Grid xs={6}>
          <form onSubmit={handleSubmit}>
            <TextField
              onChange={(e): void => handleTitleChange(e)}
              value={title}
              fullWidth
              id="post-title"
              placeholder="Title"
              style={styles.textFieldContainer}
            ></TextField>
            <TextField
              onChange={(e): any => handleBodyChange(e)}
              value={body}
              fullWidth
              id="post-body"
              label="Body Content"
              multiline
              rows={10}
            ></TextField>
            <Box display="flex" justifyContent={'end'}>
              <Button type="submit" sx={styles.button}>
                Save New Post
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </PageContainor>
  );
};

const styles = {
  textFieldContainer: {
    marginBottom: '2rem',
  },
  button: {
    marginTop: '2rem',
    padding: '0.8rem',
    background: '#28a745',
    color: '#fff',
  },
  link: {
    marginTop: '-3rem',
    textDecoration: 'none',
  },
};
