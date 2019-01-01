import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BotaoArea = ({ to, children }) => (
  <Link to={to}>
    <button className={"btn btn-white py-3 px-4 text-primary"}>
      <span className="d-none d-sm-inline">
        Área do{" "}
      </span>
      {children}
    </button>
  </Link>
);

BotaoArea.propTypes = {
  to: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const BotoesArea = () => (
  <div className="row justify-content-around ">
    <div
      className="btn-group col-auto p-0 shadow-sm border"
      role="group"
      id="botoes-area"
      aria-label="First group"
    >
      <BotaoArea to="/area-aluno" texto="Aluno" >Aluno</BotaoArea>
      <BotaoArea to="/area-visitante" texto="Visitante" >Visitante</BotaoArea>
      <BotaoArea to="/area-docente" texto="Docente" >Docente</BotaoArea>
    </div>
  </div>
);

export default BotoesArea;
