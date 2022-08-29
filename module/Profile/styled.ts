import { Container, Divider } from '@mui/material'
import { styled } from '@mui/system'

export const RootContainer = styled(Container)(() => ({
  backgroundColor: 'white',
  width: 'auto',
  // height: '200px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'hidden',

  paddingTop: '55px',
  gap: '20px',
}))
