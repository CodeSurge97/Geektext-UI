import React, { Component } from 'react';
//import ShowMore from 'react-show-more';
import { Link } from 'react-router-dom';
import LoginApp from '../Authentication/LoginApp'


class UserProfile extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: {},
        }
    }
    componentDidMount(){
        const url = 'http://localhost:5000/user/'
        fetch(url, {credentials: 'include'})
        .then(res => res.json())
        .then(json => {
            this.setState({
                user: json,
            })
        });
    }


  render() {

        let styles = {
            s: {
                padding: '20px',
                backgroundColor: 'white',
                lineHeight: "30px",
            },
            t: {
                padding: '10px',
                backgroundColor: 'gray',
                lineHeight: "10px",
            }
        }

         return (
            <div className="jumbotron" style={styles.s}>
                <h1>{this.state.user.username}</h1>
                <div className="row align-items-center container-fluid">
                        <div className="container" style={styles.s}>
                            <span>Name: </span>
                            <span style={{fontSize: 20}}>{this.state.user.name}</span>
                        </div>
                        <div className="container" style={styles.s}>
                            <span>email: </span>
                            <span style={{fontSize: 20}}>{this.state.user.email}</span>
                        </div>
                        <div className="container" style={styles.s}>
                            <span>Name: </span>
                            <span style={{fontSize: 20}}>{this.state.user.address} </span>
                        </div>
                        <div className="container" style={styles.s}>
                            <span style={{fontSize: 20}}>
                            <a href={"http://geek.localhost.com:3000/editprofile/"}>Edit Profile </a>
                            </span>
                        </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;
