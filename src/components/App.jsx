import React, { Component } from 'react';
import BookPage from './bookPage';
import AuthorPage from './authorPage';
import { BrowserRouter, Route } from 'react-router-dom';
import NavigationBar from './navigationBar'
import BookList from './bookList';
import Sidebar from './sidebar'
import LoginApp from "./LoginApp";
import registerApp from "./registerApp";
//import billing from "./billing";
import userProfile from "./userProfile";
import logout from "./logout";


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            sortBy: 'title',
        }
        this.updateSorting = this.updateSorting.bind(this);
    }

    updateSorting(option){
        console.log("this is from the sorting function in the parent")
        this.setState({
            sortBy: option,
        });
    }

    render() {
        return (
            <BrowserRouter>
             <div>
                 <div className="sticky-top">
                    <NavigationBar isbn={this.state.dataFromChild} callbackFromParent={this.updateSorting}/>
                 </div>
                 <div className="container-fluid">
                    <div className="row content">
                         <div className="col-sm-2">
                             <Sidebar/>
                         </div>
                         <div className="col-sm-9">
                            <Route path={"/login"} component={LoginApp} />
                            <Route path={"/register"} component={registerApp} />
                            <Route path={"/books"} render={() => <BookList sortBy={this.state.sortBy}/>} />
                            <Route path={"/book/:isbn"} render={(routeProps) => <BookPage {...routeProps} callbackFromParent={this.myCallback}/>} />
                            <Route path={"/author/:id"} component={AuthorPage}/>
                            <Route path={"/user/:username"} component={userProfile}/>
                            <Route path={"/logout"} component={logout} />
                         </div>
                    </div>
                 </div>

             </div>
            </BrowserRouter>
        );
    }

}

export default App;
