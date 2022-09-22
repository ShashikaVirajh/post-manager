import { AppBar, Grid } from '@mui/material';
import { COMMON_ROUTES } from 'enums/routes.enums';
import { Link } from 'react-router-dom';
import { HeaderLoggedIn } from './header-logged-in.component';
import { HeaderLoggedOut } from './header-logged-out.component';

export const Header = (): JSX.Element => {
  const loggedIn = false;
  const font = '"Roboto","Helvetica","Arial"';

  return (
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
          <Link to={COMMON_ROUTES.HOME_PAGE} style={styles.logoHeader}>
            PostManager
          </Link>

          <Link to={COMMON_ROUTES.ABOUT_PAGE} style={styles.container}>
            About
          </Link>
          <Link to={COMMON_ROUTES.TERM_PAGE} style={styles.container}>
            Terms
          </Link>
        </Grid>

        <Grid item xs={9} display="flex" alignItems="center" justifyContent="flex-end" px="4rem">
          {loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
        </Grid>
      </Grid>
    </AppBar>
  );
};

const styles = {
  container: {
    textDecoration: 'none',
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  logoHeader: {
    textDecoration: 'none',
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
    marginLeft: '3rem',
  },
};
