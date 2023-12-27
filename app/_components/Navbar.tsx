'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/system';
import CustomButton from './CustomButton';
import Image from 'next/image';
import {
  Link,
  Paper,
  styled,
  IconButton,
  Menu,
  Tooltip,
  MenuItem,
  Divider,
  useTheme,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

export const Navbar: React.FC = () => {
  const [loggingOut, setLoggingOut] = useState(false);

  // const [mobileMenu, setMobileMenu] = useState({
  //   left: false,
  // });

  // const toggleDrawer = (anchor: string, open: boolean) => (
  //   event: React.KeyboardEvent | React.MouseEvent
  // ) => {
  //   if (
  //     event.type === "keydown"
  //     // (event.type === "Tab" || event.type === "Shift")
  //   ) {
  //     return;
  //   }

  //   setMobileMenu({ ...mobileMenu, [anchor]: open });
  // };

  // const list = (anchor: string) => (
  //   <Box
  //     sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
  //     role="presentation"
  //     onClick={toggleDrawer(anchor, false)}
  //     onKeyDown={toggleDrawer(anchor, false)}
  //   >
  //     <List>
  //       {["Home", "Features", "Services", "Listed", "Contact"].map(
  //         (text, index) => (
  //           <ListItem key={text} disablePadding>
  //             <ListItemButton>
  //               <ListItemIcon>
  //                 {index === 0 && <HomeIcon />}
  //                 {index === 1 && <FeaturedPlayListIcon />}
  //                 {index === 2 && <MiscellaneousServicesIcon />}
  //                 {index === 3 && <ListAltIcon />}
  //                 {index === 4 && <ContactsIcon />}
  //               </ListItemIcon>
  //               <ListItemText primary={text} />
  //             </ListItemButton>
  //           </ListItem>
  //         )
  //       )}
  //     </List>
  //   </Box>
  // );

  const logout = async () => {
    setLoggingOut(true);
    // await userService.logout();
  };

  const pathname = usePathname();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

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

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    color: '#4F5361',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      color: '#405D80',
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    gap: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }));

  // const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
  //   cursor: 'pointer',
  //   display: 'none',
  //   marginRight: theme.spacing(2),
  //   [theme.breakpoints.down('md')]: {
  //     display: 'block',
  //   },
  // }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    background: '#E6F0FF',
    // opacity: 1, // Set opacity to 1 for full opacity
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.16)',
    borderWidth: '0px 0px thin',
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1),
    },
  }));
  const theme = useTheme();

  const NavbarLogo = styled('img')(({ theme }) => ({
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }));

  // const UserMenuContainer = styled(Box)(({ theme }) => ({
  //   display: 'flex',
  //   justifyContent: 'flex-end',
  //   alignItems: 'center',
  //   // marginRight: 'auto',
  //   // marginRight: "-200px",
  //   gap: theme.spacing(3),
  //   // [theme.breakpoints.down('md')]: {
  //   //   display: 'none',
  //   // },
  // }));

  return (
    <NavbarContainer
      maxWidth="xl"
      disableGutters
      sx={{
        gap: '2.5rem',
        pl: '20px',
        pr: '20px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem',
          // pl: "20px",
        }}
      >
        <Box //image for full screen
          sx={{
            mr: 'auto',
            display: { xs: 'none', md: 'flex' },
            flexGrow: 1,
            height: 25,
          }}
        >
          <Image
            src="/Images/navbarlogo2.svg"
            width={134}
            height={25}
            priority={true}
            alt="OneClicks"
          />
        </Box>

        <Box //for menu
          sx={{
            display: { xs: 'flex', md: 'none' },
            // justifyContent: "left"
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            // color="primary"
            sx={{ color: '#0F1B4C' }}
          >
            <MenuIcon />
          </IconButton>

          <Paper sx={{ backgroundColor: '#E6F0FF' }}>
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
                mt: '45px',
                alignItems: 'left',
                // backgroundColor:"#E6F0FF"
                // ml:"-30px"
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href={'/'} style={{ textDecoration: 'none' }}>
                  <Typography
                    className={pathname === '/' ? 'active' : ''}
                    textAlign="center"
                    color="#597FB5"
                    margin="-4px"
                    width="140px"
                  >
                    Home
                  </Typography>
                </Link>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href={'/account/login'} style={{ textDecoration: 'none' }}>
                  <Typography
                    className={pathname === '/account/login' ? 'active' : ''}
                    textAlign="center"
                    color="#597FB5"
                    margin="-4px"
                    width="140px"
                  >
                    Login
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Paper>
        </Box>

        <NavbarLinksBox>
          <NavLink variant="body2">Home</NavLink>
          {/* <NavLink variant="body2">Features</NavLink> */}
          {/* <NavLink variant="body2">Services</NavLink> */}
          {/* <NavLink variant="body2">Dashboard</NavLink> */}
          <NavLink variant="body2">Contact Us</NavLink>
        </NavbarLinksBox>
      </Box>

      <Box //logo for small screen
        sx={{
          // ml: '160px',
          // ml: '100px',
          // alignItems: 'center',
          justifyContent: 'center',
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          height: 25,
        }}
      >
        <Image
          src="/Images/navbarlogo2.svg"
          width={134}
          height={25}
          priority={true}
          alt="OneClicks"
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Box //login, signup for big screen
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'right',
            mr: '1rem',
            gap: '1rem',
          }}
        >
          <Link href="/account/login" style={{ textDecoration: 'none' }}>
            <NavLink variant="body2">Login</NavLink>
          </Link>

          <Link href="/account/signup" style={{ textDecoration: 'none' }}>
            <CustomButton backgroundColor="#0F1B4C" color="#fff" buttonText="Register" />
          </Link>
        </Box>

        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <AccountCircleIcon sx={{ fontSize: 40, color: '#0F1B4C' }} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{
            mt: '45px',

            [theme.breakpoints.down('md')]: {
              ml: theme.spacing(60), // Set margin-left to 16px on medium screens
            },
            [theme.breakpoints.up('lg')]: {
              ml: theme.spacing(145), // Set margin-left to 32px on large screens and above
            },
          }}
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
          <MenuItem onClick={handleCloseUserMenu}>
            <Link href={'/profile'} style={{ textDecoration: 'none' }}>
              <Typography margin="-4px" width="140px" textAlign="center" color="#597FB5">
                Profile
              </Typography>
            </Link>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleCloseUserMenu}>
            <Link href={'/account'} style={{ textDecoration: 'none' }}>
              <Typography margin="-4px" width="140px" textAlign="center" color="#597FB5">
                Account
              </Typography>
            </Link>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleCloseUserMenu}>
            <Link href={'/dashboard'} style={{ textDecoration: 'none' }}>
              <Typography margin="-4px" width="140px" textAlign="center" color="#597FB5">
                Dashboard
              </Typography>
            </Link>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleCloseUserMenu}>
            <Link href={'/'} style={{ textDecoration: 'none' }}>
              <Typography margin="-4px" width="140px" textAlign="center" color="#597FB5">
                Logout
              </Typography>
            </Link>
          </MenuItem>
        </Menu>
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;