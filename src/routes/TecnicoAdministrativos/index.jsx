import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import { CardContainer, CardBody } from "../../components/cards";
import { TwoCards } from "../../components/cards";
import { Facebook } from "react-content-loader";
import { ImageLoader } from "../../components/image-loader";

import { Query } from "react-apollo";
import { GET_FUNCIONARIOS } from "../../utils/queries";
import EmailsImage from "../../utils/emails";

class TecnicoAdministrativos extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Técnico-admnistrativos</Breadcrumb>
        </Breadcrumbs>

        <div className="container">
          <h5 className="mb-4">
            Relação de funcionários técnicos e administrativos.
          </h5>
          <CardContainer>
            <Query query={GET_FUNCIONARIOS}>
              {({ loading, error, data }) => {
                if (loading) {
                  return <Facebook />;
                }
                if (error) {
                  return `Error! ${error.message}`;
                }
                return data.funcionarios.map((funcionario, index) => (
                  <TwoCards>
                    <CardBody>
                      {funcionario.Foto && (
                        <div className="mr-4">
                          <ImageLoader
                            classnames="card-img-rounded rounded-circle"
                            src={`${process.env.REACT_APP_API_URL}/${
                              funcionario.Foto.url
                              }`}
                            alt={"alt"}
                          />
                        </div>
                      )}
                      <div>
                        <h5 className="card-title">{funcionario.Nome}</h5>
                        <p className="card-text">
                          {funcionario.Area} <br />
                          {`Telefone: ${funcionario.Telefone}`} <br />
                          {`Email:`} <img src={EmailsImage.getEmailImagePath(funcionario.Email)} alt={`e-mail do técnico administrativo ${funcionario.Nome}`} />
                        </p>
                      </div>
                    </CardBody>
                  </TwoCards>
                ));
              }}
            </Query>
          </CardContainer>
        </div>
      </React.Fragment>
    );
  }
}

export default TecnicoAdministrativos;
