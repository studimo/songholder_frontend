import { Typography } from '@mui/material'
import { styled } from '@mui/system'

export const LikeShowContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '130px',
  height: 'auto',
  alignItems: 'center',
  justifyContent: 'center',
}))
export const TypographyWithFont = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '22px',
  lineHeight: '16px',
  color: '#615190',
}))
