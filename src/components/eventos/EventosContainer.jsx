import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EventosContainer = ({ children }) => {
  return (
    <div className="pt-5 pt-md-0">
      <div className="d-flex justify-content-between mb-3 ">
        <h4>Eventos</h4>
        <Link to="/" className="btn btn-link">
          Ver mais eventos <FontAwesomeIcon className="ml-2" icon="plus" />
        </Link>
      </div>
      {children}
    </div>
  );
};

export default EventosContainer;
