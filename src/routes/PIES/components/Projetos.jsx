import React from "react";
import Projeto from "./Projeto";
import { Query } from "react-apollo";
import { GET_PIES } from "../../../utils/queries";
import { Facebook } from "react-content-loader";

const Projetos = (
  <React.Fragment>
    <p>
      Caso você se interesse em fazer parte de algum projeto, entre em contato
      direto com o coordenador, cujo e-mail encontra-se no documento que
      descreve o projeto.
    </p>

    <div className="accordion" id="accordion-projetos">
      <Query query={GET_PIES}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Facebook />;
          }
          if (error) {
            return `Error! ${error.message}`;
          }

          return data.pies.map((projeto, index) => (
            <Projeto id={index} 
                titulo={projeto.titulo} 
                coordenador={projeto.coordenador}
                nro_alunos={projeto.nro_alunos}
                desc={projeto.descricao}
                doc={projeto.documento.url}
            />
          ));
        }}
      </Query>
    </div>
  </React.Fragment>
);

export default Projetos;
