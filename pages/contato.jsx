import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../components/Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";

class Contato extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Contato</Breadcrumb>
        </Breadcrumbs>

        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <h5 style={{ marginBottom: "15px" }}>
                {" "}
                <FontAwesomeIcon
                  icon={faListAlt}
                  style={{ marginLeft: "15px", paddingRight: "6px" }}
                  color="gray"
                />{" "}
                Formulário de contato{" "}
              </h5>
              <br />
              <form>
                <div className="form-group row col-12">
                  <label htmlFor="nome" className="col-4 col-form-label">
                    Nome
                  </label>{" "}
                  <div className="col-12 col-sm-8">
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      className="form-control here"
                      aria-describedby="nomeHelpBlock"
                      required="required"
                      placeholder="Ex: José da Silva"
                    />
                  </div>
                </div>
                <div className="form-group row col-12">
                  <label htmlFor="email" className="col-4 col-form-label">
                    E-mail
                  </label>
                  <div className="col-12 col-sm-8">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      aria-describedby="emailHelpBlock"
                      className="form-control here"
                      required="required"
                      placeholder="Ex: jose@dc.ufscar.br"
                    />
                  </div>
                </div>
                <div className="form-group row col-12">
                  <label htmlFor="assunto" className="col-4 col-form-label">
                    Assunto
                  </label>
                  <div className="col-12 col-sm-8">
                    <input
                      id="assunto"
                      name="assunto"
                      type="text"
                      aria-describedby="assuntoHelpBlock"
                      className="form-control here"
                      placeholder="Ex: Sobre o uso dos laboratórios"
                    />
                  </div>
                </div>
                <div className="form-group row col-12">
                  <label htmlFor="mensagem" style={{ marginBottom: "5px" }} className="col-12 col-form-label">
                    Mensagem
                  </label>
                  <div className="col-12">
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      cols="40"
                      rows=""
                      className="form-control"
                      aria-describedby="mensagemHelpBlock"
                      required="required"
                      placeholder="Digite a mensagem"
                    />
                  </div> <br/>                   <label className="col-12 col-sm-12 text-center">Essa funcionalidade ainda está sendo implementada, favor entrar em contato via e-mail!</label>

                </div>
                <div className="form-group row">
                  <div className="offset-4 col-8">
                    <button
                      name="enviar"
                      type="submit"
                      className="btn btn-primary" disabled
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6 border-left">
              <h5 style={{ marginBottom: "15px" }}>
                {" "}
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  style={{ paddingRight: "6px" }}
                  color="gray"
                />{" "}
                Contato{" "}
              </h5>

              <p><b>Chefia do DC:</b></p>
              <p>
                Profa. Dra. Vânia Paula de Almeida Neris - Chefe
                <br />
                Prof. Dr. Valter Vieira de Camargo - Vice-Chefe
                <br />
                <b>Email: </b> <img src={'/images/email-chefia.png'} alt="e-mail da Vânia" />
                <br />
              </p>

              <p><b>Secretaria do DC:</b></p>
              <p>
                Darli José Morcelli
                <br />
                Marcella Salomão
                <br />
                Vera de Moraes
                <br />
                <b>Emails: </b> <img src={'/images/email-darli.png'} alt="e-mail do Darli" />, <img src={'/images/email-marcella.png'} alt="e-mail da Marcella" />, <img src={'/images/email-vera.png'} alt="e-mail da Vera" />
                <br />
                <b>Telefones: </b>  (16) 3351-8231, 3351-8230, 3351-8232
              </p>

              <p>
                <b>Precisa de atendimento técnico?</b>
              </p>
              <p>
                Você navegou no site e não achou uma solução técnica para seu
                problema? Acesse{" "}
                <a href="http://suporte.dc.ufscar.br/">
                  {" "}
                  suporte.dc.ufscar.br{" "}
                </a>
                (informando seu username e senha no DC) e abra um chamado.
              </p>
              <br />
              <div className="d-none d-md-block">
                <p>
                  Rod. Washington Luís, Km 235
                  <br />
                  Caixa Postal 676
                  <br />
                  13565-905 São Carlos-SP
                  <br />
                  Tel: (16) 3351-8232 Fax: (16) 3351-8233
                  <br />
                  E-mail: dc@ufscar.br
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contato;
