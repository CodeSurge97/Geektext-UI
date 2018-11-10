
import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
//import { connect } from 'react-redux';
import { validateEmail } from '../utils/misc';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import "./register.css";

//function mapStateToProps(state) {
  //  return {
       // isRegistering: state.auth.isRegistering,
       // registerStatusText: state.auth.registerStatusText,
  //  };
//
//function mapDispatchToProps(dispatch) {
    //return bindActionCreators(actionCreators, dispatch);
//}

//connect(mapStateToProps, mapDispatchToProps)
 class registerApp extends Component {

    constructor(props) {
        super(props);
        const redirectRoute = '/login';
        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            address: '',
            url: 'http://127.0.0.1:5000/',
            password_error_text: null,
            redirectTo: redirectRoute,
            disabled: true,
        };
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
                this.register(e);
            }
        }
    }

    register(e){
        fetch((this.state.url + this.state.email), {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            address: this.state.address,

          })
        })
}

    render() {
    return (
    <div className="container-fluid p-5">
      <div className="col-md-6 col-md-offset-3" onKeyPress={(e) => this._handleKeyPress(e)}>
        <form onSubmit={this.login}>
          <FormGroup controlId="name" bsSize="large">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              autoFocus
              type="name"
              value={this.state.name}
              onChange={(e) => this.changeValue(e, 'name')}
            />
          </FormGroup>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              value={this.state.username}
              onChange={(e) => this.changeValue(e, 'username')}
              type="username"
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              value={this.state.email}
              onChange={(e) => this.changeValue(e, 'email')}
              type="email"
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
          <FormGroup controlId="address" bsSize="large">
            <ControlLabel>Home Address</ControlLabel>
            <FormControl
              value={this.state.address}
              onChange={(e) => this.changeValue(e, 'address')}
              type="address"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={this.state.disabled}
            style={{ marginTop: 50 }}
            onClick={this.register}
            type="submit"
          >
            Register
          </Button>
        </form>
      </div>
      </div>
    );
  }
}

export default registerApp;
