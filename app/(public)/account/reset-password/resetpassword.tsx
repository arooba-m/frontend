'use client'
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar, Button, CssBaseline, TextField, Link,
  Paper, Box, Grid, Typography, createTheme, ThemeProvider, Divider
} from '@mui/material';
import { useRouter } from 'next/navigation';
// import { useUserService } from '@/app/_services/useUserService';
import { ResetPasswordService } from '@/app/_services/authService';

export default function ResetPassword() {
  const router = useRouter();
  // const  token  = router.query
  // useEffect(() => {
  //   // Log the token to the console when the component mounts
  //   console.log('Token from URL:', token);
  // }, [token]);

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

  // const userService = useUserService();

  const submitReset = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const token = "";
      const response = await ResetPasswordService(token.toString(),confirmPassword,password);
      // Your login logic here
      console.log("Password successful changed");

      setPassword("");
      setConfirmPassword("");

      router.push('/');
    } catch (error) {
      console.error(error);
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        {
            // if(password ===value){
                setConfirmPassword(value);
                // setPasswordsMatch(password === value);
            // }
            // else{
            // }
        }
        break;
      default:
        break;
    }

    if (password !== confirmPassword) {
        setPasswordsMatch(false);
    }
    else{
    setPasswordsMatch(true);}
  }

  const defaultTheme = createTheme({
    typography: {
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            width: '360px',
            boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16)',
            borderRadius: '8px',
            '& .MuiInputLabel-root': {
              transform: 'translateY(50%)',
            },
          },
          input: {
            borderRadius: '50%',
            height: '15px',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
    <Box component={Paper} elevation={24} square={false}
        sx={{
            mx: 'auto',
            maxWidth: '600px',
            // mr: 10, ml: 10, mt: 10,
            borderRadius: '20px', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
        }}>
        <Box sx={{ my: 8, mx: 4, py:8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
               <Avatar sx={{ m: 1, bgcolor: '#597FB5' }}>
    <LockOutlinedIcon />
               </Avatar>
               <Typography component="h1" variant="h5" sx={{ fontWeight: 700 }}>
                Reset Password
           </Typography>
              <Box component="form" onSubmit={submitReset}
                sx={{
                  mt: 3,
                  textAlign: 'center'
                }}>
                <TextField
                  margin="normal"
                  required
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password} onChange={onChange}
                />
                  <TextField  margin="normal"
                  required
                  name="confirmPassword"
                  label="Comfirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="current-password"
                  value={confirmPassword} onChange={onChange}
                  error={!passwordsMatch}
                  helperText={!passwordsMatch ? "Passwords do not match" : ""}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3, mb: 2,
                    width: '360px',
                    backgroundColor: "#597FB5 !important",
                    color: "#fff !important",
                    '&:hover': {
                      backgroundColor: "#405D80 !important",
                    },
                  }}> Reset Password
                </Button>
               
          </Box>
            </Box>
             </Box>
</ThemeProvider>

    // <ThemeProvider theme={defaultTheme}>
    //   <Box sx={{ m: 10 }}>
    //     <Grid container component={Paper} elevation={24} square={false} sx={{ borderRadius: '20px', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)' }}>
    //       <CssBaseline />
    //       <Grid item xs={false} md={6} sx={{ m: 'auto' }}>
    //         <img src="/Images/signupImage.svg" alt="" />
    //       </Grid>
    //       <Grid item xs={12} md={6}>
    //         <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    //           <Avatar sx={{ m: 1, bgcolor: '#597FB5' }}>
    //             <LockOutlinedIcon />
    //           </Avatar>
    //           <Typography component="h1" variant="h5" sx={{ fontWeight: 700 }}>
    //             Reset Password
    //           </Typography>
    //           <Box component="form" onSubmit={submitReset}
    //             sx={{
    //               mt: 3,
    //               textAlign: 'center'
    //             }}>
    //             <TextField
    //               margin="normal"
    //               required
    //               name="password"
    //               label="Password"
    //               type="password"
    //               id="password"
    //               autoComplete="current-password"
    //               value={password} onChange={onChange}
    //             />
    //               <TextField  margin="normal"
    //               required
    //               name="confirmPassword"
    //               label="Comfirm Password"
    //               type="password"
    //               id="confirmPassword"
    //               autoComplete="current-password"
    //               value={confirmPassword} onChange={onChange}
    //               error={!passwordsMatch}
    //               helperText={!passwordsMatch ? "Passwords do not match" : ""}
    //             />
    //             <Button
    //               type="submit"
    //               fullWidth
    //               variant="contained"
    //               sx={{
    //                 mt: 3, mb: 2,
    //                 width: '360px',
    //                 backgroundColor: "#597FB5 !important",
    //                 color: "#fff !important",
    //                 '&:hover': {
    //                   backgroundColor: "#405D80 !important",
    //                 },
    //               }}> Reset Password
    //             </Button>0     
    //           </Box>
    //         </Box>
    //       </Grid>
    //     </Grid>
    //   </Box>
    // </ThemeProvider>
  );
}
