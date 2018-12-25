import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";

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
            <div className="col-md-6 d-none border-right  d-md-block">
              <legend className="border-down" align="center">
                Contato
              </legend>
              <br />
              <h5>Precisa de atendimento técnico?</h5>
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
            <div className="col-md-6">
              <legend className="border-down" align="center">
                Formulário de contato
              </legend>
              <br />
              <form>
                <div className="form-group row">
                  <label for="nome" className="col-4 col-form-label">
                    Nome
                  </label>
                  <div className="col-8">
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      className="form-control here"
                      aria-describedby="nomeHelpBlock"
                      required="required"
                    />
                    <span id="nomeHelpBlock" className="form-text text-muted">
                      Por favor, insira o seu nome completo
                    </span>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="email" className="col-4 col-form-label">
                    E-mail
                  </label>
                  <div className="col-8">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      aria-describedby="emailHelpBlock"
                      className="form-control here"
                      required="required"
                    />
                    <span id="emailHelpBlock" className="form-text text-muted">
                      Por favor, insira o seu e-mail
                    </span>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="assunto" className="col-4 col-form-label">
                    Assunto
                  </label>
                  <div className="col-8">
                    <input
                      id="assunto"
                      name="assunto"
                      type="text"
                      aria-describedby="assuntoHelpBlock"
                      className="form-control here"
                    />
                    <span
                      id="assuntoHelpBlock"
                      className="form-text text-muted"
                    >
                      Por favor, insira o assunto da mensagem
                    </span>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="mensagem" className="col-4 col-form-label">
                    Mensagem
                  </label>
                  <div className="col-8">
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      cols="40"
                      rows=""
                      className="form-control"
                      aria-describedby="mensagemHelpBlock"
                      required="required"
                    />
                    <span
                      id="mensagemHelpBlock"
                      className="form-text text-muted"
                    >
                      Por favor, insira a mensagem a ser enviada
                    </span>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="offset-4 col-8">
                    <button
                      name="enviar"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contato;
