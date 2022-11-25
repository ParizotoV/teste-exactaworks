import {
  Box,
  InputBase,
  InputLabel as MUIInputLabel,
  styled,
  Typography
} from '@mui/material'

import { InputProps } from './TextField.interface'

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  '& .label-error': {
    color: theme.palette.error.main
  },
  '& .label': {
    color: theme.palette.grey[900]
  },
  '& .label-focus': {
    color: theme.palette.primary.main
  }
}))

export const Input = styled(InputBase)<InputProps>(
  ({ theme, error, fullWidth }) => ({
    'label + &': {
      marginTop: theme.spacing(-1)
    },
    '& .MuiInputBase-input': {
      color: error ? theme.palette.error.main : theme.palette.grey[900],
      borderRadius: 0,
      position: 'relative',
      border: `2px solid ${
        error ? theme.palette.error.main : theme.palette.grey[900]
      }`,
      fontSize: 16,
      width: fullWidth ? '100%' : 'auto',
      padding: '10px 12px',
      '&:focus': {
        color: error ? theme.palette.error.main : theme.palette.primary.main,
        borderColor: error
          ? theme.palette.error.main
          : theme.palette.primary.main
      }
    }
  })
)

export const InputLabel = styled(MUIInputLabel)(() => ({
  fontSize: '14pt',
  fontWeight: 'bold'
}))

export const InputError = styled(Typography)(() => ({
  fontSize: '8pt',
  fontWeight: 'bold'
}))
