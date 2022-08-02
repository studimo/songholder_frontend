import { Typography } from '@mui/material'
import Image from 'next/image'
import ArtistImage from './components/ArtistImage'
import CoverImage from './components/CoverImage'
import { ProjectDetailContainer, TitleContainer } from './styled'

export default function ProjectDetails() {
  return (
    <ProjectDetailContainer>
      <CoverImage />
      <ArtistImage />
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
          DRG’s Project
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
          อัลบัมที่เปรียบเสมือนชีวิตคนคนหนึ่ง
          <br />
          กับเรื่องราวความรักที่ถูกบรรจุลงไปในเพลง
        </Typography>
      </TitleContainer>
    </ProjectDetailContainer>
  )
}
