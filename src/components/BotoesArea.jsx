import React, { Component } from "react";
import { Link } from "react-router-dom";

class BotoesArea extends Component {
  render() {
    return (
      <div className="row justify-content-around">
        <div
          className="btn-group btn-light mr-2 col-auto p-0"
          role="group"
          id="botoes-area"
          aria-label="First group"
        >
          <Link
            to="/area-aluno"
            className="btn btn-light py-4 px-md-5 pl-sm-5 text-primary"
          >
            Área do aluno
          </Link>
          <Link
            to="/area-visitante"
            className="btn btn-light py-4 px-md-4  text-primary"
          >
            Área do visitante
          </Link>
          <Link
            to="/area-docente"
            className="btn btn-light py-4 px-md-5 pr-sm-5 text-primary"
          >
            Área do docente
          </Link>
        </div>
      </div>
    );
  }
}

export default BotoesArea;
