"use client";

import { Card, CardHeader, Grid, IconButton } from "@mui/material";
import { useState } from "react";
import PokemonModal from "./PokemonModal";
import { useFavorites } from "@/stores/useFavorites";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { getPokemonDetails } from "@/services/pokeApi";

interface PokemonListProps {
  id: number;
  name: string;
}

export default function PokemonList({ id, name }: PokemonListProps) {
  const [showModal, setShowModal] = useState(false);
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);
  const isFavorite = favorites.some((fav) => fav.name === name);
  const handleFavoriteToggle = async () => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      if (!favorites.some((fav) => fav.id === id)) {
        const pokemonDetails = await getPokemonDetails(name);
        addFavorite(pokemonDetails);
      }
    }
  };
  return (
    <>
      <Grid item xs={12} sm={6} md={4} key={id}>
        <Card>
          <CardHeader
            title={`${id}. ${name}`}
            action={
              <>
                <IconButton
                  color={isFavorite ? "secondary" : "primary"}
                  onClick={handleFavoriteToggle}
                >
                  {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                <IconButton color={"secondary"} onClick={handleShowModal}>
                  <MoreVertOutlinedIcon />
                </IconButton>
              </>
            }
          />
        </Card>
      </Grid>
      <PokemonModal
        key={`${name}-modal`}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        pokemonName={name}
      />
    </>
  );
}
