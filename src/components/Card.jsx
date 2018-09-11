import React, { Component } from "react";
import { Link } from "react-router-dom";
class Card extends Component {
  render() {
    return (
      <div className="card">
        {this.ImagemCard(this.props.imagem, this.props.imagem_descricao)}

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{this.props.titulo}</h5>
          <p className="card-text">{this.props.subtitulo}</p>
          <a
            href={this.props.link}
            className="btn btn-outline-info mt-auto d-block"
          >
            {this.props.botaoTexto}
          </a>
        </div>

        {this.RodapeCard(this.props.rodape)}
      </div>
    );
  }

  RodapeCard(rodape) {
    return (
      rodape && (
        <div className="card-footer">
          <small className="text-muted">{this.props.rodape}</small>
        </div>
      )
    );
  }

  ImagemCard(imagem, imagem_descricao) {
    return (
      imagem && (
        <img
          className="card-img-top"
          src={"http://localhost:8080/" + imagem}
          alt={imagem_descricao}
        />
      )
    );
  }
}

export default Card;
