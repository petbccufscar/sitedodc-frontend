import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuButton = ({ titulo, icone }) => (
  <Link
    className="nav-link"
    data-toggle="dropdown"
    role="button"
    aria-haspopup="true"
    aria-expanded="false"
    to={titulo}
  >
    <FontAwesomeIcon icon={icone} className="d-inline-block" />

    <div>{titulo}</div>
  </Link>
);

export default MenuButton;
