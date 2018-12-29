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
              <legend align="">Formulário de contato</legend>
              <br />
              <form>
                <div className="form-group row col-12">
                  <label for="nome" className="col-4 col-form-label">
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
                      placeholder="Ex: Maurício Figueiredo"
                    />
                  </div>
                </div>
                <div className="form-group row col-12">
                  <label for="email" className="col-4 col-form-label">
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
                      placeholder="Ex: mauricio@dc.ufscar.br"
                    />
                  </div>
                </div>
                <div className="form-group row col-12">
                  <label for="assunto" className="col-4 col-form-label">
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
                  <label for="mensagem" className="col-12 col-form-label">
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
            <div className="col-md-6">
              <legend align="">Contato</legend>
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
