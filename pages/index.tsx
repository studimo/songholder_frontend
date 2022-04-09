import {
  Box,
  Button,
  CardMedia,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import LandingpageCard from "components/LandingpageCard";
import ResponsiveAppBarForLandingPage from "components/ResponsiveAppBarForLandingPage";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
export default function LandingPage() {
  return (
    <>
      <ResponsiveAppBarForLandingPage />

      <Container
        maxWidth={false}
        disableGutters
        // maxWidth="md"
        sx={{
          background:
            "radial-gradient(61.36% 61.36% at 32.88% 35.63%, #E9E9E9 0%, #F8F3FD 100%)",
          width: "100%",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Stack className="first paragraph">
          <Box
            sx={{
              backgroundImage:
                "linear-gradient(123.57deg, rgba(14, 167, 167, 0.55) 35.86%, rgba(46, 0, 124, 0.55) 77.15%),url(./assets/images/LandingPageBackground_1.jpeg)",
              mixBlendMode: "multiply",

              // position: "absolute",
              // width: "100vw",
              width: "100vw",
              height: "160vh",
              mt: "-60vh",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              // clipPath: "ellipse(90% 43% at 49% 55%)",
              clipPath: "ellipse(76% 44% at 53% 56%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                mt: "74vh",
                color: "white",
                fontWeight: "500",
                fontSize: "45px",
                textShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                fontFamily: "Mitr",
                fontStyle: "normal",
              }}
            >
              Let's be part of the music industry together.
            </Typography>
            <Typography
              sx={{
                mt: "37px",
                color: "white",
                width: "782px",
                height: "80px",
                fontFamily: "Kalam",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "28px",
                lineHeight: "40px",

                textAlign: "center",
              }}
            >
              Fundraising for creative music projects, there is no better place
              to find a demo from a talented artist.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: "70px",
                width: "220px",
                background: "rgba(255, 255, 255, 0.15)",
                borderRadius: "16px",
                // fontFamily: "Mitr",
                fontSize: "20px",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                },
                opacity: 0.8,
              }}
              onClick={() => {
                location.href = "/discover";
              }}
            >
              GET STARTED
            </Button>
          </Box>
        </Stack>
        <Stack
          className="second paragraph"
          sx={{ width: "100vw", height: "600px" }}
        >
          <Box
            sx={{
              width: "100%",
              height: "600px",
            }}
          >
            <svg
              viewBox="0 0 1550 600"
              width="100%"
              height="auto"
              style={{
                marginTop: "0px",
              }}
            >
              <path
                d="M-2.92303 13.8303C387.077 177.83 863.802 279.173 1437.08 79.2993C2010.35 -120.574 2151.08 594.83 1437.08 514.33C723.077 433.83 -2.92297 514.33 -2.92297 514.33C-2.92297 514.33 -259.596 -94.1041 -2.92303 13.8303Z"
                fill="url(#paint0_linear_428_37098)"
                fill-opacity="0.55"
                id="CurvedPath"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_428_37098"
                  x1="268.878"
                  y1="378.133"
                  x2="1235.88"
                  y2="19.133"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2BA4AB" />
                  <stop offset="1" stop-color="#2E007C" />
                </linearGradient>
              </defs>
              <text
                font-size="54"
                x="325"
                y="50"
                text-anchor="middle"
                fill="#5199C0"
                dy="-5%"
              >
                <textPath
                  id="MyMessage"
                  xlinkHref="#CurvedPath"
                  style={{
                    fontFamily: "Kalam",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "30px",
                    lineHeight: "45px",
                    // color: "#5199C0",

                    transform: "rotate(5deg)",
                    letterSpacing: "3px",
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Be
                  the Songholders
                </textPath>
              </text>
              <text
                font-size="54"
                x="325"
                y="50"
                text-anchor="middle"
                fill="#236386"
                dy="-5%"
              >
                <textPath
                  id="MyMessage"
                  xlinkHref="#CurvedPath"
                  style={{
                    fontFamily: "Mitr",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "43px",
                    lineHeight: "45px",
                    color: "#236386",
                    textShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                    letterSpacing: "3px",
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fund
                  the next big hit music track
                </textPath>
              </text>
            </svg>
          </Box>
          <Typography
            sx={{
              mt: "-420px",
              ml: "100px",
              width: "342px",
              fontFamily: "Kalam",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "23px",
              lineHeight: "55px",
              color: "#FFFFFF",
            }}
          >
            Songholders’s fundraising campaign is a hub for emerging artists and
            new music projects that you can be a part of them and earn a return
            on investment.
          </Typography>

          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing="0.5"
            sx={{
              mt: "-230px",
              ml: "700px",
              width: "900px",
            }}
          >
            <LandingpageCard url="ujIre04ZtAY" />
            <LandingpageCard url="XYAghEq5Lfw" />
            <LandingpageCard url="0U-b1sfatpo" />
            <LandingpageCard url="q0hyYWKXF0Q" />
          </Stack>

          <IconButton
            sx={{
              color: "white",
              borderRadius: "10px",
              ml: "580px",
              mt: "-130px",
              width: "180px",
            }}
            onClick={() => {
              location.href = "/discover";
            }}
          >
            <Typography
              sx={{
                mr: "10px",
                fontFamily: "Mitr",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "23px",
                lineHeight: "36px",
                textAlign: "center",

                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              EXPLORE
            </Typography>
            <KeyboardDoubleArrowRightRoundedIcon
              sx={{
                borderStyle: "solid",
                borderWidth: "4px",
                borderRadius: "50%",
                fontSize: "40px",
                opacity: 0.8,
              }}
            />
          </IconButton>
        </Stack>
      </Container>
    </>
  );
}
