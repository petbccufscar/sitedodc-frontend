import React from "react";
import { CardContainer } from "../cards";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NoticiasContainer = ({ children }) => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-between mb-3">
        <h4>Notícias</h4>
        <Link to="/mais-noticias" className="btn btn-link">
          Ver todas as notícias <FontAwesomeIcon className="ml-2" icon="plus" />
        </Link>
      </div>
      <CardContainer>
      {children}
      </CardContainer>
    </React.Fragment>
  );
};

export default NoticiasContainer;
