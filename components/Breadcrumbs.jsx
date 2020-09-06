import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import PropTypes from "prop-types";

const BreadcrumbDivisor = () => (
  <div className="divider-breadcrumbs">
    <FontAwesomeIcon icon="angle-right" />
  </div>
);

export const Breadcrumb = ({ endereco, bold, children }) => (
  <li className={bold ? "item-breadcrumb font-weight-bold" : "item-breadcrumb"}>
    <BreadcrumbDivisor />
    {endereco ? <Link href={endereco}>{children}</Link> : children}
  </li>
);
Breadcrumb.propTypes = {
  endereco: PropTypes.string,
  bold: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export const Breadcrumbs = ({ children }) => (
  <nav
    id="breadcrumb"
    className="container-fluid m-0 shadow-sm mb-4 overflow-inline"
  >
    <div className="container p-0 p-sm-1">
      <ul className="m-0 p-0">{children}</ul>
    </div>
  </nav>
);
Breadcrumbs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};