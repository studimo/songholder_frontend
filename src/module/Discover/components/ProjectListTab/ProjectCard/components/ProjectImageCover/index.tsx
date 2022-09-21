import { Button } from '@mui/material'
import Image from 'next/future/image'
import { ProjectImageCoverProps } from './types'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'
import PauseIcon from '@mui/icons-material/Pause'
export default function ProjectImageCover(
  projectImageCoverProps: ProjectImageCoverProps,
) {
  const { name, youtubeId, playerControl } = projectImageCoverProps
  return (
    <Button
      sx={{
        display: 'flex',
        position: 'absolute',
        left: '0px',
        width: '100px',
        height: '100%',
        overflow: 'hidden',
        color: 'rgba(147, 2, 171, 0.3)',
        // backgroundColor: 'yellowgreen',
      }}
      onClick={() =>
        playerControl.changeSong({ url: youtubeId, songName: name })
      }
    >
      {playerControl.audioUrl == youtubeId &&
        (playerControl.onPlay ? (
          <PauseIcon
            sx={{
              fontSize: 50,
              color: 'white',
              zIndex: 1,
            }}
          />
        ) : (
          <PlayArrowOutlinedIcon
            sx={{
              fontSize: 50,
              color: 'white',
              zIndex: 1,
            }}
          />
        ))}
      <Image
        src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
        alt={`Cover Image of ${name}`}
        fill
        style={{ objectFit: 'cover' }}
      />
    </Button>
  )
}
