const styles = (theme) => ({
  toolbar: {
    height: '80px',
    [theme.breakpoints.down('sm')]: {
      height: '60px',
    },
  },
  title: {
    flexGrow: 1,
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: '18px !important',
      marginLeft: '0px',
    },
  },
});

export default styles;
