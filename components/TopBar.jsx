import React, { Component } from "react";
import Link  from "next/link";
import MenuButton from "./MenuButton";
import BarraDeAcessibilidade from "./BarraDeAcessibilidade";

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = { small: false };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentWillMount() {
    // When this component mounts, begin listening for scroll changes
    if(typeof window !== 'undefined'){
      window.addEventListener("scroll", this.handleScroll);
    }
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    if(typeof window !== 'undefined'){
      window.removeEventListener("scroll", this.handleScroll);
    }
  }
  handleScroll() {
    if (!this.state.small && typeof window !== 'undefined' && window.pageYOffset > 0) {
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
            <Link id="logo" className="navbar-brand d-flex flex-row" href="/">
              <a>
              <img
                className="d-inline-block align-self-center mr-3 "
                src={"/images/logos/LOGO-DC.svg"}
                width={this.state.small ? "50" : "75"}
                height={this.state.small ? "35" : "52.5"}
                alt="Logo do departamento de computação"
              />
              </a>
              </Link>
              <Link id="logo" className="navbar-brand d-flex flex-row" href="/">
              <a>
              <div
                className=" d-none d-lg-inline-block"
                style={{ lineHeight: "11px" }}
              >
                {this.state.small ?
                  <span><br></br>Departamento de Computação</span> :
                  <h4>Departamento de Computação</h4>
                }
                <small style={{ fontSize: "16px" }}>
                  Universidade Federal de São Carlos
                </small>
              </div>
              </a>
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
                    <Link href={"/graduacao"}>
                      <a className="dropdown-item">
                      Graduação
                      </a>
                    </Link>
                    <Link href={"/pos-graduacao"} >
                    <a className="dropdown-item">
                      Pós-graduação
                      </a>
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown text-center">
                  <MenuButton titulo="Pesquisa" icone="book" dropdown />
                  <div className="dropdown-menu">
                    <Link href={"/laboratorios"}>
                    <a className="dropdown-item">
                      Laboratórios
                      </a>
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown text-center">
                  <MenuButton titulo="Extensão" icone="home" dropdown />
                  <div className="dropdown-menu">
                    <Link
                      href={"/alunos-em-acao"}
                      
                    >
                      <a className="dropdown-item">
                      Alunos em Ação
</a>
                    </Link>
                    <Link href={"/pies"}>
                      <a className="dropdown-item">
                      PIEs
                      </a>
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown text-center">
                  <MenuButton titulo="Pessoas" icone="user" dropdown />
                  <div className="dropdown-menu">
                    <Link href={"/alunos"}>
                      <a className="dropdown-item">
                      Alunos
                      </a>
                    </Link>
                    <Link href={"/docentes"}>
                      <a className="dropdown-item">
                      Docentes
                      </a>
                    </Link>
                    <Link href={"/tecnico-administrativos"}>
                      <a className="dropdown-item">
                      Técnicos-administrativos
                      </a>
                    </Link>
                    <Link href={"/ex-colaboradores"}>
                      <a className="dropdown-item">
                      Ex-colaboradores
                      </a>
                    </Link>
                  </div>
                </li>
                <li className="nav-item text-center">
                  <a href="/institucional" tabIndex="-1">
                    <MenuButton
                      titulo="Institucional"
                      icone="university"
                    />
                  </a>
                </li>

                <li className="nav-item dropdown text-center">
                  <MenuButton titulo="Suporte" icone="wrench" dropdown />
                  <div className="dropdown-menu">
                    <Link href={"/suporte/links"}>
                      <a className="dropdown-item">
                      Links úteis
                      </a>
                    </Link>
                    <Link href={"/suporte/reportar"}>
                      <a className="dropdown-item">
                      Reportar problemas
                      </a>
                    </Link>
                    <a targer="blank" href="http://www.dc.ufscar.br/suporte" className="dropdown-item">
                      Página do suporte
                    </a>
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
