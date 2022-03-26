import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ReactPlayer from "react-player";
import { useState } from "react";

export default function MediaPlayer() {
  var [playing, setPlaying] = useState(false);
  var [url, setUrl] = useState("");
  const handlePlay = () => {
    setPlaying(!playing);
  };
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar variant="dense">
        <Button onClick={handlePlay} color="secondary">
          Play
        </Button>
        <ReactPlayer
          width="0"
          height="0"
          url="https://www.youtube.com/embed/1R64BghhMvg"
          config={{
            youtube: { playerVars: { disablekb: 1 } },
          }}
          controls
          playing={playing}
        />
      </Toolbar>
    </AppBar>
  );
}
