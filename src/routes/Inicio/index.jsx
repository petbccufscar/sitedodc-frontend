import React, { Component } from "react";
import Noticias from "../../components/Noticias";
import BarraLateral from "../../components/BarraLateral";
import BotoesArea from "../../components/BotoesArea";
import { Link } from "react-router-dom";
import BannerRotativo from "../../components/BannerRotativo";

class Inicio extends Component {
  render() {
    return (
      <React.Fragment>
        <BannerRotativo />
        <main role="main" className="container">
          <BotoesArea />
          <div className="row" id="conteudo">
            <div className="col">
              <div className="d-flex justify-content-between mb-3">
                <h4>Notícias</h4>
                <Link to="/mais-noticias" className="btn btn-outline-info">
                  Ver todas as notícias
                </Link>
              </div>
              <Noticias quantidade_por_linha="2" quantidade="12" />
            </div>
            <BarraLateral />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Inicio;
