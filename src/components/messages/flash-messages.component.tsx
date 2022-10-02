import { Alert } from '@mui/material';
import { useEffect, useState } from 'react';
import { FC } from 'react';

type Props = {
  message: string;
};

export const FlashMessages: FC<Props> = ({ message }): JSX.Element | null => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, [message]);

  return show && message ? (
    <Alert style={styles.container} severity="success">
      {message}
    </Alert>
  ) : null;
};
const styles = {
  container: {
    zIndex: 999,
    marginTop: '5rem',
    alignSelf: 'center',
  },
};
