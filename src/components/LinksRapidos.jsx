import React, { Component } from "react";
import LogoSiga from "../images/logos/siga.png";
import PetBCC from "../images/logos/petbcc.png";
import BCC from "../images/logos/bcc.png";
class LinksRapidos extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      links: []
    };
  }
  componentDidMount() {
    fetch("https://sitedodc-backend.herokuapp.com/link")
      .then(recebidoJson => {
        return recebidoJson.json();
      })
      .then(links => {
        this.setState({ links: links });
      });
  }
  render() {
    let links = this.state.links.map(link => {
      return this.LinkRapido(link);
    });
    return (
      <div className=" mt-4">
        <h4 className="mb-3">Links rápidos</h4>
        <div className="d-flex flex-wrap">{links}</div>
      </div>
    );
  }

  // TODO: colocar imagem, agora não dá porque não tem servidor e heroku não deixa =(
  LinkRapido(link) {
    return (
      <a
        id="links-rapidos"
        className="p-2 rounded border mr-2 mb-2"
        href={link["Link"]}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          src="https://petbcc.secompufscar.com.br/media/petbcc.png"
          alt=""
          className="img-fluid"
        />
      </a>
    );
  }
}

export default LinksRapidos;
