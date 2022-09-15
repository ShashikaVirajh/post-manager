import { Button, Grid, Input } from '@mui/material';
import { MouseEvent } from 'react';

export const HeaderLoggedOut = (): JSX.Element => {
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
  };

  return (
    <Grid container display="flex" justifyContent="flex-end" flexDirection="row">
      <Input style={styles.inputContainer} placeholder="Email Address" />
      <Input type="password" style={styles.inputContainer} placeholder="Password" />
      <Button style={styles.btn} onSubmit={handleSubmit}>
        Sign In
      </Button>
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
