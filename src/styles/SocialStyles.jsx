const styles = (theme) => ({
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
