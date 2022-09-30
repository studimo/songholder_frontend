import { createStyles } from '@mantine/core'
import { Typography } from '@mui/material'
import { styled } from '@mui/system'

export const TabContainer = styled('div')(() => ({
  position: 'relative',
  width: '100vw',
  paddingLeft: '50px',
  paddingRight: '50px',
  paddingTop: '20px',
  paddingBottom: '50px',
}))

export const HeaderTabText = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '22px',
  color: '#335380',
  textTransform: 'none',
  paddingLeft: '8px',
  textAlign: 'center',
  marginBottom: '5px',
}))
export const TypographyWithFont = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '13px',
  lineHeight: '20px',
  color: '#335380',
}))

export const OptionsContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 'auto',
  paddingLeft: '15px',
  gap: '14px',
  marginTop: '5px',
}))

export const useStyles = createStyles((_theme, _params, getRef) => ({
  controls: {
    ref: getRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  root: {
    '&:hover': {
      [`& .${getRef('controls')}`]: {
        opacity: 1,
      },
    },
  },
}))
