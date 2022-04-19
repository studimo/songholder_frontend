import { Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import { FacebookRounded, Twitter, MailRounded } from '@mui/icons-material'
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
// import TwitterIcon from '@mui/icons-material/Twitter'
// import MailRoundedIcon from '@mui/icons-material/MailRounded'

export default function FooterMobile() {
  return (
    <Box
      id='footer'
      sx={{
        width: '100%',
        height: '100px',
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
            mt: '-20px',
          }}
        >
          <Box sx={{ width: '27vw', height: '1px', bgcolor: 'white' }} />
          <Stack
            sx={{
              width: '46vw',
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
                  height: '60px',
                  width: 'auto',
                  // maxHeight: { xs: 233, md: 167 },
                  // maxWidth: { xs: 350, md: 250 },
                }}
                alt='LOGO'
                src='./assets/images/logo/logoForFooter.png'
              />
            </Typography>
          </Stack>
          <Box sx={{ width: '27vw', height: '1px', bgcolor: 'white' }} />
        </Stack>

        <Stack
          direction='row'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '50px',
            mt: '-27px',
            ml: '8px',
          }}
          spacing={1}
        >
          <IconButton href='https://www.facebook.com/Songholder-104864228867080'>
            <FacebookRounded sx={{ color: 'white', fontSize: '17px' }} />
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
                style={{ height: '17px', marginLeft: 0 }}
              />
            </Typography>
          </IconButton>
          <IconButton disabled>
            <Twitter sx={{ color: 'white', fontSize: '17px' }} />
          </IconButton>

          <IconButton disabled>
            <MailRounded sx={{ color: 'white', fontSize: '17px' }} />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  )
}
