import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Page from './Page';
import Login from './Login';

class App extends Component {
    render() {
        return (
            <div>
                <Page />
            </div>
        );
    }
}

export default App;