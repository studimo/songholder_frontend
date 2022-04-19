import { Divider, Stack, Tooltip, useScrollTrigger } from '@mui/material'
import Button from '@mui/material/Button'

interface AppbarButtonProps {
  page: string
}

export function AppbarButton(props: AppbarButtonProps) {
  const page = props.page
  return page == 'HOME' ? (
    <>
      <Button
        key={page}
        onClick={() => {
          location.href = '/'
        }}
        sx={{
          transition: '0.2s',
          my: 2,
          mx: 2,
          color: 'white',
          display: 'block',
          fontSize: '17px',
          fontWeight: '200',
          '&:hover': {
            fontSize: '20px',
            textDecoration: 'underline',
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
  ) : (
    <>
      <Divider
        key={page + '-divider'}
        orientation='vertical'
        flexItem
        variant='middle'
        sx={{
          height: '45px',
          alignSelf: 'center',
          borderRightWidth: 1.5,
          background: 'white',
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
          fontSize: '17px',
          fontWeight: '200',
          '&:hover': {
            fontSize: '20px',
            textDecoration: 'underline',
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
