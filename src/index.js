import React from 'react';
import ReactDOM from 'react-dom';
import DisplayApp from './components/displayApp';
import BookApp from './components/bookApp';
//import AuthorApp from './components/authorApp';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render((
   <BrowserRouter>
    <div>
        <h1>This is GeekText</h1>
         <Route path={"/books"} component={DisplayApp} />
         <Route path={"/book/:isbn"} component={BookApp} />
         {/*}<Route path={"/author/:id"} component={AuthorApp} />*/}
    </div>
   </BrowserRouter>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
