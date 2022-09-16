import { Box, Button, Grid, TextField } from '@mui/material';
import { PageContainor } from 'components/container/page.container.component';

export const HomeGuest = (): JSX.Element => (
  <Box>
    <PageContainor title="Welcome!">
      <Box>
        <Grid container spacing={8}>
          <Grid item xs={6}>
            <h1>Remember Writing?</h1>
            <p>
              Are you sick of short tweets and impersonal &ldquo;shared&rdquo; posts that are
              reminiscent of the late 90&rsquo;s email forwards? We believe getting back to actually
              writing is the key to enjoying the internet again.
            </p>
          </Grid>
          <Grid item xs={6}>
            <form>
              <Box>
                <TextField
                  fullWidth
                  id="username-register"
                  label="Username"
                  style={styles.textFieldContainer}
                />
              </Box>
              <Box>
                <TextField
                  fullWidth
                  id="email-register"
                  label="Email"
                  style={styles.textFieldContainer}
                />
              </Box>
              <Box>
                <TextField
                  fullWidth
                  id="password-register"
                  label="Password"
                  type="password"
                  style={styles.textFieldContainer}
                />
              </Box>
              <Button sx={{ justifyContent: 'center' }} type="submit" style={styles.btn}>
                Sign up for PostManager
              </Button>
            </form>
          </Grid>
        </Grid>
      </Box>
    </PageContainor>
  </Box>
);

const styles = {
  textFieldContainer: {
    margin: '1rem',
  },
  btn: {
    margin: '1rem',
    background: '#28a745',
    color: '#fff',
  },
};
