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
      "http://localhost:8080/api/contents?type=Noticia&count=" +
        this.props.quantidade
    )
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState({ noticias: json.data });
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
            key={noticia.titulo}
            titulo={noticia.titulo.substring(0, 100).concat("...")}
            subtitulo={noticia.subtitulo.substring(0, 100).concat("...")}
            rodape={this.FormatarData(noticia)}
            link={"/noticia/" + noticia.id}
            imagem={noticia.imagem}
            imagem_descricao={noticia.imagem_descricao}
          />
        ))}
      </div>
    );
  }

  FormatarData(noticia) {
    return (
      "Postado em: " +
      format(new Date(noticia.timestamp), "dddd, DD/MM/YYYY", {
        locale: pt
      })
    );
  }
}

export default Noticias;
