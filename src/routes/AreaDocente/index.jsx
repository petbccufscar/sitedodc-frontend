import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import Card, { CardBody } from "../../components/Card";
import { Link } from "react-router-dom";

const data = {
  Sistemas: [
    {
      title: "Siga",
      subTitle: "Sistema integrado de gestão acadêmica.",
      link: "https://siga.ufscar.br"
    },
    {
      title: "SAGUI",
      subTitle: "Sistema de Apoio à Gestão Universitária Integrada (SAGUI).",
      link: "https://sistemas.ufscar.br/sagui/"
    },
    {
      title: "Proex Web",
      subTitle: "Pró-reitoria de extensão",
      link: "http://www.proex.ufscar.br"
    },
    {
      title: "Reserva de salas",
      subTitle: "Ferramenta para reserva de salas no departamento.",
      link: "http://reserva.dc.ufscar.br"
    }
  ],
  Documentos: [
    {
      title: "Afastamento",
      subTitle: "Formulário de afastamento.",
      link: "#"
    },
    {
      title: "Agendamento de bancas",
      subTitle: "Formulário para agendamento de bancas.",
      link: "#"
    }
  ],
  Suporte: [
    {
      title: "Criação de salas no Moodle",
      subTitle: "Guia de como criar salas no Moodle.",
      link: "#"
    },
    {
      title: "Sistema de suporte",
      subTitle: "Contato com o suporte do DC.",
      link: "#"
    },
    {
      title: "Periodicos",
      subTitle: "Acesso á periodicos disponiveis.",
      link: "#"
    },
    {
      title: "Eduroam",
      subTitle: "Como acessar a rede Eduroam.",
      link:
        "http://www.sin.ufscar.br/servicos/conectividade/rede-sem-fio-eduroam-1"
    }
  ]
};

class AreaDocentes extends Component {
  renderLink(link, title, subTitle) {
    const content = (
      <React.Fragment>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{subTitle}</p>
      </React.Fragment>
    );
    const isExternal = link.search("^[/#]") === -1;

    return isExternal ? (
      <a href={link}>{content}</a>
    ) : (
      <Link to={link}>{content}</Link>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Área do docente</Breadcrumb>
        </Breadcrumbs>
        <div className="container">
          {Object.keys(data).map(section => (
            <React.Fragment>
              <h4>{section}</h4>
              <div className="card-deck mb-4">
                {data[section].map(card => (
                  <Card className="hoverable">
                    <CardBody>
                      {this.renderLink(card.link, card.title, card.subTitle)}
                    </CardBody>
                  </Card>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default AreaDocentes;
