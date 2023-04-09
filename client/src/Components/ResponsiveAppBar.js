import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from "../images/logo.png"
import userImg from "../images/image.jpg"
  
const pages = ['Home', 'Property', 'About', 'Help'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [loggedIn, setloggedIn] = useState(localStorage.getItem('isLogged'));

  const handleCloseUserMenuSetting = () => {
    setAnchorElUser(null);
    localStorage.removeItem('isLogged')
    setloggedIn(false)

  };

  useEffect(() => {
    setloggedIn(localStorage.getItem('isLogged'))
  }, [loggedIn])
  



  return (
    <AppBar position="static " style={{ backgroundColor: 'transparent', position:"absolute", zIndex:'2', backgroundImage: "linear-gradient(45deg, #00000070, transparent)"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar style={{ width:'12%', height:'15%'}} src={logo} sx={{ width: 120, height: 55 }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              {pages.map((page, idx) => (
                <MenuItem key={idx} onClick={handleCloseNavMenu}>
                  <Link to={`/${page.toLowerCase()}`}>
                  <Typography  textAlign="center" >{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, idx) => (

              <Link to={`/${page.toLowerCase()}`}>
                 <Button key={idx} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block'}}>
                {page}
              </Button>
                  </Link>
              
            ))}
          </Box>
              {console.log(loggedIn)}
          {(!loggedIn) ?
          (<>
          <Link to="/register">
            <Button variant="contained" className="mx-3" disableElevation>
              Sign up  
            </Button>
          </Link>

          <Link to="/login">
            <Button variant="contained"disableElevation>
              Login  
            </Button>
          </Link>
          </>)
          :(<>
           <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src={userImg} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
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
      
              {settings.map((setting, idx) => (
                <>
                {setting==='Logout' ? (<MenuItem key={idx} onClick={handleCloseUserMenuSetting}>  
                  <Link to="/login">
                    <Typography textAlign="center">{setting}</Typography>
                  </Link> 
                </MenuItem>):
                (<MenuItem key={idx} onClick={handleCloseUserMenu}>  
                <Link to="/dashboard">
                  <Typography textAlign="center">{setting}</Typography>
                </Link> 
              </MenuItem>)
              }
                
                </>
              ))}
            </Menu>
          </Box>
          </>)}

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
