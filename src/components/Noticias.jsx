import React, { Component } from "react";
import Card from "./Card";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
class Noticias extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      noticias: []
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
        this.setState({ noticias: json });
      });
  }
  render() {
    return (
      <div
        className="card-columns"
        style={{ columnCount: this.props.quantidade_por_linha }}
      >
        {this.state.noticias.map(noticia => (
          <Card
            key={noticia["Título"]}
            img_topo
            titulo={noticia["Título"].substring(0, 100).concat("...")}
            subtitulo={noticia["Descrição"].substring(0, 100).concat("...")}
            rodape={this.FormatarData(noticia["createdAt"])}
            link={"/noticia/" + noticia["_id"]}
            //imagem={noticia["Imagem"]}
            imagem="https://picsum.photos/300/100/?random"
            imagem_descricao={"noticia.imagem_descricao"}
          />
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
