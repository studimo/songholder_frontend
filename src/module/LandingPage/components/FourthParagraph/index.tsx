import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/future/image'
import { FourthParagraphBox } from './styled'

export default function FourthParagraph() {
  return (
    <Stack
      sx={{
        width: '100vw',
        height: '600px',
        mt: { xs: '-100px', sm: '-50px', lg: '95px' },
      }}
    >
      <FourthParagraphBox
        sx={{
          clipPath: {
            xs: 'ellipse(100% 15% at 49% 43%)',
            sm: 'ellipse(90% 21% at 49% 44.5%)',
            md: 'ellipse(67% 24% at 49% 48%)',
            lg: 'ellipse(67% 33% at 49% 50%)',
          },
          paddingLeft: { xs: '0px', md: '40px' },
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Kalam',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: { xs: '33px', sm: '35px', md: '40px', lg: '50px' },
            lineHeight: '80px',
            textTransform: 'uppercase',

            color: '#FFFFFF',

            mt: { xs: '300px', sm: '270px', md: '290px', lg: '310px' },
            ml: { xs: 'auto', sm: '210px' },
            mr: { xs: 'auto', sm: 'none' },

            textShadow: '4px 4px 8px rgba(0, 0, 0, 0.25)',
          }}
        >
          Our missions
        </Typography>
        <Stack sx={{ flexDirection: 'row', mt: { sm: '0px', md: '0px' } }}>
          <Box
            sx={{
              transform: {
                xs: 'scale(0.6)',
                sm: 'scale(0.7)',
                md: 'scale(0.8)',
                lg: 'scale(1)',
              },
              width: '160px',
              height: '160px',
              marginLeft: '30px',
              marginTop: { xs: '-40px', sm: '0px' },
              position: 'relative',
            }}
          >
            <Image src={'/assets/images/landingPage/PeopleGroup.svg'} fill />
          </Box>

          <Typography
            sx={{
              fontFamily: 'Mitr',
              fontStyle: 'normal',
              fontWeight: 200,
              fontSize: { xs: '13px', sm: '18px', md: '22px', lg: '28px' },
              lineHeight: { xs: '20px', sm: '44px' },

              color: '#FFFFFF',
              letterSpacing: { xs: '0.07em', sm: '0.1em' },

              width: { sm: '340px', md: '360px', lg: '500px' },
              mt: { xs: '15px', sm: '20px' },
              ml: { xs: '-10px', sm: '0px', md: '20px', lg: '40px' },
              mr: { xs: '20px', sm: '0px' },
            }}
          >
            เป็นพื้นที่ให้ศิลปินได้แสดงผลงานและสามารถหาเลี้ยงชีพได้ด้วยการเป็นศิลปินเพียงอย่างเดียว
          </Typography>
        </Stack>
        <Stack
          sx={{
            flexDirection: 'row',
            mt: { xs: '-50px', sm: '0px', md: '40px', lg: '80px' },
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Mitr',
              fontStyle: 'normal',
              fontWeight: 200,
              fontSize: { xs: '13px', sm: '18px', md: '22px', lg: '28px' },
              lineHeight: { xs: '20px', sm: '44px' },

              color: '#FFFFFF',
              letterSpacing: { xs: '0.07em', sm: '0.1em' },

              width: { sm: '340px', md: '360px', lg: '500px' },
              textAlign: 'right',
              ml: { xs: '35px', sm: '30px' },
              mt: { xs: '20px', sm: '0px' },
            }}
          >
            ให้ศิลปินได้โฟกัสกับการทำเพลงเต็มที่โดยไม่ต้องกังวลเรื่องอื่นๆ
          </Typography>
          <Box
            sx={{
              transform: {
                xs: 'scale(0.6)',
                sm: 'scale(0.7)',
                md: 'scale(0.8)',
                lg: 'scale(1)',
              },
              ml: { xs: '0px', md: '50px', lg: '30px' },
              mt: '-35px',
              width: '160px',
              height: '160px',
              position: 'relative',
            }}
          >
            <Image
              src={'/assets/images/landingPage/IncreasingGraph.svg'}
              fill
            />
          </Box>
        </Stack>
      </FourthParagraphBox>
    </Stack>
  )
}
