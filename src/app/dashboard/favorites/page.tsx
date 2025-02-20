'use client';

import { useAppSelector } from '@/store';
import { PokemonGrid, PokemonsResponse, SimplePokemon } from '../../../pokemons';

export default function FavoritesPage() {
  const pokemonState = useAppSelector(state => state.pokemon);
  const favoritesPokemon = Object.values(pokemonState);

  return (
    <div className="">
      <span className="text-5xl my-2">
        Listado de Pokémons <small>favoritos</small>
      </span>

      <PokemonGrid pokemons={favoritesPokemon} />
    </div>
  );
}
