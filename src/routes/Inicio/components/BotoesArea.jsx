import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card, { CardBody } from "../../../components/Card";
// const BotaoArea = ({ to, children }) => (
//   <Link to={to}>
//     <button className={"btn btn-white py-3 px-4 text-primary"}>
//       Área do {children}
//     </button>
//   </Link>
// );

const BotaoArea = ({ to, children }) => (
  <Card className="mt-2 mb-2 hoverable texte">
    <Link to={to}>
      <CardBody>Área do {children}</CardBody>
    </Link>
  </Card>
);

BotaoArea.propTypes = {
  to: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

// const BotoesArea = () => (
//   <React.Fragment>
//     <div
//       className="btn-group-vertical col-auto p-0 shadow-sm border"
//       // role="group"
//       // id="botoes-area"
//       aria-label="First group"
//     >
//       <BotaoArea to="/area-aluno" texto="Aluno">
//         Aluno
//       </BotaoArea>
//       <BotaoArea to="/area-visitante" texto="Visitante">
//         Visitante
//       </BotaoArea>
//       <BotaoArea to="/area-docente" texto="Docente">
//         Docente
//       </BotaoArea>
//     </div>
//   </React.Fragment>
// );

const BotoesArea = () => (
  <React.Fragment>
    <BotaoArea to="/area-aluno" texto="Aluno">
      Aluno
    </BotaoArea>
    <BotaoArea to="/area-visitante" texto="Visitante">
      Visitante
    </BotaoArea>
    <BotaoArea to="/area-docente" texto="Docente">
      Docente
    </BotaoArea>
  </React.Fragment>
);

export default BotoesArea;
