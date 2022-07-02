import React, { Component, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Page from './Page';
import Login from './Login';
import ThankYou from './ThankYou';
class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Page/>}/>
                    <Route path="/adm" element={<Login/>} />
                    <Route path="/thankyou" element={<ThankYou />} />
                </Routes>
            </Router>
        );
    }
}

export default App;