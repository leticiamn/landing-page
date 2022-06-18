import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div class="form">
                <form>
                    <h2>Compre ou alugue</h2>
                    <input type="text" name="name" id="name" placeholder="Seu nome completo"/>
                    <input type="text" name="phone" id="phone" placeholder="Seu telefone (WhatsApp)"/>
                    <input type="email" name="email" id="email" placeholder="Seu melhor e-mail" />
                    <input type="button" value="ENCONTRE SEU IMÓVEL" />
                </form>
            </div>
        );
    }
}

export default Form;