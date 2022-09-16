import { Box } from '@mui/system';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Container: FC<Props> = ({ children }): JSX.Element => <Box>{children}</Box>;
