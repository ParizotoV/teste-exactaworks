import {
  Box,
  InputLabel as MUIInputLabel,
  Select as MUISelect,
  styled,
  Typography
} from '@mui/material'

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

export const Select = styled(MUISelect)(({ theme, error }) => ({
  '&.MuiOutlinedInput-root': {
    width: '100%',
    'label + &': {
      marginTop: theme.spacing(-1)
    },
    '&.Mui-focused fieldset': {
      marginTop: '1px',
      border: `2px solid ${theme.palette.primary.main}`,
      borderRadius: 0
    },
    '& .MuiInputBase-input': {
      borderRadius: 0,
      position: 'relative',
      backgroundColor: '#fcfcfb',
      border: `2px solid ${theme.palette.grey[900]}`,
      fontSize: 16,
      padding: '10px 12px',
      '&:focus': {
        color: error ? theme.palette.error.main : theme.palette.primary.main,
        borderColor: error
          ? theme.palette.error.main
          : theme.palette.primary.main
      }
    }
  }
}))

export const InputLabel = styled(MUIInputLabel)(() => ({
  fontSize: '14pt',
  fontWeight: 'bold'
}))

export const InputError = styled(Typography)(() => ({
  fontSize: '8pt',
  fontWeight: 'bold'
}))
