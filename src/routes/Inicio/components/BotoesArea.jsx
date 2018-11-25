import React from "react";
import { Link } from "react-router-dom";

const BotaoArea = ({ area = "aluno", texto = "Aluno", className }) => (
  <Link
    to={"/area-" + area}
    className={"btn btn-white py-3 px-md-4  text-primary  " + className }
  >
    <span className="d-none d-sm-inline">Área do </span>{texto}
  </Link>
);
const BotoesArea = () => (
  <div className="row justify-content-around ">
    <div
      className="btn-group col-auto p-0 shadow-sm border"
      role="group"
      id="botoes-area"
      aria-label="First group"
    >
      <BotaoArea area="aluno" className="px-4" texto="Aluno" />
      <BotaoArea area="visitante" className="px-4" texto="Visitante" />
      <BotaoArea area="docente" className="px-4"  texto="Docente" />
    </div>
  </div>
);

export default BotoesArea;
