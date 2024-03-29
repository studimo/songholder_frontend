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
          พื้นที่ระดมทุนเพื่อศิลปินที่มีความสามารถ
        </Typography>
        <Typography
          sx={{
            mt: '23px',
            color: 'white',
            width: { xs: '82vw', sm: '80vw' },
            height: 'auto',
            fontFamily: 'Mitr',
            fontStyle: 'normal',
            fontWeight: { xs: 200, sm: 200 },
            fontSize: { xs: '13px', sm: '18px', md: '23px', lg: '25px' },
            lineHeight: { xs: '17px', sm: '30px' },

            textAlign: { xs: 'left', sm: 'center' },

            ml: { xs: '40px', sm: 'auto' },
            mr: { xs: 'auto', sm: 'auto' },
            wordBreak: 'keep-all',
          }}
        >
          พวกเรามีเป้าหมายที่จะสนับสนุนวงการเพลง โดยทลายอุปสรรคด้านเงินทุน
          เพื่อให้ศิลปินผลิตผลงานเพลงออกมาให้ได้มากที่สุด
          เพื่อให้ศิลปินสามารถทำในสิ่งที่ตนรัก และเลี้ยงชีพด้วยการทำเพลงได้
        </Typography>
        <Typography
          sx={{
            mt: '30px',
            color: 'white',
            width: { xs: '250px', sm: '80vw' },
            height: 'auto',
            fontFamily: 'Mitr',
            fontStyle: 'normal',
            fontWeight: { xs: 200, sm: 200 },
            fontSize: { xs: '9px', sm: '14px', md: '19px', lg: '22px' },
            lineHeight: { xs: '15px', sm: '28px' },

            textAlign: { xs: 'left', sm: 'center' },

            ml: { xs: '40px', sm: 'auto' },
            mr: { xs: 'auto', sm: 'auto' },
          }}
        >
          ศิลปินท่านใดสนใจ หรือมีความคิดอยากได้ทุนไปทำเพลง ก็ขอให้กรอกไว้ได้เลย
          กรอกไว้ก่อนไม่เสียหาย แล้วเราจะติดต่อไป
        </Typography>
        <Button
          variant='contained'
          sx={{
            mt: { xs: '5px', sm: '20px' },
            width: { sm: '200px', md: '220px', lg: '240px' },
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '16px',
            // fontFamily: "Mitr",
            fontSize: { xs: '11px', md: '18px', lg: '20px' },
            fontWeight: 500,
            ml: { xs: '40px', sm: 'auto' },
            mr: 'auto',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
            opacity: 0.8,
          }}
          // onClick={() => {
          //   location.href = 'https://forms.gle/Gb55b6KQbt2JzcJj7'
          // }}
          href='https://forms.gle/Gb55b6KQbt2JzcJj7'
          target='_blank'
        >
          SEND YOUR INFO
        </Button>
      </FirstParagraphBox>
    </Stack>
  )
}
