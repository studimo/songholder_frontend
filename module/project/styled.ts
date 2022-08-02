import { Container } from '@mui/material'
import { styled } from '@mui/system'

export const RootContainer = styled(Container)(() => ({
  background:
    'radial-gradient(72.89% 72.89% at 24.52% 20.65%, #E4F6FC 0%, #F8F3FD 100%)',
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'hidden',
  paddingTop: '55px',
  gap: '20px',
}))
