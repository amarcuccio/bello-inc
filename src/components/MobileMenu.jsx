import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/MobileMenuStyles';

const MobileMenu = (props) => {
  const { classes, menuItems, isDesktop, close } = props;
  return (
    <div className={classes.root}>
      {menuItems.map((item) => (
        <div key={item.id} className={classes.navItems}>
          <NavLink
            to={item.url}
            aria-label={item.display}
            className={classes.navItem}
            onClick={!isDesktop ? close : null}
            activeClassName={classes.active}
          >
            <Typography variant="button">{item.display}</Typography>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(MobileMenu);
