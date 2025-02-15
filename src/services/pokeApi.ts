import axios from "axios";
import { Pokemon, Region, NamedAPIResource } from "@/types/pokemon";
import { API_URL } from "@/utils/constants";

export const getRegions = async (): Promise<Region[]> => {
  const { data } = await axios.get<{ results: Region[] }>(`${API_URL}/region`);
  return data.results;
};

export const getPokemonsByRegion = async (
  regionName: string
): Promise<(NamedAPIResource & { id: number })[]> => {
  const { data } = await axios.get<{ pokedexes: NamedAPIResource[] }>(
    `${API_URL}/region/${regionName}`
  );
  const { data: pokedex } = await axios.get<{
    pokemon_entries: {
      entry_number: number;
      pokemon_species: NamedAPIResource;
    }[];
  }>(data.pokedexes[0].url);

  return pokedex.pokemon_entries.map((entry) => ({
    ...entry.pokemon_species,
    id: entry.entry_number,
  }));
};

export const getPokemonDetails = async (name: string): Promise<Pokemon> => {
  const { data } = await axios.get<Pokemon>(`${API_URL}/pokemon/${name}`);
  return data;
};
