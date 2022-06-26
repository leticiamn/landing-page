import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Page from './Page';
import Login from './Login';

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Page/>}/>
                    <Route path="/adm" element={<Login />} />
                </Routes>
            </Router>
        );
    }
}

export default App;