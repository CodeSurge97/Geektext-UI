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
            <div className="my-3 mt-5 " style={style}>
            <SideNav theme={theme} defaultSelectedPath={"home"}>
                    <Nav id="login">
                      <div onClick={() => {window.location = "/login"}}>Login</div>
                    </Nav>
                    <Nav id="register">
                      <div onClick={() => {window.location = "/register"}}>Register</div>
                    </Nav>
                    <Nav id="renderitems">
                      <div onClick={() => {window.location = "http://localhost:3000/popular"}}>Popular</div>
                    </Nav>
                    <Nav id="renderitems2">
                      <div onClick={() => {window.location = "http://localhost:3000/user/:username"}}>Profile</div>
                    </Nav>
                  </SideNav>
            </div>
        );
    }

}

export default Sidebar;
