import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import Card from "../../components/Card";


const Suporte = [
  {
    Titulo: "Wi-Fi para visitantes",
    Link: "http://www.dc.ufscar.br/suporte/nossa-rede/visitante-acesso-wi-fi",
    Subtitulo: "Guia de acesso Wi-Fi para Visitantes."
  },
  {
    Titulo: "Ambiente de aprendizado (Moodle DC)",
    Link: "http://moodle.dc.ufscar.br/",
    Subtitulo: "Moodle do dc."
  },
  {
    Titulo: "Solicitação de afastamento",
    Link: "http://www3.dc.ufscar.br:8080/Afastamento/",
    Subtitulo: "Sistema de solicitação de afastamento para professores e funcionários do departamento."
  },
  {
    Titulo: "Troca/Lembrete de senha ",
    Link: "https://trocasenha.dc.ufscar.br/",
    Subtitulo: "Sistema para troca e recuperação de senha das contas do domínio dc.ufscar.br."
  },
  {
    Titulo: "Microsoft Imagine",
    Link: "http://www.dc.ufscar.br/imagine",
    Subtitulo: "Portal do DC de acesso ao Programa Microsoft Imagine."
  },
  {
    Titulo: "Reserva de Sala",
    Link: "http://www.dc.ufscar.br/suporte/informacoes-iniciais/reserva-de-salas",
    Subtitulo: "Orientações e formulário para reserva de sala no DC."
  },
  {
    Titulo: "Solicitação de suporte técnico",
    Link: "http://suporte.dc.ufscar.br/",
    Subtitulo: " Link para sistema de solicitação/notificação de suporte técnico."
  }
];

class LinksSuporte extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb >Suporte</Breadcrumb>

          <Breadcrumb bold>Links úteis</Breadcrumb>
        </Breadcrumbs>
        <div className="container">
          <h4>Sistemas</h4>
          <div className="row align-items-stretch" style={{columnCount:"4 !important"}}>
            {Suporte.map(link => {
              return (
                  <div className="col-sm-4 mb-2">
                <Card
                  titulo={link.Titulo}
                  link={link.Link}
                  subtitulo={link.Subtitulo}
                />
                </div>
              );
            })}
          </div>
        
        </div>
      </React.Fragment>
    );
  }
}

export default LinksSuporte;
