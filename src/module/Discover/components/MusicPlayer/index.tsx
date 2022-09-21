import { Card, CardActionArea } from '@mui/material'
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
import {
  BackgroundActionArea,
  CircleSliderContainer,
  CircleSliderWrap,
  DrawerContainer,
  MusicMainPlayerCard,
  MusicPlayerContainer,
  PlayPauseIconWrap,
  ReactPlayerWrap,
  ScreenAreaContainer,
} from './styled'
import { MusicPlayerProps } from './types'

export default function MusicPlayer(musicPlayerProps: MusicPlayerProps) {
  // {
  //   audioUrl,
  //   onPlay,
  //   setOnPlay,
  //   songName,
  //   setDragAble,
  //   changeSong,
  // }: any
  let { audioUrl, songName, onPlay, setOnPlay } = musicPlayerProps

  // const [audioUrl, setAudioUrl] = useState('')
  // const [songName, setSongName] = useState('')

  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const playerRef = useRef<ReactPlayer>(null)

  const [showButton, setShowButton] = useState(false)

  const screenAreaContainerRef = useRef<HTMLDivElement>(null)

  const [dragAble, setDragAble] = useState(true)

  const [onOpenControl, setOnOpenControl] = useState(false)

  const [controlTimeout, setControlTimeout] = useState<any>(null)

  const [onDrag, setOnDrag] = useState(false)
  const drawerVariants = {
    open: { scale: 1, x: 0, opacity: 1 },
    closed: { scale: 0, x: '-50%', opacity: 0 },
  }
  return (
    <motion.div
      ref={screenAreaContainerRef}
      style={{
        display: 'flex',
        position: 'fixed',
        width: '92%',
        height: 'calc(100vh - 90px)',
        marginTop: '20px',

        // backgroundColor: 'red',
        zIndex: 2,
        pointerEvents: 'none',
      }}
      onMouseDown={() => setOnDrag(false)}
      onMouseMove={() => setOnDrag(true)}
    >
      {audioUrl && (
        <motion.div
          drag={dragAble}
          dragConstraints={screenAreaContainerRef}
          style={{
            // display: 'flex',
            // backgroundColor: 'purple',
            margin: '25px 200px 200px 40px',
            width: '270px',
            height: '140px',
          }}
        >
          <MusicPlayerContainer>
            <MusicMainPlayerCard>
              <CardActionArea
                onClick={() => {
                  //   if (!drag && !loading) {
                  if (!onDrag) setOnPlay(!onPlay)
                  // console.log(playerRef.current?.state)
                  // playerRef.current?.setState({ playing: true })
                  // console.log(playerRef.current?.state)
                  //   }
                }}
                onMouseOver={() => {
                  setShowButton(true)
                  setDragAble(true)
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
                <BackgroundActionArea />
              </CardActionArea>

              <PlayPauseIconWrap>
                <CircleSliderContainer>
                  <CircleSliderWrap
                    onMouseLeave={() => {
                      // setDragAble(true)
                    }}
                  >
                    <CircleSlider
                      value={(currentTime / duration) * 100}
                      size={167}
                      // showTooltip={true}
                      knobRadius={7}
                      gradientColorFrom='#67BFC2'
                      gradientColorTo='#8062B7'
                      progressWidth={10}
                      circleWidth={10}
                      circleColor='rgba(0, 0, 0, 0.1)'
                      onChange={(e: any) => {
                        setDragAble(false)
                        if (playerRef.current != null) {
                          playerRef.current.seekTo(
                            (e * duration) / 100,
                            'seconds',
                          )
                        }
                        // console.log(e)
                      }}
                      // onEnded={() => {
                      //   console.log('END')
                      //   // setOnPlay(false)
                      //   if (player.current != null) {
                      //     player.current.seekTo(0, 'seconds')
                      //   }
                      // }}
                    />
                  </CircleSliderWrap>
                </CircleSliderContainer>
                {showButton && onPlay && (
                  <PauseIcon
                    sx={{
                      fontSize: 50,
                      color: 'white',
                      display: 'block',
                      zIndex: 2,
                      position: 'fixed',
                    }}
                  />
                )}
                {showButton && !onPlay && (
                  <PlayArrowOutlinedIcon
                    sx={{
                      fontSize: 50,
                      color: 'white',
                      display: 'block',
                      zIndex: 2,
                      position: 'fixed',
                    }}
                  />
                )}
                <ReactPlayerWrap>
                  <ReactPlayer
                    url={`https://www.youtube.com/embed/${audioUrl}`}
                    // width="0px"
                    height='1000px'
                    width='320px'
                    playing={onPlay}
                    style={{ zIndex: -1 }}
                    ref={playerRef}
                    // playsinline={true}
                    // volume={0.3}
                    onProgress={(e: any) => {
                      setCurrentTime(e.playedSeconds)
                    }}
                    onDuration={(e: any) => {
                      setDuration(e)
                    }}
                    onEnded={() => {
                      setOnPlay(false)
                      if (playerRef.current != null) {
                        playerRef.current.seekTo(0, 'seconds')
                      }
                    }}
                    // onReady={() => {
                    //   SetLoading(false)
                    //   // console.log("ready")
                    // }}

                    // light={true}
                  />
                </ReactPlayerWrap>
              </PlayPauseIconWrap>
            </MusicMainPlayerCard>
            <motion.div
              // animate={onOpenControl ? 'open' : 'closed'}
              animate='open'
              variants={drawerVariants}
            >
              <DrawerContainer
                onMouseOver={() => {
                  setDragAble(true)
                  setOnOpenControl(true)
                  clearTimeout(controlTimeout)
                }}
                onMouseLeave={() => {
                  //   setShowButton(false)
                  const timeOut = setTimeout(() => {
                    setOnOpenControl(false)
                  }, 3000)
                  setControlTimeout(timeOut)
                }}
                // component={motion.div}
                // animate={onOpenControl ? 'open' : 'closed'}
                // variants={variants}
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
                    fontFamily: 'Mitr',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '42px',

                    color: '#3a597a',

                    pointerEvents: 'none',
                  }}
                  speed={20}
                  delay={3}
                  // pauseOnHover
                >
                  {songName}
                  &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                </Marquee>
                <IconButton
                  style={{
                    position: 'absolute',
                    top: '52%',
                    left: '33%',
                  }}
                  // onClick={() => changeSong(-1)}
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
                    // if (!drag && !loading) {
                    if (!onDrag) setOnPlay(!onPlay)
                    // }
                  }}
                >
                  {onPlay && <PauseRoundedIcon fontSize='large' />}
                  {!onPlay && (
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
                  // onClick={() => changeSong(1)}
                >
                  <SkipNextOutlinedIcon fontSize='large' />
                </IconButton>
              </DrawerContainer>
            </motion.div>
          </MusicPlayerContainer>
        </motion.div>
      )}
    </motion.div>
  )
}
