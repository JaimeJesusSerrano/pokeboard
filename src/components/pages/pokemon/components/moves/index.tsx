import React, { useCallback, useState } from 'react'

import DeleteIcon from '@mui/icons-material/Delete'

import SectoinTitle from 'components/atoms/section-title'
import { PokemonMove } from 'types/api/Pokemon'

import * as S from './styled'

interface ParamTypes {
  moves: PokemonMove[]
}

const getIdFromUrlRegex = new RegExp(/^.*\/(\d+)\/$/g)

const Moves = ({ moves }: ParamTypes): JSX.Element => {
  const getMovesSorted = useCallback(
    (moves: PokemonMove[]) => {
      return moves.sort((moveA, moveB) => {
        const moveAMatch = getIdFromUrlRegex.exec(moveA.move.url)
        const moveAId = moveAMatch?.[1] || 0

        const moveBMatch = getIdFromUrlRegex.exec(moveB.move.url)
        const moveBId = moveBMatch?.[1] || 0

        if (moveAId < moveBId) {
          return -1
        } else if (moveAId > moveBId) {
          return 1
        }

        return 0
      })
    },
    [moves]
  )

  const [currentMovesSorted, setCurrentMovesSorted] = useState(getMovesSorted(moves))

  const onDeleteMove = (urlToDelete: string) => {
    setCurrentMovesSorted(currentMovesSorted.filter(currentMoveSorted => currentMoveSorted.move.url !== urlToDelete))
  }

  return (
    <S.Wrapper>
      <SectoinTitle>Moves</SectoinTitle>
      <S.MovesWrapper>
        {currentMovesSorted.map(moves => (
          <S.MoveWrapper key={moves.move.name}>
            <S.DeleteWrapper onClick={() => onDeleteMove(moves.move.url)}>
              <DeleteIcon />
            </S.DeleteWrapper>
            {moves.move.name}
          </S.MoveWrapper>
        ))}
      </S.MovesWrapper>
    </S.Wrapper>
  )
}

export default Moves
