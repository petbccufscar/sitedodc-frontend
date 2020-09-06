import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../../components/Breadcrumbs";
import {
  AvatarCardImage,
  AvatarCardBody,
} from "../../../components/avatar-card/avatar_card";
import { CardContainer, FourCards } from "../../../components/cards";

import { Query } from "react-apollo";
import { useRouter } from 'next/router'
import { GET_ALUNOS } from "../../../utils/queries";

function Alunos (){
  const router = useRouter()
  const { curso, ano } = router.query

    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb endereco="/alunos">Alunos</Breadcrumb>
          <Breadcrumb bold>
            {curso} {ano}
          </Breadcrumb>
        </Breadcrumbs>

        <div className="container">
          <CardContainer>
            <Query query={GET_ALUNOS(ano,curso.toUpperCase())}>
              {({ loading, error, data }) => {
                if (loading) {
                  return <div />;
                }
                if (error) {
                  return `Error! ${error.message}`;
                }

                return data.alunos.map((aluno, index) => (
                  <FourCards>
                    <AvatarCardImage foto={aluno.Foto ? `${process.env.REACT_APP_API_URL}/${aluno.Foto.url}` : null} />
                    <AvatarCardBody nome={aluno.Nome} />
                  </FourCards>
                ));
              }}
            </Query>
          </CardContainer>
        </div>
      </React.Fragment>
    );
}

export default Alunos;
