import { SimplePokemon } from '@/pokemons';
import { createSlice } from '@reduxjs/toolkit';

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonsState = {
  '1': { id: '1', name: 'Bulbasaur' },
  '3': { id: '3', name: 'Venasaur' },
  '5': { id: '5', name: 'Charmander' }
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toogleFavorite: (state, action) => {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (state[id]) {
        delete state[id];
        return;
      }

      state[id] = pokemon;
    }
  }
});

export const { toogleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
