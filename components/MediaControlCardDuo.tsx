import * as React from "react";
import { Stack } from "@mui/material";
import MediaControlCard from "./MediaControlCard";

export default function MediaControlCardDuo({ content1, content2 }: any) {
  return (
    <Stack sx={{ display: "flex", flexDirection: "row" }}>
      <MediaControlCard content={content1} />
      <MediaControlCard content={content2} />
    </Stack>
  );
}
