import * as React from 'react'
import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Stack,
} from '@mui/material'
import { PlayArrowOutlined, Pause } from '@mui/icons-material'
// import PauseIcon from '@mui/icons-material/Pause'

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
          src: `url(https://img.youtube.com/vi/${content.youtubeId}/maxresdefault.jpg)`,
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
                <Pause
                  sx={{
                    fontSize: 100,
                    color: 'white',
                  }}
                />
              ) : (
                <></>
              )
            ) : showButton ? (
              <PlayArrowOutlined
                sx={{
                  fontSize: 100,
                  color: 'white',
                }}
              />
            ) : (
              <></>
            )
          ) : showButton ? (
            <PlayArrowOutlined
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
          // fontFamily='Kanit'
          // fontSize='25px'
          // fontWeight={300}
          // mb='5px'
          // mt='-10px'
          sx={{
            fontFamily: 'Mitr',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '26px',
            lineHeight: '25px',
            mb: '10px',
            ml: '30px',
            mt: '10px',

            color: '#474747',

            wordBreak: 'break-word',
            // overflow: 'hidden',
            // textOverflow: 'ellipsis',
            // whiteSpace: 'nowrap',
          }}
        >
          {content.name}
        </Typography>
        <Stack flexDirection='row' sx={{ mt: '8px' }}>
          <Typography
            variant='subtitle1'
            component='div'
            ml='30px'
            sx={{
              fontFamily: 'Mitr',
              fontStyle: 'normal',
              fontWeight: 300,
              fontSize: '17px',
              lineHeight: '20px',

              color: ' #979797',
            }}
          >
            Artist:
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Mitr',
              fontStyle: 'normal',
              fontWeight: 300,
              fontSize: '17px',
              lineHeight: '20px',

              color: ' #474747',
            }}
          >
            &nbsp;{content.artist}
          </Typography>
        </Stack>
        <Stack flexDirection='row' sx={{ mt: '8px' }}>
          <Typography
            variant='subtitle1'
            component='div'
            ml='30px'
            sx={{
              fontFamily: 'Mitr',
              fontStyle: 'normal',
              fontWeight: 300,
              fontSize: '17px',
              lineHeight: '20px',

              color: ' #979797',
            }}
          >
            Style:
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Mitr',
              fontStyle: 'normal',
              fontWeight: 300,
              fontSize: '17px',
              lineHeight: '20px',

              color: ' #474747',
            }}
          >
            &nbsp;{content.style}
          </Typography>
        </Stack>
        <Stack flexDirection='row' sx={{ mt: '8px' }}>
          <Typography
            variant='subtitle1'
            component='div'
            ml='30px'
            sx={{
              fontFamily: 'Mitr',
              fontStyle: 'normal',
              fontWeight: 300,
              fontSize: '17px',
              lineHeight: '20px',

              color: ' #979797',
            }}
          >
            Requirement:
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Mitr',
              fontStyle: 'normal',
              fontWeight: 300,
              fontSize: '17px',
              lineHeight: '20px',

              color: ' #474747',
            }}
          >
            &nbsp;{content.requirement}
          </Typography>
        </Stack>
        <Stack
          flexDirection='row'
          sx={{
            alignSelf: 'flex-end',
            mr: '0px',
            mt: '-15px',
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
            position: 'absolute',
          }}
        >
          <svg width='15' height='11' viewBox='0 0 15 11' fill='none'>
            <path
              d='M1.25 5.5L0.584446 5.15426C0.471851 5.371 0.471851 5.629 0.584446 5.84574L1.25 5.5ZM13.75 5.5L14.4156 5.84574C14.5281 5.629 14.5281 5.371 14.4156 5.15426L13.75 5.5ZM1.25 5.5C1.91555 5.84574 1.91544 5.84596 1.91534 5.84616C1.91531 5.8462 1.91522 5.84639 1.91517 5.84648C1.91508 5.84665 1.91502 5.84677 1.91499 5.84682C1.91494 5.84691 1.91503 5.84675 1.91525 5.84634C1.91569 5.8455 1.91667 5.84365 1.91818 5.84081C1.92122 5.83513 1.9264 5.8255 1.93372 5.8122C1.94835 5.78558 1.97148 5.74429 2.00295 5.69044C2.06596 5.58263 2.16206 5.42504 2.29005 5.2343C2.54693 4.85146 2.92739 4.34236 3.42078 3.83581C4.41926 2.8107 5.79989 1.875 7.5 1.875V0.375C5.22284 0.375 3.47847 1.6268 2.34626 2.78919C1.77432 3.37639 1.33801 3.96104 1.04447 4.39852C0.897241 4.61793 0.784716 4.80214 0.707895 4.93359C0.669457 4.99936 0.639873 5.05207 0.619273 5.08954C0.60897 5.10828 0.600907 5.12322 0.595099 5.13409C0.592195 5.13953 0.589854 5.14395 0.588078 5.14732C0.58719 5.14901 0.586443 5.15043 0.585837 5.15159C0.585535 5.15217 0.585267 5.15268 0.585036 5.15312C0.58492 5.15335 0.584772 5.15363 0.584714 5.15374C0.584576 5.15401 0.584446 5.15426 1.25 5.5ZM7.5 1.875C9.20011 1.875 10.5807 2.8107 11.5792 3.83581C12.0726 4.34236 12.4531 4.85146 12.71 5.2343C12.8379 5.42504 12.934 5.58263 12.997 5.69044C13.0285 5.74429 13.0516 5.78558 13.0663 5.8122C13.0736 5.8255 13.0788 5.83513 13.0818 5.84081C13.0833 5.84365 13.0843 5.8455 13.0848 5.84634C13.085 5.84675 13.0851 5.84691 13.085 5.84682C13.085 5.84677 13.0849 5.84665 13.0848 5.84648C13.0848 5.84639 13.0847 5.8462 13.0847 5.84616C13.0846 5.84596 13.0844 5.84574 13.75 5.5C14.4156 5.15426 14.4154 5.15401 14.4153 5.15374C14.4152 5.15363 14.4151 5.15335 14.415 5.15312C14.4147 5.15268 14.4145 5.15217 14.4142 5.15159C14.4136 5.15043 14.4128 5.14901 14.4119 5.14732C14.4101 5.14395 14.4078 5.13953 14.4049 5.13409C14.3991 5.12322 14.391 5.10828 14.3807 5.08954C14.3601 5.05207 14.3305 4.99936 14.2921 4.93359C14.2153 4.80214 14.1028 4.61793 13.9555 4.39852C13.662 3.96104 13.2257 3.37639 12.6537 2.78919C11.5215 1.6268 9.77716 0.375 7.5 0.375V1.875ZM13.75 5.5C13.0844 5.15426 13.0846 5.15404 13.0847 5.15384C13.0847 5.1538 13.0848 5.15361 13.0848 5.15352C13.0849 5.15335 13.085 5.15323 13.085 5.15318C13.0851 5.15309 13.085 5.15325 13.0848 5.15366C13.0843 5.1545 13.0833 5.15635 13.0818 5.15919C13.0788 5.16487 13.0736 5.1745 13.0663 5.1878C13.0516 5.21442 13.0285 5.25571 12.997 5.30956C12.934 5.41737 12.8379 5.57496 12.71 5.7657C12.4531 6.14854 12.0726 6.65764 11.5792 7.16419C10.5807 8.1893 9.20011 9.125 7.5 9.125V10.625C9.77716 10.625 11.5215 9.3732 12.6537 8.21081C13.2257 7.62361 13.662 7.03896 13.9555 6.60148C14.1028 6.38207 14.2153 6.19786 14.2921 6.06641C14.3305 6.00064 14.3601 5.94793 14.3807 5.91046C14.391 5.89172 14.3991 5.87678 14.4049 5.86591C14.4078 5.86047 14.4101 5.85605 14.4119 5.85268C14.4128 5.85099 14.4136 5.84957 14.4142 5.84841C14.4145 5.84783 14.4147 5.84732 14.415 5.84688C14.4151 5.84665 14.4152 5.84637 14.4153 5.84626C14.4154 5.84599 14.4156 5.84574 13.75 5.5ZM7.5 9.125C5.79989 9.125 4.41926 8.1893 3.42078 7.16419C2.92739 6.65764 2.54693 6.14854 2.29005 5.7657C2.16206 5.57496 2.06596 5.41737 2.00295 5.30956C1.97148 5.25571 1.94835 5.21442 1.93372 5.1878C1.9264 5.1745 1.92122 5.16487 1.91818 5.15919C1.91667 5.15635 1.91569 5.1545 1.91525 5.15366C1.91503 5.15325 1.91494 5.15309 1.91499 5.15318C1.91502 5.15323 1.91508 5.15335 1.91517 5.15352C1.91522 5.15361 1.91531 5.1538 1.91534 5.15384C1.91544 5.15404 1.91555 5.15426 1.25 5.5C0.584446 5.84574 0.584576 5.84599 0.584714 5.84626C0.584772 5.84637 0.58492 5.84665 0.585036 5.84688C0.585267 5.84732 0.585535 5.84783 0.585837 5.84841C0.586443 5.84957 0.58719 5.85099 0.588078 5.85268C0.589854 5.85605 0.592195 5.86047 0.595099 5.86591C0.600907 5.87678 0.60897 5.89172 0.619273 5.91046C0.639873 5.94793 0.669457 6.00064 0.707895 6.06641C0.784716 6.19786 0.897241 6.38207 1.04447 6.60148C1.33801 7.03896 1.77432 7.62361 2.34626 8.21081C3.47847 9.3732 5.22284 10.625 7.5 10.625V9.125ZM8.625 5.5C8.625 6.12132 8.12132 6.625 7.5 6.625V8.125C8.94975 8.125 10.125 6.94975 10.125 5.5H8.625ZM7.5 6.625C6.87868 6.625 6.375 6.12132 6.375 5.5H4.875C4.875 6.94975 6.05025 8.125 7.5 8.125V6.625ZM6.375 5.5C6.375 4.87868 6.87868 4.375 7.5 4.375V2.875C6.05025 2.875 4.875 4.05025 4.875 5.5H6.375ZM7.5 4.375C8.12132 4.375 8.625 4.87868 8.625 5.5H10.125C10.125 4.05025 8.94975 2.875 7.5 2.875V4.375Z'
              fill='#B9B9B9'
            />
          </svg>
          <Typography
            sx={{
              fontFamily: 'Mitr',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '13px',
              lineHeight: '28px',

              color: '#B9B9B9',
            }}
          >
            &nbsp;12k
          </Typography>
          <svg
            width='13'
            height='13'
            viewBox='0 0 13 13'
            fill='none'
            style={{ marginLeft: '15px' }}
          >
            <path
              d='M4 11.5L4 12.25H4L4 11.5ZM9.85025 11.5V10.75L9.85024 10.75L9.85025 11.5ZM11.076 10.4952L10.3405 10.3481L11.076 10.4952ZM11.826 6.74517L12.5614 6.89225L11.826 6.74517ZM7.75 5.25002L7.12596 4.83399C6.97253 5.06414 6.95823 5.36004 7.08874 5.60391C7.21926 5.84778 7.4734 6.00002 7.75 6.00002V5.25002ZM9.2661 2.97587L9.89014 3.3919V3.3919L9.2661 2.97587ZM8.5292 1.06982L8.3473 1.79743L8.3473 1.79743L8.5292 1.06982ZM8.49948 1.06239L8.68138 0.334781L8.68138 0.334781L8.49948 1.06239ZM1.5 5.25002L1.5 4.50002C1.30109 4.50002 1.11032 4.57904 0.969671 4.71969C0.829018 4.86034 0.75 5.05111 0.75 5.25002H1.5ZM1.5 11.5H0.75C0.75 11.9142 1.08578 12.25 1.5 12.25L1.5 11.5ZM7.24724 1.46158L6.67779 0.973484L6.67779 0.973484L7.24724 1.46158ZM3.25 5.25003V11.5H4.75V5.25003H3.25ZM4 12.25L9.85025 12.25L9.85024 10.75L4 10.75L4 12.25ZM11.8114 10.6423L12.5614 6.89225L11.0905 6.59808L10.3405 10.3481L11.8114 10.6423ZM10.6002 4.50002H7.75V6.00002H10.6002V4.50002ZM8.37404 5.66604L9.89014 3.3919L8.64206 2.55985L7.12596 4.83399L8.37404 5.66604ZM8.71111 0.342213L8.68138 0.334781L8.31757 1.78999L8.3473 1.79743L8.71111 0.342213ZM4 4.50003L1.5 4.50002L1.5 6.00002L4 6.00003L4 4.50003ZM0.75 5.25002V11.5H2.25V5.25002H0.75ZM1.5 12.25L4 12.25L4 10.75L1.5 10.75L1.5 12.25ZM8.68138 0.334781C7.94645 0.15105 7.1708 0.398313 6.67779 0.973484L7.81668 1.94967C7.93993 1.80588 8.13384 1.74406 8.31757 1.78999L8.68138 0.334781ZM9.89014 3.3919C10.6573 2.24112 10.0529 0.677655 8.71111 0.342213L8.3473 1.79743C8.68274 1.88129 8.83386 2.27215 8.64206 2.55985L9.89014 3.3919ZM12.5614 6.89225C12.8089 5.65467 11.8623 4.50002 10.6002 4.50002V6.00002C10.9158 6.00002 11.1524 6.28868 11.0905 6.59808L12.5614 6.89225ZM9.85025 12.25C10.8036 12.25 11.6244 11.5771 11.8114 10.6423L10.3405 10.3481C10.2938 10.5818 10.0886 10.75 9.85025 10.75V12.25ZM6.67779 0.973484L3.43056 4.76194L4.56944 5.73812L7.81668 1.94967L6.67779 0.973484Z'
              fill='#B9B9B9'
            />
          </svg>
          <Typography
            sx={{
              fontFamily: 'Mitr',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '13px',
              lineHeight: '28px',

              color: '#B9B9B9',
            }}
          >
            &nbsp;12k
          </Typography>
        </Stack>
        {/* <OutlinedInput
            placeholder="add your comment..."
            sx={{ height: "30px", width: "200px", borderRadius: "30%" }}
          /> */}
      </CardContent>
    </Card>
  )
}
