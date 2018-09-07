import React, { Component } from "react";
import Noticias from "./Noticias";
import BarraLateral from "./BarraLateral";

class Corpo extends Component {
  render() {
    return (
      <main role="main" className="container">
        <div className="row justify-content-around">
          <div
            className="btn-group mr-2 col-auto shadow p-0"
            role="group"
            style={{
              marginTop: "-60px",
              borderRadius: "20px",
              overflow: "hidden",
              marginBottom: "70px"
            }}
            aria-label="First group"
          >
            <button
              type="button"
              className="btn btn-light py-4 px-5 border-right text-primary"
            >
              Área do aluno
            </button>
            <button
              type="button"
              className="btn btn-light py-4 px-5  text-primary"
            >
              Área do visitante
            </button>
            <button
              type="button"
              className="btn btn-light py-4 px-5 text-primary"
            >
              Área do docente
            </button>
          </div>
        </div>
        <div className="row">
          <Noticias />
          <BarraLateral />
        </div>
      </main>
    );
  }
}

export default Corpo;
