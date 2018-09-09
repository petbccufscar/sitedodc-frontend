import React, { Component } from "react";

class BotoesArea extends Component {
  render() {
    return (
      <div className="row justify-content-around">
        <div
          className="btn-group mr-2 col-auto shadow p-0"
          role="group"
          id="botoes-area"
          aria-label="First group"
        >
          <button
            type="button"
            className="btn btn-light py-4 px-md-5 pl-sm-5 border-right text-primary"
          >
            Área do aluno
          </button>
          <button
            type="button"
            className="btn btn-light py-4 px-md-4  text-primary"
          >
            Área do visitante
          </button>
          <button
            type="button"
            className="btn btn-light py-4 px-md-5 pr-sm-5 text-primary"
          >
            Área do docente
          </button>
        </div>
      </div>
    );
  }
}

export default BotoesArea;
