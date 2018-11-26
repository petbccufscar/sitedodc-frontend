import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import Card from "../../components/Card";

const Sistemas = [
  {
    Titulo: "Siga",
    Link: "#",
    Subtitulo: "Sistema integrado de gestão acadêmica."
  },
  {
    Titulo: "SAGUI",
    Link: "https://sistemas.ufscar.br/sagui/",
    Subtitulo: "Sistema de Apoio à Gestão Universitária Integrada (SAGUI)."
  },
  {
    Titulo: "Proex Web",
    Link: "www.proex.ufscar.br/",
    Subtitulo: "Pró-reitoria de extensão"
  },
  {
    Titulo: "Reserva de salas",
    Link: "http://reserva.dc.ufscar.br",
    Subtitulo: "Ferramenta para reserva de salas no departamento."
  }
];

const Documentos = [
  {
    Titulo: "Afastamento",
    Link: "#",
    Subtitulo: "Formulário de afastamento."
  },
  {
    Titulo: "Agendamento de bancas",
    Link: "#",
    Subtitulo: "Formulário para agendamento de bancas."
  }
];

const Suporte = [
  {
    Titulo: "Criação de salas no Moodle",
    Link: "#",
    Subtitulo: "Guia de como criar salas no Moodle."
  },
  {
    Titulo: "Sistema de suporte",
    Link: "#",
    Subtitulo: "Contato com o suporte do DC."
  },
  {
    Titulo: "Periodicos",
    Link: "#",
    Subtitulo: "Acesso á periodicos disponiveis."
  },
  {
    Titulo: "Eduroam",
    Link: "#",
    Subtitulo: "Como acessar a rede Eduroam."
  }
];

class AreaDocentes extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Área do docente</Breadcrumb>
        </Breadcrumbs>
        <div className="container">
          <h4>Sistemas</h4>
          <div className="card-deck mb-4">
            {Sistemas.map(link => {
              return (
                <Card
                  botaoTexto="Ir para link"
                  titulo={link.Titulo}
                  link={link.Link}
                  subtitulo={link.Subtitulo}
                />
              );
            })}
          </div>
          <h4>Documentos</h4>
          <div className="card-deck mb-4">
            {Documentos.map(link => {
              return (
                <Card
                  botaoTexto="Ir para link"
                  titulo={link.Titulo}
                  link={link.Link}
                  subtitulo={link.Subtitulo}
                />
              );
            })}
          </div>
          <h4>Suporte</h4>
          <div className="card-deck">
            {Suporte.map(link => {
              return (
                <Card
                  botaoTexto="Ir para link"
                  titulo={link.Titulo}
                  link={link.Link}
                  subtitulo={link.Subtitulo}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AreaDocentes;
