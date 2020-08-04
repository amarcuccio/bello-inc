const styles = (theme) => ({
  navItem: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    padding: '10px 8px',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  navItems: {
    margin: '2rem 0 2rem 0',
  },
  active: {
    borderBottomStyle: 'solid',
    borderColor: theme.palette.text.primary,
    borderWidth: '2px',
  },
});

export default styles;
