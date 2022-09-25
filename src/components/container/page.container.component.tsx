import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useEffect } from 'react';

type Props = {
  title: string;
  children: JSX.Element;
};

export const PageContainor: FC<Props> = ({ children, title }): JSX.Element => {
  useEffect(() => {
    document.title = `${title} | PostManager`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <Box>
      <Grid container style={styles.mainContainer}>
        {children}
      </Grid>
    </Box>
  );
};

const styles = {
  mainContainer: {
    height: '94vh',
    paddingTop: '4rem',
    alignItems: 'center',
  },
};
