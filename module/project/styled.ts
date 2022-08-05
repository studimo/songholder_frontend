import { Container, Divider } from '@mui/material'
import { styled } from '@mui/system'

export const RootContainer = styled(Container)(() => ({
  // background:
  //   'radial-gradient(72.89% 72.89% at 24.52% 20.65%, #E4F6FC 0%, #F8F3FD 100%)',
  backgroundColor: 'white',
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'hidden',

  paddingTop: '60px',
  gap: '20px',
}))
export const HeaderDetailsContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  alignItems: 'center',
}))

export const TabsContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}))

export const TabDivider = styled(Divider)(() => ({
  marginLeft: '58px',
  marginRight: '50px',
  color: '#A2B6D2',
}))
