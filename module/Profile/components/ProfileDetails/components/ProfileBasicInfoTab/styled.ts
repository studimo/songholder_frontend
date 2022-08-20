import { Typography } from '@mui/material'
import { styled } from '@mui/system'

export const ProfileBasicInfoTabContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  height: 'auto',
}))
export const TypographyWithFontCenter = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '22px',
  lineHeight: '25px',
  color: '#615190',
  marginLeft: 'auto',
  marginRight: 'auto',
}))
