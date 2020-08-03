import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/MainMenuStyles';

const MainMenu = (props) => {
  const { classes, menuItems, isDesktop, close } = props;
  return (
    <div>
      {menuItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.url}
          aria-label={item.display}
          className={classes.navItem}
          onClick={!isDesktop ? close : null}
          activeClassName={classes.active}
        >
          <Typography variant="button">{item.display}</Typography>
        </NavLink>
      ))}
    </div>
  );
};

export default withStyles(styles)(MainMenu);
