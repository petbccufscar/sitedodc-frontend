import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import PrintAlunos from "../../images/print-alunos.png";


class Alunos extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Alunos</Breadcrumb>
        </Breadcrumbs>

        <div className="container">
          <h5 className="mb-4">Retirado do documento de conteúdo</h5>
          <img alt="Descrição de conteúdo" src={PrintAlunos}/>
        </div>
        
      </React.Fragment>
    );
  }
}

export default Alunos;

