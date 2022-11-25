import { Card as MUICard, styled } from '@mui/material'
import { Button as StyledButton } from 'components/Button'

export const Card = styled(MUICard)(() => ({
  width: '100%',
  borderRadius: '10px',
  marginTop: '28px',
  boxShadow:
    'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'
}))

export const Button = styled(StyledButton)(({ theme }) => ({
  borderRadius: '10px',
  backgroundColor: theme.palette.info.dark,
  '&:hover': {
    backgroundColor: theme.palette.info.dark
  }
}))
