import React, { Component } from "react";
import { Link } from "react-router-dom";
class Card extends Component {
  render() {
    var temImagem = this.props.imagem !== "";
    return (
      <div className="card">
        {this.ImagemCard(temImagem)}

        <div className="card-body">
          <h5 className="card-title">{this.props.titulo}</h5>
          <p className="card-text">{this.props.subtitulo}</p>
          <Link to={this.props.link} className="btn btn-primary">
            Ler mais
          </Link>
        </div>
        <div className="card-footer">
          <small className="text-muted">{this.props.rodape}</small>
        </div>
      </div>
    );
  }

  ImagemCard(temImagem) {
    return temImagem ? (
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
