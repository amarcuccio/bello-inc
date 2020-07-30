import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/MainMenuStyles';

const MainMenu = (props) => {
  const { classes, menuItems } = props;
  return (
    <div>
      {menuItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.url}
          aria-label={item.display}
          className={classes.navItem}
        >
          <Button>{item.display}</Button>
        </NavLink>
      ))}
    </div>
  );
};

export default withStyles(styles)(MainMenu);
