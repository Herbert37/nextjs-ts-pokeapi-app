"use client";
import PokemonDetails from "@/components/PokemonDetails";
import RedirectButton from "@/components/RedirectButton";
import { useFavorites } from "@/stores/useFavorites";
import { Card, Container, Grid, Typography } from "@mui/material";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <Container
      maxWidth='lg'
      sx={{ pl: "1rem !important", pr: "1rem !important", mt: 3, mb: 2 }}
    >
      {favorites ? (
        <>
          <Typography gutterBottom variant='h5' component='div' sx={{ pb: 2 }}>
            <RedirectButton path={"/"} />
            Your Favorites Pokémon
          </Typography>
          <Grid container spacing={2}>
            {favorites.map((pokemon) => (
              <Grid item xs={12} sm={6} lg={4} key={pokemon.id}>
                <Card sx={{ pb: 4 }}>
                  <PokemonDetails pokemon={pokemon} />
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <>
          <Typography gutterBottom variant='h5' component='div' sx={{ pb: 2 }}>
            <RedirectButton path={"/"} />
            You don't have saved favorites
          </Typography>
        </>
      )}
    </Container>
  );
}
