import { Typography } from '@mui/material'
import { styled } from '@mui/system'

export const TabContainer = styled('div')(() => ({
  desplay: 'flex',
  width: '100vw',
  paddingLeft: '50px',
  flexDirection: 'column',
}))

export const DescriptionText = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  lineHeight: '20px',
  color: '#54729C',
  fontWeight: 300,
  fontSize: '12px',

  marginLeft: '25px',
  width: '75%',
  wordBreak: 'break-word',

  marginBottom: '10px',
}))
