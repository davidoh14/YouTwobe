import React from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    (this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    }),
      (this.handleSubmit = this.handleSubmit.bind(this));
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }
  render() {
    return (
      <div className="signup-wrapper">
        <div className="signup">
          <div className="signup-title">YouTwobe</div>
          <div className="signup-title2">Sign up</div>
          <form>
            <div>
              <TextField
                required
                label="First name"
                variant="filled"
                value={this.state.firstname}
                onChange={this.update("firstname")}
              />
            </div>
            <div>
              <TextField
                required
                label="Last name"
                variant="filled"
                value={this.state.lastname}
                onChange={this.update("lastname")}
              />
            </div>
            <div>
              <TextField
                required
                label="Username"
                variant="filled"
                value={this.state.username}
                onChange={this.update("username")}
              />
            </div>
            <div>
              <TextField
                required
                label="Email"
                variant="filled"
                value={this.state.email}
                onChange={this.update("email")}
              />
            </div>
            <div>
              <TextField
                required
                label="Password"
                variant="filled"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </div>
            <Button
              className="signup-button"
              variant="contained"
              onClick={this.handleSubmit}
            >
              Sign up
            </Button>

            <ul>
              {this.props.errors.map((error, i) => (
                <li key={i}>{error}</li>
              ))}
            </ul>

            <Button
              sx={{
                color: "black",
              }}
              className="signup-instead"
              onClick={() => this.props.history.push("/login")}
            >
              Log in instead
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
