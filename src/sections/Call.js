import React, { Component } from 'react';
import '../css/style.css';
import '../css/responsive.css';
class Call extends Component {
    render() {
        return (
            <div className="call-section">
                <div className="call-mid">
                    <div className="call">
                        <h1>Quer investir ou morar na
                        <span> ZONA SUL </span>
                        de Uberlândia?</h1>
                        <a href="#form"><input className="call-button" type="button" value="SIM, EU QUERO!" /></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Call;