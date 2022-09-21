import { styled } from '@mui/system'

export const StyledArtistImage = styled('div')(() => ({
  position: 'relative',
  width: '100px',
  height: '100px',
  overflow: 'hidden',
  borderRadius: '50%',
  zIndex: 2,
}))
export const BackgroundArtistImage = styled('div')(() => ({
  position: 'absolute',
  top: '0%',
  left: '0%',
  width: '110px',
  height: '110px',
  background:
    'conic-gradient(from 0deg at 50% 50%, #45D9FC -35.74deg, #8060B7 27.69deg, #EA76AE 180.51deg, #45D9FC 324.26deg, #8060B7 387.69deg)',
  borderRadius: '50%',
}))

export const ArtistContainer = styled('div')(() => ({
  position: 'relative',
  width: '110px',
  height: '110px',
  justifyContent: 'center',
  alignContent: 'center',
  padding: '5px',
  marginLeft: 'auto',
  marginRight: '50px',
  transform: 'translate(0%, -50%)',
}))
