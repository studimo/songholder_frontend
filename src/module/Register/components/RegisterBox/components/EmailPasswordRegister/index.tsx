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
import { registerErrorHandle } from '../registerErrorHandle'
import { EmailPasswordRegisterProps } from './types'
import { createAccountHandle } from 'src/common/function/createAccoutHandle'

export default function EmailPasswordRegister(
  props: EmailPasswordRegisterProps,
) {
  const { loading, setLoading, resFromSubmit, setResFromSubmit } = props

  const [formValues, setFormValues] = useState(initialFormValues)
  const [errors, setErrors] = useState({} as any)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { signUpWithEmail } = useAuth()

  const formIsValid = (fieldValues = formValues) => {
    const isValid =
      fieldValues.email &&
      fieldValues.password &&
      fieldValues.confirmPassword &&
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
        const user = await signUpWithEmail(
          formValues.email,
          formValues.password,
        )
        createAccountHandle(user)
        setLoading(false)
      } catch (err: any) {
        let errMessage = registerErrorHandle(err.message)
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
      if (fieldValues.password) {
        if (formValues.confirmPassword)
          temp.confirmPassword =
            formValues.confirmPassword.localeCompare(fieldValues.password) == 0
              ? ''
              : 'Passwords do NOT match.'
        if (fieldValues.password.length < 6) {
          temp.password = 'Password MUST be at least 6 characters!'
        }
      }
    }

    if ('confirmPassword' in fieldValues) {
      temp.confirmPassword = fieldValues.confirmPassword
        ? ''
        : 'This field is required.'
      if (fieldValues.confirmPassword)
        temp.confirmPassword =
          fieldValues.confirmPassword.localeCompare(formValues.password) == 0
            ? ''
            : 'Passwords do NOT match.'
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
                  ? (index == 1 && showPassword) ||
                    (index == 2 && showConfirmPassword)
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
                        index == 1
                          ? setShowPassword(!showPassword)
                          : setShowConfirmPassword(!showConfirmPassword)
                      }}
                      edge='end'
                      sx={{ mr: '5px' }}
                    >
                      {(index == 1 && showPassword) ||
                      (index == 2 && showConfirmPassword) ? (
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
            sx={{
              color: 'white',
              fontSize: '10px',
              textTransform: 'none',
              ml: 'auto',
            }}
          >
            I agree to the Terms of Service and Privacy Policy
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
          REGISTER
        </SubmitButton>
      </FormContainer>
    </EmailPasswordContainer>
  )
}
