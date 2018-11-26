import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
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
    console.log(this.state.docente);
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb endereco="/Docentes">Docentes</Breadcrumb>
          <Breadcrumb bold>{this.state.docente["Nome"]}</Breadcrumb>
        </Breadcrumbs>
        <div className="container">
        <div className="row">
        <div class="col-sm col-lg-3 col-md-4 mb-3 d-flex justify-content-center" id="docente-foto">
            <img id="img-docente" className="rounded-circle" src="https://picsum.photos/230/230/?random" alt="imagem do docente"/>
        </div>
        <div class="col-sm col-lg-9 col-md-8" id="docente-conteudo">
            <h3 className="text-center text-sm-left">{this.state.docente["Nome"]}</h3>
            <h5 className="text-muted text-center text-sm-left">{this.state.docente["Tipo"] + "-" +  this.state.docente["Horas"] + "h/DE"}</h5>
            <p className="text-justify">{this.state.docente["Descrição"]}</p>
            <p>
                <FontAwesomeIcon icon="graduation-cap" className="d-inline-block mr-2" />
                Nível: {this.state.docente["Nível"]}
            </p>
            <p>{this.renderAreas(this.state.docente["Áreas"])}</p>
            <p>
                <FontAwesomeIcon icon="envelope" className="d-inline-block mr-2" />
                Email: {this.state.docente["Email"]}
            </p> 
            <p>
            <FontAwesomeIcon icon="phone" className="d-inline-block mr-2" /> Ramal: {this.state.docente["Ramal"]}        

            </p>
            <a href={this.state.docente["Lattes"]} className="mr-4">
                <FontAwesomeIcon icon="globe-americas" className="d-inline-block mr-2"/>
                Lattes
            </a>
            <a href={this.state.docente["Site pessoal"]} className="mr-4">
                <FontAwesomeIcon icon="globe-americas" className="d-inline-block mr-2"/>
                Página Pessoal
            </a>           
        </div>
        </div>
        
    </div>
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