import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import MediaControlCardDuo from 'components/MediaControlCardDuo'
import MusicPlayer from 'components/MusicPlayer'
import RecommendedCardForMobile from 'components/RecommendedCardForMobile'
import { gql, useQuery } from '@apollo/client'
import Footer from 'components/Footer'
import ResponsiveAppBar from 'components/ResponsiveAppBar'
import MediaControlCard from './MediaControlCard'
import FooterMobile from './FooterMobile'
import MediaControlCardForMobile from './MediaControlCardForMobile'
import MusicPlayerMobile from './MusicPlayerMobile'

const AllQuery = gql`
  query {
    demos {
      youtubeId
      name
      artist
      style
      requirement
      youtubeId
    }
  }
`
const getAudioUrl = gql`
  query {
    getAudioUrl(youtubeIdInput: "$id")
  }
`
export default function DiscoverForMobile() {
  const [dragAble, setDragAble] = useState(true)
  const [allContents, setAllContents] = useState<any>([])
  const [songName, setSongName] = useState<any>()
  const [audioUrl, setAudioUrl] = useState('')
  const [onPlay, setOnPlay] = useState(false)
  const { data, error, loading } = useQuery(AllQuery)

  const [musicId, setMusicId] = useState(0)

  const contentRef = useRef(null)
  useEffect(() => {
    if (data && (!allContents || allContents.length == 0)) {
      setAllContents(data.demos)
    }
  }, [data])
  // useEffect(() => {
  //   console.log("musicId")
  //   console.log(musicId)
  // }, [musicId])
  if (loading) {
    return (
      <>
        <Box
          sx={{
            width: '100vw',
            height: '100vh',
            background:
              'linear-gradient(155.59deg, #67C2C2 21.86%, #8060B7 83.81%)',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <Box
            component='img'
            sx={{
              height: '250px',
              width: '250px',
              position: 'absolute',
              left: 'calc(50vw - 125px)',
              top: 'calc(50vh - 125px)',
              // maxHeight: { xs: 233, md: 167 },
              // maxWidth: { xs: 350, md: 250 },
            }}
            alt='LOGO'
            src='./assets/images/logo/logoWithText.png'
          />
        </Box>
      </>
    )
  }

  function changeSong(indexChange: number) {
    var inx: number = musicId + indexChange
    inx = inx < 0 ? allContents.length - 1 - (allContents.length % 2) : inx
    inx = inx > allContents.length - 1 - (allContents.length % 2) ? 0 : inx

    setAudioUrl(allContents[inx].youtubeId)
    setSongName(allContents[inx].name)
    setMusicId(inx)
    setOnPlay(true)
  }

  let refCard: any
  let checkOdd = false
  return (
    <Container
      maxWidth={false}
      disableGutters
      // maxWidth="md"
      sx={{
        background:
          'radial-gradient(61.36% 61.36% at 32.88% 35.63%, #E9E9E9 0%, #F8F3FD 100%)',
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <ResponsiveAppBar background={'gradient'} page={'DISCOVER'} />
      <div style={{ marginTop: '90px' }} />
      <motion.div
        ref={contentRef}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          // display: "flex",
          alignItems: 'center',
          justifyItems: 'flex-end',
          overflow: 'auto',
          zIndex: '2',
          pointerEvents: 'none',
        }}
      >
        <Box
          component={motion.div}
          drag={dragAble}
          dragConstraints={contentRef}
          id='boxtest'
          sx={{
            paddingBottom: '50px',
            paddingLeft: '115px',
            paddingRight: '110px',
            paddingTop: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'fixed',
            bottom: '10%',
            left: '0%',
            width: 'fit-content',
            height: '10px',
            // bgcolor: 'yellowgreen',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          <MusicPlayerMobile
            audioUrl={audioUrl}
            onPlay={onPlay}
            setOnPlay={setOnPlay}
            songName={songName}
            setDragAble={setDragAble}
            changeSong={changeSong}
            transform={'scale(0.6)'}
            pauseOnHover={false}
          />
        </Box>
      </motion.div>
      {/* <Box
        sx={{
          position: "fixed",
          width: "100vw",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "auto",
          background:
            "radial-gradient(61.36% 61.36% at 32.88% 35.63%, #E6F9FF 0%, #F8F3FD 100%)",
        }}
        // bgcolor="violet"
        component={motion.div}
        ref={contentRef}
      > */}

      <Typography
        // sx={{ mt: "100px" }}
        // fontWeight='400'
        // lineHeight='67.84px'
        // color='#0E5379'
        component={motion.h1}
        // animate={{ fontSize: '32px' }}

        sx={{
          fontFamily: 'Mitr',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '25px',

          color: '#0E5379',
          mt: '0px',
        }}

        // alignSelf="center"
      >
        RECOMMENDED SONGS
      </Typography>
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing='0.5'
        sx={{ mt: '-105px' }}
        // height="350px"
        // sx={{ bgcolor: "yellow" }}
        // sx={{ zIndex: 0 }}
      >
        {allContents.slice(0, 3).map((content: any, index: number) => (
          <RecommendedCardForMobile
            key={content.name}
            content={content}
            audioUrl={audioUrl}
            setAudioUrl={setAudioUrl}
            onPlay={onPlay}
            setOnPlay={setOnPlay}
            setSongName={setSongName}
            setMusicId={setMusicId}
            musicId={index}
            normalWidth={110}
            normalHeight={130}
            hoverWidth={200}
            hoverHeight={130}
            fontSize={'11px'}
            buttonSize={50}
          />
        ))}
      </Stack>
      {/* <div id="test">
          <Marquee
            gradient={false}
            style={{
              background: "none",
              width: "100vw",
              // position: "",
              // top: "20%",
              // right: "13%",
              fontSize: "28px",
            }}
            speed={30}
            // pauseOnClick
          >
            {allContents.slice(0, 8).map((content: any) => (
              <RecommendedCard
                content={content}
                audioUrl={audioUrl}
                setAudioUrl={setAudioUrl}
                onPlay={onPlay}
                setOnPlay={setOnPlay}
                setSongName={setSongName}
              />
            ))}
            <Box style={{ width: "230px", height: "400px" }} /> 
          </Marquee>
        </div> */}
      <Typography
        // fontWeight='400'
        // lineHeight='67.84px'
        // color='#0E5379'
        // marginTop="30px"
        marginBottom='30px'
        component={motion.h1}
        // animate={{ fontSize: '32px' }}
        // alignSelf="center"
        sx={{
          fontFamily: 'Mitr',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '25px',

          color: '#0E5379',
          mt: '-100px',
          mb: '10px',
        }}
      >
        SONG LIST
      </Typography>
      <Stack sx={{ mb: '20px' }}>
        {allContents.map((content: any, Index: number) => {
          return (
            <MediaControlCardForMobile
              content={content}
              audioUrl={audioUrl}
              setAudioUrl={setAudioUrl}
              onPlay={onPlay}
              setOnPlay={setOnPlay}
              setSongName={setSongName}
              setMusicId={setMusicId}
              musicId={Index}
            />
          )
        })}
      </Stack>
      {/* </Box> */}
      <FooterMobile />
    </Container>
  )
}
