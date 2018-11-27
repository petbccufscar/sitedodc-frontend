import React, { Component } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Docente extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      docentes: []
    };
  }
  componentDidMount() {
    fetch("https://sitedodc-backend.herokuapp.com/docente")
      .then(recebidoJson => {
        return recebidoJson.json();
      })
      .then(docentes => {
        this.setState({ docentes: docentes });
      });
  }
  render() {
    let docentes = this.state.docentes.map(docente => {
      return this.Docente(docente);
    });
    return <div
    className="card-columns"
    style={{ columnCount: this.props.quantidade_por_linha }}
  >{docentes}
  </div>
  }

  Docente(docente) {
    return (
        <Card
        key={docente["Nome"]}
        img_esquerda
        titulo={docente["Nome"]}
        subtitulo={docente["Tipo"] + "-" +  docente["Horas"] + "h/DE" + " - " + "Telefone: " + docente["Ramal"] + " Email: "+ docente["Email"] }
        rodape={this.renderAreas(docente)}
        link={"/docente/" + docente["_id"]}
        //imagem={docente["Imagem"]}
        imagem="https://picsum.photos/100/100/?random"

        />
    );
  }

  renderAreas(docente) {
    if (docente["Áreas"].length === 0) {
      return;
    } else if (docente["Áreas"].length > 3) {
      return (
        <p className="card-text" id="areas-docente">
          <FontAwesomeIcon icon="microscope" className="d-inline-block mr-2" />
          Áreas: {this.listAreasSlice(docente["Áreas"])} ...
        </p>
      );
    } else return (
      <p className="card-text" id="areas-docente">
          <FontAwesomeIcon icon="microscope" className="d-inline-block mr-2" />
          Áreas: {this.listAreas(docente["Áreas"])} 
        </p>
    );
  }

  listAreasSlice(areas) {
    let list = areas.map(area => <a href={"/docentes/por-area/"+area["Área"]}>{area["Área"]}; </a>);
    return list.reverse().slice(0,3);
  }

  listAreas(areas) {
    let list = areas.map(area => <a href={"/docentes/por-area/"+area["Área"]}>{area["Área"]}; </a>);
    return list;
  }
}

export default Docente;
