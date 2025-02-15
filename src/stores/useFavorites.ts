import { Pokemon } from "@/types/pokemon";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoriteStore {
  favorites: Pokemon[];
  addFavorite: (pokemon: Pokemon) => void;
  removeFavorite: (pokemonId: number) => void;
}

export const useFavorites = create<FavoriteStore>()(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (pokemon: Pokemon) =>
        set((state) => {
          if (state.favorites.some((fav) => fav.id === pokemon.id)) {
            return state;
          }
          return {
            favorites: [...state.favorites, pokemon],
          };
        }),
      removeFavorite: (pokemonId) =>
        set((state) => ({
          favorites: state.favorites.filter((pokemon) => pokemon.id !== pokemonId),
        })),
    }),
    { name: "favorites-storage" }
  )
);