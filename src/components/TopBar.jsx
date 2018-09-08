import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoDC from "../images/logos/logo_DC.png";
import { Link } from "react-router-dom";
const Menus = [
  {
    Titulo: "Ensino",
    Icone: "graduation-cap",
    SubMenus: ["Graduação", "Pós-Graduação"]
  },
  {
    Titulo: "Pesquisa",
    Icone: "book",
    SubMenus: ["Catalogo", "Laboratorios"]
  },
  {
    Titulo: "Extensão",
    Icone: "home",
    SubMenus: ["Grupos", "Projetos e ações"]
  },
  {
    Titulo: "Pessoas",
    Icone: "user",
    SubMenus: ["Alunos", "Docentes", "Colaboradores", "Funcionários"]
  },
  {
    Titulo: "Institucional",
    Icone: "university",
    SubMenus: ["Sobre", "Contato"]
  },
  {
    Titulo: "Suporte",
    Icone: "wrench"
  }
];

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
      <header className="fixed-top">
        {this.BarraTopo}
        <nav id="menu" className={this.NavBarClasses()}>
          <div className="container">
            <a className="navbar-brand " href="/">
              <img
                className="d-inline-block align-baseline mr-3 "
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
                {Menus.map(menu => this.renderMenuElement(menu))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }

  NavBarClasses() {
    return "navbar navbar-expand-md navbar-light bg-white border-bottom ".concat(
      this.state.small ? "small" : ""
    );
  }

  renderMenuElement(menu) {
    return (
      <li key={menu.Titulo} className="nav-item dropdown text-center">
        <Link
          className="nav-link"
          data-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
          to={menu.Titulo}
        >
          <FontAwesomeIcon icon={menu.Icone} className="d-inline-block" />

          <div> {menu.Titulo}</div>
        </Link>
        {this.renderSubMenu(menu)}
      </li>
    );
  }

  renderSubMenu(menu) {
    return menu.SubMenus ? (
      <div className="dropdown-menu">
        {menu.SubMenus.map(submenu => (
          <Link key={submenu} to={submenu} className="dropdown-item" href="#">
            {submenu}
          </Link>
        ))}
      </div>
    ) : (
      ""
    );
  }
  BarraTopo = (
    <div className="text-light bg-dark container-fluid ">
      <div className="container">
        <div
          className="d-flex justify-content-between align-items-center py-1"
          id="acessibilidade"
        >
          <ul id="atalhos" className="list-inline mb-0 d-none d-lg-block">
            <li className="list-inline-item ">
              <a
                className="badge badge-dark font-weight-normal"
                href="#conteudo"
              >
                Ir para o conteúdo
              </a>
            </li>
            <li className="list-inline-item ">
              <a className="badge badge-dark font-weight-normal" href="#topo">
                Ir para o topo
              </a>
            </li>

            <li className="list-inline-item ">
              <a className="badge badge-dark font-weight-normal" href="#rodape">
                Ir para o rodapé
              </a>
            </li>
          </ul>
          <ul id="botoes" className="list-inline mb-0 ml-auto">
            <li className="list-inline-item ">
              <a
                className="badge badge-dark font-weight-normal"
                href="acessibilidade.html"
              >
                <FontAwesomeIcon icon="universal-access" className="mr-1" />
                Acessibilidade
              </a>
            </li>
            <li className="list-inline-item ">
              <a
                className="badge badge-dark font-weight-normal"
                href="#"
                id="bt_contraste"
              >
                <FontAwesomeIcon icon="adjust" className="mr-1" />
                Alto contraste
              </a>
            </li>
            <li className="list-inline-item ">
              <a
                className="badge badge-dark font-weight-normal"
                href="mapa.html"
              >
                <FontAwesomeIcon icon="globe" className="mr-1" />
                Mapa do site
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
