import { styled } from '@mui/system'

export const ProfileContainer = styled('div')(() => ({
  position: 'relative',
  width: 'auto',
  height: 'auto',
  justifyContent: 'center',
  alignContent: 'center',
  padding: '5px',
  // marginLeft: 'auto',
  // marginRight: '50px',
  transform: 'translate(0%, -50%)',
  zIndex: 2,
  marginTop: '-66px',
}))

export const StyledProfileImage = styled('div')(() => ({
  position: 'relative',
  width: '144px',
  height: '144px',
  overflow: 'hidden',
  zIndex: 2,
  borderRadius: '50%',
  outlineStyle: 'solid',
  outlineWidth: '5px',
  outlineColor: 'white',
}))
