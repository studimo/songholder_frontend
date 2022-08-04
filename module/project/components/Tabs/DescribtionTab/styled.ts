import { Typography } from '@mui/material'
import { styled } from '@mui/system'

export const TabContainer = styled('div')(() => ({
  width: '100vw',
  paddingLeft: '50px',
  paddingRight: '50px',
}))

export const DescriptionText = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  lineHeight: '20px',
  color: '#54729C',
  fontWeight: 300,
  fontSize: '12px',

  paddingLeft: '25px',
  width: '100%',
  wordBreak: 'break-word',

  marginBottom: '10px',
}))
