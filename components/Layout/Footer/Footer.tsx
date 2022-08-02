import { Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import { FacebookRounded, Twitter, MailRounded } from '@mui/icons-material'
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
// import TwitterIcon from '@mui/icons-material/Twitter'
// import MailRoundedIcon from '@mui/icons-material/MailRounded'

export default function Footer() {
  return (
    <Box
      id='footer'
      sx={{
        width: '100%',
        height: '180px',
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
          }}
        >
          <Box sx={{ width: '1000px', height: '1px', bgcolor: 'white' }} />
          <Stack
            sx={{
              width: { xs: '190px', sm: '220px', md: '250px', lg: '280px' },
              height: '3px',
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ ml: 3, mr: 0.75 }}>
              <Box
                component='img'
                sx={{
                  height: { xs: '70px', sm: '80px', md: '90px', lg: '100px' },
                  width: 'auto',
                  // maxHeight: { xs: 233, md: 167 },
                  // maxWidth: { xs: 350, md: 250 },
                }}
                alt='LOGO'
                src='./assets/images/logo/logoForFooter.png'
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
            mt: '50px',
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
            <IconButton href='https://www.facebook.com/Songholder-104864228867080'>
              <FacebookRounded sx={{ color: 'white', fontSize: '30px' }} />
            </IconButton>
            <IconButton disabled>
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src='./assets/images/logo/logoInstagram.png'
                  alt='Logo_IG'
                  style={{ height: '30px', marginLeft: 0 }}
                />
              </Typography>
            </IconButton>
            <IconButton disabled>
              <Twitter sx={{ color: 'white', fontSize: '30px' }} />
            </IconButton>

            <IconButton disabled>
              <MailRounded sx={{ color: 'white', fontSize: '30px' }} />
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
