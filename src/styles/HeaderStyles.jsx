const styles = (theme) => ({
  backToTop: {
    position: 'fixed',
    bottom: theme.spacing(5),
    right: theme.spacing(3),
  },
  root: {
    display: 'flex',
  },
  toolbar: {
    height: '80px',
    [theme.breakpoints.down('sm')]: {
      height: '60px',
    },
    borderBottom:
      theme.palette.type === 'light'
        ? '1px solid #1F232D'
        : '1px solid #EDEEEE',
  },
  appbar: {
    zIndex: '1500',
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    fontSize: '1.75rem',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: '22px',
    },
    '&:link, &:visited, &:focus, &:hover, &:active': {
      color: theme.palette.type === 'light' ? '#1F232D' : '#EDEEEE',
    },
  },
  iconContainer: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '40px',
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
