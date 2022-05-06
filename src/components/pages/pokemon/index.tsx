import React from 'react'

import { useNavigate, useSearchParams } from 'react-router-dom'
import ArrowBack from '@mui/icons-material/ArrowBack'
import Image from '@mui/icons-material/Image'
import Button from '@mui/material/Button'

import ScreenLoader from 'components/molecules/screen-loader'
import MainTemplate from 'components/templates/main'
import usePokemon from 'hooks/usePokemon'

import * as S from './styled'

const Pokemon = (): JSX.Element => {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const externalUrl = params?.get('external-url') || ''

  if (!externalUrl) {
    navigate('/')
  }

  const { data: pokemon, error, isFetching } = usePokemon(externalUrl)

  if (isFetching) {
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

  if (!pokemon || error) {
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
            {pokemon.data.sprites.back_default ? (
              <img loading='lazy' src={pokemon?.data.sprites.back_default}></img>
            ) : (
              <Image />
            )}
          </S.Item>
          <S.Item>{pokemon?.data.name}</S.Item>
          <S.Item>Abilities</S.Item>
          <S.Item>Moves.</S.Item>
          <S.Item>is_battle_only.</S.Item>
        </S.BoardWrapper>
      </S.Wrapper>
    </MainTemplate>
  )
}

export default Pokemon
