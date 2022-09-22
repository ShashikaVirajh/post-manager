import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { PageContainor } from 'components/container/page.container.component';
import Axios from 'axios';

export const HomeGuest = (): JSX.Element => {
  const handleSubmit = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    try {
      await Axios.post('http://localhost:8080/register', {
        username: 'test',
        email: 'test@gmail.com',
        password: '12wnmikjhdlo',
      });
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <PageContainor title="Welcome!">
      <Grid container justifyContent="center">
        <Grid item xs={4}>
          <Typography variant="h3">Remember Writing? </Typography>
          <Box style={styles.boxConatiner}>
            Are you sick of short tweets and impersonal &ldquo;shared&rdquo; posts that are
            reminiscent of the late 90&rsquo;s email forwards? We believe getting back to actually
            writing is the key to enjoying the internet again.
          </Box>
        </Grid>

        <Grid item xs={3}>
          <form onSubmit={handleSubmit}>
            <Box>
              <TextField
                fullWidth
                id="username-register"
                name="username"
                label="Username"
                style={styles.textFieldContainer}
              />
            </Box>

            <Box>
              <TextField
                fullWidth
                id="email-register"
                name="email"
                label="Email"
                style={styles.textFieldContainer}
              />
            </Box>

            <Box>
              <TextField
                fullWidth
                id="password-register"
                name="password"
                label="Password"
                type="password"
                style={styles.textFieldContainer}
              />
            </Box>

            <Box display="flex" justifyContent="center">
              <Button type="submit" sx={styles.button}>
                Sign up for PostManager
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
    padding: '0.8rem',
    background: '#28a745',
    color: '#fff',
  },
  boxConatiner: {
    paddingTop: '2.5rem',
    lineHeight: '1.5rem',
    fontSize: 20,
    fontWeight: '500',
  },
};
