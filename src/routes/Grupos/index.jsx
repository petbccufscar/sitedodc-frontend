import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import Team from "./components/Team";
import { Facebook } from "react-content-loader";

import { Query } from "react-apollo";
import { GET_GRUPOS } from "../../utils/queries";

class Grupos extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Alunos em ação</Breadcrumb>
        </Breadcrumbs>
        <div className="container">

          <Query query={GET_GRUPOS}>
            {({ loading, error, data }) => {
              if (loading) {
                return <Facebook />;
              }
              if (error) {
                return `Error! ${error.message}`;
              }

              return data.grupos.map((grupo, index) => (
                <React.Fragment>
                  <Team
                    title={grupo.Nome}
                    description={grupo.Descricao}
                    link={grupo.Site}
                    img={`${process.env.REACT_APP_API_URL}/${
                      grupo.Imagem.url
                      }`}
                  />

                  {index !== data.grupos.length - 1 && (
                    <div className="row border-bottom mt-3" />
                  )}
                </React.Fragment>
              ));
            }}
          </Query>
        </div>
      </React.Fragment>
    );
  }
}

export default Grupos;
