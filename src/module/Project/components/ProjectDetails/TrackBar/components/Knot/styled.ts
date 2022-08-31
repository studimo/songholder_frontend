import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'

export const StyledKnotImage = styled('div')(() => ({
  transform: 'translate(-50%, 0%)',
  zIndex: 2,
}))

export const KnotContainer = styled('div')(() => ({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  marginTop: '-5px',
}))
export const KnotText = styled(Typography)(() => ({
  zIndex: 2,
  transform: 'translate(-50%, 0%)',
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '9px',
  lineHeight: '14px',

  background: 'linear-gradient(90deg, #927EBC 12.84%, #34A0B8 86.49%)',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginTop: '2px',
}))
