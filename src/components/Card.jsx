import React, { Component } from "react";
import { Link } from "react-router-dom";

const Card = ({
  key,
  titulo = "Sem titulo",
  subtitulo = "Sem subtitulo",
  rodape,
  link,
  imagem,
  imagem_descricao,
  botaoTexto
}) => (
  <div className="card hoverable" key={key}>
    {imagem && (
      <img
        className="card-img-top"
        src={"http://localhost:8080/" + imagem}
        alt={imagem_descricao}
      />
    )}

    <div className="card-body d-flex flex-column">
      <a href={link}>
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{subtitulo}</p>
      </a>
    </div>

    {rodape && (
      <div className="card-footer">
        <small className="text-muted">{rodape}</small>
      </div>
    )}
  </div>
);

export default Card;
