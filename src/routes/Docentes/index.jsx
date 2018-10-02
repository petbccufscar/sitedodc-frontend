import React, { Component } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Avatar from "../../images/avatar.png";

class Docentes extends Component {
  render() {
    return (
      <main role="main" id="conteudo" class="container mt-5">
        <Breadcrumb path={this.props.location.pathname} />

        <h1 class="display-6">Docentes</h1>
        {/* TODO: pegar indo das cards na api Strapi */}
        <div class="card mb-4">
          <div class="row no-gutters">
            <div class="col-auto">
              <img src={Avatar} class="img-fluid" alt="" />
            </div>
            <div class="col ml-1 mt-3">
              <div class="card-block px-2">
                <h5 class="card-title">Nome Do Docente Completo</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  Professor Adjunto - 40h/DE
                </h6>
                <p class="card-text">
                  Doutor em Física Computacional - IFSC-USP, Brasil
                </p>
                <p class="card-text">
                  Áreas de interesse: Processamento Digital de Imagens e Sinais,
                  Reconhecimento de Padrões e Grafos.
                </p>
                <a href="#" class="card-link">
                  Lattes
                </a>
                <a href="#" class="card-link">
                  Página Pessoal
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-4">
          <div class="row no-gutters">
            <div class="col-auto">
              <img src={Avatar} class="img-fluid" alt="" />
            </div>
            <div class="col ml-1 mt-3">
              <div class="card-block px-2">
                <h5 class="card-title">Nome Do Docente Completo</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  Professor Adjunto - 40h/DE
                </h6>
                <p class="card-text">
                  Doutor em Física Computacional - IFSC-USP, Brasil
                </p>
                <p class="card-text">
                  Áreas de interesse: Processamento Digital de Imagens e Sinais,
                  Reconhecimento de Padrões e Grafos.
                </p>
                <a href="#" class="card-link">
                  Lattes
                </a>
                <a href="#" class="card-link">
                  Página Pessoal
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Docentes;
