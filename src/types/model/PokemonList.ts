import PokemonListItem from './PokemonListItem'

export interface PokemonList {
  count: number
  next?: string
  previous?: string
  results: PokemonListItem[]
}

export default PokemonList
