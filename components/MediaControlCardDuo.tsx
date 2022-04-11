import * as React from 'react';
import { Stack } from '@mui/material';
import MediaControlCard from 'components/MediaControlCard';

export default function MediaControlCardDuo({
  content1,
  content2,
  audioUrl,
  setAudioUrl,
  onPlay,
  setOnPlay,
  setSongName,
}: any) {

  return (
    <Stack sx={{ display: 'flex', flexDirection: 'row' }}>
      <MediaControlCard
        content={content1}
        audioUrl={audioUrl}
        setAudioUrl={setAudioUrl}
        onPlay={onPlay}
        setOnPlay={setOnPlay}
        setSongName={setSongName}
      />
      <MediaControlCard
        content={content2}
        audioUrl={audioUrl}
        setAudioUrl={setAudioUrl}
        onPlay={onPlay}
        setOnPlay={setOnPlay}
        setSongName={setSongName}
      />
    </Stack>
  );

}
