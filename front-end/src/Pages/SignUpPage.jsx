/*import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import cover_image from '../image/LoginSignImg.png';


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

const defaultTheme = createTheme();

export default function SignUpSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      fullName: data.get('fullName'), // Retrieve the full name from the form
      email: data.get('email'),
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${cover_image})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: '480px 700px',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                name="fullName"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
              />
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
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
                    Already have an account? Login
                  </Link>
                </Grid>
              </Grid>
              Copyright © {' '}
              <Link color="inherit" href="http://localhost:3001">
                JobQuest
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
*/

import React from 'react';
import { useState } from 'react';
import cover_image from '../image/LoginSignImg.png'
import '../Pages/CSS/SignUp.css'; // Make sure to create a corresponding CSS file for styles

const App = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted: ', formData);
    // Submit logic here
  };

  return (
    <div className="App">
      <div className="left-pane">
        <div className="logo">JobQuest</div>
        <div className="stats">
          <div className="stats-icon"></div>
          100K+ People got hired
        </div>
        <div className="testimonial">
          <img src={cover_image} className="profile-picture"/>
          <div className="testimonial-content">
            <p className="testimonial-name">Adam Sandler</p>
            <p className="testimonial-title">Lead Engineer at Canva</p>
            <p className="testimonial-quote">"Great platform for the job seeker that searching for new career heights."</p>
          </div>
        </div>
      </div>
      <div className="right-pane">
        <div className="tabs">
          <button className="tab active">Job Seeker</button>
          <button className="tab">Company</button>
          <button className="tab">Institute</button>
        </div>
        <div className="registration">
          <h2>Get more opportunities</h2>
          <div className='button-container'>
            <button className="google-signup">Sign Up with Google</button>
          </div>
          <div className="divider">Or sign up with email</div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
            <button type="submit" className="continue">Continue</button>
          </form>
          <div className="login-prompt">
            Already have an account? <a href="/login">Login</a>
          </div>
          <div className="tos">
            By clicking 'Continue', you acknowledge that you have read
            and accept the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
