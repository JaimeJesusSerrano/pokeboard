import axios from 'axios'
import { useQuery } from 'react-query'

const usePokemonFirstForm = (url = '') => {
  return useQuery(
    'pokemonFirstForm',
    () =>
      axios.get(url).then(response => {
        return response.data
      }),
    {
      enabled: !!url,
      refetchOnWindowFocus: false,
    }
  )
}

export default usePokemonFirstForm
