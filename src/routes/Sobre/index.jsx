import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import PrintSobre from "../../images/print-sobre.png";


class Sobre extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Sobre</Breadcrumb>
        </Breadcrumbs>

        <div className="container">
          <h5 className="mb-4">Retirado do documento de conteúdo</h5>
          <img src={PrintSobre}/>
        </div>
        
      </React.Fragment>
    );
  }
}

export default Sobre;

