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
    }
  )
}

export default usePokemon
