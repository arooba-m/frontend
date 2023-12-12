// components/LoginComponent.tsx

'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar, Button, CssBaseline, TextField, Link,
  Paper, Box, Grid, Typography, createTheme, ThemeProvider, Divider
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { LoginService } from '@/app/_services/UserService';

export default function LoginComponent() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  // const userService = useUserService();

  const submitLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await LoginService(username, password);
      // Your login logic here
      console.log("Login successful");

      setUsername("");
      setPassword("");

      router.push('/');
    } catch (error) {
      console.error(error);
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
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
      <Box sx={{ m: 10 }}>
        <Grid container component={Paper} elevation={24} square={false} sx={{ borderRadius: '20px', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)' }}>
          <CssBaseline />
          <Grid item xs={false} md={6} sx={{ m: 'auto' }}>
            <img src="/Images/signupImage.svg" alt="" />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar sx={{ m: 1, bgcolor: '#597FB5' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" sx={{ fontWeight: 700 }}>
                Login
              </Typography>
              <Box component="form" onSubmit={submitLogin}
                sx={{
                  mt: 3,
                  textAlign: 'center'
                }}>
                <TextField margin="normal" required
                  id="username" label="Username"
                  name="username" type='text'
                  autoFocus
                  autoComplete='username'
                  value={username} onChange={onChange}
                />
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
                  }}> Login
                </Button>
                <Divider variant="middle" sx={{ mb: 2 }} />
                <Link href="#resetPassword" variant="body2" textAlign="center"
                  sx={{
                    fontWeight: 600, color: '#597FB5',
                    '&:hover': {
                      fontWeight: 500,
                    }
                  }}>
                  <p>Forgot password?</p>
                </Link>
                <Link href="/account/register" variant="body2" textAlign="center"
                  sx={{
                    fontWeight: 600, color: '#597FB5',
                    '&:hover': {
                      fontWeight: 500,
                    }
                  }}>
                  <p>Don't have an account? Signup</p>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
