
// 'use client'
// import React from 'react';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Menubar } from 'primereact/menubar';
// import { Button } from 'primereact/button';
// import { Tooltip } from 'primereact/tooltip';
// import { SlideMenu } from 'primereact/slidemenu';

// function HeaderComponent() {
//   const router = useRouter();
//   const [loggingOut, setLoggingOut] = useState(false);

//   const items = [
//     {
//       label: 'Home',
//       icon: 'pi pi-home',
//       command: () => router.push('/'),
//     },
//     {
//       label: 'Signup',
//       icon: 'pi pi-user-plus',
//       command: () => router.push('/signup'),
//     },
//     {
//       label: 'Profile',
//       icon: 'pi pi-user',
//       command: () => router.push('/profile'),
//     },
//     {
//       label: 'Account',
//       icon: 'pi pi-cog',
//       command: () => router.push('/account'),
//     },
//     {
//       label: 'Dashboard',
//       icon: 'pi pi-chart-bar',
//       command: () => router.push('/dashboard'),
//     },
//     {
//       label: 'Logout',
//       icon: 'pi pi-power-off',
//       command: () => router.push('/'),
//     },
//   ];

//   const endButton = (
//     <Tooltip target=".account-icon" content="Open settings" />
//   );

//   return (
//     <div>
//       <Menubar
//         model={items}
//         end={endButton}
//         style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #ccc' }}
//       />

      
//     </div>
//   );
// }

// export default HeaderComponent;
// import React from 'react'
// import Link from 'next/link';
// import { useState } from 'react';
// import { usePathname } from 'next/navigation';

// import {
//     AppBar, Box, Toolbar, IconButton, Typography,
//     Menu, Container, Button, Tooltip,
//     MenuItem,
//     Divider
// } 
//     from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';

// function HeaderComponent() {
//     const [loggingOut, setLoggingOut] = useState(false);
//     // const userService = useUserService();

//     const theme = createTheme({
//         // components: {
//         //     MuiButton: {
//         //       styleOverrides: {
//         //         contained: {
//         //         backgroundColor: "#597FB5",
//         //         color: "#fff",
//         //         '&:hover': {
//         //           backgroundColor: "#405D80",
//         //         },
//         //       },
//         //     },
//         //   },
//         // },
//         // palette: {
//         //     primary: {
//         //         main: '#fffff',
//         //     },
//         // secondary: {
//         //     main: '#597FB5',
//         // },
//         // },
//         typography: {
//             secondary: {
//                 main: '#fffff'
//             }
//         },
//     })

//     const logout = async () => {
//         setLoggingOut(true);
//         // await userService.logout();
//     }

//     const pathname = usePathname();
//     // const exact = true;
//     // const href = '/'
//     // const isActive = exact ? pathname === href : pathname.startsWith(href);

//     const [anchorElNav, setAnchorElNav] = React.useState(null);
//     const [anchorElUser, setAnchorElUser] = React.useState(null);

//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };

//     return (
//         <ThemeProvider theme={theme}>

//             <AppBar position="sticky" sx={{ backgroundColor: '#ffff' }}>
//                 <Container maxWidth="xl">
//                     <Toolbar disableGutters>
//                         <Box sx={{
//                             mr: 'auto',
//                             display: { xs: 'none', md: 'flex' },
//                             flexGrow: 1,
//                             height: 25
//                         }}>
//                             <img src='/Images/logo.png'
//                                 alt="OneClicks" />
//                         </Box>

//                         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                             <IconButton
//                                 size="large"
//                                 aria-label="account of current user"
//                                 aria-controls="menu-appbar"
//                                 aria-haspopup="true"
//                                 onClick={handleOpenNavMenu}
//                                 // color="primary"
//                                 sx={{ color: '#597FB5' }}
//                             >
//                                 <MenuIcon />
//                             </IconButton>
//                             <Menu
//                                 id="menu-appbar"
//                                 anchorEl={anchorElNav}
//                                 anchorOrigin={{
//                                     vertical: 'bottom',
//                                     horizontal: 'left',
//                                 }}
//                                 keepMounted
//                                 transformOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'left',
//                                 }}
//                                 open={Boolean(anchorElNav)}
//                                 onClose={handleCloseNavMenu}
//                                 sx={{
//                                     display: { xs: 'block', md: 'none' },
//                                 }}
//                             >

