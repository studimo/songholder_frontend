import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
// import MenuIcon from '@mui/icons-material/Menu'
import {
  CardMedia,
  Divider,
  Stack,
  Tooltip,
  useScrollTrigger,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  MenuItem,
  InputBase,
  useMediaQuery,
} from '@mui/material'
import { motion, useViewportScroll } from 'framer-motion'
import { useRouter } from 'next/router'
import { useAuth } from 'Providers/FirebaseAuthProvider'
import { ArrowForward, Menu as MenuIcon } from '@mui/icons-material'
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
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  )

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuOpen(!menuOpen)
    // setAnchorElNav(event.currentTarget)
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
          threshold: 270,
        })
      : props.background == 'gradient'
  const variant = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  }
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
              // sx={{ ml: '-15px' }}
            >
              {/* <MenuIcon /> */}
              <svg width='27' height='17' viewBox='0 0 27 17' fill='none'>
                <path
                  d='M1.83325 14.7916C1.28097 14.7916 0.833252 15.2393 0.833252 15.7916C0.833252 16.3439 1.28097 16.7916 1.83325 16.7916V14.7916ZM25.1666 16.7916C25.7189 16.7916 26.1666 16.3439 26.1666 15.7916C26.1666 15.2393 25.7189 14.7916 25.1666 14.7916V16.7916ZM1.83325 7.49992C1.28097 7.49992 0.833252 7.94763 0.833252 8.49992C0.833252 9.0522 1.28097 9.49992 1.83325 9.49992V7.49992ZM25.1666 9.49992C25.7189 9.49992 26.1666 9.0522 26.1666 8.49992C26.1666 7.94763 25.7189 7.49992 25.1666 7.49992V9.49992ZM1.83325 0.208252C1.28097 0.208252 0.833252 0.655967 0.833252 1.20825C0.833252 1.76054 1.28097 2.20825 1.83325 2.20825V0.208252ZM25.1666 2.20825C25.7189 2.20825 26.1666 1.76054 26.1666 1.20825C26.1666 0.655967 25.7189 0.208252 25.1666 0.208252V2.20825ZM1.83325 16.7916H25.1666V14.7916H1.83325V16.7916ZM1.83325 9.49992H25.1666V7.49992H1.83325V9.49992ZM1.83325 2.20825H25.1666V0.208252H1.83325V2.20825Z'
                  fill='white'
                />
              </svg>
            </IconButton>
            <Stack
              sx={{
                flexDirection: 'row',
                height: '100%',
                // display: menuOpen ? 'flex' : 'none',
                justifyContent: 'flex',
                alignContent: 'center',
                mt: '3px',
              }}
            >
              <Button
                component={motion.div}
                animate={menuOpen ? 'open' : 'closed'}
                variants={variant}
                disabled={!menuOpen}
                sx={{
                  fontFamily: 'Mitr',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '24px',
                  mr: '20px',
                  ml: '20px',
                  // opacity: props.page == 'HOME' ? '1' : '0.6',
                  color:
                    props.page == 'HOME' ? 'white' : 'rgba(255, 255, 255, 0.6)',
                }}
                onClick={() => {
                  location.href = `/home`
                }}
              >
                HOME
              </Button>
              <Button
                component={motion.div}
                animate={menuOpen ? 'open' : 'closed'}
                variants={variant}
                disabled={!menuOpen}
                sx={{
                  fontFamily: 'Mitr',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '24px',
                  // opacity: props.page == 'DISCOVER' ? '1' : '0.6',
                  color:
                    props.page == 'DISCOVER'
                      ? 'white'
                      : 'rgba(255, 255, 255, 0.6)',
                  // color: 'white',
                }}
                onClick={() => {
                  location.href = `/discover`
                }}
              >
                DISCOVER
              </Button>
            </Stack>
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
                <MenuItem
                  key={page}
                  onClick={() => {
                    location.href = `/${page.toLowerCase()}`
                  }}
                >
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              display: {
                xs: menuOpen ? 'none' : 'flex',
                md: 'none',
              },
              position: 'absolute',
              right: 'calc(50vw - 25px)',
            }}
          >
            <Box
              component='img'
              sx={{
                height: '50px',
                width: '50px',
                // paddingLeft: '25px',
                // mr: '-25px',
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },
              }}
              alt='LOGO'
              src='./assets/images/logo/logoWithoutText.png'
            />
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
                // <AppbarButton key={page} page={page}></AppbarButton>
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
          {menuOpen ? (
            <></>
          ) : authUser ? (
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
                sx={{ color: 'white', fontSize: '13px', textTransform: 'none' }}
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
