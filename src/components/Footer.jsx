import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
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
        <Container>
          <Typography variant="body1">
            © Copyright Bello & Co Inc. {new Date().getFullYear()}
          </Typography>
          <Typography variant="body1">
            <FontAwesomeIcon icon={faFacebookSquare} />
            <FontAwesomeIcon icon={faLinkedin} />
          </Typography>
        </Container>
      </footer>
    </div>
  );
};

export default withStyles(styles)(Footer);
