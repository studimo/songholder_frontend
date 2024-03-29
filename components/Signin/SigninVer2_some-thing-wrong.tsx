import {
  Box,
  Container,
  Typography,
  Stack,
  OutlinedInput,
  IconButton,
  InputAdornment,
  Button,
  Snackbar,
  Alert,
} from '@mui/material'

import { useRouter } from 'next/router'
import {
  FacebookRounded,
  Twitter,
  ArrowForward,
  Visibility,
  VisibilityOff,
  MailRounded,
} from '@mui/icons-material'
import { useState, useEffect } from 'react'
import { styled } from '@mui/system'
import { useAuth } from 'Providers/FirebaseAuthProvider'
import { AuthErrorCodes } from 'firebase/auth'

const CssOutlinedInput = styled(OutlinedInput)({
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '&:focus .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  input: {
    '&:-internal-autofill-selected': {
      color: 'white!important',
      transition: 'background-color 5000s ease-in-out 0s',
      textFillColor: 'white !important',
    },
  },
})
export default function SigninVer2() {
  const [username, setUsername] = useState('')
  const [usernameBlank, setUsernameBlank] = useState(true)
  const [password, setPassword] = useState('')
  const [passwordBlank, setPasswordBlank] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const {
    signInWithEmail,
    signInWithFacebook,
    signInWithTwitter,
    authUser,
    loading,
  } = useAuth()
  const [errToast, setErrToast] = useState(false)
  const [errToastMessage, setErrToastMessage] = useState('')

  const router = useRouter()

  useEffect(() => {
    if (!loading && authUser) router.push('/discover')
    return
  }, [authUser, loading])

  function handleSubmit() {
    signInWithEmail(username, password)
      .then(user => {
        console.log(user)
      })
      .catch(SigninErrHandler)
    if (username == '') {
      setUsernameBlank(true)
    }
    if (password == '') {
      setPasswordBlank(true)
    }
    return false
  }

  const FirebaseErrPrefix = (errCode: string) => `Firebase: Error (${errCode}).`

  const ErrorMsgHandler = (msg: string) => {
    setErrToastMessage(msg)
    setErrToast(true)
    setTimeout(() => {
      setErrToast(false)
    }, 1500)
  }

  const SigninErrHandler = (err: Error) => {
    console.log(err.message.includes(AuthErrorCodes.INVALID_EMAIL))
    console.log(err.message)
    switch (err.message) {
      case FirebaseErrPrefix(AuthErrorCodes.INVALID_EMAIL):
        return ErrorMsgHandler('INVALID EMAIL')
      case FirebaseErrPrefix(AuthErrorCodes.USER_DELETED):
        return ErrorMsgHandler("Email doesn't found")
      case FirebaseErrPrefix(AuthErrorCodes.EMAIL_EXISTS):
        return ErrorMsgHandler('Email already exists')
      case FirebaseErrPrefix(AuthErrorCodes.POPUP_CLOSED_BY_USER):
        return ErrorMsgHandler('Popup is closed by user')
      case FirebaseErrPrefix(AuthErrorCodes.USER_CANCELLED):
        return ErrorMsgHandler('Popup is closed by user')
      case FirebaseErrPrefix(AuthErrorCodes.EXPIRED_POPUP_REQUEST):
        return ErrorMsgHandler('Popup is closed by user')
      case FirebaseErrPrefix(AuthErrorCodes.POPUP_BLOCKED):
        return ErrorMsgHandler('Popup blocked by user')
      default:
        console.error(err)
        return ErrorMsgHandler('Unknown error')
    }
  }

  const handleCloseToast = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setErrToast(false)
  }

  return (
    <Container
      maxWidth={false}
      disableGutters
      // maxWidth="md"
      sx={{
        // paddingTop: "80px",
        backgroundImage:
          'linear-gradient(111.53deg, rgba(35, 186, 186, 0.7) 20.73%, rgba(77, 36, 147, 0.7) 87.16%),url(./assets/images/LandingPageBackground_1.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 100%',
        // backdropFilter: "blur(8px)",
        // filter: "blur(5px)",
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <Snackbar
        open={errToast}
        autoHideDuration={10000}
        onClose={handleCloseToast}
      >
        <Alert
          onClose={handleCloseToast}
          severity='error'
          sx={{ width: '100%' }}
        >
          {errToastMessage}
        </Alert>
      </Snackbar>
      <Box
        sx={{
          width: '400px',
          height: '448px',
          background: 'rgba(255, 255, 255, 0.15)',
          boxShadow: '5px 5px 40px rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(15px)',
          // background:
          //   'linear-gradient(89.53deg, rgba(255, 255, 255, 0) 5.66%, rgba(255, 255, 255, 0.025) 28.69%, rgba(255, 255, 255, 0.26) 50.51%, rgba(255, 255, 255, 0.025) 74.65%, rgba(255, 255, 255, 0) 94.8%)',
          // backdropFilter: 'blur(15px)',
          display: 'flex',
          //   justifyContent: "center",
          alignItems: 'center',
          flexDirection: 'column',
          mb: '80px',
          mt: '-50px',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            // alignItems: "center",
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          {/* <Box
            sx={{
              width: '250px',
              height: '1px',
              background:
                'linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
            }}
          /> */}
          <Typography
            fontSize='25px'
            color='white'
            fontWeight={400}
            sx={{
              m: '12px',
              mt: '39px',
            }}
          >
            SIGN IN
          </Typography>
          {/* <Box
            sx={{
              width: '250px',
              height: '1px',
              background:
                'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
            }}
          /> */}
        </Stack>
        <CssOutlinedInput
          type='email'
          required
          id='outlined-textarea'
          placeholder='Email Address'
          autoComplete='email'
          autoFocus
          sx={{
            width: '340px',
            height: '60px',
            background: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '50px',
            color: 'white',
            mt: '30px',
            padding: '10px',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              // borderColor: "rgba(255, 255, 255, 0)",
            },
          }}
          inputProps={{
            style: { color: 'white !important', opacity: 1 },
          }}
          onChange={e => {
            setUsername(e.target.value)
          }}
          value={username}
        />

        <CssOutlinedInput
          required
          type={showPassword ? 'text' : 'password'}
          id='outlined-textarea-password'
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={() => setShowPassword(!showPassword)}
                edge='end'
                sx={{
                  mr: '0px',

                  padding: '10px',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    // borderColor: "rgba(255, 255, 255, 0)",
                  },
                }}
              >
                {showPassword ? (
                  <VisibilityOff htmlColor='white' />
                ) : (
                  <Visibility htmlColor='white' />
                )}
              </IconButton>
            </InputAdornment>
          }
          placeholder='Password'
          sx={{
            width: '340px',
            height: '60px',
            background: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '50px',
            color: 'white',
            mt: '22px',
            padding: '10px',
          }}
          onChange={e => {
            setPassword(e.target.value)
          }}
          value={password}
        />
        <Button
          variant='outlined'
          sx={{
            color: 'white',
            borderColor: 'white',
            width: '320px',
            height: '29px',
            borderRadius: '20px',
            mt: '20px',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderColor: 'rgba(255, 255, 255, 0)',
              borderWidth: '0px',
            },
          }}
          type='submit'
          onClick={() => {
            handleSubmit()
          }}
        >
          SIGN IN
        </Button>
        <Stack sx={{ flexDirection: 'row' }}>
          {/* <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "white",
                  "&.Mui-checked": {
                    color: "white",
                  },
                  fontSize: "15px",
                }}
              />
            }
            label="Remember me"
            sx={{ color: "white" }}
          /> */}
          <Button
            sx={{
              color: 'white',
              ml: '200px',
              mt: '10px',
              border: 'none',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                // borderColor: "#ffffff",
              },
            }}
          >
            <Typography
              sx={{ color: 'white', fontSize: '15px', textTransform: 'none' }}
            >
              Forgot password?
            </Typography>
          </Button>
        </Stack>
        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            mt: '15px',
          }}
        >
          <Box
            sx={{
              width: '150px',
              height: '1px',
              background:
                'linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
            }}
          />
          <Typography
            fontSize='20px'
            color='white'
            sx={{ mt: '-15px', ml: '14px', mr: '14px' }}
          >
            or
          </Typography>
          <Box
            sx={{
              width: '150px',
              height: '1px',
              background:
                'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
            }}
          />
        </Stack>
        <Stack flexDirection='column'>
          <Stack
            direction='row'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: '15px',
              // padding: "50px",
            }}
            spacing={1}
          >
            <IconButton
              onClick={() => {
                signInWithFacebook()
                  .then(user => {
                    console.log(user)
                  })
                  .catch(SigninErrHandler)
              }}
            >
              <FacebookRounded sx={{ color: 'white', fontSize: '20px' }} />
            </IconButton>
            <IconButton
              onClick={() => {
                signInWithTwitter()
                  .then(user => {
                    console.log(user)
                  })
                  .catch(SigninErrHandler)
              }}
            >
              <Twitter sx={{ color: 'white', fontSize: '20px' }} />
            </IconButton>
            <IconButton>
              <MailRounded sx={{ color: 'white', fontSize: '20px' }} />
            </IconButton>
          </Stack>
          {/* <svg
            width='700'
            height='2'
            viewBox='0 0 700 2'
            fill='none'
            style={{ marginTop: '21px' }}
          >
            <path d='M0 1L700 1' stroke='url(#paint0_linear_315_6849)' />
            <defs>
              <linearGradient
                id='paint0_linear_315_6849'
                x1='671.557'
                y1='1'
                x2='3.9153e-08'
                y2='0.994872'
                gradientUnits='userSpaceOnUse'
              >
                <stop stop-color='white' stop-opacity='0' />
                <stop offset='0.53125' stop-color='white' />
                <stop offset='1' stop-color='white' stop-opacity='0' />
              </linearGradient>
            </defs>
          </svg> */}
        </Stack>
        <Stack
          sx={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            mt: '35px',
            ml: '10px',
          }}
        >
          <Typography
            sx={{
              color: 'white',
              fontSize: '17px',
              textTransform: 'none',
              mr: '10px',
            }}
          >
            Not reigistered?
          </Typography>
          <Button
            onClick={() => router.push('/register')}
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                // borderColor: "#ffffff",
              },
            }}
          >
            <Typography
              sx={{ color: 'white', fontSize: '17px', textTransform: 'none' }}
            >
              Created an Account
            </Typography>
            <ArrowForward sx={{ fontSize: '15px', ml: '5px' }} />
          </Button>
        </Stack>

        <Stack sx={{ flexDirection: 'row', mt: '10px' }}>
          <Box
            component='img'
            sx={{
              height: '100px',
              width: '100px',
              // maxHeight: { xs: 233, md: 167 },
              // maxWidth: { xs: 350, md: 250 },
            }}
            alt='LOGO'
            src='./assets/images/logo/logoWithText.png'
          />
        </Stack>
      </Box>
    </Container>
  )
}
