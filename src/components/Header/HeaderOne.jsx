import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import { AppBar,Box,
  Toolbar,IconButton,
  Typography,Menu,
  Container,Avatar,
  Button,Tooltip,
  MenuItem,Drawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

import FuncDrawer from './FuncDrawer';
import { setLogOutUserAction } from './../../redux/authReducer'

const HeaderOne = () => {

    const dispatch = useDispatch()
    const redirect = useNavigate()
    const { isAuth } = useSelector(state => state.authReducer)
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [drawer, setDrawer] = useState(false)

    const handleRedirect = (route) => {
      redirect(route)
    }

    const handleLogOutUser = () => {
      dispatch(setLogOutUserAction())
    }

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const toggleDrawer = (side, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Esc')) {
        return;
        }
    
        setDrawer({ ...drawer, [side]: open });
    }

    
  return (
    <AppBar position="static" sx={{mb: 3}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Link to='/'>
                <IconButton sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                    <HomeIcon/>
                </IconButton>
            </Link>
            
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <React.Fragment key={'left'}>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer('left', true)}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    side={'left'}
                    open={drawer['left']}
                    onClose={toggleDrawer('left', false)}
                >
                    <FuncDrawer side={'left'} toggleDrawer={toggleDrawer}/>
                </Drawer>
            </React.Fragment>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {isAuth ? 
              <>
                <Link to={'profile'}>
                    <Button
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Profile
                    </Button>
                </Link>
                  <Button 
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    onClick={() => handleLogOutUser()}>
                      Log out
                  </Button>
              </>
                :
                null
              }
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {isAuth ?
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User" src="null">
                    U
                  </Avatar>
                </IconButton>
              </Tooltip>
              :
              <>
                <Link to='../login'> 
                  <Button sx={{color: 'white'}}>LOG IN</Button>  
                </Link>
                <Link to='../registration'> 
                  <Button sx={{color: 'white'}}>Registration</Button>  
                </Link>
              </>
            }
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
                <MenuItem onClick={() => handleRedirect('/')}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem onClick={() => handleRedirect('profile')}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleLogOutUser}>
                  <Typography textAlign="center">Log Out</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default HeaderOne