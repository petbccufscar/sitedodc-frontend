import React  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NaoEncontrado = () => (
  <div className="d-flex justify-content-center flex-wrap p-5 mt-3">
    <div>
      <FontAwesomeIcon icon="exclamation-triangle" className="mr-0 mr-sm-5 mb-5 mb-sm-0 " size="5x" />
    </div>
    <div>
      <h5>Ops! Não conseguimos encontrar a pagina que você queria.</h5>
      <small>
        Se você acha que isso é um erro, nos avise
        <button type="button" className="btn btn-sm btn-link">clicando aqui
        </button>
      </small>
    </div>
  </div>
);

export default NaoEncontrado;
