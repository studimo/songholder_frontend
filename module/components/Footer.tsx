import { Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import {
  FacebookRounded,
  Twitter,
  MailRounded,
  Height,
} from '@mui/icons-material'
import Image from 'next/future/image'
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
// import TwitterIcon from '@mui/icons-material/Twitter'
// import MailRoundedIcon from '@mui/icons-material/MailRounded'

export default function Footer() {
  return (
    <Box
      id='footer'
      sx={{
        width: '100%',
        height: { xs: '90px', md: '180px' },
        background: 'linear-gradient(92.42deg, #66C2C2 0%, #805FB6 100%)',
      }}
    >
      <Stack
        direction='column'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '50px',
        }}
      >
        <Stack
          direction='row'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: { xs: '-20px', md: '0px' },
          }}
        >
          <Box sx={{ width: '1000px', height: '1px', bgcolor: 'white' }} />
          <Stack
            sx={{
              width: { xs: '110px', md: '250px', lg: '280px' },
              height: '3px',
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ ml: 4, mr: 3 }}>
              <Box
                component='img'
                sx={{
                  height: { xs: '45px', md: '90px', lg: '100px' },
                  width: 'auto',
                  // maxHeight: { xs: 233, md: 167 },
                  // maxWidth: { xs: 350, md: 250 },
                }}
                alt='LOGO'
                src='/assets/images/logo/logoForFooter.png'
              />
            </Typography>
          </Stack>
          <Box sx={{ width: '1000px', height: '1px', bgcolor: 'white' }} />
        </Stack>

        <Stack
          direction='row'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: { xs: '13px', md: '50px' },
          }}
          spacing='20px'
        >
          <Typography
            sx={{
              // m: '20px',
              ml: '55px',
              fontSize: { xs: '9px', sm: '10px', md: '11px', lg: '13px' },
              display: { xs: 'none', md: 'flex' },
            }}
            color='white'
          >
            ABOUT US
          </Typography>
          <Divider
            orientation='vertical'
            flexItem
            variant='middle'
            sx={{
              height: '30px',
              alignSelf: 'center',
              borderRightWidth: 0.7,
              background: 'white',
              display: { xs: 'none', md: 'flex' },
            }}
          />
          <Typography
            sx={{
              // m: '20px',
              fontSize: { xs: '9px', sm: '10px', md: '11px', lg: '13px' },
              display: { xs: 'none', md: 'flex' },
            }}
            color='white'
          >
            THEME
          </Typography>
          <Divider
            orientation='vertical'
            flexItem
            variant='middle'
            sx={{
              height: '30px',
              alignSelf: 'center',
              borderRightWidth: 0.7,
              background: 'white',
              display: { xs: 'none', md: 'flex' },
            }}
          />
          <Stack
            direction='row'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              // padding: '50px',
            }}
            // spacing={7}
            spacing={{ xs: '25px', sm: '40px', md: '30px', lg: '40px' }}
          >
            <IconButton href='https://www.facebook.com/songholder.official/'>
              <FacebookRounded
                sx={{ color: 'white', fontSize: { xs: '19px', md: '30px' } }}
              />
            </IconButton>
            <IconButton href='https://www.instagram.com/songholder.co/'>
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: { xs: '3px', md: '15px' },
                  height: { xs: '3px', md: '15px' },
                }}
              >
                <Image
                  src='/assets/images/logo/logoInstagram.png'
                  alt='Logo_IG'
                  fill
                />
              </Typography>
            </IconButton>
            <IconButton disabled>
              <Twitter
                sx={{ color: 'white', fontSize: { xs: '19px', md: '30px' } }}
              />
            </IconButton>

            <IconButton disabled>
              <MailRounded
                sx={{
                  color: 'white',
                  fontSize: { xs: '19px', md: '30px' },
                  ml: { xs: '-10px' },
                }}
              />
            </IconButton>
          </Stack>
          <Divider
            orientation='vertical'
            flexItem
            variant='middle'
            sx={{
              height: '30px',
              alignSelf: 'center',
              borderRightWidth: 0.7,
              background: 'white',
              display: { xs: 'none', md: 'flex' },
            }}
          />
          <Typography
            sx={{
              m: '20px',
              fontSize: { xs: '9px', sm: '10px', md: '11px', lg: '13px' },
              display: { xs: 'none', md: 'flex' },
            }}
            color='white'
          >
            PRIVACY POLICY
          </Typography>
          <Divider
            orientation='vertical'
            flexItem
            variant='middle'
            sx={{
              height: '30px',
              alignSelf: 'center',
              borderRightWidth: 0.7,
              background: 'white',
              display: { xs: 'none', md: 'flex' },
            }}
          />

          <Typography
            sx={{
              m: '20px',
              fontSize: { xs: '9px', sm: '10px', md: '11px', lg: '13px' },
              display: { xs: 'none', md: 'flex' },
            }}
            color='white'
          >
            SECURITY
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}
