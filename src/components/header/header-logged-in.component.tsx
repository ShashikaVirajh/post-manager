/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Avatar, Button } from '@mui/material';
import { MessageContext } from 'contexts/message.context';
import { COMMON_ROUTES, POST_ROUTES, PROFILE_ROUTES } from 'enums/routes.enums';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type Props = {
  setLoggedIn: (status: boolean) => void;
};

export const HeaderLoggedIn = ({ setLoggedIn }: Props): JSX.Element => {
  const navigate = useNavigate();
  const { addMessage } = useContext(MessageContext);

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('postManagerToken');
    localStorage.removeItem('postManagerUsername');
    localStorage.removeItem('postManagerAvatar');
    addMessage('You have successfully logged out.');
    navigate(COMMON_ROUTES.HOME_PAGE);
  };

  return (
    <>
      <Link style={styles.linkContainer} to={POST_ROUTES.CREATE_POST}>
        Create Post
      </Link>
      <Link to={PROFILE_ROUTES.PROFILE}>
        <Avatar alt="Remy Sharp" src={localStorage.getItem('postManagerAvatar') ?? ''} />
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
