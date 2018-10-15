import React, { Component } from "react";
import Evento from "./Evento";

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
        <h4 className="mb-3">Eventos</h4>
        {this.state.eventos.map(evento => (
          <Evento titulo={evento["Título"]} data={evento["Data do evento"]} />
        ))}
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg mt-4 btn-block"
        >
          Ver mais
        </button>
      </div>
    );
  }
}

export default Eventos;
