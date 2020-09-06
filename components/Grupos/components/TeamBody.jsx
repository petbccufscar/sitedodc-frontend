import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TeamBody = ({
  title = "Sem titulo",
  description = "Sem descrição",
  link,
}) => (
  <React.Fragment>
    <h3>{title}</h3>
    <p className="text-justify">{description}</p>
    <p>
      <a href={link}>
        <FontAwesomeIcon
          icon="globe-americas"
          className="d-inline-block mr-2"
        />
        Visitar Site
      </a>
    </p>
  </React.Fragment>
);

export default TeamBody;
