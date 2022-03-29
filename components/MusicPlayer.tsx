import {
  Button,
  Card,
  CardActionArea,
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
export default function MusicPlayer({ audioUrl, onPlay, setOnPlay }: any) {
  const [showButton, setShowButton] = useState(false);

  const player = useRef(null);
  let drag = false;
  document.addEventListener("mousedown", () => (drag = false));

  document.addEventListener("mousemove", () => (drag = true));
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
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
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
        <Card
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0)",
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
            }}
            onMouseLeave={() => {
              setShowButton(false);
            }}
          >
            {/* <CircularProgress
              variant="determinate"
              value={50}
              sx={{
                display: "block",
                zIndex: 2,
                position: "fixed",
                width: "300px",
                height: "300px",
              }}
            /> */}
            <Box
              sx={{
                width: "100%",
                height: "150px",
                // borderRadius: "100%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
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

              <ReactPlayer
                url={`https://www.youtube.com/embed/${audioUrl}`}
                // width="0px"
                height="500px"
                width="300px"
                playing={onPlay}
                style={{ zIndex: -1 }}
                ref={player}
                // light={true}
              />
            </Box>
          </CardActionArea>
        </Card>
      ) : (
        <></>
      )}
      {/* <Button
        onClick={() => {
          player.seekTo(0);
        }}
      >
        test
      </Button> */}
      {/* <ReactAudioPlayer
        id="ytPlayer"
        src={audioUrl}
        // controls
        onPlay={() => {
          setOnPlay(true);
        }}
        onPause={() => {
          setOnPlay(false);
        }}
      /> */}
      {audioUrl == "" ? (
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
      ) : (
        <></>
        // <CardMedia
        //   sx={{
        //     // clipPath: "polygon(15% 0%, 100% 0%,85% 100%,0% 100%)",
        //     height: 110,
        //     width: 200,
        //     backgroundSize: "cover",
        //     backgroundImage: `url(https://img.youtube.com/vi/${audioUrl}/maxresdefault.jpg)`,
        //   }}
        // />
      )}
      {/* {audioUrl == "" ? (
        <></>
      ) : onPlay ? (
        <Button onClick={pauseAudio}>Pause</Button>
      ) : (
        <Button onClick={playAudio}>Play</Button>
      )} */}
      {/* <ReactAudioPlayer src="" autoPlay controls /> */}
    </Box>
  );
}
