import { Container, Divider } from '@mui/material'
import { styled } from '@mui/system'

export const RootContainer = styled(Container)(() => ({
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
