import React, { Component } from "react";
class LinksRapidos extends Component {
  render() {
    return (
      <div className=" mt-4">
        <h4 className="mb-3">Links rápidos</h4>
        <div className="links-rapidos">
          <a className="link is-two">
            <img
              src="http://www-periodicos-capes-gov-br.ez31.periodicos.capes.gov.br/images/stories/periodicos.png"
              width="100%"
              alt=""
            />
          </a>

          <a
            className="link"
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
