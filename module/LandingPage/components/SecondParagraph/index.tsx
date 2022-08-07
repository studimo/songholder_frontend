import { Box, IconButton, Stack, Typography } from '@mui/material'
import LandingpageCard from './components/LandingPageCardStack/components/LandingpageCard'
import Image from 'next/future/image'
import CurveText from './components/curveText'
import LandingpageCardStack from './components/LandingPageCardStack'
import ExploreButton from './components/ExploreButton'
import DescText from './components/DescText'
import { SecondParagraphStack } from './styled'

export default function SecondParagraph() {
  return (
    <SecondParagraphStack
      sx={{
        mt: { xs: '-500px', sm: '-360px', md: '-150px', lg: '-50px' },
      }}
    >
      <CurveText />
      <Stack sx={{ flexDirection: 'row' }}>
        <DescText />
        <Box
          sx={{
            mt: { xs: '-330px', sm: '-330px', md: '-350px', lg: '-370px' },
            mr: { xs: '-720px', sm: '-620px', md: '-440px', lg: '-300px' },
            ml: 'auto',
            width: '900px',
          }}
        >
          <LandingpageCardStack />
        </Box>
      </Stack>

      <ExploreButton />
    </SecondParagraphStack>
  )
}
