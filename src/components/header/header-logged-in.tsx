import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export const HeaderLoggedIn = (): JSX.Element => {
  const navigate = useNavigate();

  const handleLogout = (): void => {
    navigate('/');
  };

  return (
    <>
      <Link style={styles.linkContainer} to={'/create-post'}>
        Create Post
      </Link>

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
    marginRight: '2rem',
    background: '#28a745',
    padding: '0.5rem',
    borderRadius: '0.25rem',
  },

  btn: {
    background: '#6c757d',
    color: 'white',
    padding: 1,
  },
};
