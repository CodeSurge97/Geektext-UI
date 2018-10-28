import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DisplayApp from './displayApp';
import BookApp from './bookApp';
import AuthorApp from './authorApp';
import { BrowserRouter, Route } from 'react-router-dom';
import NavigationBar from './navigationBar'
import BookList from './bookList';


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
                 <div className="sticky-top">
                    <NavigationBar isbn={this.state.dataFromChild} />
                 </div>
                 <Route path={"/books"} render={() => <BookList callbackFromParent={this.myCallback}/>} />
                 <Route path={"/book/:isbn"} render={(routeProps) => <BookApp {...routeProps} callbackFromParent={this.myCallback}/>} />
                 <Route path={"/author/:id"} component={AuthorApp}/>

             </div>
            </BrowserRouter>
        );
    }

}

export default App;
