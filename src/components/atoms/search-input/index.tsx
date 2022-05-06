import React, { ChangeEventHandler } from 'react'

import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

interface ParamTypes {
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  value: string
}

const SearchInput = ({ onChange, value }: ParamTypes): JSX.Element => {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <TextField
        variant='standard'
        value={value}
        onChange={onChange}
        placeholder='Search…'
        InputProps={{
          startAdornment: <SearchIcon fontSize='small' />,
        }}
        sx={{
          width: {
            xs: 1,
            sm: 'auto',
          },
          m: theme => theme.spacing(1, 0.5, 1.5),
          '& .MuiSvgIcon-root': {
            mr: 0.5,
          },
          '& .MuiInput-underline:before': {
            borderBottom: 1,
            borderColor: 'divider',
          },
        }}
      />
    </Box>
  )
}

export default SearchInput
