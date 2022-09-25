/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Avatar, Button } from '@mui/material';
import { POST_ROUTES } from 'enums/routes.enums';
import { Link } from 'react-router-dom';

type Props = {
  setLoggedIn: (status: boolean) => void;
};

export const HeaderLoggedIn = ({ setLoggedIn }: Props): JSX.Element => {
  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('postManagerToken');
    localStorage.removeItem('postManagerUsername');
    localStorage.removeItem('postManagerAvatar');
  };

  return (
    <>
      <Link style={styles.linkContainer} to={POST_ROUTES.CREATE_POST}>
        Create Post
      </Link>
      <Avatar alt="Remy Sharp" src={localStorage.getItem('postManagerAvatar') ?? ''} />
      <Button onClick={handleLogout} sx={styles.btn}>
        Sign Out
      </Button>
    </>
  );
};

const styles = {
  linkContainer: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '0.875rem',
    lineHeight: 1.75,
    letterSpacing: ' 0.02857em',
    fontWeight: '500',
    marginRight: '1rem',
    background: '#28a745',
    padding: '0.5rem',
    borderRadius: '0.25rem',
  },

  btn: {
    background: '#6c757d',
    color: 'white',
    padding: 1,
    marginLeft: '1rem',
  },
};
