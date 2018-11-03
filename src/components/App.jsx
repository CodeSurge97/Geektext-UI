import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BookPage from './bookPage';
import AuthorPage from './authorPage';
import { BrowserRouter, Route } from 'react-router-dom';
import NavigationBar from './navigationBar'
import BookList from './bookList';


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
                 <Route path={"/books"} render={() => <BookList sortBy={this.state.sortBy}/>} />
                 <Route path={"/book/:isbn"} render={(routeProps) => <BookPage {...routeProps} callbackFromParent={this.myCallback}/>} />
                 <Route path={"/author/:id"} component={AuthorPage}/>

             </div>
            </BrowserRouter>
        );
    }

}

export default App;
