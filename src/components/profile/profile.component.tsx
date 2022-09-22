/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Avatar, Box, Button, Grid, List, ListItem, Tab, Tabs } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import { PageContainor } from 'components/container/page.container.component';

export const Profile = (): JSX.Element => {
  const [value, setValue] = useState('1');

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <PageContainor title="Profile Screen">
      <Grid container justifyContent="center">
        <Box>
          <Box display="flex">
            <Avatar
              alt="Remy Sharp"
              src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128"
            />
            <Button sx={styles.button}>Follow</Button>
          </Box>

          <TabContext value={value}>
            <Tabs value={value} onChange={handleChange}>
              <Tab value="1" label="Posts: 3"></Tab>
              <Tab value="2" label="Followers: 101" />
              <Tab value="3" label="Following: 40" />
            </Tabs>

            <TabPanel value="1">
              <List>
                <ListItem>
                  <Box display="flex" flexDirection="row">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128"
                    />
                    <Box sx={styles.postDetail}>
                      <strong>Example Post #1</strong>
                      <span>on 2/10/2020 </span>
                    </Box>
                  </Box>
                </ListItem>
                <ListItem>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128"
                  />
                  <Box sx={styles.postDetail}>
                    <strong>Example Post #2</strong>
                    <span>on 2/10/2020 </span>
                  </Box>
                </ListItem>
                <ListItem alignItems="flex-start">
                  <Avatar
                    alt="Remy Sharp"
                    src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128"
                  />
                  <Box sx={styles.postDetail}>
                    <strong>Example Post #3</strong>
                    <span>on 2/10/2020 </span>
                  </Box>
                </ListItem>
              </List>
            </TabPanel>
            <TabPanel value="2">No Followers</TabPanel>
            <TabPanel value="3">Not Following</TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </PageContainor>
  );
};

const styles = {
  postDetail: {
    paddingTop: '1rem',
    marginLeft: '0.5rem',
    textDecoration: 'none',
  },
  button: {
    background: '#28a745',
    color: '#fff',
    marginLeft: '1rem',
  },
};
