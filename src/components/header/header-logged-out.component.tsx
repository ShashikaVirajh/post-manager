/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Button, Grid, Input } from '@mui/material';
import Axios from 'axios';
import { ChangeEvent, SyntheticEvent, useState } from 'react';

export const HeaderLoggedOut = (): JSX.Element => {
  const [username, setUserName] = useState('');
  const [password, setPossword] = useState('');

  const handleSubmit = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault();
    try {
      await Axios.post('http://localhost:8080/login', {
        username,
        password,
      });
      // console.log(response.data);
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <Grid container display="flex" justifyContent="flex-end" flexDirection="row">
      <form onChange={handleSubmit}>
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
