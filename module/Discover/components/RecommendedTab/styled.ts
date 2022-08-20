import { Container, Divider, Stack, Typography } from '@mui/material'
import { styled } from '@mui/system'

export const RecommendedTabContainer = styled('div')(() => ({
  width: '100vw',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  gap: '8px',
  // backgroundColor: 'yellow',
}))
export const RecommendedCardContainer = styled('div')(() => ({
  width: '100vw',
  height: 'auto',
  display: 'flex',
  flexDirection: 'row',
  overflowX: 'auto',
  gap: '15px',
  paddingLeft: '20px',
  paddingRight: '20px',
}))

export const RecommendedText = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '20px',

  color: '#0E5379',

  marginLeft: 'auto',
  marginRight: 'auto',
}))
