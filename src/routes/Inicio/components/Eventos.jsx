import React, { Component } from "react";
import Evento from "./Evento";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import EventosLoader from "./EventosLoader";

class Eventos extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    if(this.state.ready !== nextState.ready) {
      return true;
    }
    return false;
  }
  state = {};
  constructor() {
    super();
    this.state = {
      eventos: [],
      ready:false
    };
  }
  async componentDidMount() {
    try {
      const response = await fetch("https://sitedodc-backend.herokuapp.com/evento?_limit=4");
      const json = await response.json();
      this.setState({ eventos: json, ready: true });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className=" pt-5 pt-md-0">
        <div className="d-flex justify-content-between mb-3 ">
          <h4>Eventos</h4>
          <Link
            to="/"
            className="btn btn-link"
          >
            Ver mais eventos   <FontAwesomeIcon className="ml-2" icon="plus" />
          </Link>
        </div>
        {this.state.ready ? this.state.eventos.map(evento => (
          <Evento titulo={evento["Título"]} data={evento["Data do evento"]} />
        )):
      (<EventosLoader></EventosLoader>)}

      </div>
    );
  }
}

export default Eventos;
