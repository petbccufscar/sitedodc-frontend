import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoDC from "../images/logos/logo_DC.png";
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
  render() {
    return (
      <header>
        {this.BarraTopo}
        <nav
          className="navbar navbar-expand-md navbar-light bg-white shadow menu-superior "
          data-toggle="affix"
          data-parent="body"
        >
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

  renderMenuElement(menu) {
    return (
      <li key={menu.Titulo} className="nav-item dropdown text-center">
        <a
          className="nav-link"
          data-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <FontAwesomeIcon icon={menu.Icone} className="d-inline-block" />

          <div> {menu.Titulo}</div>
        </a>
        {this.renderSubMenu(menu)}
      </li>
    );
  }

  renderSubMenu(menu) {
    return menu.SubMenus ? (
      <div className="dropdown-menu">
        {menu.SubMenus.map(submenu => (
          <a key={submenu} className="dropdown-item" href="#">
            {submenu}
          </a>
        ))}
      </div>
    ) : (
      ""
    );
  }
  BarraTopo = (
    <div className="text-light bg-dark container-fluid ">
      <div className="container">
        <div className="d-flex">
          <div className="mr-auto p-2" />
          <div className="p-2 mr-2">
            <FontAwesomeIcon icon="phone" className="mr-2" />
            Telefone: (16) 3351-8232
          </div>
          <div className="p-2">
            <FontAwesomeIcon icon="envelope" className="mr-2" />
            Email: dc@ufscar.br
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
