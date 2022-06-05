import React, { Component } from 'react';
import Call from './sections/Call';
import Carousel from './sections/Carousel';
import Description from './sections/descriptions/Description';
import Form from './sections/Form';
import Profile from './sections/Profile';

class Main extends Component {
    render() {
        return (
            <main>
                <Call />
                <Description />
                <Carousel />
                <Form />
                <Profile/>
            </main>
        );
    }
}

export default Main;