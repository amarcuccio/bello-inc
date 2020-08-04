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
    borderBottomStyle: 'solid',
    borderColor: theme.palette.text.primary,
    borderWidth: '1px',
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
      color: theme.palette.text.primary,
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
  scrollTop: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.text.primary,
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.text.primary,
    },
  },
});

export default styles;
