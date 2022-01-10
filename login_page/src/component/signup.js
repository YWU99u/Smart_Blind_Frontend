import {
  Avatar,
  Grid,
  Paper,
  TextField,
  FormControl,
  IconButton,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const SignUp = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#002c80a1" };
  const btstyle = { margin: "8px 0" };
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign Up</h2>
        </Grid>
        <TextField
          id="outlined-required"
          variant="outlined"
          label="Full Name"
          placeholder="Enter Your full name"
          fullWidth
          required
        />
        <p>
          <TextField
            id="outlined-required"
            variant="outlined"
            label="Email"
            placeholder="Enter Your Email Address"
            fullWidth
            required
          />
        </p>
        <p>
          <TextField
            id="outlined-basic"
            sx={{ m: 1, width: "25ch" }}
            variant="outlined"
            label="Company (Optional)"
            placeholder="Enter Your Company"
            fullWidth
          />
        </p>
        <p>
          <FormControl
            sx={{ m: 1, width: "25ch" }}
            variant="outlined"
            fullWidth
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </p>
        <Button
          type="submit"
          color="primary"
          fullWidth
          style={btstyle}
          variant="contained"
        >
          SIGN UP
        </Button>
        <Typography>
          Already have an account ?<Link href="#">Sign In</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default SignUp;
