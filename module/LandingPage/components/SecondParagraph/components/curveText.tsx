import { Box } from '@mui/material'

export default function CurveText() {
  return (
    <Box
      sx={{
        width: { xs: '125%', sm: '110%', md: '100%' },
        ml: { xs: '-90px', sm: '-40px', md: '0px' },
        height: '600px',
      }}
    >
      <svg
        viewBox='0 250 1550 600'
        width='100%'
        height='100%'
        style={{
          marginTop: '0px',
        }}
      >
        <path
          d='M-333 56.5001C209.5 477.5 1004 624 1871.5 117C2739 -390 2497.5 927.5 1782.5 796.5C1067.5 665.5 -396.5 764.33 -396.5 764.33C-396.5 764.33 -552.976 -114.209 -333 56.5001Z'
          fill='url(#paint0_linear_428_37098)'
          fillOpacity='0.55'
          id='CurvedPath'
        />
        <defs>
          <linearGradient
            id='paint0_linear_428_37098'
            x1='268.878'
            y1='378.133'
            x2='1235.88'
            y2='19.133'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#2BA4AB' />
            <stop offset='1' stopColor='#2E007C' />
          </linearGradient>
        </defs>
        <text
          fontSize='54'
          x='325'
          y='50'
          textAnchor='middle'
          fill='#5199C0'
          dy='-5%'
        >
          <textPath
            id='MyMessage'
            xlinkHref='#CurvedPath'
            style={{
              fontFamily: 'Kalam',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '30px',
              lineHeight: '45px',
              // color: "#5199C0",

              transform: 'rotate(5deg)',
              letterSpacing: '3px',
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Be
            the Songholders
          </textPath>
        </text>
        <text
          fontSize='54'
          x='325'
          y='50'
          textAnchor='middle'
          fill='#236386'
          dy='-5%'
        >
          <textPath
            id='MyMessage'
            xlinkHref='#CurvedPath'
            style={{
              fontFamily: 'Mitr',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '43px',
              lineHeight: '45px',
              color: '#236386',
              textShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
              letterSpacing: '3px',
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fund
            the next big hit music track
          </textPath>
        </text>
      </svg>
    </Box>
  )
}
