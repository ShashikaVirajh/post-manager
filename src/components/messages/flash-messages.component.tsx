import { Alert } from '@mui/material';
import { FC } from 'react';

type Props = {
  message: string;
};

export const FlashMessages: FC<Props> = ({ message }): JSX.Element | null => {
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
