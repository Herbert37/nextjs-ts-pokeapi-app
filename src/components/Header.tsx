import { Box, Container, Grid, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        lineHeight: '0rem',
        marginTop: '-4rem'
      }}
    >
      <Box
        component="img"
        sx={{
          height: { md: 300 },
          width: '100%',
          maxHeight: { md: 300 },
          maxWidth: '100%',
          objectFit: 'cover',
        }}
        src='https://wallpapercat.com/w/full/8/3/b/1193776-3840x2160-desktop-4k-gengar-background.jpg'
      />
      {/* Overlay layer */}
      <div className={'headerContainer'}>
        <Container maxWidth="lg"
          sx={{ pl: "1rem !important", pr: "1rem !important" }}>
          <Grid
            container
            sx={{
              paddingBottom: '2rem',
            }}
          >
            <Grid item xs={12}>
              <Typography 
                variant="h2"
                color={'text.primary'}
                gutterBottom
                sx={{
                  fontSize: {
                    xs: '2rem',
                    sm: '4rem',
                  },
                }}
              >
              PokeAPI App
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Box>
  );
};

export default Header;
