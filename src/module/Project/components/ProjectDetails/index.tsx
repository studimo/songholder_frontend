import { Typography } from '@mui/material'
import Image from 'next/image'
import ArtistImage from './components/ArtistImage'
import CoverImage from './components/CoverImage'
import { ProjectDetailContainer, TitleContainer } from './styled'
import { ProjectDetailsProps } from './types'

export default function ProjectDetails(
  projectDetailsProps: ProjectDetailsProps,
) {
  const { name, desc, coverImageUrl, userPhotoURL } = projectDetailsProps
  return (
    <ProjectDetailContainer>
      <CoverImage coverImageUrl={coverImageUrl} />
      <ArtistImage userPhotoURL={userPhotoURL} />
      <TitleContainer>
        <Typography
          sx={{
            fontFamily: 'Mitr',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '22px',
            lineHeight: '35px',
            color: '#335380',
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Mitr',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '20px',
            color: '#54729C',
            width: '55vw',
            mt: '5px',
          }}
        >
          {desc}
        </Typography>
      </TitleContainer>
    </ProjectDetailContainer>
  )
}
