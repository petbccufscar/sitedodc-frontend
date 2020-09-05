import React, { Component } from "react";
import {CardContainer} from "./cards";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import { NoticiaLoader,NoticiaCard } from "./noticias";

import { Query } from "react-apollo";
import { GET_NOTICIAS } from "../utils/queries";

class Noticias extends Component {
  render() {
    return (
      <CardContainer>
        <Query
          query={GET_NOTICIAS}
          variables={{ qnt: this.props.quantidade, start:this.props.start }}
        >
          {({ loading, error, data }) => {
            if (loading) {
              return (
                <React.Fragment>
                  <NoticiaLoader />
                  <NoticiaLoader />
                </React.Fragment>
              );
            }
            if (error){ return `Error! ${error.message}`;}

            if(this.props.onLoad){
              this.props.onLoad(data.noticias)
            }

            return data.noticias.map((noticia, index) => (
              <NoticiaCard
                more={true}
                id={noticia._id}
                title={noticia.Titulo}
                description={noticia.Descricao}
                imagem={noticia.Imagem}
                imageAlt={noticia.Imagem_texto_alternativo}
                date={noticia.createdAt}
              />
            ));
          }}
        </Query>
      </CardContainer>
    );
  }

  formatarData(data) {
    return (
      "Postado em: " +
      format(new Date(data), "dddd, DD/MM/YYYY", {
        locale: pt,
      })
    );
  }
}

export default Noticias;
