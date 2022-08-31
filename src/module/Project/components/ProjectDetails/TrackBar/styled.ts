import { Container } from '@mui/material'
import { styled } from '@mui/system'

export const TrackBarContainer = styled('div')(() => ({
  position: 'relative',
  width: 'calc( 100vw - 100px )',
  height: '15px',
  marginTop: '20px',
}))
export const KnotsContainer = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  background: '#E8E0F9',
  boxShadow: 'inset 2px 2px 3px -2px rgba(0, 0, 0, 0.25)',
  borderRadius: '46px',
  width: '100%',
  height: '6px',
}))
export const ProgressBar = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  boxShadow: 'inset 2px 2px 3px -2px rgba(0, 0, 0, 0.25)',
  borderRadius: '46px',
  height: '6px',
  background:
    'linear-gradient(270deg, #C487F4 -48.19%, rgba(46, 216, 253, 0.88) 96.1%)',
}))
