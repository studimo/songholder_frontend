import { IconButton, Typography } from '@mui/material'
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

export const StyledEditIconImage = styled('div')(() => ({
  display: 'flex',
  position: 'relative',
  width: '11px',
  height: '15px',
  overflow: 'hidden',
  // marginBottom: '7px',
  // marginLeft: '-17px',
  // zIndex: 3,
}))

export const EditIconButton = styled(IconButton)(() => ({
  display: 'flex',
  // position: 'absolute',
  // bottom: '20px',
  // right: '5px',
  width: '30px',
  height: '30px',
  overflow: 'hidden',
  // zIndex: 2,
  borderRadius: '5px',
  color: 'black',
}))
