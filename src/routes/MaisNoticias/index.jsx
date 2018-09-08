import React, { Component } from "react";
import Noticias from "../../components/Noticias";

class MaisNoticias extends Component {
  render() {
    return (
      <main role="main" className="container mt-5">
        <div className="row mt-5 mais-noticias" id="conteudo">
          <div className="col">
            <ul class="nav nav-tabs mb-4">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="/">Início</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Todas as noticias
                  </li>
                </ol>
              </nav>
              <li class="nav-item dropdown ml-auto">
                <a
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Ordenar por
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">
                    Data Cresc
                  </a>
                  <a class="dropdown-item" href="#">
                    Data Desc
                  </a>
                  <a class="dropdown-item" href="#">
                    Titulo
                  </a>
                </div>
              </li>
            </ul>
            <Noticias quantidade_por_linha="4" quantidade="12" />
          </div>
        </div>
      </main>
    );
  }
}

export default MaisNoticias;
