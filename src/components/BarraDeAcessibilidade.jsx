/* eslint "jsx-a11y/no-access-key": 0 */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "./Badge";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const BarraDeAcessibilidade = props => (
  <div
    className="container-fluid"
    style={{
      backgroundColor: "black",
      color: "#0f0f0f"
    }}
  >
    <div className="container">
      <div
        className="d-flex justify-content-between align-items-center py-1"
        id="acessibilidade"
      >
        <ul id="atalhos" className="list-inline mb-0 d-none d-lg-block">
          <Badge link="#" accessKey="1">
            <span className="d-none d-sm-inline-block">Ir para topo</span>
          </Badge>
          <Badge link="#conteudo" accessKey="2">
            <span className="d-none d-sm-inline-block">Ir para conteudo</span>
          </Badge>
          <Badge link="#rodape" accessKey="3">
            <span className="d-none d-sm-inline-block">Ir para rodapé</span>
          </Badge>
        </ul>
        <ul id="botoes" className="list-inline mb-0 ml-auto">
          <Badge link="/acessibilidade">
            <FontAwesomeIcon icon="universal-access" className="mr-1" />
            <span className="d-none d-sm-inline-block">Acessibilidade</span>
          </Badge>
          <Badge link="#" onClick={e => props.onClick(e)}>
            <FontAwesomeIcon icon="adjust" className="mr-1" />
            <span className="d-none d-sm-inline-block">Alto contraste</span>
          </Badge>
          <Badge link="/contato">
            <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
            <span className="d-none d-sm-inline-block">Contato</span>
          </Badge>
          <Badge link="/mapa-do-site">
            <FontAwesomeIcon icon="globe" className="mr-1" />
            <span className="d-none d-sm-inline-block">Mapa do site</span>
          </Badge>
        </ul>
      </div>
    </div>
  </div>
);

export default BarraDeAcessibilidade;
