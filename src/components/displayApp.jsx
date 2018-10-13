import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BookList from './bookList';

class DisplayApp extends Component {

        render() {
            return (
                <div>
                    <BookList />
                </div>
            );
        }

}

export default DisplayApp;
