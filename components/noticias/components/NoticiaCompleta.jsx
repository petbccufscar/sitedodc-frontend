import React from "react";
import ReactMarkdown from "react-markdown";
import Head from 'next/head'
import { format } from "date-fns";
import pt from "date-fns/locale/pt";

const Noticia = ({ noticia }) => (
  <React.Fragment>
    <Head>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={noticia.Titulo} />
      <meta name="twitter:description" content={noticia.Descricao} />
      <meta name="twitter:image" content={`${process.env.REACT_APP_API_URL}${noticia.Imagem.url}`} />
    </Head>
    <div className="mb-4 pb-4 border-bottom">
      <h4>
        <Data data={noticia.createdAt} />
        {noticia.Titulo}
      </h4>
      <small>{noticia.Descricao}</small>
    </div>
    <div className="noticia-container clearfix">
      {noticia.Imagem && (
        <img
          src={`${process.env.REACT_APP_API_URL}/${noticia.Imagem.url}`}
          alt="Responsive"
          id="img-noticia"
        />
      )}
      <ReactMarkdown className="text-justify mt-4" source={noticia.Conteudo} />
    </div>
  </React.Fragment>
);
const Data = ({ data = "01/01/2018" }) => (
  <span className="mr-2 badge badge-primary">
    {format(new Date(data), "dd/MM/yyyy", {
      locale: pt
    })}
  </span>
);
export default Noticia;
