import { Pokemon } from "@/types/pokemon";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoriteStore {
  favorites: Pokemon[];
  addFavorite: (pokemon: Pokemon) => void;
  removeFavorite: (pokemonName: string) => void;
}

export const useFavorites = create<FavoriteStore>()(
  persist<FavoriteStore>(
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
      removeFavorite: (pokemonName: string) =>
        set((state) => ({
          favorites: state.favorites.filter(
            (pokemon) => pokemon.name !== pokemonName
          ),
        })),
    }),
    { name: "favorites-storage" }
  )
);
