import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import Zoom from '@material-ui/core/Zoom';

const ScrollToTop = (props) => {
  const { children, classes } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  ScrollToTop.propTypes = {
    children: PropTypes.element.isRequired,
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.backToTop}
      >
        {children}
      </div>
    </Zoom>
  );
};

export default ScrollToTop;
