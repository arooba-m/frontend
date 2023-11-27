// // components/HeaderComponent.tsx

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// import {
//   AppBar, Box, Toolbar, IconButton, Typography,
//   Menu, Container, Button, Tooltip,
//   MenuItem, Divider
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';

// function HeaderComponent() {
//   const [loggingOut, setLoggingOut] = useState(false);
//   const theme = createTheme({
//     typography: {
//       // The correct way to define custom typography options is to use the `components` property
//       components: {
//         MuiTypography: {
//           styleOverrides: {
//             secondary: {
//               color: '#fffff', // Adjust the color according to your needs
//             },
//           },
//         },
//       },
//     },
//   });

//   const logout = async () => {
//     setLoggingOut(true);
//     // await userService.logout();
//   };

//   const pathname = usePathname();
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <AppBar position="sticky" sx={{ backgroundColor: '#ffff' }}>
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             {/* ... rest of the code remains the same ... */}
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </ThemeProvider>
//   );
// }

// export default HeaderComponent;
