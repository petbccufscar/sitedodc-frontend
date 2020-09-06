import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import Card, { CardBody } from "../../components/Card";
import Link from "next/link";

const suporte = [
  {
    title: "Ambiente de aprendizado (Moodle DC)",
    subTitle: "Moodle do dc.",
    link: "http://moodle.dc.ufscar.br/",
  },
  {
    title: "Reserva de Sala",
    subTitle: "Orientações e formulário para reserva de sala no DC.",
    link: "http://reserva.dc.ufscar.br",
  },
  {
    title: "Solicitação de afastamento",
    subTitle:
      "Sistema de solicitação de afastamento para professores e funcionários do departamento.",
    link: "http://www3.dc.ufscar.br:8080/Afastamento/",
  },
  {
    title: "Solicitação de suporte técnico",
    subTitle:
      " Link para sistema de solicitação/notificação de suporte técnico.",
    link: "http://suporte.dc.ufscar.br/",
  },
  {
    title: "Troca/Lembrete de senha ",
    subTitle:
      "Sistema para troca e recuperação de senha das contas do domínio dc.ufscar.br.",
    link: "https://trocasenha.dc.ufscar.br/",
  },
  {
    title: "Wi-Fi para visitantes",
    subTitle: "Guia de acesso Wi-Fi para Visitantes.",
    link: "http://www.sin.ufscar.br/servicos/conectividade/rede-sem-fio-para-visitante",
  },
];

class LinksSuporte extends Component {
  shouldComponentUpdate() {
    return false;
  }

  renderLink(link, title, subTitle) {
    const content = (
      <React.Fragment>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{subTitle}</p>
      </React.Fragment>
    );
    const isExternal = !link.startsWith("/");

    return isExternal ? (<a href={link}>{content}</a>) : (<Link href={link}>{content}</Link>);
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb>Suporte</Breadcrumb>
          <Breadcrumb bold>Links úteis</Breadcrumb>
        </Breadcrumbs>
        <div className="container">
          <h4>Sistemas</h4>
          <div className="card-columns">
            {suporte.map((card) => (
              <Card className="hoverable" key={card.link}>
                <CardBody>
                  {this.renderLink(card.link, card.title, card.subTitle)}
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LinksSuporte;
