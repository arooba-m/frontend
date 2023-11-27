// import React from 'react'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { useState, useEffect } from 'react'
// import {
//   Avatar, Button, CssBaseline, TextField, Link,
//   Paper, Box, Grid,
//   Typography, createTheme, ThemeProvider,
//   Divider
// } from '@mui/material';

// import { useRouter } from 'next/navigation';
// import useUserService from '@/Services/useUserService';
// // import {useUserService} from '@/Services/useUserService';

// export default function SignupComponent() {

//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const router = useRouter();
//   const userService = useUserService();


//   // useEffect(() => {
//   //  submitSignup();
//   // }, [])
  
//   const submitSignup = async (e) => {
//     e.preventDefault() //stops from reloading on form submit
//     const data = { firstname, lastname, username, email, password };
//     try {
//       let message;

//       const response = await userService.signup(data);
//       // const response = await userService.signup(data);
//       message = "User registered";
//       console.log(message); //toaster

//       setFirstname("");
//       setLastname("");
//       setUsername("");
//       setEmail("");
//       setPassword("");

//       // router.push('/');
//       //toaster service for message;
//     }
//     catch (error) {
//       //toaster service for error message
//       console.error(error);
//     }

//   }

//   //before service folder
//   // const submitSignup = async (e) => {
//   //   e.preventDefault() //stops from reloading on form submit
//   //   const data = { firstname, lastname, email, password };

//   //   try {
//   //     // const response = await signup(data);
//   //     // console.log(response);
//   //         const response = await fetch("http://localhost:3000/api/signup", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify(data),
//   //     });

//   //     const result = await response.json();
//   //     console.log("Success:", result);
//   //     console.log("data: ", data);

//   //     setFirstname("");
//   //     setLastname("");
//   //     setEmail("")
//   //     setPassword("");

//   //   } 
//   //   catch (error) {
//   //     console.log("data in error: ", data);
//   //     console.error(error);
//   //   }

//   // }

//   const onChange = (e) => {
//     if (e.target.name == "firstname") {
//       setFirstname(e.target.value);
//     }
//     else if (e.target.name == "lastname") {
//       setLastname(e.target.value);
//     }
//     else if (e.target.name == "username") {
//       setUsername(e.target.value);
//     }
//     else if (e.target.name == "email") {
//       setEmail(e.target.value);
//     }
//     else if (e.target.name == "password") {
//       setPassword(e.target.value);
//     }
//     // e.target.name = e.target.value;
//     // setUserdata({
//     //   ...userdata, [e.target.name]: e.target.value
//     // });
//     // console.log(userdata);
//   }

//   const defaultTheme = createTheme({
//     typography: {
//       fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" ',
//     },
//     components: {
//       MuiInputBase: {
//         styleOverrides: {
//           root: {
//             // alignItems: 'center',
//             width: '360px',
//             boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16)',
//             borderRadius: '8px',
//             // boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
//             '& .MuiInputLabel-root': {
//               transform: 'translateY(50%)', // Align label to the middle
//             },

//           },
//           input: {
//             borderRadius: '50%',
//             height: '15px',
//           },
//         },
//       },
//     },
//   });

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Box sx={{ m: 10 }}>
//         <Grid container
//           component={Paper} elevation={24} square={false}
//           sx={{
//             borderRadius: '20px',
//             boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
//           }}>
//           <CssBaseline />
//           <Grid
//             item
//             xs={false}
//             md={6}
//             sx={{ m: 'auto' }} >
//             <img src="/Images/signupImage.svg" alt="" />
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <Box
//               sx={{
//                 my: 8,
//                 mx: 4,
//                 //   backgroundColor: 'red',
//                 //   ml: 6,
//                 //   mr: 6,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//               }}
//             >
//               <Avatar sx={{ m: 1, bgcolor: '#597FB5' }}>
//                 <LockOutlinedIcon />
//               </Avatar>
//               <Typography component="h1" variant="h5"
//                 sx={{
//                   fontWeight: 700,
//                 }}
//               >
//                 Sign Up
//               </Typography>
//               <Box component="form" onSubmit={submitSignup}
//                 sx={{
//                   mt: 3,
//                   // ml:10,
//                   // justifyContent: 'center', 
//                   textAlign: 'center'
//                 }}>
//                 <TextField margin="normal" required
//                   // fullWidth
//                   id="firstname" label="First Name"
//                   name="firstname" type='text'
//                   variant='outlined'
//                   autoFocus
//                   autoComplete ="username"
//                   value={firstname} onChange={onChange}
//                 // focused         
//                 />
//                 <TextField margin="normal" required
//                   id="lastname" label="Last Name"
//                   name="lastname" type='text'
//                   autoFocus
//                   autoComplete ="username"
//                   value={lastname} onChange={onChange}
//                 // focused
//                 />
//                 <TextField margin="normal" required
//                   id="username" label="Username"
//                   name="username" type='text'
//                   autoFocus
//                   autoComplete ="username"
//                   value={username} onChange={onChange}
//                 // focused
//                 />
//                 <TextField margin="normal" required
//                   id="email" label="Email Address"
//                   name="email" autoComplete="email"
//                   type='email'
//                   autoFocus
//                   value={email} onChange={onChange}
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="current-password"
//                   minLength="8"
//                   // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters
//                   value={password} onChange={onChange}
//                 />
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{
//                     mt: 3, mb: 2,
//                     width: '360px',
//                     backgroundColor: "#597FB5 !important",
//                     color: "#fff !important",
//                     '&:hover': {
//                       backgroundColor: "#405D80 !important", // Darker color on hover
//                     },
//                   }}> Sign Up
//                 </Button>
//                 <Divider variant="middle"
//                   sx={{ mb: 2 }} />
//                 {/* <Grid container pr={1}> */}
//                 {/* <Grid item xs> */}
               
//                 {/* <Link href="#resetPassword" variant="body2" textAlign="center"
//                   sx={{
//                     fontWeight: 600, color: '#597FB5',
//                     '&:hover': {
//                       fontWeight: 500,
//                     }
//                   }}>
//                   <p>Forgot password?</p>
//                 </Link> */}

//                 {/* </Grid> */}
//                 {/* <Grid item   > */}
//                 <Link href="/login" variant="body2" textAlign="center"
//                   sx={{
//                     fontWeight: 600, color: '#597FB5',
//                     '&:hover': {
//                       fontWeight: 500,
//                     }
//                   }}>
//                   <p>Already have an account? Login</p>
//                 </Link>
//                 {/* </Grid> */}
//                 {/* </Grid> */}
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </ThemeProvider>
//   );
// }