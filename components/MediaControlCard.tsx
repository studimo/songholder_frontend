import * as React from 'react'
import { useTheme } from '@mui/material/styles'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'
import { CardActionArea } from '@mui/material'
import PauseIcon from '@mui/icons-material/Pause'

export default function MediaControlCard({
  content,
  setAudioUrl,
  audioUrl,
  onPlay,
  setOnPlay,
  setSongName,
  setMusicId,
  musicId,
}: any) {

  const [showButton, setShowButton] = useState(false)

  const theme = useTheme()
  return (
    <Card
      sx={{
        display: 'flex',
        marginBottom: 3,
        marginRight: 5,
        marginLeft: 5,
        // position: "absolute",
        width: 600,
        height: 180,
        left: 256,
        top: 488,
        boxShadow: 10,
        borderTopLeftRadius: 50,
        WebkitBorderBottomRightRadius: 50,
        // box-shadow:"10,10,70,-3"
      }}
    >
      <CardMedia
        sx={{
          width: 180,
          transition: '0.2s',
          '&:hover': {
            width: 400,
            backgroundImage: `linear-gradient(134.22deg, rgba(1, 124, 117, 0.3) 23.94%, rgba(147, 2, 171, 0.3) 80.19%), url(https://img.youtube.com/vi/${content.youtubeId}/maxresdefault.jpg)`,
            // borderTopRightRadius: 15,
            borderBottomRightRadius: 50,
            // transition: "0.2s",
          },
          backgroundImage: `url(https://img.youtube.com/vi/${content.youtubeId}/maxresdefault.jpg)`,
        }}
        onMouseOver={() => {

          setShowButton(true)
        
        }}
        onMouseLeave={() => {

          setShowButton(false)
        
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
            if (audioUrl == content.youtubeId && onPlay) {

              setOnPlay(false)
            
            } else {

              setOnPlay(true)
            
            }
          
          }}
        >
          {audioUrl == content.youtubeId ? (
            onPlay ? (
              showButton ? (
                <PauseIcon
                  sx={{
                    fontSize: 100,
                    color: 'white',
                  }}
                />
              ) : (
                <></>
              )
            ) : showButton ? (
              <PlayArrowOutlinedIcon
                sx={{
                  fontSize: 100,
                  color: 'white',
                }}
              />
            ) : (
              <></>
            )
          ) : showButton ? (
            <PlayArrowOutlinedIcon
              sx={{
                fontSize: 100,
                color: 'white',
              }}
            />
          ) : (
            <></>
          )}
        </CardActionArea>
      </CardMedia>

      {/* {showButton ? <h1>Button</h1> : <></>} */}
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '70%',
          padding: '20px',
          // backgroundColor: "yellowgreen",
        }}
      >
        {/* <BookmarkSharpIcon
            fontSize="large"
            sx={{ position: "relative", right: -550, top: 0 }}
          /> */}
        <Typography
          component='div'
          variant='h5'
          fontFamily='Kanit'
          fontSize='25px'
          fontWeight={300}
          mb='5px'
        >
          Name:&nbsp;{content.name}
        </Typography>
        <Typography
          variant='subtitle1'
          color='text.secondary'
          component='div'
          fontFamily='Kanit'
          ml='30px'
          fontSize='18px'
          lineHeight='25px'
        >
          Artist:&nbsp;{content.artist}
        </Typography>
        <Typography
          variant='subtitle1'
          color='text.secondary'
          component='div'
          fontFamily='Kanit'
          ml='30px'
          fontSize='18px'
          lineHeight='25px'
        >
          Style:&nbsp;{content.style}
        </Typography>
        <Typography
          variant='subtitle1'
          color='text.secondary'
          component='div'
          fontFamily='Kanit'
          ml='30px'
          fontSize='18px'
          lineHeight='25px'
        >
          Requirement:&nbsp;{content.requirement}
        </Typography>
        {/* <OutlinedInput
            placeholder="add your comment..."
            sx={{ height: "30px", width: "200px", borderRadius: "30%" }}
          /> */}
      </CardContent>
    </Card>
  )

}
