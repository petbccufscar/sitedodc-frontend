import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import NoticiaCompleta from "./components/NoticiaCompleta";
import NoticiaCompletaLoader from "./components/noticia_completa_loader";

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_NOTICIA = gql`
query Noticia($id: ID!){
  noticia(id: $id){
  _id
  Titulo
  createdAt
  Tags{
    Nome
  }
  Descricao
  Conteudo
  Imagem {
    url
  }
  Imagem_texto_alternativo
  }
}
`;


class Noticia extends Component {

  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb endereco="/mais-noticias">Noticias</Breadcrumb>
          <Breadcrumb bold>Visualizando notícia</Breadcrumb>
        </Breadcrumbs>
        <div className="container">
          <Query query={GET_NOTICIA} variables={{ id: this.props.match.params.id }} >
            {({ loading, error, data }) => {
              {
                if (loading) return (<NoticiaCompletaLoader />)
                if (error) return `Error! ${error.message}`;
                return (<NoticiaCompleta noticia={data.noticia} />)
              }
            }}
          </Query>
        </div>
      </React.Fragment>
    );
  }
}

export default Noticia;
