import FloatingButton from "@/components/FloatingButton";
import PokemonList from "@/components/PokemonList";
import RedirectButton from "@/components/RedirectButton";
import { getPokemonsByRegion } from "@/services/pokeApi";
import { Container, Grid, Typography } from "@mui/material";

interface RegionPageProps {
  params: { name: string };
}

export default async function Region({ params }: RegionPageProps) {
  const { name } = await params;
  let pokemons = [];
  let errorMessage = "";
  try {
    pokemons = await getPokemonsByRegion(name);
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    errorMessage = `Region Not Found: ${name.toUpperCase()}.`;
  }
  return (
    <Container
      maxWidth='lg'
      sx={{ pl: "1rem !important", pr: "1rem !important", mt: 3, mb: 2 }}
    >
      {errorMessage ? (
        <Typography gutterBottom variant='h5' component='div' sx={{ pb: 2 }}>
          <RedirectButton path={"/"} />
          {errorMessage}
        </Typography>
      ) : (
        <>
          <Typography gutterBottom variant='h5' component='div' sx={{ pb: 2 }}>
            <RedirectButton path={"/"} />
            Pokémon from {name.toUpperCase()} region
          </Typography>
          <Grid container spacing={2}>
            {pokemons.map((pokemon) => (
              <PokemonList
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
              />
            ))}
          </Grid>
        </>
      )}
      <FloatingButton />
    </Container>
  );
}
