import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Social from './Social';
import { SocialSites } from '../config/GeneralConfig';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/FooterStyles';

const Footer = (props) => {
  const { classes } = props;
  return (
    <div>
      <Container>
        <Grid container justify="space-between" className={classes.grid}>
          <Grid
            item
            xs={12}
            md={3}
            align="center"
            className={classes.copyright}
          >
            <Typography variant="body2">© Copyright Bello Inc.</Typography>
          </Grid>
          <Social sites={SocialSites} />
        </Grid>
      </Container>
    </div>
  );
};

export default withStyles(styles)(Footer);
