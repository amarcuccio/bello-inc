import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { Squeeze as Hamburger } from 'hamburger-react';
import DialogContentText from '@material-ui/core/DialogContentText';
import { useTheme } from '@material-ui/core/styles';

const Drawer = (props) => {
  const { open, close } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <div>
      <Dialog
        TransitionComponent={Transition}
        fullScreen={fullScreen}
        open={open}
        onClose={close}
      >
        <DialogContent>
          <Hamburger distance="sm" size="28" toggled={open} toggle={close} />
          <DialogContentText>Navigation drawer for mobile.</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Drawer;
