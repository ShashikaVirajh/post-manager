/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, Button, Grid, TextField } from '@mui/material';
import { PageContainor } from 'components/container/page.container.component';
import Axios from 'axios';
import { ChangeEvent, SyntheticEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageContext } from 'contexts/message.context';

export const CreatePost = (): JSX.Element => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { addMessage } = useContext(MessageContext);

  const handleSubmit = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault();
    try {
      const response = await Axios.post('/create-post', {
        title,
        body,
        token: localStorage.getItem('postManagerToken'),
      });

      addMessage('Congrats, you successfully created a post.');
      navigate(`/post/${response.data}`);
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <PageContainor title="Create New Post">
      <Grid container justifyContent={'center'} xs={12}>
        <Grid xs={6}>
          <form onSubmit={handleSubmit}>
            <TextField
              onChange={(event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
              fullWidth
              id="post-title"
              label="Title"
              style={styles.textFieldContainer}
            ></TextField>
            <TextField
              onChange={(event: ChangeEvent<HTMLInputElement>) => setBody(event.target.value)}
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
};
