import React from "react";
import Eventos from "./Eventos";
import LinksRapidos from "./LinksRapidos";

const BarraLateral = () => (
  <div className="col-12 col-md-4 pl-3 border-left">
    <Eventos />
    <LinksRapidos />
  </div>
);

export default BarraLateral;
