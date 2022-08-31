import { IconButton } from '@mui/material'
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
  // borderStyle: 'solid',
  // borderWidth: '5px',
  // borderColor: 'white',
  // outlineStyle: 'solid',
  // outlineWidth: '5px',
  // outlineColor: 'white',
}))

export const StyledCameraIconImage = styled('div')(() => ({
  display: 'flex',
  position: 'relative',
  width: '18px',
  height: '18px',
  overflow: 'hidden',
  zIndex: 3,
}))

export const BackgroundCameraIcon = styled('div')(() => ({
  display: 'flex',
  position: 'absolute',
  bottom: '0px',
  right: '0px',
  width: '100%',
  height: '100%',
  zIndex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  transform: 'translate(0%, +73.5%)',
}))

export const CameraIconButton = styled(IconButton)(() => ({
  display: 'flex',
  position: 'absolute',
  bottom: '2px',
  right: '50%',
  width: '40px',
  height: '40px',
  overflow: 'hidden',
  zIndex: 2,
  borderRadius: '5px',
  color: 'white',
  transform: 'translate(50%, 0%)',
}))

export const BackgroundProfileImage = styled('div')(() => ({
  display: 'flex',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '153px',
  height: '153px',
  borderRadius: '50%',
  backgroundColor: 'white',
}))
