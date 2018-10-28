import React, { Component } from "react";
import ReactDOM from "react-dom";
import LoginApp from "./LoginApp";
import registerApp from "./registerApp";
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataFromChild: null,
        }
        this.myCallback = this.myCallback.bind(this);
    }

    myCallback(data){
        console.log(data);
        this.setState({
            dataFromChild: data,
        });


    }

    render() {
        return (
            <BrowserRouter>
             <div className="container">
                 <Route path={"/login"} component={LoginApp} />
                 <Route path={"/register"} component={registerApp} />
             </div>
            </BrowserRouter>
        );
    }
}


export default App;