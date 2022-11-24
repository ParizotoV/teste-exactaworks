import { Box, styled } from '@mui/material'

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '70%',
  height: 'calc(100% - 72px)',
  paddingTop: '72px'
}))
