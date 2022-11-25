import { Box, styled } from '@mui/material'

import { CheckboxProps } from '.'

export const Checkbox = styled(Box)<CheckboxProps>(
  ({ theme, isActive, error }) => ({
    display: 'flex',
    cursor: 'pointer',
    justifyContent: 'center',
    border: `2px solid ${
      error
        ? theme.palette.error.main
        : isActive
        ? theme.palette.primary.main
        : theme.palette.grey[900]
    }`,
    color: error
      ? theme.palette.error.main
      : isActive
      ? theme.palette.primary.main
      : theme.palette.grey[900],
    padding: '10px 12px'
  })
)
