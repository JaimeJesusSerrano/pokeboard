import { useQuery } from 'react-query'

import { getByUrl as getByUrlPokemon } from 'services/pokemon'

const usePokemon = (url = '') => {
  return useQuery(
    'pokemon',
    () =>
      getByUrlPokemon(url).then(response => {
        return response.data
      }),
    {
      refetchOnWindowFocus: false,
      // staleTime: 60000, // keep cached 1 minute
      // select: pokemonList => {
      //   return {
      //     ...pokemonList,
      //     results: pokemonList.results.filter(pokemonListItem => pokemonListItem.name.includes(searchValue)),
      //   }
      // },
    }
  )
}

export default usePokemon
