import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './login.css';


export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
      <Grid container component="main"
       sx={{ 
           margin:'auto',
           height: '80vh',
           width:'60%',
           marginTop:'10vh'
        }}>
        <Grid
          item
          xs={12}
          sm={4}
          md={6}
          sx={{
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#92aede',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
            <Box sx={{
                my: 10,
                mx: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color:'#ffffff'
            }}>
                <Typography component="h2" variant="h4">
                    Join us
                </Typography>
                <Box component="div"
                sx={{
                    width:'15%',
                    backgroundColor:'#ffffff',
                    height:'2px',
                }}
                >
                </Box>
                <Typography component="" variant="p" sx={{my:5}}>
                    Please fill your personal details and start a journey with us.
                </Typography>
                <Link href="#" 
                sx={{
                    color:'#ffffff',
                    border:'1px solid #ffffff',
                    padding:'10px',
                    borderRadius:'20px',
                    textDecoration: 'none'
                }}
                >
                    Register
                  </Link>
            </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 10,
              mx: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="div"
             sx={{
                 width:'10%',
                 backgroundColor:'blue',
                 height:'2px',
             }}
             >
            </Box>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ 
                    mt: 3, 
                    mb: 2, 
                    borderRadius:'20px', 
                    backgroundColor:'#ffffff', 
                    color: '#92aede',
                    border:'1px solid #92aede'
                }}
              >
                Login
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={{textDecoration:'none'}}>
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
}

