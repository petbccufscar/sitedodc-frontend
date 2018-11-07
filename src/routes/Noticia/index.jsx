import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import NoticiaCompleta from "./components/NoticiaCompleta";
class Noticia extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      noticia: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch("https://sitedodc-backend.herokuapp.com/Noticia/" + id)
      .then(recebidoJson => {
        return recebidoJson.json();
      })
      .then(noticia => {
        this.setState({ noticia: noticia });
      });
  }
  render() {
    console.log(this.state.noticia);
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb endereco="/mais-noticias">Noticias</Breadcrumb>
          <Breadcrumb bold>{this.state.noticia["Título"]}</Breadcrumb>
        </Breadcrumbs>
        <NoticiaCompleta noticia={this.state.noticia} />
      </React.Fragment>
    );
  }
}

export default Noticia;
