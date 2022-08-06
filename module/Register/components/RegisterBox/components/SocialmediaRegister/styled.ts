import { styled } from '@mui/system'
import { Stack } from 'framer'

export const SocialMediaRegisterContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
}))

export const StyledArtistImage = styled('div')(() => ({
  position: 'relative',
  width: '18px',
  height: '17px',
  overflow: 'hidden',
}))
