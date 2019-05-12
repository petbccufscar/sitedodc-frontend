import React, { Component } from "react";
import BarraLateral from "./components/BarraLateral";
import BotoesArea from "./components/BotoesArea";

import "../../styles/css/home.css";

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
                <div className="row mb-4 mt-4 rounded" id="moldura">
                  <BannerArea>
                    <Carousel>
                      {loading ? (
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
                      )}
                    </Carousel>
                  </BannerArea>
                  <BotoesArea>
                      <BotaoItem to="/area-aluno">Área do Aluno</BotaoItem>
                      <BotaoItem to="/area-docente" className="border-top border-bottom">Área do Docente</BotaoItem>
                      <BotaoItem to="/area-visitante">Área do Visitante</BotaoItem>
                    </BotoesArea>     
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
