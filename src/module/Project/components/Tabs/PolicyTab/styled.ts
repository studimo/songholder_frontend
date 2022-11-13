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
export const StyledEditIconImage = styled('div')(() => ({
  display: 'flex',
  position: 'relative',
  width: 'auto',
  height: '160px',
  overflow: 'hidden',
  margin: '10px 0px',
  paddingLeft: '12.5px',
  // marginBottom: '7px',
  // marginLeft: '-17px',
  // zIndex: 3,
}))
