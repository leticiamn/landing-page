import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Page from './Page';
import Login from './Login';
import ThankYou from './ThankYou';
import Terms from './sections/descriptions/Terms';
import './css/style.css';
class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Page/>}/>
                    <Route path="/adm" element={<Login/>} />
                    <Route path="/thankyou" element={<ThankYou />} />
                    <Route path="/terms" element={<Terms />} />
                </Routes>
            </Router>
        );
    }
}

export default App;