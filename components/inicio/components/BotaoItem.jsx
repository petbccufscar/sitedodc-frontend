import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const BotaoItem = ({ to, children, className }) => (
  <Link href={to}>
    <a className="text-decoration-none">
    <div className={"botao-item text-white pl-4 " + className}>
      <h4>{children}</h4>
    </div>
    </a>
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
