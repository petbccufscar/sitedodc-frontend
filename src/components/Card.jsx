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
  img_esquerda,
  img_topo
}) => (
  <div className="card hoverable" key={key}>
    { imagem && img_topo && (
      <img
        className="card-img-top"
        src={imagem}
        alt={imagem_descricao}
      />
    )}

    <div className="card-body d-flex flex-row">
    {imagem && img_esquerda && (
      <div className="mr-4">
      <img
      className="rounded-circle"
        src={imagem}
        alt={imagem_descricao}
      />
      </div>
    )}
    <div>
      <a href={link}>
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{subtitulo}</p>
      </a>
      </div>
    </div>

    {rodape && (
      <div className="card-footer">
        <small className="text-muted">{rodape}</small>
      </div>
    )}
  </div>
);

export default Card;
