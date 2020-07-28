const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    borderTop:
      theme.palette.type === 'light' ? '1px solid black' : '1px solid white',
  },
});

export default styles;
