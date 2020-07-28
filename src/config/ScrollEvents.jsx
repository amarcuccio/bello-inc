import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';

function HeaderElevation(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
  });
}

HeaderElevation.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export { HeaderElevation };
