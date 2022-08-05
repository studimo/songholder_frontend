import { Container, Divider, Typography } from '@mui/material'
import { styled } from '@mui/system'

export const BelowSigninBoxContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '400px',
  height: 'auto',
}))

export const TypographyWithFont = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '22px',
  lineHeight: '35px',
  color: 'White',
}))
