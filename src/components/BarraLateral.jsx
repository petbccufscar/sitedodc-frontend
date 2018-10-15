import React, { Component } from "react";
import Eventos from "./Eventos";
import LinksRapidos from "./LinksRapidos";

const BarraLateral = () => (
  <div className="col-sm-4 pl-3 border-left">
    <Eventos />
    <LinksRapidos />
  </div>
);

export default BarraLateral;
