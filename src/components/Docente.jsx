import React, { Component } from "react";
import Avatar from "../images/avatar.png";
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
    return <div>{docentes}</div>;
  }

  Docente(docente) {
    return (
      <div className="card mb-4" id="card-docente">
        <div className="row no-gutters">
          <div className="col-auto">
            <img src={Avatar} className="img-fluid" alt="" />
          </div>
          <div className="col ml-1 mt-3">
            <div className="card-block px-2">
              <h5 className="card-title">{docente["Nome"]}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {docente["Tipo"]} - {docente["Horas"]}
                h/DE
              </h6>
              <p className="card-text">
                <FontAwesomeIcon
                  icon="graduation-cap"
                  className="d-inline-block mr-2"
                />
                Nível: {docente["Nível"]}
              </p>
              {this.renderAreas(docente)}
              <p class="card-text">
                <FontAwesomeIcon
                  icon="envelope"
                  className="d-inline-block mr-2"
                />
                Email: {docente["Email"]}
              </p>
              <a href={docente["Lattes"]} class="card-link">
                Lattes
              </a>
              <a href={docente["Site pessoal"]} class="card-link">
                Página Pessoal
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderAreas(docente) {
    if (docente["Áreas"].length == 0) {
      return;
    } else {
      return (
        <p className="card-text">
          <FontAwesomeIcon icon="microscope" className="d-inline-block mr-2" />
          Áreas: {this.listAreas(docente["Áreas"])}
        </p>
      );
    }
  }

  listAreas(areas) {
    let list = areas.map(area => <line>{area["Área"]}; </line>);
    return list;
  }
}

export default Docente;
