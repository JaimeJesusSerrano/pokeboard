import { useQuery } from 'react-query'

import {
  getAll as getAllPokemonList,
  transformApiDataToModel as transformApiDataToModelPokemonList,
} from 'services/pokemon'

const usePokemonList = (searchValue = '') => {
  return useQuery(
    'pokemonList',
    () => getAllPokemonList().then(response => (response.data = transformApiDataToModelPokemonList(response.data))),
    {
      staleTime: 60000, // keep cached 1 minute
      select: pokemonList => {
        return {
          ...pokemonList,
          results: pokemonList.results.filter(pokemonListItem => pokemonListItem.name.includes(searchValue)),
        }
      },
    }
  )
}

export default usePokemonList
