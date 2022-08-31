import { Button, Stack, Typography } from '@mui/material'
import Image from 'next/future/image'
import CurveText from './components/CurveText'

export default function ThirdParagraph() {
  return (
    <Stack
      sx={{
        width: '100vw',
        height: '600px',
        mt: { xs: '-320px', sm: '-250px', md: '-200px', lg: '-58px' },
      }}
    >
      <CurveText />
      <Typography
        sx={{
          fontFamily: 'Kalam',
          fontStyle: 'normal',
          fontWeight: 300,
          fontSize: { xs: '14px', sm: '18px', md: '21px', lg: '25px' },
          lineHeight: { xs: '25px', sm: '33px', md: '35px', lg: '40px' },
          textAlign: 'center',
          color: ' #3A8F8F',
          mt: { xs: '-320px', sm: '-330px', md: '-340px', lg: '-350px' },
          width: '80vw',
          alignSelf: 'center',
        }}
      >
        Discover projects just for you and get great recommendations when you
        select your interests.
      </Typography>
      <Stack
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        spacing='60px'
        sx={{
          mt: { xs: '0px', lg: '50px' },
          transform: {
            xs: 'scale(0.7)',
            sm: 'scale(0.7)',
            md: 'scale(0.8)',
            lg: 'scale(1)',
          },
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          sx={{ color: 'white', width: '70px', height: '116px' }}
          onClick={() => {
            location.href = '/discover'
          }}
        >
          <Image src={'/assets/images/landingPage/Pop.svg'} fill />
        </Button>
        <Button
          sx={{ color: 'white', width: '69px', height: '116px' }}
          onClick={() => {
            location.href = '/discover'
          }}
        >
          <Image src={'/assets/images/landingPage/Rock.svg'} fill />
        </Button>
        <Button
          sx={{ color: 'white', width: '68px', height: '113px' }}
          onClick={() => {
            location.href = '/discover'
          }}
        >
          <Image src={'/assets/images/landingPage/Jazz.svg'} fill />
        </Button>
        <Button
          sx={{ color: 'white', width: '65px', height: '102px' }}
          onClick={() => {
            location.href = '/discover'
          }}
        >
          <Image src={'/assets/images/landingPage/Edm.svg'} fill />
        </Button>
        <Button
          sx={{ color: 'white', width: '60px', height: '93px' }}
          onClick={() => {
            location.href = '/discover'
          }}
        >
          <Image src={'/assets/images/landingPage/More.svg'} fill />
        </Button>
      </Stack>
    </Stack>
  )
}
