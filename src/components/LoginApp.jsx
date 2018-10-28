import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { bindActionCreators } from 'redux';
import { validateEmail } from '../utils/misc';


class LoginApp extends Component {
    constructor(props){
        super(props);
        this.state = {
           email: '',
           password: '',
           url: 'http://localhost:5000/login/',
           email_error_text: null,
           password_error_text: null,
           disabled: true,
        }
    }

 isDisabled() {
        let email_is_valid = false;
        let password_is_valid = false;

        if (this.state.email === '') {
            this.setState({
                email_error_text: null,
            });
        } else if (validateEmail(this.state.email)) {
            email_is_valid = true;
            this.setState({
                email_error_text: null,
            });

        } else {
            this.setState({
                email_error_text: 'Sorry, this is not a valid email',
            });
        }

        if (this.state.password === '' || !this.state.password) {
            this.setState({
                password_error_text: null,
            });
        } else if (this.state.password.length >= 6) {
            password_is_valid = true;
            this.setState({
                password_error_text: null,
            });
        } else {
            this.setState({
                password_error_text: 'Your password must be at least 6 characters',
            });

        }

        if (email_is_valid && password_is_valid) {
            this.setState({
                disabled: false,
            });
        }

    }

    changeValue(e, type) {
        const value = e.target.value;
        const next_state = {};
        next_state[type] = value;
        this.setState(next_state, () => {
            this.isDisabled();
        });
    }

    _handleKeyPress(e) {
        if (e.key === 'Enter') {
            if (!this.state.disabled) {
                this.login(e);
            }
        }
    }

    login(e){
        fetch((this.state.url + this.state.email), {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,

          })
        })
}

//validateForm() {
    //return this.state.email.length > 0 && this.state.password.length > 0;
  //}

  handleChange = event => {
    this.setState({
      [event.target.email]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  

  render() {
    return (
      <div className="col-md-6 col-md-offset-3" onKeyPress={(e) => this._handleKeyPress(e)}>
        <form onSubmit={this.login}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={(e) => this.changeValue(e, 'email')}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={(e) => this.changeValue(e, 'password')}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={this.state.disabled}
            style={{ marginTop: 50 }}
            onClick={this.login}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}



export default LoginApp;