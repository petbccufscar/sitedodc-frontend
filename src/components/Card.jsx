import React, { Component } from "react";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";

class Card extends Component {
  render() {
    const data = format(new Date(this.props.timestamp), "dddd, DD/MM/YYYY", {
      locale: pt
    });
    var temImagem = this.props.imagem !== "";
    return (
      <div className="card">
        {this.ImagemCard(temImagem)}

        <div className="card-body">
          <h5 className="card-title">{this.props.titulo.substring(0, 100)}</h5>
          <p className="card-text">{this.props.subtitulo}</p>
          <a href="#" className="btn btn-primary">
            Ler mais
          </a>
        </div>
        <div className="card-footer">
          <small className="text-muted">Postado em: {data}</small>
        </div>
      </div>
    );
  }

  ImagemCard(temImagem) {
    return temImagem === true ? (
      <img
        className="card-img-top"
        src={"http://localhost:8080/" + this.props.imagem}
        alt={this.props.imagem_descricao}
      />
    ) : (
      ""
    );
  }
}

export default Card;
