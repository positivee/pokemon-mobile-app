import { createSlice } from "@reduxjs/toolkit";

const likedPokemonsSlice = createSlice({
  name: "likedPokemons",
  initialState: [] as string[],
  reducers: {
    toggleLikedPokemon: (state, action) => {
      if (!state.includes(action.payload)) return [...state, action.payload];
      else return state.filter((name) => name !== action.payload);
    },
  },
});

export const { toggleLikedPokemon } = likedPokemonsSlice.actions;
export default likedPokemonsSlice.reducer;
