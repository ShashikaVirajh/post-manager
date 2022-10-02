/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Button, Grid, Input } from '@mui/material';
import { ChangeEvent, SyntheticEvent, useContext, useState } from 'react';
import { MessageContext } from 'contexts/message.context';
import { AuthContext } from 'contexts/auth/auth.context';

type Props = {
  setLoggedIn: (status: boolean) => void;
};

export const HeaderLoggedOut = ({ setLoggedIn }: Props): JSX.Element => {
  const [username, setUserName] = useState('');
  const [password, setPossword] = useState('');
  const { addMessage } = useContext(MessageContext);
  const { signIn } = useContext(AuthContext);

  const handleSubmit = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault();

    await signIn(username, password);

    setLoggedIn(true);
    addMessage('You have successfully logged in.');
  };

  return (
    <Grid container display="flex" justifyContent="flex-end" flexDirection="row">
      <form onSubmit={handleSubmit}>
        <Input
          onChange={(event: ChangeEvent<HTMLInputElement>) => setUserName(event.target.value)}
          style={styles.inputContainer}
          placeholder="Email Address"
        />
        <Input
          onChange={(event: ChangeEvent<HTMLInputElement>) => setPossword(event.target.value)}
          type="password"
          style={styles.inputContainer}
          placeholder="Password"
        />
        <Button style={styles.btn} type="submit">
          Sign In
        </Button>
      </form>
    </Grid>
  );
};

const styles = {
  inputContainer: {
    border: '1 solid red',
    width: '10rem',
    marginRight: '1rem',
    color: '#fff',
  },

  btn: {
    background: '#28a745',
    color: 'white',
  },
};
