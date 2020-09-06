import React, { Component } from "react";
import Noticias from "../components/Noticias";
import { Breadcrumbs, Breadcrumb } from "../components/Breadcrumbs";

class MaisNoticias extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Notícias</Breadcrumb>
        </Breadcrumbs>
        <div className="container">
          <div className="col">
            <div className="row mt-5 mais-noticias" id="conteudo">
              <Noticias quantidade="12" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MaisNoticias;
