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
