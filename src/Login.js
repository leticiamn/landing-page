import axios from 'axios';
import React, { Component } from 'react';
import * as api from './services/Endpoins.js';
import FileDownload from "js-file-download";
class Login extends Component {

    constructor() {
        super();
    
        this.state = {
            currentUser: null,
            username: '', 
            password: '',
            leads: [],
            dataInicio: '', 
            dataFim: ''
        };
    }

    getUser = (event) => { 
        this.setState({ [event.target.name]: event.target.value });
    }

    getPwd = (event) => { 
        this.setState({ [event.target.name]: event.target.value });
    }

    signIn = () => {
        api
            .login(this.state)
            .then((response) => {
                localStorage.setItem("jwtToken", response.data);
                if (response.status == '200') this.setState({currentUser: true});
            })
            .catch((e) => {
            console.log("Erro: -------------------------- " + e);
            });
    }

    signOut = () => {
        localStorage.setItem("jwtToken", null);
        this.setState({ currentUser: false });
    }
    
    getLeads = () => {
        api
        .getAll()
        .then((response) => {
            this.setState({leads: response.data});
            console.log("---------------------", response.data);
        })
        .catch((e) => {
            console.log(e);
        });
    }

    getExcel = () => {
        api
            .exportExcel()
            .then((response) => {
                console.log(response);
                FileDownload(response.data, "leads.xlsx");
              })
            .catch((e) => {
                console.log(e);
            });
    }

    componentDidMount() {
        
    }

    getDate = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    findByDate = async () => {
        console.log(JSON.stringify({dataInicio: this.state.dataInicio, dataFim: this.state.dataFim}));
        try {
            const response = await api
            .buscaPeriodo(JSON.stringify({dataInicio: this.state.dataInicio, dataFim: this.state.dataFim}))
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    } 

    render() {
        return (
            <div>   
            {this.state.currentUser ?
            (<div>
                <div>Seja bem-vindo, {this.state.username}!</div>
                <input type="button" onClick={this.signOut} value="Log out" />
                <input type="button" onClick={this.getLeads} value="Busca leads" />
                <input type="button" onClick={this.getExcel} value="Exportar" />
                <div>
                    <input type="date" name="dataInicio" onChange={this.getDate} />
                    <input type="date" name="dataFim" onChange={this.getDate} />
                            
                    <input type="button" onClick={this.findByDate} value="Buscar período" />
                </div>
            <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
              </tr>
            </thead>
            <tbody>
              {this.state.leads.map((lead, key) => (
                <tr key={key}>
                  <td>{lead.publicationDate}</td>
                  <td>{lead.nome}</td>
                  <td>{lead.email}</td>
                  <td>{lead.telefone}</td>
                </tr>
              ))}
            </tbody>
          </table>
                </div>
            ) : (
                <form className="form">
                    <input type="text" name="username" placeholder="Usuário" onChange={this.getUser}/>
                    <input type="password" name="password" placeholder="senha" onChange={this.getPwd}/>
                    <input type="button" onClick={this.signIn} value="Login"/>
                </form>
                )
                } 
            </div>
        );
    }
}

export default Login;