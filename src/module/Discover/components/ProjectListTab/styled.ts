import { Container, Divider, Stack, Typography } from '@mui/material'
import { styled } from '@mui/system'

export const ProjectListTabContainer = styled('div')(() => ({
  width: '100vw',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  gap: '8px',
  // backgroundColor: 'yellow',
}))

export const ProjectListText = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '20px',

  color: '#0E5379',

  marginLeft: 'auto',
  marginRight: 'auto',
}))
