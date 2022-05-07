export interface PokemonAbility {
  ability: PokemonAbilityData
  is_hidden: boolean
  slot: number
}

export interface PokemonAbilityData {
  name: string
  url: string
}

export interface PokemonForms {
  name: string
  url: string
}

export interface PokemonMove {
  move: PokemonMoveData
  version_group_details: unknown[]
}

export interface PokemonMoveData {
  name: string
  url: string
}

export interface PokemonSprites {
  [key: string]: string
}

export interface Pokemon {
  abilities: PokemonAbility[]
  forms: PokemonForms[]
  moves: PokemonMove[]
  name: string
  sprites: PokemonSprites
}

export default Pokemon
