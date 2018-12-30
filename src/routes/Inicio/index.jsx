import React, { Component } from "react";
import Noticias from "./../../components/Noticias";
import BarraLateral from "./components/BarraLateral";
import BotoesArea from "./components/BotoesArea";
import { Link } from "react-router-dom";
import BannerRotativo from "./components/BannerRotativo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "../../styles/css/home.css";

class Inicio extends Component {
  render() {
    return (
      <React.Fragment>
        <BannerRotativo />
        <main role="main" className="container">
          <BotoesArea />
          <div className="row inicio" id="conteudo">
            <div className="col-12 col-md-8">
              <div className="d-flex justify-content-between mb-3">
                <h4>Notícias</h4>
                <Link to="/mais-noticias" className="btn btn-link">
                  Ver todas as notícias     <FontAwesomeIcon className="ml-2" icon="plus" />

                </Link>
              </div>
              <Noticias quantidade_por_linha="2" quantidade="4" />
            </div>
            <BarraLateral> </BarraLateral>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Inicio;
