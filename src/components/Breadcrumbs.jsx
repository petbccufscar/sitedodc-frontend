import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const BreadcrumbDivisor = () => (
  <div className="divider-breadcrumbs">
    <FontAwesomeIcon icon="angle-right" />
  </div>
);
export const Breadcrumb = props => (
  <li
    className={
      props.bold ? "item-breadcrumb font-weight-bold" : "item-breadcrumb"
    }
  >
    <BreadcrumbDivisor />
    {props.endereco ? (
      <Link to={props.endereco}>{props.children}</Link>
    ) : (
      props.children
    )}
  </li>
);
export const Breadcrumbs = props => (
  <nav id="breadcrumb" className="container-fluid m-0 shadow-sm mb-5">
    <div className="container">
      <ul className="m-0 p-0">{props.children}</ul>
    </div>
  </nav>
);
