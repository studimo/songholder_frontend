import { Button } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Footer from 'src/common/components/Footer'
import ResponsiveAppBar from 'src/common/components/ResponsiveAppBar'
import AdsBannerTab from './components/AdsBannerTab'
import MusicPlayer from './components/MusicPlayer'
import ProjectListTab from './components/ProjectListTab'
import RecommendedTab from './components/RecommendedTab'
import { RootContainer } from './styled'

export default function Discover() {
  const [onPlay, setOnPlay] = useState(false)
  const [songName, setSongName] = useState('')
  const [audioUrl, setAudioUrl] = useState('')

  const changeSong = (data: { url: string; songName: string }) => {
    if (data) {
      if (audioUrl == data.url) {
        setOnPlay(!onPlay)
      } else {
        setOnPlay(true)
        setAudioUrl(data.url)
        setSongName(data.songName)
      }
    }
  }
  const playerControl = { changeSong, songName, onPlay, audioUrl }
  return (
    <RootContainer maxWidth={false} disableGutters>
      <ResponsiveAppBar background={'gradient'} page={'DISCOVER'} />
      <MusicPlayer
        onPlay={onPlay}
        songName={songName}
        audioUrl={audioUrl}
        setOnPlay={setOnPlay}
      />
      <AdsBannerTab />
      <RecommendedTab playerControl={playerControl} />
      <ProjectListTab playerControl={playerControl} />
      {/* <Button
        onClick={() => {
          changeSong({ url: 'Upv7-MN3kjw', songName: 'test' })
        }}
      >
        Test
      </Button> */}
      <Footer />
    </RootContainer>
  )
}
