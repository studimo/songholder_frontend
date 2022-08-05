import { Typography } from '@mui/material'
import { styled } from '@mui/system'

export const TimelineCardDetailContainer = styled('div')(() => ({
  display: 'block',
  flexDirection: 'column',
  width: '100%',
  height: 'auto',
  wordBreak: 'break-all',
  paddingLeft: '14px',
  paddingTop: '5px',
}))
export const TitleTimelineText = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '15px',
  lineHeight: '24px',
}))

export const DescTimelineText = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 300,
  fontSize: '10px',
  lineHeight: '16px',
  paddingLeft: '10px',
}))
