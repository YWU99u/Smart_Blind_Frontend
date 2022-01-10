import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import GoogleLogin from "react-google-login";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#002c80a1" };
  const btstyle = { margin: "8px 0" };
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>

        <TextField
          label="Email"
          placeholder="Enter Email Address"
          fullWidth
          required
        />

        <TextField
          label="Password"
          placeholder="Enter Password"
          type="password"
          fullWidth
          required
        />

        <Grid align="left">
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember Me"
          />
        </Grid>

        <Button
          type="submit"
          color="primary"
          fullWidth
          style={btstyle}
          variant="contained"
        >
          SIGN IN
        </Button>

        <Typography>
          <Link href="#">Forgot Password ?</Link>
        </Typography>

        <Typography>
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography>
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </Paper>
    </Grid>
  );
  document.getElementById("googleButton");
};

export default Login;
