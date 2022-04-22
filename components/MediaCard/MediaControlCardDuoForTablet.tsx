import * as React from 'react'
import { Stack } from '@mui/material'
import MediaControlCard from 'components/MediaCard/MediaControlCard'
import MediaControlCardForTablet from './MediaControlCardForTablet'

export default function MediaControlCardDuoForTablet({
  content1,
  content2,
  audioUrl,
  setAudioUrl,
  onPlay,
  setOnPlay,
  setSongName,
  setMusicId,
  musicId1,
  musicId2,
}: any) {
  return (
    <Stack sx={{ display: 'flex', flexDirection: 'row' }}>
      <MediaControlCardForTablet
        content={content1}
        audioUrl={audioUrl}
        setAudioUrl={setAudioUrl}
        onPlay={onPlay}
        setOnPlay={setOnPlay}
        setSongName={setSongName}
        setMusicId={setMusicId}
        musicId={musicId1}
      />
      <MediaControlCardForTablet
        content={content2}
        audioUrl={audioUrl}
        setAudioUrl={setAudioUrl}
        onPlay={onPlay}
        setOnPlay={setOnPlay}
        setSongName={setSongName}
        setMusicId={setMusicId}
        musicId={musicId2}
      />
    </Stack>
  )
}
