import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/FooterStyles';

const Footer = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" align="center">
              © Copyright Bello & Co Inc.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" align="center">
              <FontAwesomeIcon icon={faFacebookSquare} />
              <FontAwesomeIcon icon={faLinkedin} />
            </Typography>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
};

export default withStyles(styles)(Footer);
