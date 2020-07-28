const styles = (theme) => ({
  toolbar: {
    height: '80px',
    [theme.breakpoints.down('sm')]: {
      height: '60px',
    },
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: '18px',
    },
  },
  themeIcon: {
    fontSize: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },
});

export default styles;
