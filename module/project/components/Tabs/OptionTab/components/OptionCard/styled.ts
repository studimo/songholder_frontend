import { Typography } from '@mui/material'
import { styled } from '@mui/system'

export const OptionCardContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  height: 'auto',
  borderRadius: '5px',
  paddingLeft: '15px',
  paddingTop: '10px',
  paddingBottom: '10px',
  border: '2px solid #65B8B8',
  overflowX: 'auto',
  background: 'rgba(162, 182, 210, 0.1)',
}))

export const TitleOptionCardText = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '13px',
  lineHeight: '20px',
  color: '#189898',
}))
export const DescOptionCardText = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '13px',
  lineHeight: '20px',
  color: '#189898',
}))
export const PriceOptionCardText = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '15px',
  lineHeight: '24px',
  color: '#65B8B8',

  position: 'absolute',
  top: '5px',
  right: '18px',
}))
