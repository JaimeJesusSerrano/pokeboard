interface PokemonSprites {
  [key: string]: string
}

interface PokemonForms {
  name: string
  url: string
}

interface Pokemon {
  abilities: any
  forms: PokemonForms[]
  moves: any
  name: string
  sprites: PokemonSprites
}

export default Pokemon
