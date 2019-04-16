import React, { Component } from "react";
import LogoDC from "../images/logos/LOGO-DC.svg";
import { Link } from "react-router-dom";
import MenuButton from "./MenuButton";
import BarraDeAcessibilidade from "./BarraDeAcessibilidade";

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
  handleScroll() {
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
                  <MenuButton titulo="Ensino" icone="graduation-cap" dropdown />
                  <div className="dropdown-menu">
                    <Link to={"/graduacao"} className="dropdown-item">
                      Graduação
                    </Link>
                    <Link to={"/pos-graduacao"} className="dropdown-item">
                      Pós Graduação
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown text-center">
                  <MenuButton titulo="Pesquisa" icone="book" dropdown />
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
                  <MenuButton titulo="Extensão" icone="home" dropdown />
                  <div className="dropdown-menu">
                    <Link
                      to={"/alunos-em-acao"}
                      className="dropdown-item"
                      href="#"
                    >
                      Alunos em Ação
                    </Link>
                    <Link to={"/atividades"} className="dropdown-item" href="#">
                      Atividades
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown text-center">
                  <MenuButton titulo="Pessoas" icone="user" dropdown />
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
                <li className="nav-item text-center pointer">
                  <Link to="/institucional">
                    <MenuButton
                      titulo="Institucional"
                      icone="university"
                    />
                  </Link>
                </li>

                <li className="nav-item dropdown text-center">
                  <MenuButton titulo="Suporte" icone="wrench" dropdown />
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
