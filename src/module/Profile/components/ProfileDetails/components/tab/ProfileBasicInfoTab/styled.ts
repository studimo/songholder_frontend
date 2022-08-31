import { IconButton, Typography } from '@mui/material'
import { styled } from '@mui/system'

export const ProfileBasicInfoTabContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  height: 'auto',
  alignItems: 'center',
}))
export const TypographyWithFont = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '22px',
  lineHeight: '25px',
  color: '#615190',
}))

export const ProfileNameContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100vw',
  height: '50px',
  justifyContent: 'center',
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

export const BalanceCenterBox = styled('div')(() => ({
  display: 'flex',
  width: '30px',
}))

export const ProfileDescContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100vw',
  height: 'auto',
  justifyContent: 'center',
  marginTop: '-25px',
}))
