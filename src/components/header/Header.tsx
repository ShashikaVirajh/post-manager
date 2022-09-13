import { AppBar, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export const Header = (): JSX.Element => (
  <div>
    <AppBar>
      <Grid container display="flex" flexDirection="row">
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
          <Link to="/about" style={styles.container}>
            About
          </Link>
          <Link to="/terms" style={{ ...styles.container, marginLeft: '4rem' }}>
            Terms
          </Link>
        </Grid>
      </Grid>
    </AppBar>
  </div>
);

const styles = {
  container: {
    textDecoration: 'none',
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
};
