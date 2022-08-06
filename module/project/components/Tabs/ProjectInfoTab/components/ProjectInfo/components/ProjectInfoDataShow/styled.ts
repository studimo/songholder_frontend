import { Typography } from '@mui/material'
import { styled } from '@mui/system'

export const DataShowContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  height: 'auto',
  width: '100%',
}))
export const DataShowText = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  lineHeight: '20px',
  color: '#54729C',
}))
