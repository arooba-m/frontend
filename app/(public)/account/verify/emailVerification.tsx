'use client'
import React, { useState} from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
    Avatar, Button, CssBaseline, Link,
    Paper, Box, Typography, createTheme, ThemeProvider, Divider
} from '@mui/material';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { useRouter } from 'next/navigation';
import { useUserService} from '@/app/_services/useUserService';
import { VerifyService } from '@/app/_services/UserService';

export default function EmailVerification() {
    const router = useRouter();
      const userService = useUserService();

      const submitVerification = async (e: any) => {
        e.preventDefault();
        // const token = "";
        //get from response
        try {
          const response = await VerifyService();
          // Your login logic here
          console.log("Account Verified successful");
          
          router.push('/');
        } catch (error) {
          console.error(error);
        }
      }

    const defaultTheme = createTheme({
        typography: {
            fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
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

                {/* <CssBaseline /> */}

                <Box 
                    sx={{
                        my: 8, mx: 6,
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center'
                    }}>
                    <Avatar sx={{ mt: 8, mb: 2, bgcolor: '#597FB5' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5"
                        sx={{ fontWeight: 700 }}>
                        Email Verification
                    </Typography>

                    <MarkEmailReadIcon sx={{color: '#597FB5' , mt: 3, mb: 2, fontSize:45 }}></MarkEmailReadIcon>
{/* <Divider/> */}
                    {/* <Divider sx={{ my: 2, borderColor: "#fff !important" }} /> */}
                    <Divider sx={{ my: 2, borderColor: "#fff !important", height: "1px" }} />

                    <Typography textAlign="center" >
                        To verify your email address click on the button below.
                    </Typography>

                    {/* <Divider sx={{ my: 2, borderColor: "#fff !important" }} /> */}

                    <Typography sx={{mt: 2}}
                        textAlign="center" >
                        If you did not make this request, then you can ignore this email.
                    </Typography>
                 
                    <Button
                        onClick={submitVerification}
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 3, mb: 8,
                            width: '300px',
                            backgroundColor: "#597FB5 !important",
                            color: "#fff !important",
                            '&:hover': {
                                backgroundColor: "#405D80 !important",
                            },
                        }}> Verify Your Account 
                    </Button>
                    
                </Box>
                     </Box>
        </ThemeProvider>
    );
}
