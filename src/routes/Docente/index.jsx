import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import PaginaDocente from "../../components/PaginaDocente";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Docente extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      docente: []
    };
    
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch("https://sitedodc-backend.herokuapp.com/Docente/" + id)
      .then(recebidoJson => {
        return recebidoJson.json();
      })
      .then(docente => {
        this.setState({ docente: docente });
      });
  }

  render() {
    window.scrollTo(0,0);
    console.log(this.state.docente);
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb endereco="/Docentes">Docentes</Breadcrumb>
          <Breadcrumb bold>{this.state.docente["Nome"]}</Breadcrumb>
        </Breadcrumbs>
        <PaginaDocente docente={this.state.docente} areas={this.renderAreas(this.state.docente["Áreas"])} />
      </React.Fragment>
    );
  }

  renderAreas(areas) {
    if(areas) {
      if (areas.length === 0) {
        return;
      } else {
        return (
          <p className="card-text">
            <FontAwesomeIcon icon="microscope" className="d-inline-block mr-2" />
            Áreas: {this.listAreas(areas)}
          </p>
        );
      }
    } else {
      return (<p></p>)
    }
    
  }

  listAreas(areas) {
    let list = areas.map(area => <line>{area["Área"]}; </line>);
    return list;
  }
}

export default Docente;