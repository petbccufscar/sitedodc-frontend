import React, { Component } from "react";
import Evento from "./Evento";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

class Eventos extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      eventos: []
    };
  }
  componentDidMount() {
    fetch("https://sitedodc-backend.herokuapp.com/evento?_limit=4")
      .then(recebidoJson => {
        return recebidoJson.json();
      })
      .then(eventos => {
        this.setState({ eventos: eventos });
      });
  }
  render() {
    return (
      <div>
        <div className="d-flex justify-content-between mb-3">
          <h4>Eventos</h4>
          <Link
            to="/"
            className="btn btn-link"
          >
            Ver mais eventos   <FontAwesomeIcon className="ml-2" icon="plus" />
        </Link>
        </div>
        {this.state.eventos.map(evento => (
          <Evento titulo={evento["Título"]} data={evento["Data do evento"]} />
        ))}

      </div>
    );
  }
}

export default Eventos;
