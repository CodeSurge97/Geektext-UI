import React, { Component } from 'react';
import BookPage from './Book/bookPage';
import AuthorPage from './Author/authorPage';
import { BrowserRouter, Route } from 'react-router-dom';
import NavigationBar from './navigationBar'
import BookList from './Book/bookList';
import Sidebar from './sidebar';
import LoginApp from "./Authentication/LoginApp";
import registerApp from "./Authentication/registerApp";
import userProfile from "./Authentication/userProfile";
import logout from "./Authentication/logout";
import ShoppingCartApp from "./ShoppingCart/ShoppingCartApp";


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            sortBy: 'title',
            searchParameter: "",
        }
        this.updateSorting = this.updateSorting.bind(this);
        this.searchBook = this.searchBook.bind(this);
    }

    updateSorting(option){
        console.log("this is from the sorting function in the parent")
        this.setState({
            sortBy: option,
        });
    }
    searchBook(bookTitle){
        console.log("the data from the navigation bar is: " + bookTitle);
        this.setState({
            searchParameter: bookTitle,
        });
    }
    render() {
        return (
            <BrowserRouter>
             <div>
                 <div className="sticky-top">
                    <NavigationBar isbn={this.state.dataFromChild} updateSorting={this.updateSorting} search={this.searchBook}/>
                 </div>
                 <div className="container-fluid">
                    <div className="row content">
                         <div className="col-sm-2">
                             <Sidebar/>
                         </div>
                         <div className="col-sm-9">
                            <Route path={"/login"} component={LoginApp} />
                            <Route path={"/register"} component={registerApp} />
                            <Route path={"/books"} render={() => <BookList sortBy={this.state.sortBy} searchTitle={this.state.searchParameter}/>} />
                            <Route path={"/book/:isbn"} render={(routeProps) => <BookPage {...routeProps}/>} />
                            <Route path={"/author/:id"} component={AuthorPage}/>
                            <Route path={"/user/"} component={userProfile}/>
                            <Route path={"/logout"} component={logout} />
                            <Route path={"/shopping-cart"} component={ShoppingCartApp}/>
                         </div>
                    </div>
                 </div>

             </div>
            </BrowserRouter>
        );
    }

}

export default App;
