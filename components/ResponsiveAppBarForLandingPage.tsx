import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Badge, CardMedia, Divider, Icon } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const pages = ["HOME", "INVESTED", "BOARD"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "50px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    // width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "32ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

const ResponsiveAppBarForLandingPage = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      // position="absolute"
      sx={{
        background: "none",

        // background: "linear-gradient(92.42deg, #65C1C1 16.46%, #805FB6 80.52%)",
        boxShadow: "none",
      }}
    >
      <Container maxWidth={false} style={{ padding: 0 }}>
        <Toolbar
          disableGutters
          sx={{
            height: "58px",
            // width: "800px",
            padding: "20px",
          }}
        >
          <Typography sx={{ mr: 0.75, display: { xs: "none", md: "flex" } }}>
            <img src="/assets/images/logo.png" style={{ height: "37.5px" }} />
          </Typography>
          <Typography
            sx={{
              mr: 3,
              fontSize: "22px",
              display: { xs: "none", md: "flex" },
            }}
          >
            MaTchA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img src="/assets/images/logo.png" style={{ height: "37.5px" }} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => {
              return page == "HOME" ? (
                <>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      transition: "0.2s",
                      my: 2,
                      mx: 2,
                      color: "white",
                      display: "block",
                      fontSize: "17px",
                      fontWeight: "200",
                      "&:hover": {
                        fontSize: "25px",
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
                    orientation="vertical"
                    flexItem
                    variant="middle"
                    sx={{
                      height: "45px",
                      alignSelf: "center",
                      borderRightWidth: 1.5,
                      background: "white",
                    }}
                  />
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      transition: "0.2s",
                      my: 2,
                      mx: 2,
                      color: "white",
                      display: "block",
                      fontSize: "17px",
                      fontWeight: "200",
                      "&:hover": {
                        fontSize: "25px",
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
              );
            })}
          </Box>
          <Button
            sx={{ color: "white" }}
            onClick={() => {
              location.href = "/login";
            }}
          >
            LOGIN
          </Button>
          <Search
            id="MaStEr"
            style={{ width: "max" }}
            sx={{
              paddingRight: "10px",
              mr: "25px",
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
          </Search>
          <IconButton
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
          </IconButton>
          <Box sx={{ flexGrow: 0, mr: "15px" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            sx={{
              fontSize: "20px",
              display: { xs: "none", md: "flex" },
            }}
            fontWeight={10}
          >
            Matcha Chayen
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBarForLandingPage;
