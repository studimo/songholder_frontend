import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ResponsiveAppBarForLandingPage from "components/ResponsiveAppBarForLandingPage";
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
              clipPath: "ellipse(90% 43% at 49% 55%)",
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
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
      </Container>
    </>
  );
}
