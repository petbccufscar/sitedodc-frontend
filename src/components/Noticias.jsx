import React, { Component } from "react";
import Card, { CardImage, CardBody, CardFooter } from "./Card";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import { Link } from "react-router-dom";

class Noticias extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      noticias: [],
      ready: false
    };
  }
  componentDidMount() {
    fetch(
      "https://sitedodc-backend.herokuapp.com/noticia?_sort=createdAt:desc&_limit=" +
      this.props.quantidade
    )
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState({ noticias: json, ready: true });

      });
  }
  render() {
    return (
      <div
        className="card-columns"
        style={{ columnCount: this.props.quantidade_por_linha }}
      >
        {this.state.ready && this.state.noticias.map(noticia => (
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
            <CardFooter><small>{this.FormatarData(noticia["createdAt"])}</small></CardFooter>
          </Card>
        ))}
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
