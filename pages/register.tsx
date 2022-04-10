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
  FormControl,
  makeStyles,
} from "@mui/material";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import { styled } from "@mui/system";

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
});
export default function login() {
  const [username, setUsername] = useState("");
  const [usernameBlank, setUsernameBlank] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordBlank, setPasswordBlank] = useState(true);
  // const [username, setUsername] = useState("");

  function handleSubmit() {
    if (username == "") {
      setUsernameBlank(true);
    }
    if (password == "") {
      setPasswordBlank(true);
    }
    return false;
    console.log(username);
    console.log(password);
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
            REGISTER
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
          required
          id="outlined-textarea"
          placeholder="Username"
          sx={{
            width: "320px",
            height: "50px",
            background: "rgba(255, 255, 255, 0.3)",
            borderRadius: "50px",
            paddingLeft: "30px",
            color: "white",
            mt: "30px",
          }}
          inputProps={{
            style: { color: "white", opacity: 1 },
          }}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />

        <CssOutlinedInput
          required
          id="outlined-textarea-password"
          placeholder="Password"
          sx={{
            width: "320px",
            height: "50px",
            background: "rgba(255, 255, 255, 0.3)",
            borderRadius: "50px",
            paddingLeft: "30px",
            color: "white",
            mt: "22px",
          }}
          onChange={(e) => {
            setPassword(e.target.value);
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
            handleSubmit();
          }}
        >
          SIGN UP
        </Button>
        {/* <Stack sx={{ flexDirection: "row" }}>
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
            // label="Remember me"
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
        </Stack> */}
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
          {/* <Typography
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
          </Button> */}
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
  );
}
