import { Typography } from '@mui/material'
import { styled } from '@mui/system'

export const HeaderTabContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100vw',
  height: 'auto',
  paddingLeft: '30px',
  paddingRight: '30px',
  paddingTop: '20px',
}))
export const TypographyWithFont = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '22px',
  // color: '#335380',
}))
