import {
  Box,
  Container,
  TextField,
  Typography,
  Stack,
  OutlinedInput,
  InputLabel,
  InputBase,
  IconButton,
  Button,
  Checkbox,
  FormControlLabel,
  Snackbar,
  Alert,
  FormControl,
  makeStyles,
} from "@mui/material"

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded"
import TwitterIcon from "@mui/icons-material/Twitter"
import MailRoundedIcon from "@mui/icons-material/MailRounded"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { useState } from "react"
import { styled } from "@mui/system"
import { useAuth } from "Providers/FirebaseAuthProvider"
import { AuthErrorCodes } from "firebase/auth"

const CssOutlinedInput = styled(OutlinedInput)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
})
export default function login() {
  const [username, setUsername] = useState("")
  const [usernameBlank, setUsernameBlank] = useState(true)
  const [password, setPassword] = useState("")
  const [passwordBlank, setPasswordBlank] = useState(true)
  const { signInWithEmail, signUpWithEmail, authUser, loading } = useAuth()
  const [errToast, setErrToast] = useState(false)
  const [errToastMessage, setErrToastMessage] = useState("")

  function handleSubmit() {
    signInWithEmail(username, password)
      .then((user) => {
        console.log(user)
      })
      .catch(SigninErrHandler)
    if (username == "") {
      setUsernameBlank(true)
    }
    if (password == "") {
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
        return ErrorMsgHandler("INVALID EMAIL")

      case FirebaseErrPrefix(AuthErrorCodes.USER_DELETED):
        return ErrorMsgHandler("User not found")
      default:
        console.error(err)
        return ErrorMsgHandler("Unknown error")
    }
  }

  const handleCloseToast = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
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
          "linear-gradient(180deg, rgba(46, 153, 153, 0.4) 0%, rgba(124, 86, 186, 0.4) 100%),url(./assets/images/loginPageBackground.jpeg)",
        backgroundSize: "cover",
        // backgroundPosition: "",
        // backdropFilter: "blur(8px)",
        // filter: "blur(5px)",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Snackbar
        open={errToast}
        autoHideDuration={6000}
        onClose={handleCloseToast}
      >
        <Alert
          onClose={handleCloseToast}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errToastMessage}
        </Alert>
      </Snackbar>
      <Box
        sx={{
          width: "859px",
          height: "401px",
          bgcolor: "yellow",
          background:
            "linear-gradient(89.53deg, rgba(255, 255, 255, 0) 5.66%, rgba(255, 255, 255, 0.025) 28.69%, rgba(255, 255, 255, 0.26) 50.51%, rgba(255, 255, 255, 0.025) 74.65%, rgba(255, 255, 255, 0) 94.8%)",
          backdropFilter: "blur(15px)",
          display: "flex",
          //   justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mb: "80px",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "250px",
              height: "1px",
              background:
                "linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
          <Typography
            fontSize="25px"
            color="white"
            fontWeight={400}
            sx={{ m: "12px", mt: "-18px" }}
          >
            LOGIN
          </Typography>
          <Box
            sx={{
              width: "250px",
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
        </Stack>
        <CssOutlinedInput
          type="email"
          required
          id="outlined-textarea"
          placeholder="Username"
          autoComplete="email"
          autoFocus
          sx={{
            width: "340px",
            height: "60px",
            background: "rgba(255, 255, 255, 0.3)",
            borderRadius: "50px",
            color: "white",
            mt: "30px",
          }}
          inputProps={{
            style: { color: "white", opacity: 1 },
          }}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          value={username}
        />

        <CssOutlinedInput
          required
          type="password"
          id="outlined-textarea-password"
          placeholder="Password"
          sx={{
            width: "340px",
            height: "60px",
            background: "rgba(255, 255, 255, 0.3)",
            borderRadius: "50px",
            color: "white",
            mt: "22px",
          }}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          value={password}
        />
        <Button
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "white",
            width: "320px",
            height: "29px",
            borderRadius: "20px",
            mt: "20px",
          }}
          type="submit"
          onClick={() => {
            handleSubmit()
          }}
        >
          SIGN IN
        </Button>
        <Stack sx={{ flexDirection: "row" }}>
          <FormControlLabel
            // value="start"
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
            // labelPlacement="start"
          />
          <Button sx={{ color: "white" }}>
            <Typography
              sx={{ color: "white", fontSize: "15px", textTransform: "none" }}
            >
              Forgot password?
            </Typography>
          </Button>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            mt: "35px",
          }}
        >
          <Box
            sx={{
              width: "150px",
              height: "1px",
              background:
                "linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
          <Typography
            fontSize="20px"
            color="white"
            sx={{ mt: "-15px", ml: "14px", mr: "14px" }}
          >
            or
          </Typography>
          <Box
            sx={{
              width: "150px",
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
        </Stack>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "15px",
            // padding: "50px",
          }}
          spacing={1}
        >
          <IconButton>
            <FacebookRoundedIcon sx={{ color: "white", fontSize: "20px" }} />
          </IconButton>
          <IconButton>
            <TwitterIcon sx={{ color: "white", fontSize: "20px" }} />
          </IconButton>

          <IconButton>
            <MailRoundedIcon sx={{ color: "white", fontSize: "20px" }} />
          </IconButton>
        </Stack>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            mt: "35px",
            ml: "10px",
          }}
        >
          <Typography
            sx={{ color: "white", fontSize: "17px", textTransform: "none" }}
          >
            Not reigistered?
          </Typography>
          <Button sx={{ color: "white" }}>
            <Typography
              sx={{ color: "white", fontSize: "17px", textTransform: "none" }}
            >
              Created an Account
            </Typography>
            <ArrowForwardIcon sx={{ fontSize: "15px", ml: "5px" }} />
          </Button>
        </Stack>
        <Stack sx={{ flexDirection: "row", mt: "55px", ml: "20px" }}>
          <Typography sx={{ mr: 0.75, display: { xs: "none", md: "flex" } }}>
            <img src="./assets/images/logo.png" style={{ height: "30px" }} />
          </Typography>
          <Typography
            sx={{
              mr: 3,
              fontSize: "15px",
              display: { xs: "none", md: "flex" },
              color: "white",
            }}
          >
            MaTchA
          </Typography>
        </Stack>
      </Box>
    </Container>
  )
}
