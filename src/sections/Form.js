import React, { Component } from 'react';
import axios from 'axios';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {name:'', phone:'',email:''}
      }
    render() {
        return (
            <div  id="form" className="form" name="form">
                <form>
                    <h2>Compre agora</h2>
                    <input type="text" name="name" id="name" placeholder="Seu nome completo" onChange={this.getData}/>
                    <input type="text" name="phone" id="phone" placeholder="Seu telefone (WhatsApp)" onChange={this.getData}/>
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
        if (!this.state.name) {
            document.getElementById("error").setAttribute("className", "error");
            document.getElementById("error").innerHTML = "Insira um nome válido!";
        }

        else if (!this.state.phone) {
            document.getElementById("error").setAttribute("className", "error");
            document.getElementById("error").innerHTML = "Insira um telefone válido!";
        }

        else if (!this.state.email) {
            document.getElementById("error").setAttribute("className", "error");
            document.getElementById("error").innerHTML = "Insira um email válido!";
        }

        else {
            axios({
                method: "post",
                url: "/form",
                baseURL: "https://projetocamilla.herokuapp.com/",
                headers: {
                    'Access-Control-Allow-Private-Network': true,
                    'Access-Control-Allow-Origin': 'Origin'
                }
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.error(error);
            });;
        }
    }

    
}

export default Form;