import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/FooterStyles';

const Footer = (props) => {
  const { classes } = props;
  return <div className={classes.root}>footer stuff</div>;
};

export default withStyles(styles)(Footer);
