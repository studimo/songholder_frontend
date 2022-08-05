import { IconButton, InputAdornment, TextField } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { initialFormValues, inputFieldValues } from './const'
import {
  EmailPasswordContainer,
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
import { EmailPasswordSigninProps } from './types'

export default function EmailPasswordSignin(props: EmailPasswordSigninProps) {
  const { loading, setLoading, resFromSubmit, setResFromSubmit } = props

  const [formValues, setFormValues] = useState(initialFormValues)
  const [errors, setErrors] = useState({} as any)
  const [showPassword, setShowPassword] = useState(false)

  const { signInWithEmail } = useAuth()

  const formIsValid = (fieldValues = formValues) => {
    const isValid =
      fieldValues.email &&
      fieldValues.password &&
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
        const user = await signInWithEmail(
          formValues.email,
          formValues.password,
        )
        location.href = '/discover'
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

    if ('password' in fieldValues) {
      temp.password = fieldValues.password ? '' : 'This field is required.'
    }

    setErrors({
      ...temp,
    })
  }

  return (
    <EmailPasswordContainer>
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
              variant='outlined'
              size='small'
              type={
                inputFieldValue.password
                  ? showPassword
                    ? 'text'
                    : 'password'
                  : 'text'
              }
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
                endAdornment: inputFieldValue.password ? (
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={() => {
                        setShowPassword(!showPassword)
                      }}
                      edge='end'
                      sx={{ mr: '5px' }}
                    >
                      {showPassword ? (
                        <VisibilityOff sx={{ fontSize: '20px' }} />
                      ) : (
                        <Visibility sx={{ fontSize: '20px' }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ) : (
                  <></>
                ),
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

        <ForgotPasswordButton disabled>
          <TypographyWithFont
            sx={{ color: 'white', fontSize: '15px', textTransform: 'none' }}
          >
            Forgot password?
          </TypographyWithFont>
        </ForgotPasswordButton>
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
          SIGN IN
        </SubmitButton>
      </FormContainer>
    </EmailPasswordContainer>
  )
}
