import { useState } from 'react'
import {
  RecommendedCardActionArea,
  RecommendedCardContainer,
  RecommendedCardMainCard,
  RecommendedCardMedia,
  RecommendedText,
} from './styled'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'
import PauseIcon from '@mui/icons-material/Pause'
import { RecommendedCardProps } from './types'

export default function RecommendedCard(
  recommendedCardProps: RecommendedCardProps,
) {
  const [showButton, setShowButton] = useState(false)
  const audioUrl = 'Upv7-MN3kjw'
  const onPlay = true
  const { name, youtubeId } = recommendedCardProps
  return (
    <RecommendedCardContainer>
      <RecommendedCardMainCard>
        <RecommendedCardMedia
          sx={{
            '&:hover': {
              backgroundImage: `linear-gradient(134.22deg, rgba(1, 124, 117, 0.3) 23.94%, rgba(147, 2, 171, 0.3) 80.19%), url(https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg)`,
            },
            backgroundImage: `url(https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg)`,
          }}
          onMouseOver={() => {
            setShowButton(true)
          }}
          onMouseLeave={() => {
            setShowButton(false)
          }}
        >
          <RecommendedCardActionArea
            onClick={() => {
              //   setAudioUrl(content.youtubeId)
              //   setSongName(content.name)
              //   setMusicId(musicId)
              //   const ua = navigator.userAgent
              //   if (
              //     /iPad|iPhone|iPod/.test(ua) ||
              //     (navigator.platform === 'MacIntel' &&
              //       navigator.maxTouchPoints > 1)
              //   ) {
              //     setOnPlay(false)
              //   } else if (audioUrl == content.youtubeId && onPlay) {
              //     setOnPlay(false)
              //   } else {
              //     setOnPlay(true)
              //   }
            }}
          >
            {showButton ? (
              onPlay && audioUrl == youtubeId ? (
                <PauseIcon
                  sx={{
                    fontSize: 50,
                    color: 'white',
                  }}
                />
              ) : (
                <PlayArrowOutlinedIcon
                  sx={{
                    fontSize: 50,
                    color: 'white',
                  }}
                />
              )
            ) : (
              <></>
            )}
          </RecommendedCardActionArea>
        </RecommendedCardMedia>
      </RecommendedCardMainCard>

      <RecommendedText>{name}</RecommendedText>
    </RecommendedCardContainer>
  )
}
