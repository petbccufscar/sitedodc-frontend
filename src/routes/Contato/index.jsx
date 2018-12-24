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
            <div className="col-md-6">
              <legend align="center">Contato</legend>
              <br />
              <h4>Precisa de atendimento técnico?</h4>
              <p>
                Você navegou no site e não achou uma solução técnica para seu
                problema? Acesse suporte.dc.ufscar.br (informando seu username e
                senha no DC) e abra um chamado.
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
              <form className="form-horizontal">
                <fieldset>
                  <legend align="center">Formulário de contato</legend>
                  <br />
                  <div className="form-group">
                    <label className="col-md-4 control-label" for="nome">
                      Nome
                    </label>
                    <div className="col-md-6">
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        placeholder=""
                        className="form-control input-md"
                        required=""
                      />
                      <span className="help-block">
                        Por favor, insira o seu nome completo
                      </span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-4 control-label" for="email">
                      E-mail
                    </label>
                    <div className="col-md-5">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder=""
                        className="form-control input-md"
                        required=""
                      />
                      <span className="help-block">
                        Por favor, insira o seu endereço de e-mail para contato
                      </span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-4 control-label" for="assunto">
                      Assunto
                    </label>
                    <div className="col-md-5">
                      <input
                        id="assunto"
                        name="assunto"
                        type="text"
                        placeholder=""
                        className="form-control input-md"
                        required=""
                      />
                      <span className="help-block">
                        Por favor, insira o assunto da mensagem
                      </span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-4 control-label" for="mensagem">
                      Mensagem
                    </label>
                    <div className="col-md-4">
                      <textarea
                        className="form-control"
                        id="mensagem"
                        name="mensagem"
                      />
                      <span className="help-block">
                        Por favor, insira a mensagem a ser enviada
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12" align="center">
                      <button
                        id="enviar"
                        className="enviar"
                        class="btn btn-primary"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contato;
