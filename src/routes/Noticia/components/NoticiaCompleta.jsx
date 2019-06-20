import React from "react";
import ReactMarkdown from "react-markdown";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";

const Noticia = ({ noticia }) => (
  <React.Fragment>
    <div className="mb-4 pb-4 border-bottom">
      <h4>
        <Data data={noticia.createdAt} />
        {noticia.Titulo}
      </h4>
      <small>{noticia.Descricao}</small>
    </div>
    <div className="d-flex justify-content-center">
      {noticia.Imagem && (
        <img
          src={`${process.env.REACT_APP_API_URL}/${noticia.Imagem.url}`}
          className="img-fluid"
          alt="Responsive"
          id="img-noticia"
        />
      )}
    </div>
    <ReactMarkdown className="text-justify mt-4" source={noticia.Conteudo} />
  </React.Fragment>
);
const Data = ({ data = "01/01/2018" }) => (
  <span className="mr-2 badge badge-primary">
    {format(new Date(data), "DD/MM/YYYY", {
      locale: pt,
    })}
  </span>
);
export default Noticia;
