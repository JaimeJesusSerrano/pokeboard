import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'

import SearchInput from 'components/atoms/search-input'
import MainTemplate from 'components/templates/main'
import routes from 'config/routes'
import usePokemonList from 'hooks/usePokemonList'

import * as S from './styled'

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 250 },
  {
    field: 'url',
    headerName: 'Url',
    width: 500,
    renderCell: (params: GridRenderCellParams<string>) => {
      if (params.value == null) {
        return ''
      }

      return (
        <Link
          to={{
            pathname: `${routes.pokemon.path}`,
            search: `?external-url=${encodeURI(params.value)}`,
          }}
          replace
        >
          {params.value}
        </Link>
      )
    },
  },
]

const Pokeboard = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState('')
  const { error, data: pokemonList } = usePokemonList(searchValue)

  return (
    <MainTemplate>
      <S.Wrapper>
        <S.BoardWrapper>
          {error ? (
            <>
              {'Currently the Pokémon have vacations, try to find them later.'}
              <img
                loading='lazy'
                onError={(event: any) => (event.target.src = 'images/default-goal-image.jpg')}
                src='https://pm1.narvii.com/6119/1f4026601b24edf7bbe9da5dd6c9c89e01e25dc7_hq.jpg'
              ></img>
            </>
          ) : (
            <>
              <SearchInput onChange={event => setSearchValue(event.target.value)} value={searchValue} />
              <DataGrid
                columns={columns}
                initialState={{
                  sorting: {
                    sortModel: [
                      {
                        field: 'name',
                        sort: 'asc',
                      },
                    ],
                  },
                }}
                pageSize={15}
                rows={pokemonList?.results || []}
                rowsPerPageOptions={[15]}
              />
            </>
          )}
        </S.BoardWrapper>
      </S.Wrapper>
    </MainTemplate>
  )
}

export default Pokeboard
