import { Box, Typography } from '@mui/material';
import { PageContainor } from 'components/container/page.container.component';

const Home = (): JSX.Element => (
  <Box>
    <PageContainor title={'Your Feed'}>
      <Box>
        <Typography variant="h2">
          Hello <strong>nim</strong>, your feed is empty.
        </Typography>
        <p>
          Your feed displays the latest posts from the people you follow. If you don&rsquo;t have
          any friends to follow that&rsquo;s okay; you can use the &ldquo;Search&rdquo; feature in
          the top menu bar to find content written by people with similar interests and then follow
          them.
        </p>
      </Box>
    </PageContainor>
  </Box>
);

export default Home;
