import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmConstrucao = () => (
  <div className="d-flex justify-content-center flex-wrap p-5 mt-3">
    <div>
      <FontAwesomeIcon
        icon="exclamation-triangle"
        className="mr-0 mr-sm-5 mb-5 mb-sm-0 "
        size="5x"
      />
    </div>
    <div>
      <h5>Ops! A página que você tentou acessar está em construção. </h5>
      <small>
        Em breve ela estará disponível!
      </small>
    </div>
  </div>
);

export default EmConstrucao;
