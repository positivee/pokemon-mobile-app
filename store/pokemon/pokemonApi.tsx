import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  PokemonFetched,
  PokemonInterface,
} from "@/intefaces/pokemonInterfaces";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getAllPokemons: builder.query<PokemonFetched, number>({
      query: (offset) => `/pokemon/?&offset=${offset}=&limit=20`,
    }),
    getPokemonDetails: builder.query<PokemonInterface, string>({
      query: (name) => `/pokemon/${name}`,
    }),
  }),
});
export const { useGetAllPokemonsQuery, useGetPokemonDetailsQuery } = pokemonApi;
