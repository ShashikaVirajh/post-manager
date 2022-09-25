import { Box, Typography } from '@mui/material';
import { PageContainor } from 'components/container/page.container.component';

const Home = (): JSX.Element => (
  <Box>
    <PageContainor title={'Your Feed'}>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Typography variant="h3" display="flex" justifyContent="center">
          Hello&nbsp;<strong>{localStorage.getItem('postManagerUsername')}</strong>, your feed is
          empty.
        </Typography>
        <Box style={styles.boxConatiner}>
          <Typography>
            Your feed displays the latest posts from the people you follow. If you don&rsquo;t have
            any friends to follow that&rsquo;s okay; you can use the &ldquo;Search&rdquo; feature in
            the top menu bar to find content written by people with similar interests and then
            follow them.
          </Typography>
        </Box>
      </Box>
    </PageContainor>
  </Box>
);

export default Home;

const styles = {
  boxConatiner: {
    display: 'flex',
    alignSelf: 'center',
    padding: '3rem',
    lineHeight: '2rem',
    fontSize: 20,
    width: '60%',
    fontWeight: '500',
  },
};
