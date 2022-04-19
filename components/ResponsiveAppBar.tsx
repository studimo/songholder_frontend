import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import {
  CardMedia,
  Divider,
  Stack,
  Tooltip,
  useScrollTrigger,
} from '@mui/material'
import InputBase from '@mui/material/InputBase'
import { motion, useViewportScroll } from 'framer-motion'
import { useRouter } from 'next/router'
import { useAuth } from 'Providers/FirebaseAuthProvider'
import { ArrowForward } from '@mui/icons-material'
import { AppbarButton } from './AppbarButton'
// import "components/navbar.css";

const pages = [
  'HOME',
  'DISCOVER',
  //  'INVESTED'
]
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '50px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    // width: "auto",
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '40ch',
      '&:focus': {
        width: '45ch',
      },
    },
  },
}))

interface AppBarProps {
  background: 'auto' | 'gradient' | 'transparent'
  page: 'HOME' | 'DISCOVER' | 'INVESTED'
}

function ResponsiveAppBar(props: AppBarProps) {
  const { scrollYProgress, scrollY } = useViewportScroll()
  // React.useEffect(() => {
  //   console.log(scrollY);
  //   console.log(scrollY.current > 550);
  // }, [scrollYProgress]);
  const { authUser, loading, signOut } = useAuth()
  // console.log(authUser)
  const router = useRouter()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  )

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const [positionY, setPositionY] = React.useState(0)

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  const variants = {
    gradient: { opacity: 1, x: 0 },
    none: { opacity: 0, x: '-100%' },
  }
  // React.useEffect(() => {
  //   setPositionY(window.scrollY);
  //   console.log(positionY);
  // }, [window?.scrollY]);
  // console.log(router.pathname)
  const trigger =
    props.background == 'auto'
      ? useScrollTrigger({
          disableHysteresis: true,
          threshold: 460,
        })
      : props.background == 'gradient'
  return (
    <AppBar
      className='navbar'
      // position="absolute"

      sx={{
        background: trigger
          ? 'linear-gradient(92.42deg, #65C1C1 16.46%, #805FB6 80.52%)'
          : 'none',
        // background: "none",
        // background: "linear-gradient(92.42deg, #65C1C1 16.46%, #805FB6 80.52%)",
        boxShadow: 'none',
      }}
      component={motion.div}
      // animate={scrollY > 550 ? "none" : "gradient"}
      variants={variants}
    >
      {/* <h1>test</h1>
      {scrollY.curent > 550 ? <h1>test</h1> : <></>} */}
      <Container maxWidth={false} style={{ padding: 0 }}>
        <Toolbar
          disableGutters
          sx={{
            height: '58px',
            // width: "800px",
            padding: '20px',
          }}
        >
          <Typography sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* <CardMedia image='./assets/images/logo/logoWithoutText.png'/> */}
            <Box
              component='img'
              sx={{
                height: '50px',
                width: '50px',
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },
              }}
              alt='LOGO'
              src='./assets/images/logo/logoWithoutText.png'
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(page => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img src='./assets/images/logo.png' style={{ height: '37.5px' }} />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              ml: '25px',
            }}
          >
            {pages.map(
              page => (
                <AppbarButton key={page} page={page}></AppbarButton>
              ),
              // page == 'HOME' ? (
              //   <>
              //     <Button
              //       key={page}
              //       onClick={() => {
              //         location.href = '/'
              //       }}
              //       sx={{
              //         transition: '0.2s',
              //         my: 2,
              //         mx: 2,
              //         color: 'white',
              //         display: 'block',
              //         fontSize: '17px',
              //         fontWeight: '200',
              //         '&:hover': {
              //           fontSize: '20px',
              //           textDecoration: 'underline',
              //           // background:
              //           //   "linear-gradient(134.22deg, rgba(1, 124, 117, 0.3) 23.94%, rgba(147, 2, 171, 0.3) 80.19%)",
              //           // backgroundClip: "text",
              //           // WebkitTextFillColor: "transparent",
              //         },
              //       }}
              //     >
              //       {page}
              //     </Button>
              //   </>
              // ) : (
              //   <>
              //     <Divider
              //       key={page + '-divider'}
              //       orientation='vertical'
              //       flexItem
              //       variant='middle'
              //       sx={{
              //         height: '45px',
              //         alignSelf: 'center',
              //         borderRightWidth: 1.5,
              //         background: 'white',
              //       }}
              //     />
              //     <Button
              //       key={page}
              //       onClick={() => {
              //         location.href = `/${page.toLowerCase()}`
              //       }}
              //       sx={{
              //         transition: '0.2s',
              //         my: 2,
              //         mx: 2,
              //         color: 'white',
              //         display: 'block',
              //         fontSize: '17px',
              //         fontWeight: '200',
              //         '&:hover': {
              //           fontSize: '20px',
              //           textDecoration: 'underline',
              //           // background:
              //           //   "linear-gradient(134.22deg, rgba(1, 124, 117, 0.3) 23.94%, rgba(147, 2, 171, 0.3) 80.19%)",
              //           // backgroundClip: "text",
              //           // WebkitTextFillColor: "transparent",
              //         },
              //       }}
              //     >
              //       {page}
              //     </Button>
              //   </>
              // ),
            )}
          </Box>
          {/* <Search
            style={{ width: "max" }}
            sx={{
              paddingRight: "10px",
              mr: "120px",

              display: { xs: "none", md: "flex" },
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}

              // fullWidth
            />
          </Search> */}
          {/* <IconButton
            sx={{
              // background: "white",
              mr: "40px",
              ml: "10px",
              color: "white",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Badge badgeContent={4} color="secondary">
              <AttachFileIcon fontSize="large" />
            </Badge>
          </IconButton> */}
          {authUser ? (
            <Box sx={{ flexGrow: 0, mr: '15px', flexDirection: 'row' }}>
              <Stack
                sx={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Tooltip title='Open settings' sx={{ flexDirection: 'row' }}>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt='Remy Sharp'
                      src={authUser.photoURL || '/static/images/avatar/2.jpg'}
                    />
                  </IconButton>
                </Tooltip>
                <Typography
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    ml: '15px',
                    mt: '5px',
                    fontFamily: 'Kalam',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '29px',

                    color: '#FFFFFF',
                  }}
                >
                  {authUser.email || ''}
                </Typography>
              </Stack>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key='account' onClick={handleCloseUserMenu} disabled>
                  <Typography textAlign='center'>account</Typography>
                </MenuItem>

                <MenuItem
                  key='dashboard'
                  onClick={handleCloseUserMenu}
                  disabled
                >
                  <Typography textAlign='center'>dashboard</Typography>
                </MenuItem>

                <MenuItem key='Logout' onClick={signOut}>
                  <Typography textAlign='center' sx={{ color: 'darkred' }}>
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Button
              onClick={() => router.push('/signin')}
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  // borderColor: "#ffffff",
                },
              }}
            >
              <Typography
                sx={{ color: 'white', fontSize: '17px', textTransform: 'none' }}
              >
                SING IN
              </Typography>
              <ArrowForward sx={{ fontSize: '15px', ml: '5px' }} />
            </Button>
          )}
          {/* {authUser ? (
            <>
              <Avatar
                alt='Remy Sharp'
                src={authUser.photoURL || '/static/images/avatar/2.jpg'}
                sx={{ mr: '15px' }}
              />
              <Typography
                sx={{
                  fontSize: '20px',
                  display: { xs: 'none', md: 'flex' },
                }}
                fontWeight={10}
              >
                {authUser.email || ''}
              </Typography>
              <Button onClick={signOut}>SignOut</Button>
            </>
          ) : (
            <Button
            onClick={() => router.push('/signin')}
            sx={{ color: 'white', 
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              // borderColor: "#ffffff",
            },}}
          >
            <Typography
              sx={{ color: 'white', fontSize: '17px', textTransform: 'none' }}
            >
              Sign In
            </Typography>
            <ArrowForward sx={{ fontSize: '15px', ml: '5px' }} />
          </Button>
          )} */}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

ResponsiveAppBar.defaultProps = {
  background: 'gradient',
}

export default ResponsiveAppBar
