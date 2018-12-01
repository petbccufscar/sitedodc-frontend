import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import DocenteCard from "./components/docente_card"
import { Facebook } from 'react-content-loader'

class Docentes extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.ready !== nextState.ready) {
            return true;
        }
        return false;
    }
    state = {};
    constructor() {
        super();
        this.state = {
            docentes: [],
            ready: false
        };
    }
    async componentDidMount() {
        try {
            const response = await fetch("https://sitedodc-backend.herokuapp.com/docente");
            const json = await response.json();
            this.setState({ docentes: json, ready: true });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <React.Fragment>
                <Breadcrumbs>
                    <Breadcrumb endereco="/">Início</Breadcrumb>
                    <Breadcrumb bold>Docentes</Breadcrumb>
                </Breadcrumbs>


                <div className="container">
                    <div
                        className="card-columns"
                        style={{ columnCount: this.props.quantidade_por_linha }}
                    >
                        {
                            this.state.ready ?
                                this.state.docentes.map(docente =>
                                    (<DocenteCard docente={docente} />)
                                )
                                : <Facebook />
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Docentes;
