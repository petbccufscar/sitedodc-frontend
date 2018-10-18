import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NaoEncontrado = () => (
  <div class="d-flex justify-content-center p-5 mt-3">
    <FontAwesomeIcon icon="exclamation-triangle" className="mr-5" size="4x" />
    <div>
      <h5>Ops! Não conseguimos encontrar a pagina que você queria =( </h5>
      <div>
        Se você acha que isso é um erro, nos avise
        <button type="button" class="btn btn-sm btn-primary ml-2">
          Aqui
        </button>
      </div>
    </div>
  </div>
);

export default NaoEncontrado;
