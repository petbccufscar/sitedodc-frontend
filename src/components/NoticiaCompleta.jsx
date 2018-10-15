import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
const Noticia = ({ noticia }) => (
  <div className="container">
    <div className="mb-4 pb-4 border-bottom">
      <h4>
        <Data data={noticia["createdAt"]} />
        {noticia["Título"]}
      </h4>
      <small>{noticia["Descrição"]}</small>
    </div>
    {noticia.Imagem && (
      <img src={noticia.Imagem} class="img-fluid" alt="Responsive image" />
    )}
    <ReactMarkdown source={noticia["Conteúdo"]} />
  </div>
);
const Data = ({ data }) => (
  <span className="mr-2 badge badge-primary">
    {format(new Date(data), "DD/MM/YYYY", {
      locale: pt
    })}
  </span>
);
export default Noticia;
