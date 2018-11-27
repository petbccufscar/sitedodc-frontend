import React from "react";
import { Link } from "react-router-dom";

const BotaoArea = ({ area = "aluno", texto = "Aluno" }) => (
  <Link
    to={"/area-" + area}
    className="btn btn-white py-3 px-md-4  text-primary"
  >
    <span className="d-none d-sm-inline">Área do </span>{texto}
  </Link>
);
const BotoesArea = () => (
  <div className="row justify-content-around ">
    <div
      className="btn-group col-auto p-0 shadow-sm"
      role="group"
      id="botoes-area"
      aria-label="First group"
    >
      <BotaoArea area="aluno" texto="Aluno" />
      <BotaoArea area="visitante" texto="Visitante" />
      <BotaoArea area="docente" texto="Docente" />
    </div>
  </div>
);

export default BotoesArea;
