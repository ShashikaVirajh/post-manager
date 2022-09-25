import { Avatar, Box, Typography } from '@mui/material';
import { PageContainor } from 'components/container/page.container.component';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const DetailedPost = (): JSX.Element => (
  <PageContainor title="Create New Post">
    <Box>
      <Box display="flex" flexDirection="column" style={styles.headerConatiner}>
        <Box display="flex" flexDirection="row">
          <Typography variant="h3">Example Post Title </Typography>
          <Box style={styles.iconConatiner}>
            <Link to={''} title="Edit">
              <EditIcon></EditIcon>
            </Link>{' '}
            <Link to={''} title="Delete">
              <DeleteIcon></DeleteIcon>
            </Link>
          </Box>
        </Box>

        <Box display="flex" flexDirection="row">
          <Link to={''}>
            <Avatar alt="Remy Sharp" src={localStorage.getItem('postManagerAvatar') ?? ''} />
          </Link>
          <Box sx={styles.postDetail}>
            Posted by <Link to={''}>brad</Link> on 2/10/2020
          </Box>
        </Box>
      </Box>

      <Box style={styles.boxConatiner}>
        <Box>
          Lorem isum dolor sit amet consectetur adipisicing elit. Beatae quod asperiores corrupti
          omnis qui, placeat neque modi, dignissimos, ab exercitationem eligendi culpa explicabo
          nulla tempora rem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ea at
          esse, tempore qui possimus soluta impedit natus voluptate, sapiente saepe modi est
          pariatur. Aut voluptatibus aspernatur fugiat asperiores at.
        </Box>
      </Box>
    </Box>
  </PageContainor>
);

export default DetailedPost;

const styles = {
  boxConatiner: {
    display: 'flex',
    alignSelf: 'center',
    paddingTop: '1rem',
    paddingLeft: '5rem',
    paddingRight: '5rem',
    lineHeight: '2rem',
    fontSize: 20,
    fontWeight: '500',
  },
  postDetail: {
    paddingTop: '1rem',
    marginLeft: '0.5rem',
    textDecoration: 'none',
  },
  headerConatiner: {
    paddingLeft: '5rem',
  },
  iconConatiner: {
    paddingLeft: '5rem',
    paddingTop: '1rem',
  },
};
