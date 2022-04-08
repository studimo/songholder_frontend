import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/system";
import ReactPlayer from "react-player";
import PauseIcon from "@mui/icons-material/Pause";
import { CircleSlider } from "react-circle-slider";
import Marquee from "react-fast-marquee";
import IconButton from "@mui/material/IconButton";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import { motion } from "framer-motion";
export default function MusicPlayer({
  audioUrl,
  onPlay,
  setOnPlay,
  songName,
  setDragAble,
}: any) {
  const variants = {
    open: { scale: 1, x: 0, opacity: 1 },
    closed: { scale: 0, x: "-50%", opacity: 0 },
  };
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const player = useRef<any>(null);
  const [drag, SetDrag] = useState(false);

  document.addEventListener("mousedown", () => SetDrag(false));
  document.addEventListener("mousemove", () => SetDrag(true));
  // const [pointerEventForDrawer, SetPointerEventForDrawer] = useState("auto");

  // useEffect(() => {
  //   console.log(onPlay);
  //   if (onPlay) {
  //     SetPointerEventForDrawer("auto");
  //   } else {
  //     SetPointerEventForDrawer("none");
  //   }
  // }, [onPlay]);

  // console.log(audioUrl);
  // useEffect(() => {
  //   setAudio();
  // }, []);

  // async function setAudio() {
  //   // A1YWGXSD_IQ
  // }
  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "row",
        pointerEvents: "none",
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
            id="mainMuicCard"
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              width: "130px",
              height: "130px",
              borderRadius: "100%",
              pointerEvents: "auto",
            }}
          >
            <CardActionArea
              onClick={() => {
                if (!drag) {
                  onPlay ? setOnPlay(false) : setOnPlay(true);
                }
              }}
              onMouseOver={() => {
                setShowButton(true);
                setDragAble(true);
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
              />
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
                <div
                  onMouseLeave={() => {
                    setDragAble(true);
                  }}
                >
                  <CircleSlider
                    value={(currentTime / duration) * 100}
                    size={167}
                    // showTooltip={true}
                    knobRadius={0}
                    gradientColorFrom="#67BFC2"
                    gradientColorTo="#8062B7"
                    progressWidth={10}
                    circleWidth={10}
                    circleColor="white"
                    onChange={(e: any) => {
                      setDragAble(false);
                      if (player.current != null) {
                        player.current.seekTo((e * duration) / 100, "seconds");
                      }
                      console.log(e);
                    }}
                    onEnded={() => {
                      console.log("END");
                      setOnPlay(false);
                      if (player.current != null) {
                        player.current.seekTo(0, "seconds");
                      }
                    }}
                  />
                </div>
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
                  onProgress={(e) => {
                    setCurrentTime(e.playedSeconds);
                  }}
                  onDuration={(e) => {
                    setDuration(e);
                    console.log(duration);
                  }}
                  onEnded={() => {
                    setOnPlay(false);
                    if (player.current != null) {
                      player.current.seekTo(0, "seconds");
                    }
                  }}

                  // light={true}
                />
              </Box>
            </Box>
          </Card>
          <Box
            id="drawer"
            sx={{
              // width: "280px",
              width: "280px",
              height: "140px",
              // bgcolor: "yellow",
              ml: "-63.5px",
              overflow: "hidden",
              position: "relative",
              // outline: "solid 3px #000",

              borderTopRightRadius: 60,
              borderBottomRightRadius: 10,
              ":before": {
                position: "absolute",
                padding: "83.5px",
                // background: "#f90",
                content: '""',
                marginLeft: "-84px",
                marginTop: "-18px",
                borderRadius: "50%",
                boxShadow: `
                100px 0px 80px rgba(193, 246, 248, 1),
                  180px 0px 80px rgba(222, 206, 250, 1),
                  290px 0px 80px rgba(222, 206, 250, 1)`,
              },
              zIndex: -2,
              // pointerEvents: { pointerEventForDrawer },
              pointerEvents: "auto",
            }}
            component={motion.div}
            animate={onPlay ? "open" : "closed"}
            variants={variants}
          >
            {/* <Stack></Stack> */}

            <Marquee
              gradient={false}
              style={{
                background: "none",
                width: "150px",
                position: "absolute",
                top: "20%",
                right: "13%",
                fontSize: "28px",
              }}
              speed={20}
              delay={3}
              pauseOnHover
            >
              {songName}&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            </Marquee>
            <IconButton
              style={{
                position: "absolute",
                top: "52%",
                left: "33%",
              }}
            >
              <SkipPreviousOutlinedIcon fontSize="large" />
            </IconButton>
            <IconButton
              style={{
                position: "absolute",
                top: "52%",
                left: "50%",
              }}
              onClick={() => {
                // if (!drag) {
                onPlay ? setOnPlay(false) : setOnPlay(true);
                // }
              }}
            >
              {onPlay ? (
                <PauseRoundedIcon fontSize="large" />
              ) : (
                <PlayArrowOutlinedIcon
                  fontSize="large"
                  sx={{ transform: "scale(1.3)" }}
                />
              )}
            </IconButton>

            <IconButton
              style={{
                position: "absolute",
                top: "52%",
                right: "13%",
              }}
            >
              <SkipNextOutlinedIcon fontSize="large" />
            </IconButton>
          </Box>
        </>
      ) : (
        <>
          {/* <Box
            sx={{
              height: 50,
              width: 50,
              bgcolor: "yellow",
              borderRadius: "30px",
              background:
                "linear-gradient(134.22deg, rgba(1, 124, 117, 0.3) 23.94%, rgba(147, 2, 171, 0.3) 80.19%)",
              pointerEvents: "auto",
            }}
          /> */}
        </>
      )}
    </Box>
  );
}
