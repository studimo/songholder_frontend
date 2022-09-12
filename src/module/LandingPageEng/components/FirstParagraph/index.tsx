import { Box, Button, Stack, Typography } from '@mui/material'
import { FirstParagraphBox } from './styled'

export default function FirstParagraph() {
  return (
    <Stack className='first paragraph'>
      <FirstParagraphBox
        sx={{
          backgroundImage: {
            xs: 'linear-gradient(119.02deg, rgba(14, 167, 167, 0.55) 13.86%, rgba(46, 0, 124, 0.55) 53.15%),url(/assets/images/landingPage/LandingPageBackground_1_rotate.png)',
            sm: 'linear-gradient(123.57deg, rgba(14, 167, 167, 0.55) 35.86%, rgba(46, 0, 124, 0.55) 77.15%),url(/assets/images/landingPage/LandingPageBackground_1.jpeg)',
          },
          height: { xs: '1190px', sm: '1130px' },
          paddingTop: { xs: '550px', sm: '580px' },
          backgroundSize: { xs: '900px auto', sm: 'cover' },
          backgroundPosition: {
            xs: 'center 310px',
            sm: 'center -10px',
            md: 'center center',
          },
          clipPath: {
            xs: 'ellipse(165% 44% at 5% 27%)',
            sm: 'ellipse(90% 36% at 53% 46%)',
            md: 'ellipse(80% 44% at 53% 50%)',
            lg: 'ellipse(70% 44% at 53% 53%)',
          },
        }}
      >
        <Typography
          sx={{
            // mt: { xs: '25px', md: '74vh' },
            color: 'white',
            fontWeight: '500',
            fontSize: { xs: '25px', sm: '23px', md: '33px', lg: '35px' },
            textShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
            fontFamily: 'Mitr',
            fontStyle: 'normal',
            width: { xs: '306px', sm: 'auto' },
            ml: { xs: '40px', sm: 'auto' },
            mr: { xs: 'auto' },

            lineHeight: { xs: '25px', sm: 'auto' },
          }}
        >
          Let's be part of the music industry together.
        </Typography>
        <Typography
          sx={{
            mt: '37px',
            color: 'white',
            width: { xs: '250px', sm: '80vw' },
            height: '80px',
            fontFamily: 'Kalam',
            fontStyle: 'normal',
            fontWeight: { xs: 300, sm: 400 },
            fontSize: { xs: '15px', sm: '20px', md: '25px', lg: '27px' },
            lineHeight: { xs: '24px', sm: '40px' },

            textAlign: { xs: 'left', sm: 'center' },

            ml: { xs: '40px', sm: 'auto' },
            mr: { xs: 'auto', sm: 'auto' },
          }}
        >
          Fundraising for creative music projects, there is no better place to
          find a demo from a talented artist.
        </Typography>
        <Button
          variant='contained'
          sx={{
            mt: { xs: '20px', sm: '70px' },
            width: { sm: '180px', md: '200px', lg: '220px' },
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '16px',
            // fontFamily: "Mitr",
            fontSize: { sx: '16px', md: '18px', lg: '20px' },
            fontWeight: 500,
            ml: { xs: '40px', sm: 'auto' },
            mr: 'auto',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
            opacity: 0.8,
          }}
          onClick={() => {
            location.href = '/discover'
          }}
        >
          GET STARTED
        </Button>
      </FirstParagraphBox>
    </Stack>
  )
}
