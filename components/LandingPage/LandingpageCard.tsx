import { Box, CardMedia } from '@mui/material'

interface LandingpageCardProps {
  url: string
}

export default function LandingpageCard({ url }: LandingpageCardProps) {
  var sizeDefualt = { xs: '70px', sm: '90px', md: '130px', lg: '180px' }
  var sizeHover = { xs: '90px', sm: '110px', md: '150px', lg: '200px' }
  return (
    <Box
      sx={{
        clipPath: 'polygon(15% 0%, 100% 0%,85% 100%,0% 100%)',
        height: sizeDefualt,
        width: sizeDefualt,
        transition: '0.2s',
        transitionDelay: '0.02s',
        backgroundSize: 'cover',
        // borderRadius: "20px",
        '&:hover': {
          clipPath: 'polygon(9% 0%, 100% 0%,91% 100%,0% 100%)',
          height: sizeDefualt,
          width: sizeHover,
          backgroundImage: `linear-gradient(134.22deg, rgba(1, 124, 117, 0.3) 23.94%, rgba(147, 2, 171, 0.3) 80.19%), url(https://img.youtube.com/vi/${url}/maxresdefault.jpg)`,
          // borderTopRightRadius: 15,
          // borderBottomRightRadius: 50,
          // transition: "0.2s",
        },
        backgroundImage: `url(https://img.youtube.com/vi/${url}/maxresdefault.jpg)`,
      }}
    />
  )
}
// ujIre04ZtAY
