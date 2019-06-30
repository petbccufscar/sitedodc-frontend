import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const MenuButton = ({ titulo, icone, dropdown }) => (
  <button
    className={
      dropdown ? "nav-link ml-2 d-flex d-sm-block py-3 py-sm-0 align-items-center" :
        "nav-link ml-2 d-flex d-sm-block py-3 py-sm-0 align-items-center pointer"
    }
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
  titulo: PropTypes.string.isRequired,
  endereco: PropTypes.string,
  icone: PropTypes.string,
  dropdown: PropTypes.bool
};
export default MenuButton;
