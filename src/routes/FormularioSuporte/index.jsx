import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                  icon="wrench"
                  style={{ paddingRight: "6px" }}
                  color="gray"
                />
                Preencha as informações ao lado.{" "}
              </h5>
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
                <form className="form-horizontal" method="post">
                  <fieldset>
                    <div className="form-group">
                      <div className="col">
                        <label for="sel1">Email</label>

                        <input
                          id="fname"
                          name="name"
                          type="text"
                          placeholder="user@mail.com"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col">
                        <label for="sel1">Username do DC</label>

                        <input
                          id="lname"
                          name="name"
                          type="text"
                          placeholder="User"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col">
                        <label for="sel1">Tipo de problema:</label>
                        <select className="form-control" id="sel1">
                          <option>Problema no laboratório</option>
                          <option>Outros</option>
                        </select>{" "}
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col">
                        <label for="sel1">Descrição do problema:</label>

                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          placeholder="O computador 3 do L2 quebrou"
                          rows="7"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-md-12 text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
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
