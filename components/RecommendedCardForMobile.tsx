import {
  Card,
  CardActionArea,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'
import PauseIcon from '@mui/icons-material/Pause'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function RecommendedCardForMobile({
  content,
  setAudioUrl,
  audioUrl,
  onPlay,
  setOnPlay,
  setSongName,
  setMusicId,
  musicId,
  normalWidth,
  normalHeight,
  hoverWidth,
  hoverHeight,
  fontSize,
  buttonSize,
}: any) {
  const [showButton, setShowButton] = useState(false)
  // console.log(content);
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '400px',
        // bgcolor: "violet",
      }}
      component={motion.div}
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
    >
      <Card style={{ border: 'none', boxShadow: 'none', background: 'none' }}>
        <CardMedia
          sx={{
            clipPath: 'polygon(15% 0%, 100% 0%,85% 100%,0% 100%)',
            height: showButton ? hoverHeight : normalHeight, //220
            width: showButton ? hoverWidth : normalWidth, //220
            transition: '0.2s',
            transitionDelay: '0.02s',
            backgroundSize: 'cover',
            borderRadius: '0px',
            // '&:hover': {
            // clipPath: 'polygon(9% 0%, 100% 0%,91% 100%,0% 100%)',
            // height: hoverHeight, //280
            // width: hoverWidth, //500
            // backgroundImage: `linear-gradient(134.22deg, rgba(1, 124, 117, 0.3) 23.94%, rgba(147, 2, 171, 0.3) 80.19%), url(https://img.youtube.com/vi/${content.youtubeId}/maxresdefault.jpg)`,
            // borderTopRightRadius: 15,
            // borderBottomRightRadius: 50,
            // transition: "0.2s",
            // },
            boxShadow: '10px 0px 25px rgba(0, 0, 0, 0.5)',
            backgroundImage: showButton
              ? `linear-gradient(134.22deg, rgba(1, 124, 117, 0.3) 23.94%, rgba(147, 2, 171, 0.3) 80.19%), url(https://img.youtube.com/vi/${content.youtubeId}/maxresdefault.jpg)`
              : `url(https://img.youtube.com/vi/${content.youtubeId}/maxresdefault.jpg)`,
          }}
        >
          <CardActionArea
            sx={{
              height: '100%',
              weight: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomRightRadius: 50,
            }}
            onClick={() => {
              setAudioUrl(content.youtubeId)
              setSongName(content.name)
              setMusicId(musicId)
              const ua = navigator.userAgent
              if (
                /iPad|iPhone|iPod/.test(ua) ||
                (navigator.platform === 'MacIntel' &&
                  navigator.maxTouchPoints > 1)
              ) {
                setOnPlay(false)
              } else if (audioUrl == content.youtubeId && onPlay) {
                setOnPlay(false)
              } else {
                setOnPlay(true)
              }
              setShowButton(true)
              setTimeout(() => {
                setShowButton(false)
              }, 200)
            }}
          >
            {audioUrl == content.youtubeId ? (
              onPlay ? (
                showButton ? (
                  <PauseIcon
                    sx={{
                      fontSize: buttonSize,
                      color: 'white',
                    }}
                  />
                ) : (
                  <></>
                )
              ) : showButton ? (
                <PlayArrowOutlinedIcon
                  sx={{
                    fontSize: buttonSize,
                    color: 'white',
                  }}
                />
              ) : (
                <></>
              )
            ) : showButton ? (
              <PlayArrowOutlinedIcon
                sx={{
                  fontSize: buttonSize,
                  color: 'white',
                }}
              />
            ) : (
              <></>
            )}
          </CardActionArea>
        </CardMedia>
      </Card>
      <Typography
        // fontWeight='400'
        // fontSize='20px'
        // lineHeight='42.4px'
        // color='#6F9BC3'
        marginRight='30px'
        component={motion.div}
        // animate={{ fontSize: '20px' }}
        sx={{
          fontFamily: 'Mitr',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: fontSize,
          lineHeight: '28px',

          color: '#6F9BC4',
        }}
        // alignSelf="center"
      >
        {content.name}
      </Typography>
    </Stack>
  )
}
