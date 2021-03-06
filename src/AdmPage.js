import React, { Component } from 'react';
import FileDownload from "js-file-download";
import * as api from './services/Endpoins.js';
import { Navigate } from 'react-router-dom';

class AdmPage extends Component {
    constructor() {
        super();

        this.state = {
            currentUser: true,
            password: '',
            leads: [],
            dataInicio: '',
            dataFim: ''
        };
    }

    componentDidMount() {
        this.getLeads();
    }

    signOut = () => {
        localStorage.setItem("jwtToken", null);
        this.setState({ currentUser: false });
    }

    getLeads = () => {
        api
            .getAll()
            .then((response) => {
                this.setState({ leads: response.data });
            })
            .catch((e) => {
                this.setState({ leads: [] });
            });
    }

    getExcel = () => {
        api
            .exportExcel()
            .then((response) => {
                FileDownload(response.data, "leads.xlsx");
            })
            .catch((e) => {
                alert("Sinto muito! Algo de errado aconteceu, tente novamente mais tarde.")
            });
    }

    getDate = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    findByDate = async () => {
        try {
            const response = await api
                .buscaPeriodo(JSON.stringify({ dataInicio: this.state.dataInicio, dataFim: this.state.dataFim }));
            this.setState({ leads: response.data });
        } catch (error) {
            alert("Algo deu errado, tente novamente mais tarde!");
        }
    }
    render() {
        return (
            <div className="adm">
                {!this.state.currentUser ? (
                    <Navigate to="/" />
                ) : (<div><h2>Seja bem-vindo!</h2></div>)}

                <input className="out" type="button" onClick={this.signOut} value="Log out" />
                <div className="buscas">
                    <div>
                        <input type="date" name="dataInicio" onChange={this.getDate} />
                        <input type="date" name="dataFim" onChange={this.getDate} />

                        <input type="button" onClick={this.findByDate} value="Buscar per??odo" />
                    </div>
                    <input type="button" onClick={this.getExcel} value="Exportar" />
                </div>
                {!this.state.leads[0] ? (<h3>Carregando...</h3>) : (
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
                )}
                <footer className="footer fixed"><p>??2022</p></footer>
            </div>
        );
    }
}

export default AdmPage;