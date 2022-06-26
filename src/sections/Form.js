import React, { Component } from 'react';
import axios from 'axios';
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
                    <p id="error" className="opacity">ok</p>
                    <input type="button" value="ENCONTRE SEU IMÓVEL" onClick={this.verify} />
                </form>
            </div>
        );
    }
    getData = (event) => {
        this.setState({[event.target.name]: event.target.value });
        
    }

    verify = () => {
        if (!this.state.nome) {
            document.getElementById("error").setAttribute("className", "error");
            document.getElementById("error").innerHTML = "Insira um nome válido!";
        }

        else if (!this.state.telefone) {
            document.getElementById("error").setAttribute("className", "error");
            document.getElementById("error").innerHTML = "Insira um telefone válido!";
        }

        else if (!this.state.email) {
            document.getElementById("error").setAttribute("className", "error");
            document.getElementById("error").innerHTML = "Insira um email válido!";
        }

        else {
            // axios({
            //     method: "post",
            //     url: "/form",
            //     baseURL: "https://projetocamilla.herokuapp.com/",
            //     headers: {
            //         'Access-Control-Allow-Private-Network': true,
            //         'Access-Control-Allow-Origin': '*',
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(this.state)
            // })
            // .then(function (response) {
            //     console.log(response);
            // })
            // .catch(function (error) {
            //     console.error(error);
            // });
            fetch('https://projetocamilla.herokuapp.com/form', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    }

    
}

export default Form;