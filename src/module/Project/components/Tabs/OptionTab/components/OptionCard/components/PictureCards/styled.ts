import { Typography } from '@mui/material'
import { styled } from '@mui/system'

export const PictureCardArea = styled('div')(() => ({
  width: '100%',
  height: 'auto',
  overflowX: 'auto',
}))
export const PictureContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  height: 'auto',
  marginTop: '5px',
  alignContent: 'flex-start',
  justifyContent: 'flex-start',
  gap: '20px',
}))
export const StyledPicture = styled('div')(() => ({
  position: 'relative',
  display: 'flex',
  height: '100px',
  width: '100px',
  overflow: 'hidden',
}))
