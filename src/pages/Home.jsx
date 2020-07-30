import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Home = () => {
  return (
    <div>
      <Box py={5}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Container>
                <Typography variant="h6" gutterBottom>
                  Homepage
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean mollis elit vitae dolor tristique, in faucibus augue
                  lacinia. Donec eget arcu mattis, semper dui a, vulputate
                  velit. Vestibulum ultricies eros dui, in interdum lorem
                  tincidunt vitae. Curabitur mauris arcu, euismod ac libero
                  vitae, vulputate luctus est. Vivamus ultricies, felis et
                  commodo rhoncus, libero augue iaculis dolor, ac scelerisque
                  felis urna eget orci. Quisque nec dictum orci. Nulla vitae
                  nisl mauris. Praesent convallis eu ligula a malesuada. Quisque
                  consequat dui in pharetra iaculis. Nulla vehicula imperdiet
                  eleifend. Aenean at fermentum massa. Nam vulputate dignissim
                  lorem quis posuere. Nam feugiat est urna, id sagittis ipsum
                  luctus a. Ut felis quam, ullamcorper eu ante et, varius tempus
                  tortor. Praesent faucibus vitae arcu sed auctor. Pellentesque
                  non rutrum mi. Fusce pulvinar quis sapien a viverra. Mauris
                  vitae libero vitae risus malesuada viverra at ac arcu. Donec
                  rhoncus vel dui id faucibus.
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
