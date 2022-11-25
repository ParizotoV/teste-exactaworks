import { Button as MUIButton, styled } from '@mui/material'

import { ButtonProps } from '.'

export const Button = styled(MUIButton)<ButtonProps>(
  ({ theme, width, fullWidth, disabled }) => ({
    background: theme.palette.primary.main,
    borderRadius: 0,
    padding: '10px',
    color: '#FFF',
    width: fullWidth ? '100%' : width ? `${width}` : 'auto',
    '&:hover': {
      background: theme.palette.primary.main
    },
    '&:disabled': {
      background: theme.palette.grey[400]
    }
  })
)
