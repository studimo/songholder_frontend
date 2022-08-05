import { Typography } from '@mui/material'
import { styled } from '@mui/system'

export const TimelineDateCardContainer = styled('div')(() => ({
  display: 'block',
  flexDirection: 'column',
  width: '50px',
  height: 'auto',
}))
export const CircleDate = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  justifyContent: 'center',
}))
export const DayDateText = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '18px',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',

  marginLeft: 'auto',
  marginRight: 'auto',
}))
export const MonthDateText = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 300,
  fontSize: '12px',
  lineHeight: '10px',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',

  marginLeft: 'auto',
  marginRight: 'auto',
}))

export const LineDate = styled('div')(() => ({
  width: '2px',
  height: 'calc(100% - 50px)',
  backgroundColor: '#45C1C1',
  marginLeft: 'auto',
  marginRight: 'auto',
}))
