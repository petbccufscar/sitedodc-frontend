import React, { Component } from "react";
import LogoDC from "../images/logos/logo_DC_noText.png";
import { Link } from "react-router-dom";
import MenuButton from "./MenuButton";
import BarraDeAcessibilidade from "./BarraDeAcessibilidade";

class TopBar extends Component {
  state = { small: false };
  constructor() {
    super();
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
        <BarraDeAcessibilidade></BarraDeAcessibilidade>
        <nav id="menu" className={this.NavBarClasses()}>
          <div className="container">
            <a className="navbar-brand d-flex flex-row" href="/">
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
            </a>
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
              className="collapse navbar-collapse  "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown text-center">
                  <MenuButton
                    titulo="Ensino"
                    endereco={"/ensino"}
                    icone="graduation-cap"
                    dropdown
                  />
                  <div className="dropdown-menu">
                    <Link
                      to={"/graduacao"}
                      className="dropdown-item"
                      href="#"
                    >
                      Graduação
            </Link>
                    <Link
                      to={"/pos-graducao"}
                      className="dropdown-item"
                      href="#"
                    >
                      Pós-graduação
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
                    <Link
                      to={"/catalogo"}
                      className="dropdown-item"
                      href="#"
                    >
                      Catalogo
            </Link>
                    <Link
                      to={"/laboratorios"}
                      className="dropdown-item"
                      href="#"
                    >
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
                      to={"/grupos"}
                      className="dropdown-item"
                      href="#"
                    >
                      Grupos
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
                    <Link
                      to={"/alunos"}
                      className="dropdown-item"
                      href="#"
                    >
                      Alunos
            </Link>
                    <Link
                      to={"/docentes"}
                      className="dropdown-item"
                      href="#"
                    >
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
                    <Link
                      to={"/sobre"}
                      className="dropdown-item"
                      href="#"
                    >
                      Sobre
            </Link>
                    <Link
                      to={"/contato"}
                      className="dropdown-item"
                      href="#"
                    >
                      Contato
            </Link>
                  </div>
                </li>
                <li className="nav-item text-center">
                  <MenuButton
                    titulo="Suporte"
                    endereco={"/suporte"}
                    icone="wrench"
                  />

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
