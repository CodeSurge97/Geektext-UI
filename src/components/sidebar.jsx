import React, { Component } from 'react';
import { SideNav, Nav } from 'react-sidenav'

class Sidebar extends Component {

    render() {
        let style = {
            height: "70%",
            width: "225px",
            position: "fixed",
        }
        const theme = {
          hoverBgColor: "rgb(200, 200, 200)",
          selectionBgColor: "rgb(200, 200, 200)",
        };
        return (
                <div className="mt-5 rounded border-left border-dark" style={style}>
                    <SideNav theme={theme} defaultSelectedPath={"home"}>
                        <Nav id="login">
                          <div className="container" onClick={() => {window.location = "http://geek.localhost.com:3000/login"}}>Login</div>
                        </Nav>
                        <Nav id="register">
                          <div className="container" onClick={() => {window.location = "http://geek.localhost.com:3000/register"}}>Register</div>
                        </Nav>
                        <Nav id="renderitems">
                          <div className="container" onClick={() => {window.location = "http://geek.localhost.com:3000/popular"}}>Popular</div>
                        </Nav>
                        <Nav id="renderitems2">
                          <div className="container" onClick={() => {window.location = "http://geek.localhost.com:3000/user"}}>Profile</div>
                        </Nav>
                        <Nav id="renderitems2">
                          <div className="container" onClick={() => {window.location = "http://geek.localhost.com:3000/shopping-cart"}}>Shopping Cart</div>
                        </Nav>
                    </SideNav>
                </div>
        );
    }

}

export default Sidebar;
