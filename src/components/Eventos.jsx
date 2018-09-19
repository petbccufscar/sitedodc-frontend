import React, { Component } from "react";
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
    let eventos = this.state.eventos.map(evento => {
      return this.Evento(evento);
    });
    return (
      <div>
        <h4 className="mb-3">Eventos</h4>
        {eventos}
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg mt-4 btn-block"
        >
          Ver mais
        </button>
      </div>
    );
  }

  Evento(evento) {
    let data = evento["Data do evento"].substring(0, 10).split("-"); // ANO-MES-DIA
    return (
      <a
        key={evento["Título"]}
        href="#"
        style={{ textDecoration: "none" }}
        className="d-flex flex-row align-items-start border-bottom"
      >
        <div className="p-2">
          <div>
            <h3 className="font-weight-bold text-primary mb-0">
              {data[2]}/{data[1]}
            </h3>
          </div>
          <h3 className="text-secondary font-weight-light mb-0">14:00</h3>
        </div>
        <div className="p-2 align-self-center text-primary ml-2">
          <h5>{evento["Título"]}</h5>
        </div>
      </a>
    );
  }
}

export default Eventos;
