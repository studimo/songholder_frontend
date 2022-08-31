import { Typography } from '@mui/material'
import { styled } from '@mui/system'

export const TabContainer = styled('div')(() => ({
  width: '100vw',
  paddingLeft: '50px',
  paddingRight: '50px',
  paddingTop: '5px',
  marginBottom: '20px',
}))

export const HeaderTabText = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '22px',
  color: '#335380',
  textTransform: 'none',
  paddingLeft: '8px',
}))

export const OptionsContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 'auto',
  paddingLeft: '15px',
  gap: '14px',
  marginTop: '5px',
}))
