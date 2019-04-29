import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card, { CardBody } from "../../../components/Card";

const BotaoArea = ({ to, children }) => (
  <Card className="mt-2 mb-2 hoverable">
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

const BotoesArea = () => (
  <React.Fragment>
    <div className="d-flex flex-column">
      <BotaoArea to="/area-aluno" texto="Aluno">
        Aluno
      </BotaoArea>
      <BotaoArea to="/area-visitante" texto="Visitante">
        Visitante
      </BotaoArea>
      <BotaoArea to="/area-docente" texto="Docente">
        Docente
      </BotaoArea>
    </div>
  </React.Fragment>
);

export default BotoesArea;
