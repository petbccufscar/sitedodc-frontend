import React, { Component } from "react";
import Card from "./Card";
class Noticias extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      noticias: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:8080/api/contents?type=Noticia&count=4")
      .then(recebidoJson => {
        return recebidoJson.json();
      })
      .then(recebidoObject => {
        this.setState({ noticias: recebidoObject.data });
      });
  }
  render() {
    return (
      <div className="col col-lg-8 pr-4">
        <div className="d-flex justify-content-between mb-3">
          <h4>Notícias</h4>
          <button type="button" className="btn btn-outline-info">
            Ver todas as notícias
          </button>
        </div>
        <div className="card-columns" style={{ columnCount: 2 }}>
          {this.state.noticias.map(noticia => (
            <Card
              key={noticia.titulo}
              titulo={noticia.titulo}
              subtitulo={noticia.subtitulo}
              timestamp={noticia.timestamp}
              imagem={noticia.imagem}
              imagem_descricao={noticia.imagem_descricao}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Noticias;
