const styles = (theme) => ({
  navItem: {
    textDecoration: 'none',
    padding: '10px 8px',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  },
  active: {
    borderBottomStyle: 'solid',
    borderColor: theme.palette.secondary.main,
    borderWidth: '2px',
  },
});

export default styles;
