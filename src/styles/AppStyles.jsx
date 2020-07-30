const styles = (theme) => ({
  root: {
    display: ' flex',
    minHeight: 'calc(100vh - 80px)',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      minHeight: 'calc(100vh - 64px)',
    },
  },
});

export default styles;
