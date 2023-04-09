
import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from "../images/logo.png"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {

  const navigate = useNavigate();
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [email, setemail] = useState('');
  const [password, setPass] = useState('');
  const [emailError, setemailError] = useState('');
  const [passError, setpassError] = useState('');
  const [firstError, setfirstError] = useState('');
  const [lastError, setlastError] = useState('');


  const handleSubmit = async(event) => {
    event.preventDefault();

    if (fname === '') {
      setfirstError('Please Enter Your First Name');
      return;
    }

    if(!/^[a-zA-Z]{2,256}/.test(fname)){
      setfirstError('Invalid Name!! Only Alphabets Allowed')
      return;
    }

    if (lname === '') {
      setlastError('Please Enter Your Last Name');
      return;
    }

    if(!/^[a-zA-Z]{2,256}/.test(lname)){
      setlastError('Invalid Name!! Only Alphabets Allowed')
      return;
    }

    if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) {
      setemailError('Please enter a valid email address');
      return;
    }


    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
      let ErrorText = "Contain at least one lowercase letter" +"\n" + "Contain at least one uppercase letter" + "\n"
        + "Contain at least one digit" + "\n" + "Contain at least one special character" + "\n" + 
        "Be at least 8 characters long"
      setpassError(`Please enter a valid Password \nYour password should \n${ErrorText}`);
      return;
    }

    const data = new FormData(event.currentTarget);
    setfname(data.get('fName'))
    setlname(data.get('lName'))
    setemail(data.get('email'))
    setPass(data.get('password'))
    console.log({
      fname : data.get('fName'),
      lname : data.get('lName'),
      email: data.get('email'),
      password: data.get('password'),
    });
    try {
      // Make a POST request to the /save-data route on your Node.js server
      axios.defaults.withCredentials = true
      await axios.post('http://localhost:5000/api/auth/register', {
        fname,
        lname,
        email,
        password,
        withCredentials: true,
        

      });

      setfname('')
      setlname('')
      setemail('')
      setPass('')
      navigate('/login');
    }
    catch (error) {
      console.error(error);
      setemailError("Email Address Already Exists!")
      return
    }

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <Avatar src={logo}  />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up to LivWell
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="fName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={fname}
                  onChange={(event) =>{ 
                    setfname(event.target.value)
                    setfirstError('');
                  }
                }
                  autoFocus
                  error={firstError !== ''}
        helperText={firstError}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lName"
                  autoComplete="family-name"
                  value={lname}
                  onChange={(event) =>{ 
                    setlname(event.target.value) 
                    setlastError('')
                  }
                }
                error={lastError !== ''}
                helperText={lastError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => {
                      setemail(event.target.value)
                      setemailError('')
                    }
                  }
                  error={emailError !== ''}
                  helperText={emailError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(event) =>{ 
                    setPass(event.target.value)
                    setpassError('')
                  }
                }
                  error={passError !== ''}
                  helperText={passError}
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                 {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}