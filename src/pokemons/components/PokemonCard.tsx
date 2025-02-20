'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SimplePokemon } from '../interfaces/simple-pokemon';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../../store/index';
import { toogleFavorite } from '@/store/pokemons/pokemonsSlice';

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const pokemonState = useAppSelector(state => state.pokemon);
  const dispatch = useAppDispatch();
  const isFavorite = pokemonState[pokemon.id.toString()] ? true : false;
  const onToogle = () => {
    dispatch(toogleFavorite(pokemon));
  };

  return (
    <div className="mx-auto right-0 mt-2">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt={pokemon.name}
            priority={false}
          />

          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {pokemon.name}
          </p>
          <div className="mt-5">
            <Link
              href={`pokemons/${pokemon.name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Ver más
            </Link>
          </div>
        </div>
        <div className="border-b">
          <button
            onClick={onToogle}
            className="items-center px-4 py-2 hover:bg-gray-100 flex"
          >
            <div className="text-red-600">
              {isFavorite ? <IoHeart /> : <IoHeartOutline />}
            </div>
            <div className="pl-3 p-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavorite ? 'Es favorito' : 'No es favorito'}
              </p>
              {/* <p className="text-xs text-gray-500">View your campaigns</p> */}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
