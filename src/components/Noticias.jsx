import React, { Component } from "react";
import Card, { CardBody, CardFooter } from "./Card";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import { Link } from "react-router-dom";
import NoticiaLoader from "./NoticiaLoader";

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { ImageLoader } from "./image-loader";

const GET_NOTICIAS = gql`
  query Noticias($qnt: Int!){
    noticias(limit:$qnt, sort:"_id:desc"){
      _id
      Imagem{
        url
      }
      Imagem_texto_alternativo
      Titulo
      Descricao
      createdAt
    }
  }
`;

class Noticias extends Component {
  render() {
    return (
      <div
        className="card-columns"
        style={{ columnCount: this.props.quantidade_por_linha }}
      >
        <Query query={GET_NOTICIAS} variables={{qnt:parseInt(this.props.quantidade)}}>
          {({ loading, error, data }) => {
            if (loading) return (<React.Fragment>
              <NoticiaLoader></NoticiaLoader>
              <NoticiaLoader></NoticiaLoader>
            </React.Fragment>
            );
            if (error) return `Error! ${error.message}`;

            return (
              data.noticias.map((noticia,index) => (
                <Card
                  key={index}
                  className="hoverable"
                >
                  {noticia.Imagem &&
                <ImageLoader
                    classnames={"card-img-top"}
                    src={"http://159.89.232.182:1337/"+noticia.Imagem.url}
                    alt={noticia.Imagem_texto_alternativo}
                    loaderHeight="8rem"
                  /> 
                }
                  <CardBody>
                    <Link to={"/noticia/" + noticia._id} >
                      <h5 className="card-title">{noticia.Titulo}</h5>
                      <p className="card-text">{noticia.Descricao}
                      </p>
                    </Link>
                  </CardBody>
                  <CardFooter>
                    <small>
                      {this.FormatarData(noticia.createdAt)}
                    </small>
                  </CardFooter>
                </Card>
              )
              ))
          }}
        </Query></div>)
  }

  FormatarData(data) {
    return (
      "Postado em: " +
      format(new Date(data), "dddd, DD/MM/YYYY", {
        locale: pt
      })
    );
  }
}

export default Noticias;
