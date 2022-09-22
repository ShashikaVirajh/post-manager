import { Box, Button, Grid, TextField } from '@mui/material';
import { PageContainor } from 'components/container/page.container.component';

export const CreatePost = (): JSX.Element => (
  <PageContainor title="Create New Post">
    <Grid container justifyContent={'center'} xs={12}>
      <Grid xs={6}>
        <TextField
          fullWidth
          id="post-title"
          label="Title"
          style={styles.textFieldContainer}
        ></TextField>
        <TextField fullWidth id="post-body" label="Body Content" multiline rows={10}></TextField>
        <Box display="flex" justifyContent={'end'}>
          <Button type="submit" sx={styles.button}>
            Save New Post
          </Button>
        </Box>
      </Grid>
    </Grid>
  </PageContainor>
);

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
