import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import Grad from "../../images/print-grad.png";


class Graduacao extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Graduação</Breadcrumb>
        </Breadcrumbs>

        <div className="container">
          <h5 className="mb-4">Retirado do documento de conteúdo</h5>
          <img alt="Descrição do conteudo" src={Grad}/>
        </div>
        
      </React.Fragment>
    );
  }
}

export default Graduacao;
