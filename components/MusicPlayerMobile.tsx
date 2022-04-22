import { Card, CardActionArea, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { Box } from '@mui/system'
import ReactPlayer from 'react-player'
import PauseIcon from '@mui/icons-material/Pause'
import { CircleSlider } from 'react-circle-slider'
import Marquee from 'react-fast-marquee'
import IconButton from '@mui/material/IconButton'
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined'
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'
import PauseRoundedIcon from '@mui/icons-material/PauseRounded'
import { motion } from 'framer-motion'

export default function MusicPlayerMobile({
  audioUrl,
  onPlay,
  setOnPlay,
  songName,
  setDragAble,
  changeSong,
  transform,
  pauseOnHover,
}: any) {
  const variants = {
    open: { scale: 1, x: 0, opacity: 1 },
    closed: { scale: 0, x: '-50%', opacity: 0 },
  }
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showButton, setShowButton] = useState(false)
  const player = useRef<any>(null)
  const [loading, SetLoading] = useState(true)
  const [onOpenControl, setOnOpenControl] = useState(false)

  const [controlTimeout, setControlTimeout] = useState<any>(null)

  useEffect(() => {
    //   SetLoading(true)
    //   setTimeout(() => {
    //     setOnPlay(true)
    //   }, 500)
  }, [audioUrl])

  useEffect(() => {
    if (!loading) {
      setDragAble(true)
    }
  }, [loading])

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
        position: 'fixed',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        pointerEvents: 'none',
        // width: "500px",
        // height: "200px",
        // top: "50%",
        // left: "50%",
        // marginTop: "-100px",
        // marginLeft: "-250px",
        // bgcolor: "yellow",
        transform: transform,
      }}
    >
      {audioUrl ? (
        <>
          <Card
            id='mainMuicCard'
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0)',
              width: '130px',
              height: '130px',
              borderRadius: '100%',
              pointerEvents: 'auto',
            }}
          >
            <CardActionArea
              onClick={() => {
                if (!loading) {
                  onPlay ? setOnPlay(false) : setOnPlay(true)
                  setOnOpenControl(true)
                  clearTimeout(controlTimeout)
                }
              }}
              onMouseOver={() => {
                setShowButton(true)
                setOnOpenControl(true)
                clearTimeout(controlTimeout)
              }}
              onMouseLeave={() => {
                setShowButton(false)
                const timeOut = setTimeout(() => {
                  setOnOpenControl(false)
                }, 3000)
                setControlTimeout(timeOut)
              }}
              sx={{
                borderRadius: '50px',
              }}
            >
              <Box
                sx={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '100%',
                  zIndex: 3,
                  position: 'fixed',
                  ml: '15px',
                  mt: '15px',
                  // backgroundColor: 'yellow',
                }}
              />
            </CardActionArea>

            <Box
              sx={{
                width: '130px',
                height: '130px',
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '30px',
              }}
            >
              <Box
                sx={{
                  fontSize: 50,
                  color: 'white',
                  // display: 'block',
                  zIndex: 2,
                  position: 'fixed',
                  // mt: '20px',
                  paddingTop: '11px',
                  width: '200px',
                  height: '200px',
                  display: 'flex',
                  // backgroundColor: 'yellow',
                  // alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div>
                  <CircleSlider
                    value={(currentTime / duration) * 100}
                    size={178}
                    // showTooltip={true}
                    knobRadius={10}
                    gradientColorFrom='#67BFC2'
                    gradientColorTo='#8062B7'
                    progressWidth={13}
                    circleWidth={13}
                    circleColor='white'
                    onChange={(e: any) => {
                      setDragAble(false)
                      if (player.current != null) {
                        player.current.seekTo((e * duration) / 100, 'seconds')
                      }
                      // console.log(e)
                    }}
                    onEnded={() => {
                      console.log('END')
                      // setOnPlay(false)
                      if (player.current != null) {
                        player.current.seekTo(0, 'seconds')
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
                      color: 'white',
                      display: 'block',
                      zIndex: 2,
                      position: 'fixed',
                    }}
                  />
                ) : (
                  <PlayArrowOutlinedIcon
                    sx={{
                      fontSize: 50,
                      color: 'white',
                      display: 'block',
                      zIndex: 2,
                      position: 'fixed',
                    }}
                  />
                )
              ) : (
                <></>
              )}
              <Box
                // sx={{ transform: `rotate(${}deg)` }}
                sx={{}}
              >
                <Box
                  component='img'
                  sx={{
                    width: 'auto',
                    height: '140px',
                    // transform: 'scale(0.1)',
                  }}
                  alt={`Cover image for youtubeId ${audioUrl}`}
                  src={`https://img.youtube.com/vi/${audioUrl}/maxresdefault.jpg`}
                />
                <ReactPlayer
                  // fileConfig={{ attributes: { playsinline: true } }}
                  url={`https://www.youtube.com/embed/${audioUrl}`}
                  // config={{ file: { attributes: { playsInline: true } } }}
                  // config={{ vimeo: { playerOptions: { playsinline: 1 } } }}
                  // width="0px"
                  // height='1000px'
                  // width='300px'
                  height='0px'
                  width='0px'
                  playing={onPlay}
                  style={{ zIndex: -1 }}
                  ref={player}
                  onProgress={e => {
                    setTimeout(() => {
                      setDragAble(true)
                    }, 200)
                    setCurrentTime(e.playedSeconds)
                  }}
                  onDuration={e => {
                    setDuration(e)
                    // console.log(duration)
                  }}
                  onEnded={() => {
                    setOnPlay(false)
                    if (player.current != null) {
                      player.current.seekTo(0, 'seconds')
                    }
                  }}
                  onReady={() => {
                    SetLoading(false)
                    setDragAble(true)
                    // this.player.getInternalPlayer().playVideo()
                    // player.getinternalPlayer.plaVideo()
                    // console.log("ready")
                  }}

                  // light={true}
                />
              </Box>
            </Box>
          </Card>
          <Box
            id='drawer'
            sx={{
              // width: "280px",
              width: '280px',
              height: '140px',
              // bgcolor: "yellow",
              ml: '-63.5px',
              overflow: 'hidden',
              position: 'relative',
              // outline: "solid 3px #000",

              borderTopRightRadius: 60,
              borderBottomRightRadius: 10,
              ':before': {
                position: 'absolute',
                padding: '83.5px',
                // background: "#f90",
                content: '""',
                marginLeft: '-84px',
                marginTop: '-18px',
                borderRadius: '50%',
                boxShadow: `
                100px 0px 80px rgba(193, 246, 248, 1),
                  180px 0px 80px rgba(222, 206, 250, 1),
                  290px 0px 80px rgba(222, 206, 250, 1)`,
              },
              zIndex: -2,
              // pointerEvents: { pointerEventForDrawer },
              pointerEvents: 'auto',
            }}
            onMouseOver={() => {
              setOnOpenControl(true)
              clearTimeout(controlTimeout)
            }}
            onMouseLeave={() => {
              setShowButton(false)
              const timeOut = setTimeout(() => {
                setOnOpenControl(false)
              }, 3000)
              setControlTimeout(timeOut)
            }}
            component={motion.div}
            animate={onOpenControl ? 'open' : 'closed'}
            variants={variants}
          >
            {/* <Stack></Stack> */}
            <Marquee
              gradient={false}
              style={{
                background: 'none',
                width: '150px',
                position: 'absolute',
                top: '20%',
                right: '13%',
                fontSize: '28px',
                lineHeight: '42px',

                fontFamily: 'Mitr',
                fontStyle: 'normal',
                fontWeight: 400,
                // fontSize: '18px',

                color: '#3a597a',
                pointerEvents: pauseOnHover ? 'auto' : 'none',
              }}
              speed={20}
              delay={3}
              pauseOnHover={pauseOnHover}
            >
              {songName}&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            </Marquee>
            <IconButton
              style={{
                position: 'absolute',
                top: '52%',
                left: '33%',
              }}
              onClick={() => changeSong(-1)}
            >
              <SkipPreviousOutlinedIcon fontSize='large' />
            </IconButton>
            <IconButton
              style={{
                position: 'absolute',
                top: '52%',
                left: '50%',
              }}
              onClick={() => {
                if (!loading) {
                  onPlay ? setOnPlay(false) : setOnPlay(true)
                }
              }}
            >
              {onPlay ? (
                <PauseRoundedIcon fontSize='large' />
              ) : (
                <PlayArrowOutlinedIcon
                  fontSize='large'
                  sx={{ transform: 'scale(1.3)' }}
                />
              )}
            </IconButton>

            <IconButton
              style={{
                position: 'absolute',
                top: '52%',
                right: '13%',
              }}
              onClick={() => changeSong(1)}
            >
              <SkipNextOutlinedIcon fontSize='large' />
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
  )
}
