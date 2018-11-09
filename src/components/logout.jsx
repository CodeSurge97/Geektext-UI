import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Logout extends Component {
    constructor(props){
        super(props);
        this.state = {
           url: "http://localhost:5000/logout",
           error: "",
           loggedin: "true",
        }

    }

componentDidMount(){
        const url = 'http://localhost:5000/logout/' 
        fetch(url)
        .then(res => res.json())
        .then(data => {
            this.setState({
              error  : data.error,
              loggedin: data.loggedin
            })
        });
    }

 render() {
        if(this.state.loggedin !== "true"){
            console.log("redirecting")
            window.location = "http://dev.geektext.com:3000/books";
        }
         return (null);
  }
}

export default Logout;