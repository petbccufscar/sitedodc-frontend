import React, { Component } from "react";
import LogoDC from "../images/logos/logo_DC_noText.png";
import { Link } from "react-router-dom";
import MenuButton from "./MenuButton";
import BarraDeAcessibilidade from "./BarraDeAcessibilidade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

class TopBar extends Component {
  constructor() {
    super();
    this.state = { small: false };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentWillMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll(e) {
    if (!this.state.small && window.pageYOffset > 0) {
      this.setState({ small: true });
    } else if (window.pageYOffset === 0) {
      this.setState({ small: false });
    }
  }
  render() {
    return (
      <header className="fixed-top ">
        <BarraDeAcessibilidade onClick={this.props.onClick} />
        <nav id="menu" className={this.NavBarClasses()}>
          <div className="container">
            <Link id="logo" className="navbar-brand d-flex flex-row" to="/">
              <img
                className="d-inline-block align-self-center mr-3 "
                src={LogoDC}
                width="50"
                height="35"
                alt="Logo do departamento de computação"
              />
              <div
                className=" d-none d-lg-inline-block"
                style={{ lineHeight: "11px" }}
              >
                <h5>Departamento de Computação</h5>
                <small style={{ fontSize: "14px" }}>
                  Universidade Federal de São Carlos
                </small>
              </div>
            </Link>
            <button
              className="navbar-toggler ml-3"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown  text-center">
                  <MenuButton
                    titulo="Ensino"
                    endereco={"/ensino"}
                    icone="graduation-cap"
                    dropdown
                  />
                  <div className="dropdown-menu">
                    <span className="pb-2 pl-3  d-block"> Graduação</span>
                    <Link to={"/graduacao/bcc"} className="dropdown-item">
                      <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                      Ciência da Computação
                    </Link>
                    <Link to={"/graduacao/enc"} className="dropdown-item">
                      <FontAwesomeIcon icon={faAngleRight} className="mr-2">
                        {" "}
                      </FontAwesomeIcon>
                      Engenharia da Computação
                    </Link>
                    <Link to={"/graduacao/si"} className="dropdown-item">
                      <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                      Sistemas de Informação
                    </Link>
                    <Link to={"/graduacao/estagio"} className="dropdown-item">
                      <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                      Estágio
                    </Link>

                    <Link
                      to={"/graduacao/alunos-externos"}
                      className="dropdown-item"
                    >
                      <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                      Alunos externos
                    </Link>
                    <Link to={"/graduacao/tcc"} className="dropdown-item">
                      <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                      TCC
                    </Link>

                    <span className="pb-2 pt-3 pl-3  d-block">
                      Pós-graduação
                    </span>
                    <Link
                      to={"/pos-graducao/stricto-sensu"}
                      className="dropdown-item"
                    >
                      <FontAwesomeIcon icon={faAngleRight} className="mr-2">
                        {" "}
                      </FontAwesomeIcon>
                      Stricto Sensu
                    </Link>
                    <Link
                      to={"/pos-graducao/lato-sensu"}
                      className="dropdown-item"
                    >
                      <FontAwesomeIcon icon={faAngleRight} className="mr-2">
                        {" "}
                      </FontAwesomeIcon>
                      Lato Sensu
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown text-center">
                  <MenuButton
                    titulo="Pesquisa"
                    endereco={"/pesquisa"}
                    icone="book"
                    dropdown
                  />
                  <div className="dropdown-menu">
                    <Link to={"/catalogo"} className="dropdown-item">
                      Catálogo
                    </Link>
                    <Link to={"/laboratorios"} className="dropdown-item">
                      Laboratórios
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown text-center">
                  <MenuButton
                    titulo="Extensão"
                    endereco={"/extensao"}
                    icone="home"
                    dropdown
                  />
                  <div className="dropdown-menu">
                    <Link
                      to={"/alunos-em-acao"}
                      className="dropdown-item"
                      href="#"
                    >
                      Alunos em ação
                    </Link>
                    <Link
                      to={"/projetos-e-acoes"}
                      className="dropdown-item"
                      href="#"
                    >
                      Projetos e ações
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown text-center">
                  <MenuButton
                    titulo="Pessoas"
                    endereco={"/pessoas"}
                    icone="user"
                    dropdown
                  />
                  <div className="dropdown-menu">
                    <Link to={"/alunos"} className="dropdown-item" href="#">
                      Alunos
                    </Link>
                    <Link to={"/docentes"} className="dropdown-item" href="#">
                      Docentes
                    </Link>
                    <Link
                      to={"/tecnico-administrativos"}
                      className="dropdown-item"
                      href="#"
                    >
                      Técnico-administrativos
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown text-center">
                  <MenuButton
                    titulo="Institucional"
                    endereco={"/institucional"}
                    icone="university"
                    dropdown
                  />
                  <div className="dropdown-menu">
                    <Link to={"/sobre"} className="dropdown-item">
                      Sobre
                    </Link>
                    <Link to={"/linha-do-tempo"} className="dropdown-item">
                      Linha do tempo
                    </Link>
                    <Link to={"/infraestrutura"} className="dropdown-item">
                      Infraestrutura
                    </Link>

                  </div>
                </li>

                <li className="nav-item dropdown text-center">
                  <MenuButton
                    titulo="Suporte"
                    endereco={"/suporte"}
                    icone="wrench"
                    dropdown
                  />
                  <div className="dropdown-menu">
                    <Link to={"/suporte/links"} className="dropdown-item">
                      Links úteis
                    </Link>
                    <Link to={"/suporte/reportar"} className="dropdown-item">
                      Reportar problemas
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }

  NavBarClasses() {
    return "navbar navbar-expand-md navbar-light bg-white border-bottom ".concat(
      this.state.small ? "navbar-small" : ""
    );
  }
}

export default TopBar;
