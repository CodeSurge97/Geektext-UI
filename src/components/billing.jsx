import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {Link} from 'react-router-dom'
import "./Register.css";
//import { bindActionCreators } from 'redux';

 class billing extends Component {
    constructor(props) {
        super(props);
        //const redirectRoute = '/login';
        this.state = {
            card_type: '',
            card_number: '',
            cvv: '',
            exp_date: '',
            url: 'http://127.0.0.1:5000/billing',
            error: "",
            validated: "false",
        };
        this.sendBillingInfo = this.sendBillingInfo.bind(this);
        this.onCardTypeChange = this.onCardTypeChange.bind(this);
        this.onCardNumberChange = this.onCardNumberChange.bind(this);
        this.onCvvChange = this.onCvvChange.bind(this);
        this.onExpirationDateChange = this.onExpirationDateChange.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
    }
  

    _handleKeyPress(e) {
        if (e.key === 'Enter') {
            if (!this.state.disabled) {
                this.sendBillingInfo(e);
            }
        }
    }

   sendBillingInfo(event){
        console.log("sending billing info")
        event.preventDefault();
        fetch((this.state.url), {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            card_type: this.state.card_type,
            card_number: this.state.card_number,
            cvv: this.state.cvv,
            exp_date: this.state.exp_date,
          })
      }).then((res) => {return res.json(); })
      .then((data) => {this.setState({error: data.error, validated: data.validated})});
    }

    onCardTypeChange(event) {
      this.setState({ card_type: event.target.value });
      console.log(event.target.value);
    }

    onCardNumberChange(event) {
      this.setState({ card_number: event.target.value });
      console.log(event.target.value);
    }
   
    onCvvChange(event) {
      this.setState({ cvv: event.target.value });
      console.log(event.target.value);
    }
    
    onExpirationDateChange(event) {
      this.setState({ exp_date: event.target.value });
      console.log(event.target.value);
    }

    render() {
     if(this.state.validated !== "false"){
            console.log("redirecting")
            window.location = "http://linux-2y12:3000/books";
        }
        return (
        <div>
            <div className="container-fluid p-5">
                <div className="col-md-6 col-md-offset-3" onKeyPress={(e) => this._handleKeyPress(e)}>
                  <form onSubmit={this.sendBillingInfo}>
                    <FormGroup controlId="card_type" bsSize="large">
                      <ControlLabel>Card Type</ControlLabel>
                      <FormControl
                        autoFocus
                        type="card_type"
                        value={this.state.card_type}
                
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" onClick={() => { this.onCardTypeChange}}>Visa</a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" onClick={() => { this.onCardTypeChange }}>MasterCard</a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" onClick={() => { this.onCardTypeChange}}>Discover</a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" onClick={() => { this.onCardTypeChange }}>American Express </a>
                        </div>
                     
                      />
                    </FormGroup>
                    <FormGroup controlId="card_number" bsSize="large">
                      <ControlLabel>Card Number</ControlLabel>
                      <FormControl
                        type="card_type"
                        value={this.state.card_number}
                        onChange={this.onCardNumberChange}
                      />
                    </FormGroup>
                    <FormGroup controlId="cvv" bsSize="large">
                      <ControlLabel>CVV</ControlLabel>
                      <FormControl
                        type="cvv"
                        value={this.state.cvv}
                        onChange={this.onCvvChange}
                      />
                    </FormGroup>
                    <FormGroup controlId="exp_date" bsSize="large">
                      <ControlLabel>Expiration Date</ControlLabel>
                      <FormControl
                        type="exp_date"
                        value={this.state.exp_date}
                        onChange={this.onExpirationDateChange}
                      />
                    </FormGroup>
                    <input className="my-3" type="submit" value="Submit"/>
                  </form>
                </div>
            </div>
        </div>
     );
  }
}

export default billing;
