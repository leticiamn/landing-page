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

    componentWillUnmount() {
        localStorage.setItem("jwtToken", null);
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
                alert(e.message);
            });
    }

    getExcel = () => {
        api
            .exportExcel()
            .then((response) => {
                FileDownload(response.data, "leads.xlsx");
            })
            .catch((e) => {
                console.log(e);
            });
    }

    getDate = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    findByDate = async () => {
        console.log(JSON.stringify({ dataInicio: this.state.dataInicio, dataFim: this.state.dataFim }));
        try {
            const response = await api
                .buscaPeriodo(JSON.stringify({ dataInicio: this.state.dataInicio, dataFim: this.state.dataFim }))
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <div>
                {!this.state.currentUser ? (
                    <Navigate to="/" />
                ) : (<div><div>Seja bem-vindo!</div></div>)}

                <input type="button" onClick={this.signOut} value="Log out" />
                <input type="button" onClick={this.getLeads} value="Busca leads" />
                <input type="button" onClick={this.getExcel} value="Exportar" />
                <div>
                    <input type="date" name="dataInicio" onChange={this.getDate} />
                    <input type="date" name="dataFim" onChange={this.getDate} />

                    <input type="button" onClick={this.findByDate} value="Buscar período" />
                </div>
                {this.state.leads == [] ? (<p>Carregando...</p>) : (
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

            </div>
        );
    }
}

export default AdmPage;