import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuButton = ({ titulo, endereco, icone, dropdown }) => (
  <Link
    className="nav-link ml-2 d-flex d-sm-block py-3 py-sm-0 align-items-center "
    data-toggle={dropdown ? "dropdown" : ""}
    role="button"
    aria-haspopup="true"
    aria-expanded="false"
    to={endereco}
  >
    <FontAwesomeIcon icon={icone} className="d-inline-block" />

    <div className="pl-3 pl-sm-0">
      <small>{titulo}</small>
    </div>
  </Link>
);

export default MenuButton;
