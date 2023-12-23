import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
// import logoImg from "../media/logo.png";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import {
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";

export const Navbar: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor: string, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" 
      // (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor: string) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Features", "Services", "Listed", "Contact"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <FeaturedPlayListIcon />}
                  {index === 2 && <MiscellaneousServicesIcon />}
                  {index === 3 && <ListAltIcon />}
                  {index === 4 && <ContactsIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  return (
    <NavbarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <NavbarLogo src='/media/logo.png' alt="logo" />
        </Box>

        <NavbarLinksBox>
          <NavLink variant="body2">Home</NavLink>
          {/* <NavLink variant="body2">Features</NavLink> */}
          {/* <NavLink variant="body2">Services</NavLink> */}
          {/* <NavLink variant="body2">Dashboard</NavLink> */}
          <NavLink variant="body2">Contact Us</NavLink>
        </NavbarLinksBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <NavLink variant="body2">
        <Link href="/accounts/login">
          <a>Login</a>
        </Link>
      </NavLink>

        <Link href="/accounts/signup">
    <a>
      <CustomButton
        backgroundColor="#0F1B4C"
        color="#fff"
        buttonText="Register"
      />
    </a>
  </Link>
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;

// import React, { useState } from 'react';
// import Link from 'next/link';
// import {
//   AppBar, Box, Toolbar, IconButton, Typography,
//   Menu, Container, Button, Tooltip,
//   MenuItem, Drawer, List, ListItem,
//   ListItemButton, ListItemIcon, ListItemText,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import HomeIcon from '@mui/icons-material/Home';
// import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
// import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
// import ListAltIcon from '@mui/icons-material/ListAlt';
// import ContactsIcon from '@mui/icons-material/Contacts';
// import CustomButton from "./CustomButton";
// import { usePathname } from 'next/navigation';

// function Navbar() {
//   const [loggingOut, setLoggingOut] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);

//   const logout = async () => {
//     setLoggingOut(true);
//     // await userService.logout();
//   };

//   const pathname = usePathname();

//   const toggleDrawer = (open: boolean) => (
//     event: React.KeyboardEvent | React.MouseEvent
//   ) => {
//     if (
//       event.type === "keydown"
//     ) {
//       return;
//     }

//     setMobileMenu(open);
//   };

//   const list = () => (
//     <Box
//       sx={{ width: "auto" }}
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       <List>
//         {[
//           { text: "Home", icon: <HomeIcon />, href: '/' },
//           { text: "Features", icon: <FeaturedPlayListIcon />, href: '/features' },
//           { text: "Services", icon: <MiscellaneousServicesIcon />, href: '/services' },
//           { text: "Listed", icon: <ListAltIcon />, href: '/listed' },
//           { text: "Contact", icon: <ContactsIcon />, href: '/contact' },
//         ].map((item, index) => (
//           <ListItem key={item.text} disablePadding>
//             <Link href={item.href}>
//               <ListItemButton>
//                 <ListItemIcon>{item.icon}</ListItemIcon>
//                 <ListItemText primary={item.text} />
//               </ListItemButton>
//             </Link>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <AppBar position="sticky" sx={{ backgroundColor: '#ffff' }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Box sx={{
//             mr: 'auto',
//             display: { xs: 'none', md: 'flex' },
//             flexGrow: 1,
//             height: 25
//           }}>
//             <img src='/Images/logo.png'
//               alt="OneClicks" />
//           </Box>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={() => setMobileMenu(true)}
//               sx={{ color: '#597FB5' }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Drawer
//               anchor="left"
//               open={mobileMenu}
//               onClose={() => setMobileMenu(false)}
//             >
//               {list()}
//             </Drawer>
//           </Box>

//           <Box sx={{
//             mr: 'auto',
//             display: { xs: 'flex', md: 'none' },
//             flexGrow: 1,
//             height: 25
//           }}>
//             <img src='/Images/logo.png'
//               alt="OneClicks" />
//           </Box>

//           <Box sx={{
//             flexGrow: 1, justifyContent: 'right',
//             mr: 4,
//             display: { xs: 'none', md: 'flex' }
//           }}>

//             <Link href={'/account/login'}>
//               <Button
//                 className={pathname === '/account/login' ? 'active' : ''}
//                 variant="outlined"
//                 sx={{ my: 2, display: 'block', color: "#597FB5", borderColor: "#597FB5" }}
//               >Login</Button>
//             </Link>
//             <Link href={'/account/signup'}>
//               <CustomButton
//                 backgroundColor="#0F1B4C"
//                 color="#fff"
//                 buttonText="Register"
//               />
//             </Link>
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton sx={{ p: 0 }}>
//                 <AccountCircleIcon
//                   sx={{ fontSize: 40, color: "#597FB5" }} />
//               </IconButton>
//             </Tooltip>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default Navbar;
