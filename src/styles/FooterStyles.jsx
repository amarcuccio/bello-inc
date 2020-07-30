const styles = (theme) => ({
  grid: {
    padding: theme.spacing(3, 2),
    borderTop:
      theme.palette.type === 'light' ? '1px solid black' : '1px solid white',
  },
  copyright: {
    [theme.breakpoints.down('sm')]: {
      order: 99,
    },
  },
  social: {
    [theme.breakpoints.down('sm')]: {
      order: 1,
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
