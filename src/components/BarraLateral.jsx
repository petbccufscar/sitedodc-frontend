import React, { Component } from "react";
import Eventos from "./Eventos";
import LinksRapidos from "./LinksRapidos";

class BarraLateral extends Component {
  render() {
    return (
      <div className="col-sm-4 pl-3 border-left">
        <Eventos />
        <LinksRapidos />
      </div>
    );
  }
}

export default BarraLateral;
