import { Container, Divider, Stack, Typography } from '@mui/material'
import { styled } from '@mui/system'

export const OrText = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  lineHeight: '35px',
  color: 'White',
  fontSize: '16px',
  fontWeight: 300,
  marginTop: '-19px',
  marginLeft: '14px',
  marginRight: '14px',
}))
export const OrDividerContainer = styled(Stack)(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  marginTop: '30px',
}))
