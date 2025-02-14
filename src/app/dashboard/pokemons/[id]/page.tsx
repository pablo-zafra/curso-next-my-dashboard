import { Metadata } from 'next';
interface Props {
  params: { id: string };
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { name } = await getPokemon(params.id);

  return {
    title: name,
    description: `This is the page for the pokemon ${name}`,
  };
};

const getPokemon = async (id: string) => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache', // TODO: cambiar esto a futuro
  }).then(res => res.json());

  console.log(pokemon);

  return pokemon;
};

export default async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemon(params.id);

  return (
    <div>
      <h1>Pokemon {params.id}</h1>
      <div>Página de {pokemon.name}</div>
    </div>
  );
}
