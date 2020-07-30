const styles = (theme) => ({
  social: {
    [theme.breakpoints.down('sm')]: {
      order: 1,
    },
  },
  footerLinks: {
    textDecoration: 'none',
    '&:link, &:visited, &:focus, &:hover, &:active': {
      color: theme.palette.type === 'light' ? '#1F232D' : '#FAFAFA',
    },
  },
  footerIcon: {
    margin: '0 1rem 0 1rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1rem',
    },
  },
});

export default styles;
