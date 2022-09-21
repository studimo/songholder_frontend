import { Typography } from '@mui/material'
import { styled } from '@mui/system'

export const TypographyWithFont = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '15px',
  lineHeight: '20px',

  color: '#000000',
}))
export const ProjectCardDetailContainer = styled('div')(() => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  // backgroundColor: 'red',
  padding: '5px 10px',
  marginLeft: '100px',
  paddingRight: '30px',
  flexDirection: 'column',
}))
