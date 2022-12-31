import Link from 'next/link'

// ssg = statick site generation
const Pokemon = ({ pokemon }) => {
  const id = pokemon.url.split('/').filter(x=>x).pop()
  return (
    <li><Link href={`pokemones/${id}`}>{pokemon.name}</Link></li>
  ) 
}


export default function Pokemones({ pokemones }) {
  return (
    <div>
      <h1>Pokemones</h1>
      <ul>
        {pokemones.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.name} />)}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {// getStaticProps permite indicarle a next que esta apgina se generara de manera estatica cuando se genere npm run build. Genera una pagina de html que es lo que se le servira al usuario final en ves del index.
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await response.json()

  return {
    props: {pokemones: data.results}
  }
}