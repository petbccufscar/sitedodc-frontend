import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import PrintCatalogo from "../../images/print-catalogo.png";


class Catalogo extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Catálogo</Breadcrumb>
        </Breadcrumbs>

        <div className="container">
          <h5 className="mb-4">Retirado do documento de conteúdo</h5>
          <img src={PrintCatalogo}/>
        </div>
        
      </React.Fragment>
    );
  }
}

export default Catalogo;

