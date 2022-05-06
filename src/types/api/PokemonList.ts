import PokemonListItem from './PokemonListItem'

interface PokemonList {
  count: number
  next?: string
  previous?: string
  results: PokemonListItem[]
}

export default PokemonList
