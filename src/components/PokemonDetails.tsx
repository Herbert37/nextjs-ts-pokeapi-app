"use client";

import { Pokemon } from "@/types/pokemon";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

interface PokemonDetailsProps {
  pokemon: Pokemon;
}

export default function PokemonDetails({ pokemon }: PokemonDetailsProps) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <Typography sx={{ mt: 2 }} gutterBottom variant='h5' component='div'>
          {pokemon.name.toUpperCase()}
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
          }}
        >
          <Typography gutterBottom component='div'>
            <b>Type:</b> {pokemon.types.map((t) => t.type.name).join(", ")}
          </Typography>
          <Typography gutterBottom component='div'>
            <b>Abilities:</b>{" "}
            {pokemon.abilities.map((a) => a.ability.name).join(", ")}
          </Typography>
        </Box>
        <Typography sx={{ mt: 1 }} gutterBottom component='div'>
          <b>Stats:</b>
        </Typography>
        <Grid container spacing={2}>
          {pokemon.stats.map((s) => (
            <Grid item xs={12} sm={12} key={s.stat.name}>
              <Card>
                <CardContent sx={{ padding: "0.5rem !important" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "left",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <Typography component='div'>
                      {s.stat.name}: {s.base_stat}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    </Container>
  );
}
