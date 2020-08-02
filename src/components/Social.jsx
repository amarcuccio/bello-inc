import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/SocialStyles';

const Social = (props) => {
  const { sites, classes } = props;
  return (
    <Grid item xs={12} md={3} align="center" className={classes.social}>
      <Typography variant="body2">
        {sites.map((site) => (
          <Link
            key={site.id}
            target="_blank"
            rel="noopener"
            href={site.url}
            className={classes.footerLinks}
          >
            <FontAwesomeIcon
              icon={
                site.icon === 'envelope'
                  ? ['fas', site.icon]
                  : ['fab', site.icon]
              }
              className={classes.footerIcon}
              size="lg"
              alt={site.id}
              title={site.id}
            />
          </Link>
        ))}
      </Typography>
    </Grid>
  );
};

export default withStyles(styles)(Social);
