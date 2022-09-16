import { Box } from '@mui/material';
import { COMMON_ROUTES } from 'enums/routes.enums';
import { Link } from 'react-router-dom';

export const Footer = (): JSX.Element => (
  <>
    <hr />
    <Box style={styles.container} sx={{ justifyContent: 'center' }}>
      <p>
        Copyright &copy; 2020{' '}
        <Link to={COMMON_ROUTES.HOME_PAGE} style={styles.linkCon}>
          PostManager
        </Link>
        . All rights reserved.
        <hr />
      </p>
    </Box>
  </>
);

const font = '"Roboto","Helvetica","Arial"';
const styles = {
  container: {
    display: 'flex',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: font,
    color: '#6c757d',
  },
  linkCon: {
    textDecoration: 'none',
    color: '#28a745',
  },
};
