import Image from 'next/image';
import { SimplePokemon } from '../interfaces/simple-pokemon';
import { PokemonCard } from './PokemonCard';

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    // <div className="grid grid-cols-4 gap-4 mt-4">
    //   {pokemons.map(pokemon => (
    //     <div key={pokemon.id} className="flex flex-col items-center">
    //       <Image
    //         key={pokemon.id}
    //         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
    //         width={100}
    //         height={100}
    //         alt={pokemon.name}
    //       />
    //       <h4>{pokemon.name}</h4>
    //     </div>
    //   ))}
    // </div>
    <div className="grid grid-cols-4 gap-4 mt-4">
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} />
      ))}
    </div>
  );
};
