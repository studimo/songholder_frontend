import {
  Box,
  Container,
  Typography,
  Stack,
  OutlinedInput,
  IconButton,
  InputAdornment,
  Button,
  Checkbox,
  FormControlLabel,
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
import { useState } from 'react'
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
export default function register() {

  const [username, setUsername] = useState('')
  const [usernameBlank, setUsernameBlank] = useState(true)
  const [password, setPassword] = useState('')
  const [passwordBlank, setPasswordBlank] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const {
    signInWithFacebook,
    signInWithTwitter,
    signUpWithEmail,
    authUser,
    loading,
  } = useAuth()
  const [errToast, setErrToast] = useState(false)
  const [errToastMessage, setErrToastMessage] = useState('')

  const router = useRouter()

  function handleSubmit() {

    signUpWithEmail(username, password)
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
    console.log(username)
    console.log(password)
  
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
      return ErrorMsgHandler('Email doesn\'t found')
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
          'linear-gradient(180deg, rgba(46, 153, 153, 0.4) 0%, rgba(124, 86, 186, 0.4) 100%),url(./assets/images/loginPageBackground.jpeg)',
        backgroundSize: 'cover',
        // backgroundPosition: "",
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
        autoHideDuration={6000}
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
          width: '859px',
          height: '401px',
          bgcolor: 'yellow',
          background:
            'linear-gradient(89.53deg, rgba(255, 255, 255, 0) 5.66%, rgba(255, 255, 255, 0.025) 28.69%, rgba(255, 255, 255, 0.26) 50.51%, rgba(255, 255, 255, 0.025) 74.65%, rgba(255, 255, 255, 0) 94.8%)',
          backdropFilter: 'blur(15px)',
          display: 'flex',
          //   justifyContent: "center",
          alignItems: 'center',
          flexDirection: 'column',
          mb: '80px',
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
          <Box
            sx={{
              width: '250px',
              height: '1px',
              background:
                'linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
            }}
          />
          <Typography
            fontSize='25px'
            color='white'
            fontWeight={400}
            sx={{ m: '12px', mt: '-18px' }}
          >
            REGISTER
          </Typography>
          <Box
            sx={{
              width: '250px',
              height: '1px',
              background:
                'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
            }}
          />
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
            padding: "10px",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
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
                  mr:"0px"
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
            padding: "10px",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              // borderColor: "rgba(255, 255, 255, 0)",
            },
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
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderColor: "rgba(255, 255, 255, 0)",
              borderWidth: "0px",
            },
          }}
          type='submit'
          onClick={() => {

            handleSubmit()
          
          }}
        >
          REGISTER
        </Button>
        <Stack sx={{ flexDirection: 'row',alignItems:"center" }}>
          <FormControlLabel
            // value="start"
            control={
              <Checkbox
                sx={{
                  color: 'white',
                  '&.Mui-checked': {
                    color: 'white',
                  },
                }}
              />
            }
            label=''
            sx={{ color: 'white' }}
            // labelPlacement="start"
          />
          <Typography sx={{color:"white",fontSize:"13px",ml:"-15px"}}>I agree to the Terms of Service and Privacy Policy</Typography>
        </Stack>
        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            mt: '25px',
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
        <Stack flexDirection="column">
          <Stack
            direction="row"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "10px",
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
              <MailRounded sx={{ color: "white", fontSize: "20px" }} />
            </IconButton>
          </Stack>
          <svg
            width="700"
            height="2"
            viewBox="0 0 700 2"
            fill="none"
            style={{ marginTop: "18px" }}
          >
            <path d="M0 1L700 1" stroke="url(#paint0_linear_315_6849)" />
            <defs>
              <linearGradient
                id="paint0_linear_315_6849"
                x1="671.557"
                y1="1"
                x2="3.9153e-08"
                y2="0.994872"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="0.53125" stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
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
              sx={{ color: 'white', fontSize: '17px', textTransform: 'none',mr:"10px" }}
            >
              Already have an Account?
            </Typography>
          <Button
            onClick={() => router.push('/signin')}
            sx={{ color: 'white' }}
          >
            <Typography
              sx={{ color: 'white', fontSize: '17px', textTransform: 'none' }}
            >
              Sign in
            </Typography>
            <ArrowForward sx={{ fontSize: '15px', ml: '5px' }} />
          </Button>
        </Stack>
        <Stack sx={{ flexDirection: 'row', mt: '55px', ml: '20px' }}>
          <Typography sx={{ mr: 0.75, display: { xs: 'none', md: 'flex' } }}>
            <img src='./assets/images/logo.png' style={{ height: '30px' }} />
          </Typography>
          <Typography
            sx={{
              mr: 3,
              fontSize: '15px',
              display: { xs: 'none', md: 'flex' },
              color: 'white',
            }}
          >
            MaTchA
          </Typography>
        </Stack>
      </Box>
    </Container>
  )

}
