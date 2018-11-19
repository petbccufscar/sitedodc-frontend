import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import PosGrad from "../../images/print-pos.png";


class PosGraduacao extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Pós-Graduação</Breadcrumb>
        </Breadcrumbs>

        <div className="container">
          <h5 className="mb-4">Retirado do documento de conteúdo</h5>
          <img src={PosGrad}/>
        </div>
        
      </React.Fragment>
    );
  }
}

export default PosGraduacao;

