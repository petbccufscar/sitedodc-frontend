import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import DocenteCard from "./components/docente_card"
class Docentes extends Component {
    state = {};
    constructor() {
        super();
        this.state = {
            docentes: []
        };
    }
    componentDidMount() {
        fetch("https://sitedodc-backend.herokuapp.com/docente")
            .then(recebidoJson => {
                return recebidoJson.json();
            })
            .then(docentes => {
              console.log(docentes);
                this.setState({ docentes: docentes });
            });
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
                    >{
                            this.state.docentes.map(docente =>
                                (<DocenteCard docente={docente} />)
                            )
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Docentes;
