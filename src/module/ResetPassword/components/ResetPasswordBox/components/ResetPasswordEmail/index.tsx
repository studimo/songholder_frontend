import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { initialFormValues, inputFieldValues } from './const'
import {
  ResetPasswordEmailContainer,
  ForgotPasswordButton,
  FormContainer,
  ResTextContainer,
  SubmitButton,
  TypographyWithFont,
} from './styled'
import { useAuth } from 'Providers/FirebaseAuthProvider'
import { AuthErrorCodes } from 'firebase/auth'
import { Console } from 'console'
import { SignInErrorHandle } from '../ErrorLoginHandle'
import { ResetPasswordEmailProps } from './types'
import CloseIcon from '@mui/icons-material/Close'

export default function ResetPasswordEmail(props: ResetPasswordEmailProps) {
  const { loading, setLoading, resFromSubmit, setResFromSubmit } = props

  const [formValues, setFormValues] = useState(initialFormValues)
  const [errors, setErrors] = useState({} as any)

  const { resetPassword } = useAuth()

  const formIsValid = (fieldValues = formValues) => {
    const isValid =
      fieldValues.email &&
      resFromSubmit === '' &&
      Object.values(errors).every(x => x === '')

    return isValid
  }
  const handleInputValue = (e: any) => {
    setResFromSubmit('')

    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
    validate({ [name]: value })
  }
  const handleFormSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    if (formIsValid()) {
      try {
        const user = await resetPassword(formValues.email)
        formValues.email = ''
        setOpen(true)
        setLoading(false)
      } catch (err: any) {
        let errMessage = SignInErrorHandle(err.message)
        errMessage = errMessage ? errMessage : 'Unknown error'
        setLoading(false)
        setResFromSubmit(errMessage)
        console.log(err.message)
      }
    }
  }

  const validate: any = (fieldValues = formValues) => {
    let temp: any = { ...errors }
    if ('email' in fieldValues) {
      temp.email = fieldValues.email ? '' : 'This field is required.'
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ''
          : 'Email is NOT valid.'
    }

    setErrors({
      ...temp,
    })
  }
  const [open, setOpen] = useState(false)

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }
  return (
    <ResetPasswordEmailContainer>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          Reset Password Email Send!
          <Button
            onClick={() => (location.href = '/signin')}
            sx={{
              color: 'black',
              mb: '5px',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                // borderColor: "#ffffff",
              },
            }}
          >
            <TypographyWithFont
              sx={{
                color: '#4c6d4e',
                fontSize: '17px',
                fontWeight: 400,
                textTransform: 'none',
                textDecoration: 'underline',
              }}
            >
              Sign in
            </TypographyWithFont>
          </Button>
        </Alert>
      </Snackbar>
      <FormContainer onSubmit={handleFormSubmit}>
        {inputFieldValues.map((inputFieldValue, index) => {
          return (
            <TextField
              key={index}
              id={inputFieldValue.id}
              label={inputFieldValue.label}
              name={inputFieldValue.name}
              onBlur={handleInputValue}
              onChange={handleInputValue}
              value={formValues.email}
              variant='outlined'
              size='small'
              {...(errors[inputFieldValue.name] && {
                error: true,
                helperText: errors[inputFieldValue.name],
              })}
              InputLabelProps={{
                style: {
                  fontFamily: 'Mitr',
                  fontStyle: 'normal',
                  fontWeight: 300,
                  marginTop: '2px',
                  color: 'White',
                  borderRadius: '50px',
                },
              }}
              InputProps={{
                style: {
                  fontFamily: 'Mitr',
                  fontStyle: 'normal',
                  fontWeight: 300,
                  padding: '0',
                  height: '45px',
                  paddingLeft: '3px',
                  borderRadius: '50px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
              sx={{
                ml: 'auto',
                mr: 'auto',
                width: '100%',
                borderRadius: '50px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(0,0,0,0)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'White',
                  },
                  '&.Mui-focused fieldset': {
                    //   borderColor: 'green',
                  },
                },
              }}
            />
          )
        })}
        <ResTextContainer>
          <TypographyWithFont>
            {resFromSubmit ? '*' : ''}
            {resFromSubmit}
          </TypographyWithFont>
        </ResTextContainer>
        <SubmitButton
          variant='outlined'
          type='submit'
          loading={loading}
          disabled={!formIsValid()}
        >
          Reset Password
        </SubmitButton>
      </FormContainer>
    </ResetPasswordEmailContainer>
  )
}
