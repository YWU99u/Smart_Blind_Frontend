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

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#002c80a1" };
  const btstyle = { margin: "8px 0" };

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
          label="Username"
          placeholder="Enter Username"
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
      </Paper>
    </Grid>
  );
};

export default Login;
