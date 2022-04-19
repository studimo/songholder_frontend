import { Divider, Stack, Tooltip, useScrollTrigger } from '@mui/material'
import Button from '@mui/material/Button'

interface AppbarButtonProps {
  page: string
}

export function AppbarButton(props: AppbarButtonProps) {
  const page = props.page
  return (
    <>
      <Divider
        key={page + '-divider'}
        orientation='vertical'
        flexItem
        variant='middle'
        sx={{
          height: '35px',
          alignSelf: 'center',
          borderRightWidth: 1,
          background: 'white',
          display: page == 'HOME' ? 'none' : 'flex',
        }}
      />
      <Button
        key={page}
        onClick={() => {
          location.href = `/${page.toLowerCase()}`
        }}
        sx={{
          transition: '0.2s',
          my: 2,
          mx: 2,
          color: 'white',
          display: 'block',
          // fontSize: '17px',
          // fontWeight: '200',
          textDecoration: props.page == page ? 'underline' : 'none',
          textUnderlineOffset: '3px',
          // paddingBottom: '10px',
          fontFamily: 'Mitr',
          fontStyle: 'normal',
          fontWeight: 300,
          fontSize: '17px',
          lineHeight: '27px',
          textTransform: 'uppercase',
          '&:hover': {
            fontSize: '20px',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
            // background:
            //   "linear-gradient(134.22deg, rgba(1, 124, 117, 0.3) 23.94%, rgba(147, 2, 171, 0.3) 80.19%)",
            // backgroundClip: "text",
            // WebkitTextFillColor: "transparent",
          },
        }}
      >
        {page}
      </Button>
    </>
  )
}
