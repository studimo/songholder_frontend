import { Container, Divider, IconButton, Typography } from '@mui/material'
import { styled } from '@mui/system'

export const RootContainer = styled(Container)(() => ({
  backgroundColor: '#F7FBFB',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'hidden',

  paddingTop: '60px',
  gap: '20px',
}))

export const TabsContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '90%',
  gap: '10px',
}))

export const TypographyWithFont = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '22px',
  lineHeight: '35px',
  color: '#335380',
}))
export const TabDivider = styled(Divider)(() => ({
  // marginLeft: '58px',
  // marginRight: '50px',
  color: '#A2B6D2',
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
