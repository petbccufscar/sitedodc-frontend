import React, { Component } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Avatar from "../../images/avatar.png";
import Docente from "../../components/Docente";

class Docentes extends Component {
  render() {
    return (
      <main role="main" id="conteudo" class="container mt-5">
        <Breadcrumb path={this.props.location.pathname} />

        <h1 class="display-6">Docentes</h1>
        <Docente />
      </main>
    );
  }
}

export default Docentes;
