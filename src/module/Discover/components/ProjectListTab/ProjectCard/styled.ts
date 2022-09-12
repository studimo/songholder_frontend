import { Container, Typography } from '@mui/material'
import { styled } from '@mui/system'

export const ProjectMainCard = styled('div')(() => ({
  display: 'flex',
  position: 'relative',
  width: '100%',
  height: '100px',
  flexDirection: 'row',
  alignItems: 'center',
  overflow: 'hidden',
  // backgroundColor: 'yellow',
  boxShadow: '10px 10px 35px -3px rgba(0, 0, 0, 0.08)',
  borderRadius: '5px',
  padding: '5px 0px',
}))
export const TypographyWithFont = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '11px',
  lineHeight: '20px',

  // -webkit-background-clip: "text",

  // -webkit-text-fill-color: transparent;
  // background-clip: text;
  // text-fill-color: transparent;
}))
