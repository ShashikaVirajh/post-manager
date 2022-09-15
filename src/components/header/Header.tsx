import { AppBar, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { HeaderLoggedIn } from './header-logged-in';
import { HeaderLoggedOut } from './header-logged-out';

export const Header = (): JSX.Element => {
  const loggedIn = true;
  const font = '"Roboto","Helvetica","Arial"';

  return (
    <div>
      <AppBar>
        <Grid
          container
          display="flex"
          flexDirection="row"
          sx={{ background: '#007bff', fontFamily: font }}
        >
          <Grid
            item
            xs={3}
            py="1rem"
            px="0.5rem"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: 30,
                fontWeight: '600',
                marginLeft: '3rem',
              }}
            >
              PostManager
            </Link>

            <Link to="/about" style={styles.container}>
              About
            </Link>
            <Link to="/terms" style={styles.container}>
              Terms
            </Link>
          </Grid>

          <Grid item xs={9} display="flex" alignItems="center" justifyContent="flex-end" px="4rem">
            {loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

const styles = {
  container: {
    textDecoration: 'none',
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
};
