import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import fs from "fs";
import ytdl from "ytdl-core";
import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";
import { Box } from "@mui/system";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PauseIcon from "@mui/icons-material/Pause";
import { CircleSlider } from "react-circle-slider";
export default function MusicPlayer({ audioUrl, onPlay, setOnPlay }: any) {
  const [showButton, setShowButton] = useState(false);

  const player = useRef(null);
  // let drag = false;
  // document.addEventListener("mousedown", () => (drag = false));

  // document.addEventListener("mousemove", () => (drag = true));
  // console.log(audioUrl);
  // useEffect(() => {
  //   setAudio();
  // }, []);

  // async function setAudio() {
  //   // A1YWGXSD_IQ
  // }
  const playAudio = () => {
    setOnPlay(true);
  };
  const pauseAudio = () => {
    setOnPlay(false);
  };
  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "row",
        // width: "500px",
        // height: "200px",
        // top: "50%",
        // left: "50%",
        // marginTop: "-100px",
        // marginLeft: "-250px",
        // bgcolor: "yellow",
      }}
    >
      {audioUrl ? (
        <>
          <Card
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              width: "130px",
              height: "130px",
              borderRadius: "100%",
            }}
          >
            <CardActionArea
              onClick={() => {
                // if (!drag) {
                onPlay ? setOnPlay(false) : setOnPlay(true);
                // }
              }}
              onMouseOver={() => {
                setShowButton(true);
              }}
              onMouseLeave={() => {
                setShowButton(false);
              }}
              sx={{
                borderRadius: "50px",
              }}
            >
              <Box
                sx={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "100%",
                  zIndex: 3,
                  position: "fixed",
                }}
              ></Box>
            </CardActionArea>

            <Box
              sx={{
                width: "130px",
                height: "130px",
                borderRadius: "100%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  fontSize: 50,
                  color: "white",
                  display: "block",
                  zIndex: 2,
                  position: "fixed",
                  mt: "20px",
                }}
              >
                <CircleSlider
                  value={90}
                  size={167}
                  // showTooltip={true}
                  knobRadius={0}
                  gradientColorFrom="#67BFC2"
                  gradientColorTo="#8062B7"
                  progressWidth={10}
                  circleWidth={10}
                  circleColor="white"
                  // onChange={}
                />
              </Box>
              {showButton ? (
                onPlay ? (
                  <PauseIcon
                    sx={{
                      fontSize: 50,
                      color: "white",
                      display: "block",
                      zIndex: 2,
                      position: "fixed",
                    }}
                  />
                ) : (
                  <PlayArrowOutlinedIcon
                    sx={{
                      fontSize: 50,
                      color: "white",
                      display: "block",
                      zIndex: 2,
                      position: "fixed",
                    }}
                  />
                )
              ) : (
                <></>
              )}
              <Box
              // sx={{ transform: `rotate(${}deg)` }}
              >
                <ReactPlayer
                  url={`https://www.youtube.com/embed/${audioUrl}`}
                  // width="0px"
                  height="1000px"
                  width="300px"
                  playing={onPlay}
                  style={{ zIndex: -1 }}
                  ref={player}
                  // light={true}
                />
              </Box>
            </Box>
          </Card>
          <Box
            sx={{
              width: "335px",
              height: "140px",
              // bgcolor: "yellow",
              ml: "-63.5px",
              overflow: "hidden",
              position: "relative",
              // outline: "solid 3px #000",

              borderTopRightRadius: 50,
              borderBottomRightRadius: 10,
              ":before": {
                position: "absolute",
                padding: "83.5px",
                // background: "#f90",
                content: '""',
                marginLeft: "-84px",
                marginTop: "-18px",
                borderRadius: "50%",
                // background:
                //   "linear-gradient(134.22deg, rgba(1, 124, 117, 0.3) 23.94%, rgba(147, 2, 171, 0.3) 80.19%)",
                // boxShadow: "0 0 0 20px #b53",
                boxShadow: `
                100px 0px 80px rgba(193, 246, 248, 1),
                  180px 0px 80px rgba(222, 206, 250, 1),
                  290px 0px 80px rgba(222, 206, 250, 1)`,
              },
            }}
          />
        </>
      ) : (
        <Box
          sx={{
            height: 50,
            width: 50,
            bgcolor: "yellow",
            borderRadius: "30px",
            background:
              "linear-gradient(134.22deg, rgba(1, 124, 117, 0.3) 23.94%, rgba(147, 2, 171, 0.3) 80.19%)",
          }}
        ></Box>
      )}
    </Box>
  );
}
