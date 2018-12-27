import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TeamBody = ({
  title = "Sem titulo",
  description = "Sem descrição",
  link
}) => (
  <React.Fragment>
    <h3>{title}</h3>
    <p className="text-justify">{description}</p>
    <p>
      <Link to={link}>
        <FontAwesomeIcon
          icon="globe-americas"
          className="d-inline-block mr-2"
        />
        Visitar Site
      </Link>
    </p>
  </React.Fragment>
);

export default TeamBody;
