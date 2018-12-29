import React from "react";
import TeamImage from './TeamImage';
import TeamBody from './TeamBody';

// TODO: pegar da api
const Team = ({ title, description, link, img }) => (
  <div className="row mt-4 mx-0">
    <div className="col-md-4 mb-2 pl-0">
      <TeamImage {...img} />
    </div>
    <div className="col-md-8">
      <TeamBody title={title} description={description} link={link} />
    </div>
  </div>
);

export default Team;
