import { Box, Divider } from '@mui/material';
import { COMMON_ROUTES } from 'enums/routes.enums';
import { Link } from 'react-router-dom';

export const Footer = (): JSX.Element => (
  <Box>
    <Divider sx={{ marginBottom: '1rem' }} />

    <Box style={styles.container} sx={{ justifyContent: 'center' }}>
      <Box>
        Copyright &copy; 2020{' '}
        <Link to={COMMON_ROUTES.HOME_PAGE} style={styles.link}>
          PostManager
        </Link>
        . All rights reserved.
      </Box>
    </Box>
  </Box>
);

const font = '"Roboto","Helvetica","Arial"';
const styles = {
  container: {
    display: 'flex',
    fontSize: 12,
    fontWeight: '700',
    fontFamily: font,
    color: '#6c757d',
    letterSpacing: '0.1rem',
  },
  link: {
    textDecoration: 'none',
    color: '#28a745',
  },
};
