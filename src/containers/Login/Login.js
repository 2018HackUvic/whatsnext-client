import React, { Component } from 'react';
import {
    connect
} from 'react-redux';
import './Login.css'
import FormErrors from '../../components/FormErrors/FormErrors'
class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
          email: '',
          password: '',
          formErrors: {
              email: '',
              password: ''
          },
          emailValid: false,
          passwordValid: false,
          formValid: false
      }
  }

  handleUserInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
              [name]: value
          },
          () => {
              this.validateField(name, value)
          });
  }

  validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let passwordValid = this.state.passwordValid;

      switch (fieldName) {
          case 'email':
              emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
              fieldValidationErrors.email = emailValid ? '' : ' is invalid';
              break;
          case 'password':
              passwordValid = value.length >= 6;
              fieldValidationErrors.password = passwordValid ? '' : ' is too short';
              break;
          default:
              break;
      }
      this.setState({
          formErrors: fieldValidationErrors,
          emailValid: emailValid,
          passwordValid: passwordValid
      }, this.validateForm);
  }

  validateForm() {
      this.setState({
          formValid: this.state.emailValid && this.state.passwordValid
      });
  }

  errorClass(error) {
      return (error.length === 0 ? '' : 'has-error');
  }
render() {
        return (
            <div className="Login">
                <div className="container">
                    <div className="panel panel-default">
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>
                    <form className="newPostForm">
                        <h2>Login</h2>
                        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                            <label htmlFor="email">Email address</label>
                            <input type="email" required className="form-control" name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleUserInput}  />
                        </div>
                        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handleUserInput}  />
                        </div>
                        <button type="button" className="btn btn-primary" 
                            disabled={!this.state.formValid}>Log in</button>
                            <a href="/Signup">
                                <button type="button" className="btn btn-primary" href="/Signup">Sign Up</button>
                            </a>
                    </form>
                </div>
        </div>)}
}

export default Login;