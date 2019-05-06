import React from "react";
import {Link} from "react-router-dom";
import Card, {CardBody} from "../../../components/Card";
import PropTypes from "prop-types";

const BotaoItem = ({ to, children }) => (
  <Card className="mt-2 mb-2 hoverable">
    <Link to={to}>
      <CardBody>Área do {children}</CardBody>
    </Link>
  </Card>
);

BotaoItem.propTypes = {
  to: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default BotaoItem;