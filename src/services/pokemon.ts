import axios, { AxiosResponse } from 'axios'

import PokemonApi from 'types/api/Pokemon'
import PokemonListApi from 'types/api/PokemonList'
import PokemonListItemModel from 'types/model/PokemonListItem'
import PokemonListModel from 'types/model/PokemonList'

export const getAll = (): Promise<AxiosResponse<PokemonListApi>> => {
  return axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
}

export const getByUrl = (url: string): Promise<AxiosResponse<PokemonApi>> => {
  return axios.get(url)
}

export const transformGetAllApiDataToModel = (apiData: PokemonListApi): PokemonListModel => {
  const pokemonList: PokemonListItemModel[] = apiData.results.map(pokemon => {
    return { ...pokemon, id: pokemon.name }
  })

  return {
    count: apiData.count,
    next: apiData.next,
    previous: apiData.previous,
    results: pokemonList,
  }
}

export const transformGetByUrlApiDataToModel = (apiData: PokemonListApi): PokemonListModel => {
  const pokemonList: PokemonListItemModel[] = apiData.results.map(pokemon => {
    return { ...pokemon, id: pokemon.name }
  })

  return {
    count: apiData.count,
    next: apiData.next,
    previous: apiData.previous,
    results: pokemonList,
  }
}
