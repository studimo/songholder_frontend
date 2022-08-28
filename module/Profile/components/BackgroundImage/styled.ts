import { Box, IconButton, styled } from '@mui/material'

export const StyledCoverImage = styled(Box)(() => ({
  display: 'flex',
  position: 'relative',
  width: '100vw',
  height: '200px',
  overflow: 'hidden',
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
  width: '0px',
  height: '0px',
  zIndex: 1,
  borderBottom: '100px solid  rgba(0, 0, 0, 0.4)',
  borderLeft: '100px solid transparent',
}))

export const CameraIconButton = styled(IconButton)(() => ({
  display: 'flex',
  position: 'absolute',
  bottom: '20px',
  right: '5px',
  width: '40px',
  height: '40px',
  overflow: 'hidden',
  zIndex: 2,
  borderRadius: '5px',
  color: 'white',
}))
