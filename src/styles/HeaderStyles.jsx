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
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: '18px',
    },
    '&:link, &:visited, &:focus, &:hover, &:active': {
      color: theme.palette.type === 'light' ? '#1F232D' : '#FAFAFA',
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
