import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import Labs from "../../images/print-lab.png";

class Laboratorios extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Laboratórios</Breadcrumb>
        </Breadcrumbs>

        <div className="container">
          <h5 className="mb-4">Retirado do documento de conteúdo</h5>
          <img alt="Descrição do conteúdo" src={Labs} />
        </div>
      </React.Fragment>
    );
  }
}

export default Laboratorios;
