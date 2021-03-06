import React from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  demoLogin(e) {
    e.preventDefault();
    let guest = {
      email: "demo@email.com",
      password: "password",
    };
    this.props.login(guest);
  }

  render() {
    return (
      <div className="login-wrapper">
        <div className="login">
          <form>
            <div className="login-title">YouTwobe</div>
            <div className="login-title2">Login</div>
            <div className="login-email">
              <TextField
                required
                id="outlined-required"
                label="Email"
                value={this.state.email}
                onChange={this.update("email")}
              />
            </div>

            <div className="login-password">
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </div>

            <div className="login-buttons">
              <Button
                variant="contained"
                className="login-Button"
                onClick={this.handleSubmit}
              >
                Login
              </Button>
              <Button
                variant="contained"
                className="demo-Button"
                onClick={this.demoLogin}
              >
                Guest Login
              </Button>
            </div>
            <Button
              sx={{
                color: "black",
              }}
              className="signup-instead"
              onClick={() => this.props.history.push("/signup")}
            >
              Sign up instead
            </Button>
            <ul>
              {this.props.errors.length
                ? this.props.errors.map((error, i) => (
                    <li className="login-errors" key={i}>
                      {error}
                    </li>
                  ))
                : null}
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
