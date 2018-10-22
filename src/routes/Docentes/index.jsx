import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import Docente from "../../components/Docente";

class Docentes extends Component {
  render() {
    window.scrollTo(0,0);
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Docentes</Breadcrumb>
        </Breadcrumbs>

        
        <div className="container">
          <Docente />
        </div>
      </React.Fragment>
    );
  }
}

export default Docentes;
