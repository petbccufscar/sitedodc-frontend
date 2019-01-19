import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const MenuButton = ({ titulo, endereco, icone, dropdown }) => (
  <button
    className="nav-link ml-2 d-flex d-sm-block py-3 py-sm-0 align-items-center "
    data-toggle={dropdown ? "dropdown" : ""}
    aria-haspopup="true"
    aria-expanded="false"
  >
    <FontAwesomeIcon icon={icone} className="d-inline-block" />

    <div className="pl-3 pl-sm-0">
      <small>{titulo}</small>
    </div>
  </button>
);
MenuButton.propTypes = {
  titulo:PropTypes.string.isRequired,
  endereco:PropTypes.string,
  icone:PropTypes.string,
  dropdown:PropTypes.bool,
};
export default MenuButton;
