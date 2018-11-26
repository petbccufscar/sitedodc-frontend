import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import TecnicoAdministrativo from "./components/TecnicoAdministrativo";

class TecnicoAdministrativos extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Técnico-admnistrativos</Breadcrumb>
        </Breadcrumbs>
        
        <div className="container">
          <h5 className="mb-4">Relação de funcionários técnicos e administrativos.</h5>
          <TecnicoAdministrativo/>
        </div>
      </React.Fragment>
    );
  }
}

export default TecnicoAdministrativos;
