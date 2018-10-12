import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Books from './books';
import './display.css';

class DisplayApp extends Component {

        render() {
            return (
                <div>
                    <Books />
                </div>
            );
        }

}

export default DisplayApp;
