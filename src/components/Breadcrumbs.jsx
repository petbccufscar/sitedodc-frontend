import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BreadcrumbDivisor = () => (
  <div className="divider-breadcrumbs">
    <FontAwesomeIcon icon="angle-right" />
  </div>
);
export const Breadcrumb = props => (
  <li className="item-breadcrumb">
    <BreadcrumbDivisor />
    <a href={props.endereco}>{props.children}</a>
  </li>
);
export const Breadcrumbs = props => (
  <nav id="breadcrumb" className="container-fluid m-0 shadow-sm mb-5">
    <div className="container">
      <ul className="m-0 p-0">{props.children}</ul>
    </div>
  </nav>
);
