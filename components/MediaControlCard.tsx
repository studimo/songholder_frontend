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
        borderTopLeftRadius: 35,
        borderTopRightRadius: 5,
        WebkitBorderBottomRightRadius: 35,
        WebkitBorderBottomLeftRadius: 5,
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
            mb: '0px',
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
            mr: '30px',
            mt: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
            position: 'absolute',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Mitr',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '24px',
              // background:
              //   'linearGradient(90deg, #9074CA 12.84%, #31C8BF 118.92%)',
              // WebkitBackgroundClip: 'text',
              // WebkitTextFillColor: 'transparent',
              // WebkitTextFillColor: 'transparent',
              // textFillColor: 'transparent',
              color: '#9074CA',
              mr: '10px',
            }}
          >
            75% funded
          </Typography>
          <svg width='21' height='14' viewBox='0 0 18 12' fill='none'>
            <path
              d='M1.5 6L0.834446 5.65426C0.721851 5.871 0.721851 6.129 0.834446 6.34574L1.5 6ZM16.5 6L17.1656 6.34574C17.2781 6.129 17.2781 5.871 17.1656 5.65426L16.5 6ZM1.5 6C2.16555 6.34574 2.16544 6.34596 2.16534 6.34615C2.16532 6.34619 2.16523 6.34636 2.16519 6.34644C2.16511 6.34659 2.16508 6.34666 2.16508 6.34666C2.16508 6.34665 2.16525 6.34633 2.16558 6.3457C2.16624 6.34445 2.16755 6.34197 2.16951 6.3383C2.17343 6.33096 2.17994 6.31888 2.18902 6.30237C2.20717 6.26934 2.23557 6.21866 2.27404 6.15284C2.35103 6.0211 2.46799 5.82933 2.6235 5.59758C2.93543 5.13271 3.39756 4.51424 3.99749 3.89831C5.20903 2.65445 6.90216 1.5 9 1.5V0C6.32511 0 4.26824 1.47055 2.92297 2.85169C2.24449 3.54826 1.72651 4.24229 1.37792 4.7618C1.20317 5.02223 1.06978 5.24061 0.97898 5.39599C0.93355 5.47372 0.898695 5.53583 0.874572 5.57971C0.862508 5.60165 0.853119 5.61905 0.846427 5.63158C0.843081 5.63785 0.840408 5.6429 0.83841 5.64669C0.837411 5.64858 0.836581 5.65017 0.835921 5.65143C0.83559 5.65206 0.835302 5.65261 0.835056 5.65308C0.834934 5.65332 0.834781 5.65361 0.834719 5.65373C0.834577 5.654 0.834446 5.65426 1.5 6ZM9 1.5C11.0978 1.5 12.791 2.65445 14.0025 3.89831C14.6024 4.51424 15.0646 5.13271 15.3765 5.59758C15.532 5.82933 15.649 6.0211 15.726 6.15284C15.7644 6.21866 15.7928 6.26934 15.811 6.30237C15.8201 6.31888 15.8266 6.33096 15.8305 6.3383C15.8324 6.34197 15.8338 6.34445 15.8344 6.3457C15.8348 6.34633 15.8349 6.34665 15.8349 6.34666C15.8349 6.34666 15.8349 6.34659 15.8348 6.34644C15.8348 6.34636 15.8347 6.34619 15.8347 6.34615C15.8346 6.34596 15.8344 6.34574 16.5 6C17.1656 5.65426 17.1654 5.654 17.1653 5.65373C17.1652 5.65361 17.1651 5.65332 17.1649 5.65308C17.1647 5.65261 17.1644 5.65206 17.1641 5.65143C17.1634 5.65017 17.1626 5.64858 17.1616 5.64669C17.1596 5.6429 17.1569 5.63785 17.1536 5.63158C17.1469 5.61905 17.1375 5.60165 17.1254 5.57971C17.1013 5.53583 17.0664 5.47372 17.021 5.39599C16.9302 5.24061 16.7968 5.02223 16.6221 4.7618C16.2735 4.24229 15.7555 3.54826 15.077 2.85169C13.7318 1.47055 11.6749 0 9 0V1.5ZM16.5 6C15.8344 5.65426 15.8346 5.65404 15.8347 5.65385C15.8347 5.65381 15.8348 5.65364 15.8348 5.65356C15.8349 5.65341 15.8349 5.65334 15.8349 5.65334C15.8349 5.65335 15.8348 5.65367 15.8344 5.6543C15.8338 5.65555 15.8324 5.65803 15.8305 5.6617C15.8266 5.66904 15.8201 5.68112 15.811 5.69763C15.7928 5.73066 15.7644 5.78134 15.726 5.84716C15.649 5.9789 15.532 6.17067 15.3765 6.40242C15.0646 6.86729 14.6024 7.48576 14.0025 8.10169C12.791 9.34555 11.0978 10.5 9 10.5V12C11.6749 12 13.7318 10.5295 15.077 9.14831C15.7555 8.45174 16.2735 7.75771 16.6221 7.2382C16.7968 6.97777 16.9302 6.75939 17.021 6.60401C17.0664 6.52628 17.1013 6.46417 17.1254 6.42029C17.1375 6.39835 17.1469 6.38095 17.1536 6.36842C17.1569 6.36215 17.1596 6.3571 17.1616 6.35331C17.1626 6.35142 17.1634 6.34983 17.1641 6.34857C17.1644 6.34794 17.1647 6.34739 17.1649 6.34692C17.1651 6.34668 17.1652 6.34639 17.1653 6.34627C17.1654 6.346 17.1656 6.34574 16.5 6ZM9 10.5C6.90216 10.5 5.20903 9.34555 3.99749 8.10169C3.39756 7.48576 2.93543 6.86729 2.6235 6.40242C2.46799 6.17067 2.35103 5.9789 2.27404 5.84716C2.23557 5.78134 2.20717 5.73066 2.18902 5.69763C2.17994 5.68112 2.17343 5.66904 2.16951 5.6617C2.16755 5.65803 2.16624 5.65555 2.16558 5.6543C2.16525 5.65367 2.16508 5.65335 2.16508 5.65334C2.16508 5.65334 2.16511 5.65341 2.16519 5.65356C2.16523 5.65364 2.16532 5.65381 2.16534 5.65385C2.16544 5.65404 2.16555 5.65426 1.5 6C0.834446 6.34574 0.834577 6.346 0.834719 6.34627C0.834781 6.34639 0.834934 6.34668 0.835056 6.34692C0.835302 6.34739 0.83559 6.34794 0.835921 6.34857C0.836581 6.34983 0.837411 6.35142 0.83841 6.35331C0.840408 6.3571 0.843081 6.36215 0.846427 6.36842C0.853119 6.38095 0.862508 6.39835 0.874572 6.42029C0.898695 6.46417 0.93355 6.52628 0.97898 6.60401C1.06978 6.75939 1.20317 6.97777 1.37792 7.2382C1.72651 7.75771 2.24449 8.45174 2.92297 9.14831C4.26824 10.5295 6.32511 12 9 12V10.5ZM10.5 6C10.5 6.82843 9.82843 7.5 9 7.5V9C10.6569 9 12 7.65685 12 6H10.5ZM9 7.5C8.17157 7.5 7.5 6.82843 7.5 6H6C6 7.65685 7.34315 9 9 9V7.5ZM7.5 6C7.5 5.17157 8.17157 4.5 9 4.5V3C7.34315 3 6 4.34315 6 6H7.5ZM9 4.5C9.82843 4.5 10.5 5.17157 10.5 6H12C12 4.34315 10.6569 3 9 3V4.5Z'
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
