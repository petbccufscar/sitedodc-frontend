import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import Avatar from "../../images/avatar.png";
import Docente from "../../components/Docente";

class Docentes extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Inicio</Breadcrumb>
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
