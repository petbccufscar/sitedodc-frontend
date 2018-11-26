import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuButton = ({ titulo, endereco, icone, dropdown }) => (
  <Link
    className="nav-link ml-2"
    data-toggle={dropdown?"dropdown":""}
    role="button"
    aria-haspopup="true"
    aria-expanded="false"
    to={endereco}
  >
    <FontAwesomeIcon icon={icone} className="d-inline-block" />

    <div><small>{titulo}</small></div>
  </Link>
);

export default MenuButton;
