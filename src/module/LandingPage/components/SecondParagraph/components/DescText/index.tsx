import { Typography } from '@mui/material'

export default function DescText() {
  return (
    <Typography
      sx={{
        mt: { xs: '-330px', sm: '-335px', md: '-370px', lg: '-390px' },
        ml: { xs: '20px', sm: '50px', md: "'100px'" },
        width: { xs: '170px', sm: '250px', md: '270px', lg: '360px' },
        fontFamily: 'Kalam',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: { xs: '13px', sm: '19px', md: '20px', lg: '28px' },
        lineHeight: { xs: '20px', sm: '25px', md: '50px', lg: '55px' },
        color: '#FFFFFF',
      }}
    >
      Songholders’s fundraising campaign is a hub for emerging artists and new
      music projects.
    </Typography>
  )
}
