import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BotaoItem = ({ to, children, className }) => (
  <Link to={to} className="text-decoration-none">
    <div className={"botao-item text-white pl-4 " + className}>
      <h4>{children}</h4>
    </div>
  </Link>
);

BotaoItem.propTypes = {
  to: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default BotaoItem;
