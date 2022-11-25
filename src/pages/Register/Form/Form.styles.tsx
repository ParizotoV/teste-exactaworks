import { Box, styled } from '@mui/material'
import Button from 'components/Button'

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '70%',
  height: 'calc(100% - 72px)',
  paddingTop: '72px'
}))

export const CancelButton = styled(Button)(({ theme }) => ({
  background: theme.palette.grey[900],
  marginLeft: '12px',
  '&:hover': {
    background: theme.palette.grey[900]
  }
}))
