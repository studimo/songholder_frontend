import { IconButton, Typography } from '@mui/material'
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded'

export default function ExploreButton() {
  return (
    <IconButton
      sx={{
        color: 'white',
        borderRadius: '10px',
        ml: 'auto',
        mr: { xs: '140px', sm: '210px', md: '410px', lg: '550px' },
        mt: '-320px',
        width: 'auto',
      }}
      onClick={() => {
        location.href = '/discover'
      }}
    >
      <Typography
        sx={{
          mr: { xs: '5px', sm: '5px', md: '10px', lg: '20px' },
          mt: { xs: '-2px', sm: '0px', md: '0px', lg: '-5px' },
          fontFamily: 'Mitr',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: { sm: '17px', md: '22px', lg: '27px' },
          lineHeight: '36px',
          textAlign: 'center',

          color: 'rgba(255, 255, 255, 0.7)',
        }}
      >
        EXPLORE
      </Typography>
      <KeyboardDoubleArrowRightRoundedIcon
        sx={{
          borderStyle: 'solid',
          borderWidth: { xs: '2px', sm: '2px', md: '3px', lg: '4px' },
          borderRadius: '50%',
          fontSize: { xs: '15px', sm: '20px', md: '40px', lg: '48px' },
          opacity: 0.7,
        }}
      />
    </IconButton>
  )
}
