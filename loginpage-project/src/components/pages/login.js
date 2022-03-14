import React from "react";
import "./login.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  CssBaseline,
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Fade,
} from "@mui/material";
import catImage from "./images/cat.svg";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

const theme = createTheme({
  palette: {
    primary: {
      main: "#112055",
    },
  },
  typography: {
    h6: {
      color: "#05FF4A",
      fontFamily: "Georgia",
      fontWeight: "bold",
    },
    h3: {
      color: "#05FF4A",
      fontFamily: "Georgia",
      fontWeight: "bold",
    },
    h5: {
      fontFamily: "Georgia",
      marginBottom: 25,
      fontWeight: "bold",
      fontSize: 30,
    },
  },
});

function Login() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container className="main-container">
        <CssBaseline />
        <Grid
          item
          className="left-container"
          xs={12}
          md={6}
          component={Paper}
          sx={{ backgroundColor: "#02054a" }}
        >
          <Box class="welcome-container">
            <div className="welcome-message">
              <Typography variant="h3">Hello, Friend!</Typography>
              <Typography variant="h6">
                Enter your account to be log in:)
              </Typography>
            </div>
            <img src={catImage} alt="Cat" />
          </Box>
        </Grid>
        <Grid item className="right-container" xs={12} md={6}>
          <Fade in timeout={2500}>
            <Box className="login-container">
              <Typography variant="h5">Log in</Typography>
              <TextField
                className="email-input"
                required
                fullWidth
                id="email"
                label="Enter email"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                className="pass-input"
                required
                fullWidth
                id="password"
                label="Enter password"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
              <div className="forget-pass">
                <FormControlLabel
                  control={<Checkbox value="" defaultChecked />}
                  label="Remember me"
                />
                <Typography sx={{ fontSize: 16, ml: 8 }}>
                  <Link href="#">Forget your password?</Link>
                </Typography>
              </div>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{ borderRadius: 40, mb: 2, mt: 1 }}
              >
                Log In
              </Button>
              <Typography sx={{ ml: 2, fontSize: 16 }}>
                Don't have an account?
                <Link href="#" sx={{ ml: 0.5 }}>
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Fade>
        </Grid>
      </Grid>
      {/* <a href="https://storyset.com/animal">
          Animal illustrations by Storyset
        </a> */}
    </ThemeProvider>
  );
}

export default Login;