//                                 <MenuItem onClick={handleCloseNavMenu}>
//                                     <Link href={'/'}><Typography
//                                             className={pathname === '/' ? 'active' : ''}
//                                         textAlign="center" color="#597FB5" margin="-4px" width="140px"
//                                     >Home</Typography></Link>
//                                 </MenuItem>
//                                 <Divider />
//                                 <MenuItem onClick={handleCloseNavMenu}>
//                                     <Link href={'/signup'}><Typography 
//                                             className={pathname === '/signup' ? 'active' : ''}
//                                             textAlign="center" color="#597FB5"
//                                         margin="-4px" width="140px" >Signup</Typography></Link>
//                                 </MenuItem>

//                             </Menu>
//                         </Box>

//                         <Box sx={{
//                             mr: 'auto',
//                             display: { xs: 'flex', md: 'none' },
//                             flexGrow: 1,
//                             height: 25
//                         }}>
//                             <img src='/Images/logo.png'
//                                 alt="OneClicks" />
//                         </Box>


//                         <Box sx={{
//                             flexGrow: 1, justifyContent: 'right',
//                             mr: 4,
//                             display: { xs: 'none', md: 'flex' }
//                         }}>

//                             <Link href={'/'}> <Button
//                                 key="Home"
//                                 className={pathname === '/signup' ? 'active' : ''}
//                                 onClick={handleCloseNavMenu}
//                                 variant="outlined"
//                                 // color='secondary'
//                                 sx={{ my: 2, display: 'block', color: "#597FB5", borderColor: "#597FB5" }}
//                             // sx={{ my: 2, display: 'block', color:"#597FB5"}}
//                             >Home</Button></Link>
//                             <Link href={'/signup'}>
//                                 <Button
//                                     className={pathname === '/signup' ? 'active' : ''}
//                                     onClick={handleCloseNavMenu}
//                                     variant="contained"
//                                     // sx={{ my: 2, ml: 2, display: 'block', backgroundColor: "#597FB5", color: "#fff" }}
//                                     sx={{
//                                         my: 2,
//                                         ml: 4,
//                                         display: 'block',
//                                         backgroundColor: "#597FB5 !important",
//                                         color: "#fff !important",
//                                         '&:hover': {
//                                             backgroundColor: "#405D80 !important", // Darker color on hover
//                                         },
//                                     }}
//                                 >Signup</Button></Link>


//                             {/* <Button
//                                 onClick={logout}
//                                 variant="outlined"
//                                 sx={{ my: 2, display: 'block', color: "#597FB5", borderColor: "#597FB5" }}
//                                 >
//                             </Button> */}
                        
//                         </Box>

//                         <Box sx={{ flexGrow: 0 }}>
//                             <Tooltip title="Open settings">
//                                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                                     <AccountCircleIcon
//                                         sx={{ fontSize: 40, color: "#597FB5" }} />
//                                 </IconButton>
//                             </Tooltip>
//                             <Menu
//                                 sx={{ mt: '45px' }}
//                                 id="menu-appbar"
//                                 anchorEl={anchorElUser}
//                                 anchorOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'right',
//                                 }}
//                                 keepMounted
//                                 transformOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'right',
//                                 }}
//                                 open={Boolean(anchorElUser)}
//                                 onClose={handleCloseUserMenu}
//                             >
//                                 <MenuItem onClick={handleCloseUserMenu} >
//                                     <Link href={'/profile'}><Typography margin="-4px" width="140px" textAlign="center" color="#597FB5">Profile</Typography></Link>
//                                 </MenuItem>
//                                 <Divider />
//                                 <MenuItem onClick={handleCloseUserMenu}>
//                                     <Link href={'/account'}><Typography margin="-4px" width="140px" textAlign="center" color="#597FB5">Account</Typography></Link>
//                                 </MenuItem>
//                                 <Divider />
//                                 <MenuItem onClick={handleCloseUserMenu}>
//                                     <Link href={'/dashboard'}><Typography margin="-4px" width="140px" textAlign="center" color="#597FB5">Dashboard</Typography></Link>
//                                 </MenuItem>
//                                 <Divider />
//                                 <MenuItem onClick={handleCloseUserMenu}>
//                                     <Link href={'/'}><Typography margin="-4px" width="140px" textAlign="center" color="#597FB5">Logout</Typography></Link>
//                                 </MenuItem>
//                             </Menu>
//                         </Box>
//                     </Toolbar>
//                 </Container>
//             </AppBar>
//         </ThemeProvider>
//     );
// }

// export default HeaderComponent;
