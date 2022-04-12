import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import MediaControlCardDuo from 'components/MediaControlCardDuo'
import MusicPlayer from 'components/MusicPlayer'
import RecommendedCard from 'components/RecommendedCard'
import { gql, useQuery } from '@apollo/client'
import Footer from 'components/Footer'
import ResponsiveAppBar from 'components/ResponsiveAppBar'

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
export default function Discover() {
  const [dragAble, setDragAble] = useState(true)
  const [allContents, setAllContents] = useState<any>([])
  const [songName, setSongName] = useState<any>()
  const [audioUrl, setAudioUrl] = useState('')
  const [onPlay, setOnPlay] = useState(false)
  const { data, error, loading } = useQuery(AllQuery)
  const contentRef = useRef(null)

  useEffect(() => {
    if (data && (!allContents || allContents.length == 0)) {
      setAllContents(data.demos)
    }
  }, data)
  if (loading) {
    return (
      <>
      <ResponsiveAppBar background={'gradient'} />
        <div style={{ marginTop: '90px' }} />
        <h1>Loading</h1>
      </>
    )
  }
  let refCard: any
  let checkOdd = false
  return (
    <Container
      maxWidth={false}
      disableGutters
      // maxWidth="md"
      sx={{
        // paddingTop: "80px",
        background:
          'radial-gradient(61.36% 61.36% at 32.88% 35.63%, #E6F9FF 0%, #F8F3FD 100%)',
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
    <ResponsiveAppBar background={'gradient'} />
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
            paddingBottom: '80px',
            paddingLeft: '200px',
            paddingRight: '200px',
            paddingTop: '150px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'fixed',
            top: '57%',
            left: '70%',
            width: 'auto',
            height: 'auto',
            // bgcolor: "yellowgreen",
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          <MusicPlayer
            audioUrl={audioUrl}
            onPlay={onPlay}
            setOnPlay={setOnPlay}
            songName={songName}
            setDragAble={setDragAble}
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
        fontWeight='400'
        lineHeight='67.84px'
        color='#0E5379'
        component={motion.div}
        animate={{ fontSize: '32px' }}
        // alignSelf="center"
      >
        RECCOMMENDED SONGS
      </Typography>
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing='0.5'
        // height="350px"
        // sx={{ bgcolor: "yellow" }}
        // sx={{ zIndex: 0 }}
      >
        {allContents.slice(0, 5).map((content: any) => (
          <RecommendedCard
            key={content.name}
            content={content}
            audioUrl={audioUrl}
            setAudioUrl={setAudioUrl}
            onPlay={onPlay}
            setOnPlay={setOnPlay}
            setSongName={setSongName}
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
        fontWeight='400'
        lineHeight='67.84px'
        color='#0E5379'
        // marginTop="30px"
        marginBottom='30px'
        component={motion.div}
        animate={{ fontSize: '32px' }}
        // alignSelf="center"
      >
        SONG LIST
      </Typography>
      <Stack>
        {allContents.map((content: any) => {
          if (checkOdd) {
            checkOdd = !checkOdd
            return (
              <MediaControlCardDuo
                key={content.name}
                content1={refCard}
                content2={content}
                audioUrl={audioUrl}
                setAudioUrl={setAudioUrl}
                onPlay={onPlay}
                setOnPlay={setOnPlay}
                setSongName={setSongName}
              />
            )
          }
          checkOdd = !checkOdd
          refCard = content
        })}
      </Stack>
      {/* </Box> */}
      <Footer />
    </Container>
  )
}
