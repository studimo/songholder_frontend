import { Box, Card, Container, Divider } from '@mui/material'
import { styled } from '@mui/system'

export const ScreenAreaContainer = styled('div')(() => ({
  display: 'flex',
  position: 'fixed',
  width: '100%',
  height: 'calc(100vh - 80px)',
  marginTop: '15px',

  // backgroundColor: 'red',
  zIndex: 2,
}))
export const MusicPlayerContainer = styled(Box)(() => ({
  position: 'fixed',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'row',
  pointerEvents: 'none',
  zIndex: 3,
  marginLeft: '-30px',
}))
export const MusicMainPlayerCard = styled(Card)(() => ({
  backgroundColor: 'rgba(0, 0, 0, 0)',
  width: '130px',
  height: '130px',
  borderRadius: '100%',
  pointerEvents: 'auto',
}))
export const BackgroundActionArea = styled(Box)(() => ({
  width: '130px',
  height: '130px',
  borderRadius: '100%',
  zIndex: 3,
  position: 'fixed',
}))
export const PlayPauseIconWrap = styled(Box)(() => ({
  width: '130px',
  height: '130px',
  borderRadius: '100%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))
export const CircleSliderContainer = styled(Box)(() => ({
  fontSize: 50,
  display: 'block',
  color: 'white',
  zIndex: 2,
  position: 'fixed',
  marginTop: '22px',
}))
export const CircleSliderWrap = styled('div')(() => ({}))
export const ReactPlayerWrap = styled('div')(() => ({}))
export const DrawerContainer = styled(Box)(() => ({
  width: '280px',
  height: '140px',
  marginLeft: '-63.5px',
  overflow: 'hidden',
  position: 'relative',
  borderTopRightRadius: 60,
  borderBottomRightRadius: 10,
  ':before': {
    position: 'absolute',
    padding: '83.5px',
    content: '""',
    marginLeft: '-88px',
    marginTop: '-18px',
    borderRadius: '50%',
    boxShadow: `
    100px 0px 80px rgba(193, 246, 248, 1),
                  180px 0px 80px rgba(222, 206, 250, 1),
                  290px 0px 80px rgba(222, 206, 250, 1)`,
  },
  zIndex: -2,
  pointerEvents: 'auto',
}))
