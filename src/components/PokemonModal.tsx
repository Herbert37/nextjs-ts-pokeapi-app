"use client";
import {
  Box,
  Button,
  Container,
  Modal,
  Typography,
  CircularProgress
} from "@mui/material";
import { getPokemonDetails } from "@/services/pokeApi";
import { Pokemon } from "@/types/pokemon";
import { useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import PokemonDetails from "./PokemonDetails";

interface PokemonDetailsModalProps {
  showModal: boolean;
  handleCloseModal: () => void;
  pokemonName: string;
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

export default function PokemonDetailsModal({
  showModal,
  handleCloseModal,
  pokemonName,
}: PokemonDetailsModalProps) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!pokemonName) return;
    setLoading(true);

    getPokemonDetails(pokemonName)
      .then((data) => setPokemon(data))
      .catch((err) => console.error("Error fetching Pokémon:", err))
      .finally(() => setLoading(false));
  }, [pokemonName]);

  return (
    <Modal
      open={showModal}
      onClose={handleCloseModal}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={modalStyle}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {loading ? (
            <CircularProgress />
          ) : pokemon ? (
            <PokemonDetails pokemon={pokemon} />
          ) : (
            <>
              <InfoIcon color='error' sx={{ fontSize: 40, mb: 2 }} />
              <Typography>Pokémon information could not be loaded.</Typography>
            </>
          )}
          <Button sx={{mt: 2}} color='secondary' onClick={handleCloseModal}>
            Close
          </Button>
        </Container>
      </Box>
    </Modal>
  );
}
