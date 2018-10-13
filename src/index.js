import React from 'react';
import ReactDOM from 'react-dom';
import DisplayApp from './components/displayApp';
import BookApp from './components/bookApp';
import AuthorApp from './components/authorApp';
import { BrowserRouter, Route } from 'react-router-dom';

let styles = {
    padding: '10px',
 };

ReactDOM.render((
   <BrowserRouter>
    <div className="container">
        <div className="jumbotron sticky-top" style={styles}>
            <div className="page-header text-center">
                <h1>GeekText</h1>
            </div>
        </div>
        <Route path={"/books"} component={DisplayApp} />
        <Route path={"/book/:isbn"} component={BookApp} />
        <Route path={"/author/:id"} component={AuthorApp} />
    </div>
   </BrowserRouter>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
