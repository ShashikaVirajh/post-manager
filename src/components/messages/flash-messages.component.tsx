import { Alert } from '@mui/material';
import { useEffect, useState } from 'react';
import { FC } from 'react';

type Props = {
  message: string;
};

export const FlashMessages: FC<Props> = ({ message }): JSX.Element | null => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  return message ? (
    <Alert style={styles.container} severity="success">
      {message}
    </Alert>
  ) : null;
};
const styles = {
  container: {
    zIndex: 999,
    marginTop: '6rem',
  },
};
