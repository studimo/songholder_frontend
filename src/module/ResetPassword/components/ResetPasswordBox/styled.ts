import { Box, Container, Divider, Typography } from '@mui/material'
import { styled } from '@mui/system'

export const PasswordResetBoxContainer = styled(Box)(() => ({
  background: 'rgba(255, 255, 255, 0.15)',
  boxShadow: '5px 5px 40px rgba(0, 0, 0, 0.25)',
  backdropFilter: 'blur(15px)',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  mb: '80px',
  mt: '-50px',
  height: 'auto',
  padding: '50px',
  paddingBottom: '30px',
}))
export const TypographyWithFont = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '22px',
  lineHeight: '35px',
  color: 'White',
}))
