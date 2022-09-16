import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { Footer } from 'components/footer/footer.component';
import { Header } from 'components/header/header.component';
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
      <Header />
      <Container style={styles.mainContainer}>{children}</Container>
      <Footer />
    </Box>
  );
};

const styles = {
  mainContainer: {
    marginTop: '5rem',
    padding: '3rem',
  },
};
