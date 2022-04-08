import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
export default function Footer() {
  return (
    <Box
      id="footer"
      sx={{
        width: "100%",
        height: "180px",
        background: "linear-gradient(92.42deg, #66C2C2 0%, #805FB6 100%)",
      }}
    >
      <Stack
        direction="column"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
        }}
      >
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "43vw", height: "1px", bgcolor: "white" }} />
          <Stack
            sx={{
              width: "16vw",
              height: "3px",
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ ml: 3, mr: 0.75, display: { xs: "none", md: "flex" } }}
            >
              <img src="./assets/images/logo.png" style={{ height: "32px" }} />
            </Typography>
            <Typography
              sx={{
                mr: 3,
                fontSize: "18px",
              }}
              color="white"
            >
              MaTchA
            </Typography>
          </Stack>
          <Box sx={{ width: "43vw", height: "1px", bgcolor: "white" }} />
        </Stack>

        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              m: "20px",
              ml: "90px",
              fontSize: "14px",
            }}
            color="white"
          >
            ABOUT US
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            variant="middle"
            sx={{
              height: "30px",
              alignSelf: "center",
              borderRightWidth: 0.7,
              background: "white",
            }}
          />
          <Typography
            sx={{
              m: "20px",
              fontSize: "14px",
            }}
            color="white"
          >
            THEME
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            variant="middle"
            sx={{
              height: "30px",
              alignSelf: "center",
              borderRightWidth: 0.7,
              background: "white",
            }}
          />
          <Stack
            direction="row"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "50px",
            }}
            spacing={7}
          >
            <IconButton>
              <FacebookRoundedIcon sx={{ color: "white", fontSize: "30px" }} />
            </IconButton>
            <IconButton>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="./assets/images/logo/logoInstagram.png"
                  style={{ height: "30px", marginLeft: 0 }}
                />
              </Typography>
            </IconButton>
            <IconButton>
              <TwitterIcon sx={{ color: "white", fontSize: "30px" }} />
            </IconButton>

            <IconButton>
              <MailRoundedIcon sx={{ color: "white", fontSize: "30px" }} />
            </IconButton>
          </Stack>
          <Divider
            orientation="vertical"
            flexItem
            variant="middle"
            sx={{
              height: "30px",
              alignSelf: "center",
              borderRightWidth: 0.7,
              background: "white",
            }}
          />
          <Typography
            sx={{
              m: "20px",
              fontSize: "14px",
            }}
            color="white"
          >
            PRIVACY POLICY
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            variant="middle"
            sx={{
              height: "30px",
              alignSelf: "center",
              borderRightWidth: 0.7,
              background: "white",
            }}
          />

          <Typography
            sx={{
              m: "20px",
              fontSize: "14px",
            }}
            color="white"
          >
            SECURITY
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
