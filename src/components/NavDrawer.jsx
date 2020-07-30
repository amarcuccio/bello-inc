import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import MainMenu from './MainMenu';
import { MenuItems } from '../config/GeneralConfig';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/NavDrawerStyles';

const NavDrawer = (props) => {
  const { classes, open, close, isDesktop } = props;
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
            <MainMenu
              menuItems={MenuItems}
              isDesktop={isDesktop}
              close={close}
            />
          </Container>
        </div>
      </Drawer>
    </div>
  );
};

export default withStyles(styles)(NavDrawer);
