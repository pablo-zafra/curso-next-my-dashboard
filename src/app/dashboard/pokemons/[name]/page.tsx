import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Move, Type } from '@/pokemons/interfaces/pokemon';
import { PokemonsResponse, SimplePokemon } from '@/pokemons';

interface Props {
  params: Promise<{ name: string }>;
}

//! Build time
export async function generateStaticParams() {
  const limit = 6;
  const offset = 0;

  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then(res => res.json());

  const pokemons = data.results.map(({ name }) => ({
    name: name,
  }));

  return pokemons;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { name } = await params;
    const pokemon = await getPokemon(name);
    return {
      title: pokemon.name,
      description: `This is the page for the pokemon ${pokemon.name}`,
    };
  } catch (error) {
    return {
      title: 'Pokemon not found',
      description: 'The pokemon you are looking for does not exist',
    };
  }
}

const getPokemon = async (name: string) => {
  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      next: {
        revalidate: 60 * 60 * 24,
      },
    }).then(res => res.json());

    console.log(`Se cargó: ${pokemon.name}`);

    return pokemon;
  } catch (error) {
    console.error(error);
    notFound();
  }
};

export default async function PokemonPage({ params }: Props) {
  const { name } = await params;
  const pokemon = await getPokemon(name);

  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={pokemon.sprites.other?.dream_world.front_default ?? ''}
              width={150}
              height={150}
              alt={`Imagen del pokemon ${pokemon.name}`}
              className="w-40 h-auto mb-5"
              priority={true}
            />

            <div className="flex flex-wrap">
              {pokemon.moves.map((move: Move) => (
                <p key={move.move.name} className="mr-2 capitalize">
                  {move.move.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Types</p>
            <div className="text-base font-medium text-navy-700 flex">
              {pokemon.types.map((type: Type) => (
                <p key={type.slot} className="mr-2 capitalize">
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Peso</p>
            <span className="text-base font-medium text-navy-700 flex">{pokemon.weight}</span>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Regular Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Shiny Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
