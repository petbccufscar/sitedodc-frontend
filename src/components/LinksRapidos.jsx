import React, { Component } from "react";
import LogoSiga from "../images/logos/siga.png";
import PetBCC from "../images/logos/petbcc.png";
import BCC from "../images/logos/bcc.png";
class LinksRapidos extends Component {
  render() {
    return (
      <div className=" mt-4">
        <h4 className="mb-3">Links rápidos</h4>
        <div className="d-flex flex-wrap" id="links-rapidos">
          <a
            className="p-2 rounded border mr-2 mb-2"
            href="https://www2.ufscar.br/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="http://ppgcc.dc.ufscar.br/linksrapidos/ufscar2.jpg"
              alt=""
            />
          </a>
          <a
            className="p-2 rounded border mr-2 mb-2"
            href="https://sistemas.ufscar.br/siga/  "
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="img-fluid" src={LogoSiga} alt="" />
          </a>
          <a
            className="p-2 rounded border mr-2 mb-2"
            href="https://petbcc.secompufscar.com.br/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={PetBCC} alt="" />
          </a>
          <a
            className="p-2 rounded border mr-2 mb-2"
            href="http://bcc2.dc.ufscar.br/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={BCC} alt="" />
          </a>
          <a
            className="p-2 rounded border mr-2 mb-2"
            href="https://www2.ufscar.br/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="http://ppgcc.dc.ufscar.br/linksrapidos/ufscar2.jpg"
              alt=""
            />
          </a>
          <a
            className="p-2 rounded border mr-2 mb-2"
            href="https://www2.ufscar.br/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="http://ppgcc.dc.ufscar.br/linksrapidos/ufscar2.jpg"
              alt=""
            />
          </a>
          <a
            className="p-2 rounded border mr-2 mb-2"
            href="https://www2.ufscar.br/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="http://ppgcc.dc.ufscar.br/linksrapidos/ufscar2.jpg"
              alt=""
            />
          </a>
          <a
            className="p-2 rounded border mr-2 mb-2"
            href="https://www2.ufscar.br/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="http://ppgcc.dc.ufscar.br/linksrapidos/ufscar2.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
    );
  }
}

export default LinksRapidos;
