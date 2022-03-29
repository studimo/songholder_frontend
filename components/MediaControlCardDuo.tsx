import * as React from "react";
import { Stack } from "@mui/material";
import MediaControlCard from "./MediaControlCard";

export default function MediaControlCardDuo({
  content1,
  content2,
  audioUrl,
  setAudioUrl,
  onPlay,
  setOnPlay,
}: any) {
  return (
    <Stack sx={{ display: "flex", flexDirection: "row" }}>
      <MediaControlCard
        content={content1}
        audioUrl={audioUrl}
        setAudioUrl={setAudioUrl}
        onPlay={onPlay}
        setOnPlay={setOnPlay}
      />
      <MediaControlCard
        content={content2}
        audioUrl={audioUrl}
        setAudioUrl={setAudioUrl}
        onPlay={onPlay}
        setOnPlay={setOnPlay}
      />
    </Stack>
  );
}