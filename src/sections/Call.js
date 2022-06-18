import React, { Component } from 'react';
import '../css/style.css';
import '../css/responsive.css';
class Call extends Component {
    render() {
        return (
            <div class="call-section">
                <div class="call-mid">
                    <div class="call">
                        <h1>Quer investir ou morar na
                        <span> ZONA SUL </span>
                        de Uberlândia?</h1>
                        <input class="call-button" type="button" value="SIM, EU QUERO!" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Call;