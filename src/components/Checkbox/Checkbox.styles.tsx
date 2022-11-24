import { Box, styled } from '@mui/material'

import { CheckboxProps } from '.'

export const Checkbox = styled(Box)<CheckboxProps>(({ theme, isActive }) => ({
  display: 'flex',
  justifyContent: 'center',
  border: `2px solid ${
    isActive ? theme.palette.primary.main : theme.palette.grey[900]
  }`,
  color: isActive ? theme.palette.primary.main : theme.palette.grey[900],
  padding: '10px 12px'
}))
