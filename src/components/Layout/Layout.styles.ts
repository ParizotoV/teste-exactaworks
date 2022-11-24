import { styled } from '@mui/system'

export const Wrapper = styled('main')(({ theme }) => ({
  background: '#fff',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: 'calc(100% - 32PX)'
}))

export const Header = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  height: '48px',
  width: '100%',

  background: '#212121',
  color: '#fff',
  padding: '16px',
  fontSize: '11pt'
}))

export const SubHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '48px',
  width: '100%',

  background: '#3e3e3e',
  color: '#fff',
  padding: '16px',
  fontSize: '11pt'
}))

export const CircleDivider = styled('div')(({ theme }) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: '#2653a1',
  marginLeft: '6px',
  marginRight: '6px'
}))

export const Image = styled('img')(() => ({}))

export const Container = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  height: '100%'
}))
