import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/SocialStyles';

const Social = (props) => {
  const { icons, classes } = props;
  return (
    <Grid item xs={12} md={3} align="center" className={classes.social}>
      <Typography variant="body2">
        {icons.map((icon, index) => (
          <FontAwesomeIcon
            key={index}
            icon={['fab', icon]}
            className={classes.footerIcon}
            size="lg"
          />
        ))}
      </Typography>
    </Grid>
  );
};

export default withStyles(styles)(Social);
