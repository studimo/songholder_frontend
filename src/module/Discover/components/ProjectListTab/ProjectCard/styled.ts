import { Container, Typography } from '@mui/material'
import { styled } from '@mui/system'

export const ProjectMainCard = styled('div')(() => ({
  display: 'flex',
  position: 'relative',
  width: '100%',
  maxWidth: '430px',
  height: '100px',
  flexDirection: 'row',
  alignItems: 'center',
  overflow: 'hidden',
  // backgroundColor: 'yellow',
  boxShadow: '10px 10px 35px -3px rgba(0, 0, 0, 0.08)',
  borderRadius: '5px',
  padding: '5px 0px',
  marginLeft: 'auto',
  marginRight: 'auto',
}))
export const TypographyWithGradientFont = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '11px',
  lineHeight: '20px',
  display: 'flex',
  position: 'absolute',
  right: '8px',
  bottom: '0px',
  padding: '8px',
  background: 'linear-gradient(90deg, #927EBC 12.84%, #34A0B8 86.49%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}))
