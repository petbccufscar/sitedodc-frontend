import React, { Component } from "react";
import Evento from "./Evento";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EventosLoader from "./EventosLoader";

import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_EVENTOS = gql`
  query {
    eventos(limit: 3, sort: "Data:ASC") {
      Titulo
      Data
    }
  }
`;

class Eventos extends Component {
  render() {
    return (
      <div className=" pt-5 pt-md-0">
        <div className="d-flex justify-content-between mb-3 ">
          <h4>Eventos</h4>
          <Link to="/" className="btn btn-link">
            Ver mais eventos <FontAwesomeIcon className="ml-2" icon="plus" />
          </Link>
        </div>
        <Query query={GET_EVENTOS}>
          {({ loading, error, data }) => {
            if (loading) return <EventosLoader />;
            if (error) return `Error! ${error.message}`;

            return data.eventos.map((evento, index) => (
              <Evento key={index} titulo={evento.Titulo} data={evento.Data} />
            ));
          }}
        </Query>
      </div>
    );
  }
}

export default Eventos;
