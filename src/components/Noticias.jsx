import React, { Component } from "react";
import Card, { CardImage, CardBody, CardFooter } from "./Card";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import { Link } from "react-router-dom";
import NoticiaLoader from "./NoticiaLoader";

class Noticias extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.ready !== nextState.ready) {
      return true;
    }
    return false;
  }
  state = {};
  constructor() {
    super();
    this.state = {
      noticias: [],
      ready: false
    };
  }
  async componentDidMount() {

    try {
      const response = await fetch("https://sitedodc-backend.herokuapp.com/noticia?_sort=createdAt:desc&_limit=" +
        this.props.quantidade);
      const json = await response.json();
      this.setState({ noticias: json, ready: true });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div
        className="card-columns"
        style={{ columnCount: this.props.quantidade_por_linha }}
      >
        {this.state.ready ? this.state.noticias.map(noticia => (
          <Card
            key={noticia["Título"]}
          >
            <CardImage
              img="https://picsum.photos/300/100/?random"
              alt={"noticia.imagem_descricao"}
            />
            <CardBody>
              <Link to={"/noticia/" + noticia["_id"]} >
                <h5 className="card-title">{noticia["Título"].substring(0, 100).concat("...")}</h5>
                <p className="card-text">{noticia["Descrição"].substring(0, 100).concat("...")}
                </p>
              </Link>
            </CardBody>
            <CardFooter>
              <small>
                {this.FormatarData(noticia["createdAt"])}
              </small>
            </CardFooter>
          </Card>
        )):
        (<React.Fragment>
          <NoticiaLoader></NoticiaLoader>
        <NoticiaLoader></NoticiaLoader>
        </React.Fragment>
        )}
      </div>
    );
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
