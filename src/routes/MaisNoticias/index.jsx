import React, { Component } from "react";
import Noticias from "../../components/Noticias";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";

class MaisNoticias extends Component {
  render() {
    window.scrollTo(0,0);
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Notícias</Breadcrumb>
        </Breadcrumbs>
        <div className="container">
          <div className="row mt-5 mais-noticias" id="conteudo">
            <Noticias quantidade_por_linha="4" quantidade="12" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MaisNoticias;
