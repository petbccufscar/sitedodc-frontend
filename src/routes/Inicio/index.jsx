import React, { Component } from "react";
import Noticias from "./../../components/Noticias";
import BarraLateral from "./components/BarraLateral";
import BotoesArea from "./components/BotoesArea";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../styles/css/home.css";
import Carousel from "./components/Carousel";
import CarouselBanner from "./components/CarouselBanner";

import { Query } from "react-apollo";
import { GET_INICIO } from "../../utils/queries";

class Inicio extends Component {
  render() {
    return (
      <main role="main" className="container">
        <Query query={GET_INICIO}>
          {({ loading, error, data }) => {
            if (loading) {
              return "";
              //return <EventosLoader />;
            }
            if (error) {
              return `Error! ${error.message}`;
            }

            return (
              <React.Fragment>
                <div className="row mb-4 mt-4">
                  <div className="col-9">
                    <Carousel>
                      {data.banners.map((banner, index) => (
                        <CarouselBanner
                          key={index}
                          banner={
                            process.env.REACT_APP_API_URL + banner.Imagem.url
                          }
                          active={index == 0}
                        />
                      ))}
                    </Carousel>
                  </div>
                  <div className="col-3">
                    <BotoesArea />
                  </div>
                </div>
                <div className="row inicio" id="conteudo">
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-between mb-3">
                      <h4>Notícias</h4>
                      <Link to="/mais-noticias" className="btn btn-link">
                        Ver todas as notícias{" "}
                        <FontAwesomeIcon className="ml-2" icon="plus" />
                      </Link>
                    </div>
                    <Noticias quantidade_por_linha="2" quantidade="4" />
                  </div>
                  <BarraLateral>
                    
                  </BarraLateral>
                </div>
              </React.Fragment>
            );
          }}
        </Query>
      </main>
    );
  }
}

export default Inicio;
