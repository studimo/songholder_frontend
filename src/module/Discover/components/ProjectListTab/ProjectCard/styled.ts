import { Container } from '@mui/material'
import { styled } from '@mui/system'

export const ProjectMainCard = styled(Container)(() => ({
  display: 'flex',
  position: 'relative',
  width: '300px',
  height: '100px',
  flexDirection: 'row',
  alignItems: 'center',
  overflow: 'hidden',
  backgroundColor: 'yellow',
  boxShadow: '10px 10px 35px -3px rgba(0, 0, 0, 0.08)',
  borderRadius: '5px',
}))
