const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    height: '80px',
    [theme.breakpoints.down('sm')]: {
      height: '60px',
    },
    borderBottom:
      theme.palette.type === 'light' ? '1px solid black' : '1px solid white',
  },
  appbar: {
    zIndex: '1500',
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
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

export default styles;
