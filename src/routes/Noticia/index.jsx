import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import NoticiaCompleta from "./components/NoticiaCompleta";
import NoticiaCompletaLoader from "./components/noticia_completa_loader";

import { Query } from "react-apollo";
import { GET_NOTICIA_COMPLETA } from '../../utils/queries';


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
          <Query
            query={GET_NOTICIA_COMPLETA}
            variables={{ id: this.props.match.params.id }}
          >
            {({ loading, error, data }) => {
              if (loading) {
                return <NoticiaCompletaLoader />;
              }
              if (error) {
                return `Error! ${error.message}`;
              }
              return <NoticiaCompleta noticia={data.noticia} />;
            }}
          </Query>
        </div>
      </React.Fragment>
    );
  }
}

export default Noticia;
