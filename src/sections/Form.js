import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {nome:'', telefone:'', email:''}
      }
    render() {
        return (
            <div  id="form" className="form" name="form">
                <form>
                    <h2>Compre agora</h2>
                    <input type="text" name="nome" id="nome" placeholder="Seu nome completo" onChange={this.getData}/>
                    <input type="text" name="telefone" id="telefone" placeholder="Seu telefone (WhatsApp)" onChange={this.getData}/>
                    <input type="email" name="email" id="email" placeholder="Seu melhor e-mail" onChange={this.getData} />
                    <p id="error" className="error"></p>
                    <input type="button" value="ENCONTRE SEU IMÓVEL" onClick={this.verify} />
                </form>
            </div>
        );
    }
    getData = (event) => {
        this.setState({[event.target.name]: event.target.value });
        
    }

    redirect = () => {
        useNavigate('/thankyou');
    }
    verify = () => {
        if (!this.state.nome) {
            document.getElementById("error").innerHTML = "Insira um nome válido!";
        }

        else if (!this.state.telefone) {
            document.getElementById("error").innerHTML = "Insira um telefone válido!";
        }

        else if (!this.state.email) {
            document.getElementById("error").innerHTML = "Insira um email válido!";
        }

        else {
            
            fetch('http://localhost:8080/form/cadastro', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(function (response) {
                    if (response.ok) this.redirect();

            });
            

        }
    }

    
}

export default Form;