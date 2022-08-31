export default function CurveText() {
  return (
    <svg
      viewBox='0 -200 1550 600'
      width='100%'
      height='100%'
      style={{
        marginTop: '-100px',
        marginLeft: '17px',
      }}
    >
      <defs>
        <path
          d='M-3.05176e-05 74.9996C567 -22.5 904 -26.5001 1440 74.9993C1976 176.499 1893 426.5 1440 558C987 689.5 453.5 691.5 -3.05176e-05 558C-453.5 424.5 -567 172.499 -3.05176e-05 74.9996Z'
          fill='url(#paint0_linear_428_37098)'
          fillOpacity='0.55'
          id='CurvedPathParagraph3'
        />
      </defs>
      <text
        fontSize='54'
        x='325'
        y='50'
        textAnchor='middle'
        fill=' #3A8F8F'
        dy='-5%'
      >
        <textPath
          id='MyMessage'
          xlinkHref='#CurvedPathParagraph3'
          style={{
            fontFamily: 'Mitr',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '45px',
            lineHeight: '45px',
            color: ' #3A8F8F',
            letterSpacing: '6px',
          }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Which
          categories interest you?
        </textPath>
      </text>
    </svg>
  )
}
