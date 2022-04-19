import { Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import TwitterIcon from '@mui/icons-material/Twitter'
import MailRoundedIcon from '@mui/icons-material/MailRounded'

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
          <Box sx={{ width: '40vw', height: '1px', bgcolor: 'white' }} />
          <Stack
            sx={{
              width: '20vw',
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
                  height: '100px',
                  width: 'auto',
                  // maxHeight: { xs: 233, md: 167 },
                  // maxWidth: { xs: 350, md: 250 },
                }}
                alt='LOGO'
                src='./assets/images/logo/logoForFooter.png'
              />
            </Typography>
          </Stack>
          <Box sx={{ width: '40vw', height: '1px', bgcolor: 'white' }} />
        </Stack>

        <Stack
          direction='row'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              m: '20px',
              ml: '90px',
              fontSize: '14px',
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
            }}
          />
          <Typography
            sx={{
              m: '20px',
              fontSize: '14px',
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
            }}
          />
          <Stack
            direction='row'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '50px',
            }}
            spacing={7}
          >
            <IconButton href='https://www.facebook.com/Songholder-104864228867080'>
              <FacebookRoundedIcon sx={{ color: 'white', fontSize: '30px' }} />
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
                  style={{ height: '30px', marginLeft: 0 }}
                />
              </Typography>
            </IconButton>
            <IconButton disabled>
              <TwitterIcon sx={{ color: 'white', fontSize: '30px' }} />
            </IconButton>

            <IconButton disabled>
              <MailRoundedIcon sx={{ color: 'white', fontSize: '30px' }} />
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
            }}
          />
          <Typography
            sx={{
              m: '20px',
              fontSize: '14px',
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
            }}
          />

          <Typography
            sx={{
              m: '20px',
              fontSize: '14px',
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
