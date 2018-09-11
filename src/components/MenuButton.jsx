import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MenuButton extends Component {
  render() {
    return (
      <Link
        className="nav-link"
        data-toggle="dropdown"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
        to={this.props.titulo}
      >
        <FontAwesomeIcon icon={this.props.icone} className="d-inline-block" />

        <div>{this.props.titulo}</div>
      </Link>
    );
  }
}

export default MenuButton;
