import { LoadingButton } from '@mui/lab'
import { Button, styled, Typography } from '@mui/material'
export const ResetPasswordEmailContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 'auto',
  justifyContent: 'center',
}))
export const FormContainer = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 'auto',
  gap: '20px',
  marginTop: '30px',
}))
export const SubmitButton = styled(LoadingButton)(() => ({
  color: 'white',
  borderColor: 'white',
  width: '100%',
  height: '29px',
  borderRadius: '20px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '-15px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderColor: 'rgba(255, 255, 255, 0)',
    borderWidth: '0px',
  },
}))
export const TypographyWithFont = styled(Typography)(() => ({
  fontFamily: 'Mitr',
  fontStyle: 'normal',
  fontWeight: 300,
  fontSize: '14px',
  lineHeight: '22px',
  color: 'red',
}))
export const ResTextContainer = styled('div')(() => ({
  display: 'flex',
  width: '100%',
  height: 'auto',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '10px',
}))

export const ForgotPasswordButton = styled(Button)(() => ({
  marginLeft: 'auto',
  marginTop: '-15px',
  border: 'none',
  width: '150px',
  '&:hover': {
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}))
