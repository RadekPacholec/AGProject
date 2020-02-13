import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    email: "",
    pass: "",
    message: "",
    access_token: "",

    errors: {
      username: false,
      pass: false,
      email: false
    }
  };

  errorsMessages = {
    username_incorrect: "Imie nie może mieć spacji",
    pass_incorrect: "Hasło musi mieć z 8 liter",
    email_incorrect: "Ares e-mail musi zawierać @!"
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  formValidator = () => {
    let pass = false;
    let username = false;
    let email = false;
    if (this.state.pass.length < 8) {
      pass = true;
    }
    if (
      this.state.username.indexOf(" ") !== -1 ||
      this.state.username.length <= 0
    ) {
      username = true;
    }
    if (this.state.email.indexOf("@") === -1) {
      email = true;
    }
    return { username, pass, email };
  };
  formClickHandler = e => {
    e.preventDefault();
    const validation = this.formValidator();
    this.setState({
      errors: validation
    });
    if (
      validation.username === false &&
      validation.pass === false &&
      validation.email === false
    ) {
      this.setState({
        message: "Formularz wysłany!",
        access_token: "13241-523dawdXD"
      });
    }
  };

  render() {
    const { username, pass, email } = this.state.errors;
    return (
      <div className="validForm">
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user">
            Username:
            <input
              type="text"
              id="user"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            {username && <span>{this.errorsMessages.username_incorrect}</span>}
          </label>

          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {email && <span>{this.errorsMessages.email_incorrect}</span>}
          </label>

          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              name="pass"
              value={this.state.pass}
              onChange={this.handleChange}
            />
            {pass && <span>{this.errorsMessages.pass_incorrect}</span>}
          </label>
          <button onClick={this.formClickHandler}>
            <Link exact to={this.state.access_token ? "/dashboard" : "/login"}>
              Zaloguj
            </Link>
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
