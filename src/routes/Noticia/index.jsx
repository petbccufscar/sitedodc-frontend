import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import NoticiaCompleta from "./components/NoticiaCompleta";
import NoticiaCompletaLoader from "./components/noticia_completa_loader";

class Noticia extends Component {

  state = {};
  constructor() {
    super();
    this.state = {
      noticia: [],
      ready: false
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.ready !== nextState.ready) {
      return true;
    }
    return false;
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    fetch("https://sitedodc-backend.herokuapp.com/Noticia/" + id)
      .then(recebidoJson => {
        return recebidoJson.json();
      })
      .then(noticia => {
        this.setState({ noticia: noticia, ready: true });
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
        <div className="container">

        {
          this.state.ready ?
            <NoticiaCompleta noticia={this.state.noticia} /> :
            <NoticiaCompletaLoader />
        }
        </div>
      </React.Fragment>
    );
  }
}

export default Noticia;
