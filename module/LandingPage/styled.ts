import { Container, Divider } from '@mui/material'
import { styled } from '@mui/system'

export const RootContainer = styled(Container)(() => ({
  background:
    'radial-gradient(61.36% 61.36% at 32.88% 35.63%, #E9E9E9 0%, #F8F3FD 100%)',
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'hidden',
}))
