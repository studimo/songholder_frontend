import { Stack, Typography } from '@mui/material'
import ActiveProjectCard from './Components/ActiveProjectCard'
import ShareHolderCard from './Components/ShareHolderCard'
import SongCard from './Components/SongCard'

export default function FifthParagraph() {
  return (
    <Stack
      sx={{
        mb: { xs: '20px', sm: '100px', md: '150px', lg: '200px' },
        mt: { xs: '-320px', sm: '-200px', md: '-80px' },
        width: '100vw',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Kalam',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: { sm: '22px', md: '23px', lg: '25px' },
          lineHeight: '40px',

          color: '#6486B8',
          letterSpacing: '0.1em',
          mt: { sm: '-100px', md: '-80px', lg: '0px' },
          mb: { xs: '-50px', sm: '-40px', md: '-20px', lg: '0px' },
        }}
      >
        NOW PARTICIPATIONS
      </Typography>
      <Stack
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        spacing='0.5'
        sx={{
          width: '900px',
          transform: {
            xs: 'scale(0.4)',
            sm: 'scale(0.6)',
            md: 'scale(0.8)',
            lg: 'scale(1)',
          },
        }}
      >
        <Stack>
          <SongCard />
          <Typography
            sx={{
              mt: '-210px',
              ml: '-20px',
              fontFamily: 'Kalam',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '50px',
              lineHeight: '80px',
              textAlign: 'center',

              color: '#387E87',
            }}
          >
            500
          </Typography>
        </Stack>
        <Stack>
          <ActiveProjectCard />

          <Typography
            sx={{
              mt: '-210px',
              ml: '-20px',
              fontFamily: 'Kalam',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '50px',
              lineHeight: '80px',
              textAlign: 'center',

              color: '#496389',
            }}
          >
            300
          </Typography>
        </Stack>

        <Stack>
          <ShareHolderCard />

          <Typography
            sx={{
              mt: '-210px',
              ml: '-20px',
              fontFamily: 'Kalam',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '50px',
              lineHeight: '80px',
              textAlign: 'center',

              color: '#615191',
            }}
          >
            1000
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}
