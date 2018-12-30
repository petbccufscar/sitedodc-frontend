import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";

class FormularioSuporte extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb>Suporte</Breadcrumb>

          <Breadcrumb bold>Formulario de Suporte</Breadcrumb>
        </Breadcrumbs>

        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-4 d-none border-right  d-md-block">
              <h5 style={{ marginBottom: "20px" }}>
                {" "}
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  style={{ paddingRight: "6px" }}
                  color="gray"
                />{" "}
                Informações{" "}
              </h5>
              <br />
              <p>
                Quanto mais informações conseguir indicar, mais rápido poderemos
                conseguir solucionar o problema.
              </p>
              <p>
                Caso não lembre o nome do PC, veja se o mapa dos LEs pode lhe
                auxilia a lembrar.
              </p>
            </div>

            <div className="col-md-8 ">
              <div className="well well-sm">
                <h5 style={{ marginBottom: "20px" }}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faListAlt}
                    style={{ paddingRight: "6px" }}
                    color="gray"
                  />{" "}
                  Formulário{" "}
                </h5>
                <br />
                <form className="form-horizontal" method="post">
                  <fieldset>
                    <div className="form-group row col-12">
                      <div className="col-12 col-sm-3">
                        <label className=" col-form-label" for="email">
                          Email
                        </label>
                      </div>
                      <div className="col-12 col-sm-9">
                        <input
                          id="email"
                          name="email"
                          type="text"
                          placeholder="Ex: user@mail.com"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group row col-12">
                      <div className="col-12 col-sm-3">
                        <label className=" col-form-label" for="username">
                          Username (DC)
                        </label>
                      </div>
                      <div className="col-12 col-sm-9 ">
                        <input
                          id="username"
                          name="username"
                          type="text"
                          placeholder="Ex: Username"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group row col-12">
                      <div className="col-12 col-sm-3">
                        <label className=" col-form-label" for="problem">
                          Tipo de problema
                        </label>
                      </div>
                      <div className="col-12 col-sm-9">
                        <select className="form-control" id="problem">
                          <option>Problema no laboratório</option>
                          <option>Outros</option>
                        </select>{" "}
                      </div>
                    </div>

                    <div className="form-group row col-12">
                      <div className="col">
                        <label for="desc" style={{ marginBottom: "20px" }}>
                          Descrição do problema
                        </label>

                        <textarea
                          className="form-control"
                          id="desc"
                          name="desc"
                          placeholder="Ex: O computador 3 do laboratório 2 (L2) está apresentando problemas ao ser ligado."
                          rows="5"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="offset-4 col-md-4 text-center">
                        <button
                          name="enviar"
                          type="submit"
                          className="btn btn-primary"
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
        </div>
      </React.Fragment>
    );
  }
}

export default FormularioSuporte;
