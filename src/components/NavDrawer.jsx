import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import { Squeeze as Hamburger } from 'hamburger-react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/NavDrawerStyles';

const NavDrawer = (props) => {
  const { classes, open, close, themeState } = props;
  return (
    <div>
      <Drawer
        open={open}
        onClose={close}
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Container>
            <Hamburger
              distance="sm"
              size="28"
              color={themeState ? '#FFFFFF' : '#000000'}
              toggled={open}
              toggle={close}
            />
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
