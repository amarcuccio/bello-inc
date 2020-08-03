const styles = (theme) => ({
  grid: {
    padding: theme.spacing(3, 2),
    borderTopStyle: 'solid',
    borderColor: theme.palette.text.main,
    borderWidth: '1px',
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
