import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BarraLateral from "./components/BarraLateral";
import BotoesArea from "./components/BotoesArea";

import "../../styles/css/home.css";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";


import {
  NoticiaCard,
  NoticiasContainer,
  NoticiaLoader,
} from "../../components/noticias";
import {
  LinkRapido,
  LinksRapidosContainer,
  LinksRapidosLoader,
} from "../../components/links-rapidos";
import {
  Evento,
  EventosContainer,
  EventosLoader,
} from "../../components/eventos";
import {
  Carousel,
  CarouselBanner,
  CarouselLoader,
} from "../../components/carousel";

import { Query } from "react-apollo";
import { GET_INICIO } from "../../utils/queries";
import NoticiasArea from "./components/NoticiasArea";
import BotaoItem from "./components/BotaoItem";
import BannerArea from "./components/BannerArea";

class Inicio extends Component {
  render() {
    return (
      <main role="main" className="container">
        <Query query={GET_INICIO}>
          {({ loading, error, data }) => {
            return (
              <React.Fragment>
                <div className="row mb-4 mt-4 rounded bg-primary sm-hide">
                  <BannerArea>
                    <Carousel>
                      {/* {loading ? (
                        <CarouselLoader />
                      ) : error ? (
                        `Error! ${error.message}`
                      ) : (
                        data.banners.map((banner, index) => (
                          <CarouselBanner
                            key={index}
                            banner={
                              process.env.REACT_APP_API_URL + banner.Imagem.url
                            }
                            texto="Legenda da foto aqui"
                            active={index == 0}
                          />
                        ))
                      )} */}
                    <CarouselBanner
                            banner={banner1}
                            texto="Legenda da foto aqui"
                            active={true}
                          />
                    <CarouselBanner
                            banner={banner2}
                            texto="Legenda da foto 2 aqui"
                            active={false}
                          />
                    <CarouselBanner
                            banner={banner3}
                            texto="Legenda da foto 3 aqui"
                            active={false}
                          />
                    </Carousel>
                  </BannerArea>
                  <BotoesArea>
                      <BotaoItem to="/area-aluno">
                          <i class="fas fa-user-graduate mr-4"></i>
                          Área do Aluno
                      </BotaoItem>
                      <BotaoItem to="/area-docente" className="border-top border-bottom">
                          <FontAwesomeIcon icon="chalkboard-teacher" className="d-inline-block mr-3" />
                          Área do Docente
                      </BotaoItem>
                      <BotaoItem to="/area-visitante">
                          <FontAwesomeIcon icon="user" className="d-inline-block mr-4" />
                          Área do Visitante
                      </BotaoItem>
                    </BotoesArea>     
                </div>

                <div className="mb-4 mt-4 rounded bg-primary sm-show">
                      <BotaoItem to="/area-aluno">
                          <i class="fas fa-user-graduate mr-4"></i>
                          Área do Aluno
                      </BotaoItem>
                      <BotaoItem to="/area-docente" className="border-top border-bottom">
                          <FontAwesomeIcon icon="chalkboard-teacher" className="d-inline-block mr-3" />
                          Área do Docente
                      </BotaoItem>
                      <BotaoItem to="/area-visitante">
                          <FontAwesomeIcon icon="user" className="d-inline-block mr-4" />
                          Área do Visitante
                      </BotaoItem>
                </div>
                
                <div className="row inicio" id="conteudo">
                  <NoticiasArea>
                    <NoticiasContainer more={false}>
                      {loading ? (
                        <NoticiaLoader />
                      ) : error ? (
                        `Error! ${error.message}`
                      ) : (
                        data.noticias.map((noticia, index) => (
                          <NoticiaCard
                            id={noticia._id}
                            title={noticia.Titulo}
                            description={noticia.Descricao}
                            imagem={noticia.Imagem}
                            imageAlt={noticia.Imagem_texto_alternativo}
                            date={noticia.createdAt}
                          />
                        ))
                      )}
                    </NoticiasContainer>
                  </NoticiasArea>
                  <BarraLateral>
                    <EventosContainer>
                      {loading ? (
                        <EventosLoader />
                      ) : error ? (
                        `Error! ${error.message}`
                      ) : (
                        data.eventos.map((evento, index) => (
                          <Evento
                            key={index}
                            titulo={evento.Titulo}
                            data={evento.Data}
                            local={evento.Local}
                          />
                        ))
                      )}
                    </EventosContainer>
                    <LinksRapidosContainer>
                      {loading ? (
                        <LinksRapidosLoader />
                      ) : error ? (
                        `Error! ${error.message}`
                      ) : (
                        data.links.map((link, index) => (
                          <LinkRapido
                            link={link.Link}
                            alt={link.Texto_alternativo}
                            imagem={`${process.env.REACT_APP_API_URL}/${
                              link.Imagem.url
                            }`}
                            key={index}
                          />
                        ))
                      )}
                    </LinksRapidosContainer>
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
