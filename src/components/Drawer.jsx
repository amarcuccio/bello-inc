import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Slide from '@material-ui/core/Slide';
import { useTheme } from '@material-ui/core/styles';

const Drawer = (props) => {
  const { open, close } = props;
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Dialog
        TransitionComponent={Transition}
        fullScreen={fullScreen}
        open={open}
        onClose={close}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <DialogContentText>Sample modal.</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Drawer;
