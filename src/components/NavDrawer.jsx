import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/NavDrawerStyles';

const NavDrawer = (props) => {
  const { classes, open, close } = props;
  return (
    <div>
      <Drawer
        open={open}
        onClose={close}
        classes={{ paper: classes.drawerPaper }}
        anchor="bottom"
        SlideProps={{ direction: 'up' }}
      >
        <Toolbar />
        <div>
          <Container>
            <Typography variant="h6">
              navigation items will go here on mobile
            </Typography>
          </Container>
        </div>
      </Drawer>
    </div>
  );
};

export default withStyles(styles)(NavDrawer);
