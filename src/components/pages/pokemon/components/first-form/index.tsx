import React from 'react'

import SectoinTitle from 'components/atoms/section-title'
import { PokemonFirstForm } from 'types/api/Pokemon'

import * as S from './styled'

interface ParamTypes {
  firstForm: PokemonFirstForm
}

const FirstForm = ({ firstForm }: ParamTypes): JSX.Element => {
  return (
    <S.Wrapper>
      <SectoinTitle>First form</SectoinTitle>
      <ul>
        <li>Id: {firstForm.id}</li>
        <li>Is battle only: {firstForm.is_battle_only ? 'Yes' : 'No'}</li>
      </ul>
    </S.Wrapper>
  )
}

export default FirstForm
