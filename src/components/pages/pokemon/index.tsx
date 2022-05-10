import React from 'react'

import { useNavigate, useSearchParams } from 'react-router-dom'
import ArrowBack from '@mui/icons-material/ArrowBack'
import Image from '@mui/icons-material/Image'
import Button from '@mui/material/Button'

import SectoinTitle from 'components/atoms/section-title'
import ScreenLoader from 'components/molecules/screen-loader'
import MainTemplate from 'components/templates/main'
import usePokemon from 'hooks/usePokemon'
import usePokemonFirstForm from 'hooks/usePokemonFirstForm'

import Abilties from './components/abilities'
import Moves from './components/moves'
import * as S from './styled'
import FirstForm from './components/first-form'
import LoaderAnimation from 'components/atoms/loader-animation'

const Pokemon = (): JSX.Element => {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const externalUrl = params?.get('external-url') || ''

  if (!externalUrl) {
    navigate('/')
  }

  const { data: pokemon, error: pokemonError, isFetching: isFetchingPokemon } = usePokemon(externalUrl)
  const { data: pokemonFirstForm, isFetching: isFetchingFirstFormPokemon } = usePokemonFirstForm(
    pokemon?.forms?.[0].url
  )

  if (isFetchingPokemon) {
    return (
      <MainTemplate>
        <S.Wrapper>
          <S.BoardWrapper>
            <ScreenLoader />
          </S.BoardWrapper>
        </S.Wrapper>
      </MainTemplate>
    )
  }

  if (!pokemon || pokemonError) {
    return (
      <MainTemplate>
        <S.Wrapper>
          <S.BoardWrapper>
            <S.Item>
              <Button onClick={() => navigate('/')} startIcon={<ArrowBack />} variant='contained'>
                Go back
              </Button>
            </S.Item>
            <S.Item>AWESOME! You are found a new Pokemon! because... we have not it in the DB</S.Item>
          </S.BoardWrapper>
        </S.Wrapper>
      </MainTemplate>
    )
  }

  return (
    <MainTemplate>
      <S.Wrapper>
        <S.BoardWrapper>
          <S.Item>
            <Button onClick={() => navigate('/')} startIcon={<ArrowBack />} variant='contained'>
              Go back
            </Button>
          </S.Item>
          <S.Item>
            {pokemon.sprites.back_default ? <img loading='lazy' src={pokemon.sprites.back_default}></img> : <Image />}
          </S.Item>
          <S.Item>
            <SectoinTitle>Name</SectoinTitle>
            {pokemon.name}
          </S.Item>
          <S.Item>
            <Abilties abilities={pokemon.abilities} />
          </S.Item>
          <S.Item>
            <Moves moves={pokemon.moves} />
          </S.Item>
          {isFetchingFirstFormPokemon && !pokemonFirstForm ? (
            <LoaderAnimation />
          ) : (
            <S.Item>
              <FirstForm firstForm={pokemonFirstForm} />
            </S.Item>
          )}
        </S.BoardWrapper>
      </S.Wrapper>
    </MainTemplate>
  )
}

export default Pokemon
