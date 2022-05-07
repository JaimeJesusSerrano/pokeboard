import React from 'react'

import SectoinTitle from 'components/atoms/section-title'
import { PokemonAbility } from 'types/api/Pokemon'

import * as S from './styled'

interface ParamTypes {
  abilities: PokemonAbility[]
}

const Abilities = ({ abilities }: ParamTypes): JSX.Element => {
  const abitiliesEnabled = abilities.filter(ability => !ability.is_hidden)

  return (
    <S.Wrapper>
      <SectoinTitle>Abilities</SectoinTitle>
      <S.AbilitiesWrapper>
        {abitiliesEnabled.map(ability => (
          <div key={ability.ability.name}>{ability.ability.name}</div>
        ))}
      </S.AbilitiesWrapper>
    </S.Wrapper>
  )
}

export default Abilities
